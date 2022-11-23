import React, { useState, useEffect, useMemo } from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import FinanceCard from "../../components/FinanceCard";

import { useParams } from "react-router-dom";

import entries from "../../repositories/entries";
import expenses from "../../repositories/expenses";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
import listOfMonths from '../../utils/months'

import { Container, Content, Filters } from "./styles";

type tData = {
    id: string;
    description: string;
    amoutFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const List: React.FC = () => {

    const [data, setData] = useState<tData[]>([])
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1)
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear())
    const [selectedFrequency, setSelectedFrequency] = useState<string[]>(['recurrent', 'eventual'])

    const { type } = useParams()

    const listData = useMemo(() => {
        return type === 'entries' ? entries : expenses;
    }, [type])

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        listData.forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }
        })

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,
            }
        })

    }, [listData])

    const months = useMemo(() => {

        return listOfMonths.map((month, idx) => {
            return {
                value: idx + 1,
                label: month,
            }
        })

    }, [])

    useEffect(() => {
        const filteredData = listData.filter(item => {
            const date = new Date(item.date)
            const month = date.getMonth() +1
            const year = date.getFullYear()

            return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency)
        })

        const formattedData = filteredData.map((item, idx) => {
            return {
                id: idx.toString(),
                description: item.description,
                amoutFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency  === 'recurrent' ? '#4E41F0' : '#E44C4E'
            }
        })

        setData(formattedData)
    }, [listData, monthSelected, selectedFrequency, yearSelected])

    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = selectedFrequency.findIndex(item => item === frequency)

        if (alreadySelected >= 0) {

            const filtered = selectedFrequency.filter(item => item !== frequency)
            setSelectedFrequency(filtered)

        } else {
            setSelectedFrequency((prev) => [...prev, frequency])
        }
    }

    const handleMonthSelected = (month: string) => {
        try {

            const parseMonth = Number(month)
            setMonthSelected(parseMonth)

        } catch {
            throw new Error('Invalid month value.')
        }
    }

    const handleYearSelected = (year: string) => {
        try {

            const parseYear = Number(year)
            setYearSelected(parseYear)

        } catch {
            throw new Error('Invalid year value.')
        }
    }

    return (
        <Container>
            <ContentHeader
            title={type === 'entries' ? 'Entradas' : 'Saídas'}
            lineColor={type === 'entries' ? '#4E41F0' : '#E44C4E'}
            >
                <SelectInput options={months} onChange={(e) => handleMonthSelected(e.target.value)} defaultValue={monthSelected} />

                <SelectInput options={years} onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected} />
            </ContentHeader>

            <Filters>
                <button
                    type="button"
                    className={`tag-filter eventual
                    ${selectedFrequency.includes('eventual') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('eventual')}
                >
                    Eventuais
                </button>

                <button
                    type="button"
                    className={`tag-filter recurrent
                    ${selectedFrequency.includes('recurrent') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('recurrent')}>
                    Recorrentes
                </button>
            </Filters>

            <Content>
                {
                    data.map((item) => (
                        <FinanceCard
                        key={item.id}
                        tagColor={item.tagColor}
                        title={item.description}
                        subtitle={item.dateFormatted}
                        amount={item.amoutFormatted}
                        />
                    ))
                }
                
            </Content>
        </Container>
    )
}

export default List