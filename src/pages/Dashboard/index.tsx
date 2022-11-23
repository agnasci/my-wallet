import React, { useMemo, useState } from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import WalletBox from "../../components/WalletBox"
import MessageBox from "../../components/MessageBox";

import entries from "../../repositories/entries";
import expenses from "../../repositories/expenses";
import listOfMonths from '../../utils/months'

import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'
import grinningImg from '../../assets/grinning.svg'

import { Container, Content } from "./styles";

const Dashboard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1)
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear())

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        [...expenses, ...entries].forEach(item => {
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

    }, [])

    const months = useMemo(() => {

        return listOfMonths.map((month, idx) => {
            return {
                value: idx + 1,
                label: month,
            }
        })

    }, [])

    const totalEntries = useMemo(() => {

        let total: number = 0;

        entries.forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()
            const month = date.getMonth() + 1

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount)
                } catch {
                    throw new Error('Invalid amount.')
                }
            }
        })

        return total

    }, [monthSelected, yearSelected])

    const totalExpenses = useMemo(() => {

        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()
            const month = date.getMonth() + 1

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount)
                } catch {
                    throw new Error('Invalid amount.')
                }
            }
        })

        return total

    }, [monthSelected, yearSelected])


    const totalBalance = useMemo(() => {
        	return totalEntries - totalExpenses
    }, [totalEntries, totalExpenses])

    const message = useMemo(() => {
        if (totalBalance < 0) {
            return {
                title: "Que triste!",
                description: "Você gastou mais do que deveria.",
                footerText: 'Tente cortar alguns gastos desnecessários, se possível.',
                icon: sadImg
            }
        } else if (totalBalance === 0) {
            return {
                title: "Ufa!",
                description: "Você você gastou exatamente o que ganhou.",
                footerText: 'Tente cortar alguns gastos desnecessários, se possível.',
                icon: grinningImg
            }
        } else {
            return {
                title: "Muito bem!",
                description: "Sua carteira está positiva!",
                footerText: 'Continue assim. Considere investir o seu saldo.',
                icon: happyImg
            }
        }
    }, [totalBalance])

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
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={months} onChange={(e) => handleMonthSelected(e.target.value)} defaultValue={monthSelected} />

                <SelectInput options={years} onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected} />
            </ContentHeader>

            <Content>
                <WalletBox
                    title="Saldo"
                    amount={totalBalance}
                    footerlabel="Atualizado com base nas entradas e saídas"
                    icon="dollar"
                    color="#4E41F0"
                />

                <WalletBox
                    title="Entradas"
                    amount={totalEntries}
                    footerlabel="Atualizado com base nas entradas e saídas"
                    icon="arrowUp"
                    color="#F7931B"
                />

                <WalletBox
                    title="Saídas"
                    amount={totalExpenses}
                    footerlabel="Atualizado com base nas entradas e saídas"
                    icon="arrowDown"
                    color="#E44C4E"
                />

                <MessageBox
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />
            </Content>
        </Container>
    )
}

export default Dashboard