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
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1))
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()))

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
            const month = String(date.getMonth() +1)
            const year = String(date.getFullYear())

            return month === monthSelected && year === yearSelected
        })

        const formattedData = filteredData.map((item, idx) => {
            return {
                id: idx.toString(),
                description: item.description,
                amoutFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency  === 'recorrente' ? '#4E41F0' : '#E44C4E'
            }
        })

        setData(formattedData)
    }, [listData, monthSelected, yearSelected])

    return (
        <Container>
            <ContentHeader
            title={type === 'entries' ? 'Entradas' : 'Saídas'}
            lineColor={type === 'entries' ? '#F7931B' : '#E44C4E'}
            >
                <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected} />

                <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected} />
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-filter eventual">
                    Eventuais
                </button>

                <button type="button" className="tag-filter recurrent">
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