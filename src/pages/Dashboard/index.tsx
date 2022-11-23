import React, { useMemo, useState } from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import WalletBox from "../../components/WalletBox"
import MessageBox from "../../components/MessageBox";
import PieChartBox from "../../components/PieChartBox";
import HistoryBox from "../../components/HistoryBox";
import BarChartBox from "../../components/BarChartBox";

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
        } else if (totalEntries === 0 && totalExpenses === 0) {
            return {
                title: "Ops!",
                description: "Esse mês não possui registros.",
                footerText: 'Parece que você não realizou nenhuma movimentação por aqui.',
                icon: grinningImg
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
    }, [totalBalance, totalEntries, totalExpenses])

    const relationExpensesVersusEntries = useMemo(() => {
        const total = totalEntries + totalExpenses

        const percentualEntries = (totalEntries / total) * 100
        const percentualExpenses = (totalExpenses / total) * 100

        const data = [
            {
                name: 'Entradas',
                value: totalEntries,
                percent: total !== 0 ? Number(percentualEntries.toFixed(1)) : 50,
                color: '#F7931B'
            },
            {
                name: 'Saídas',
                value: totalExpenses,
                percent: total !== 0 ? Number(percentualExpenses.toFixed(1)) : 50,
                color: '#E44C4E'
            }
        ]

        return data
    }, [totalEntries, totalExpenses])

    const historyData = useMemo(() => {

        return listOfMonths.map((_, month) => {

            let amountEntry: number = 0;

            entries.forEach(entry => {
                const date = new Date(entry.date)
                const entryMonth = date.getMonth()
                const entryYear = date.getFullYear()

                if (entryMonth === month && entryYear === yearSelected) {
                    try {
                        amountEntry += Number(entry.amount)
                    } catch  {
                        throw new Error('amountEntry is invalid.')
                    }
                }
            })

            let amountOutput: number = 0;

            expenses.forEach(expense => {
                const date = new Date(expense.date)
                const expenseMonth = date.getMonth()
                const expenseYear = date.getFullYear()

                if (expenseMonth === month && expenseYear === yearSelected) {
                    try {
                        amountOutput += Number(expense.amount)
                    } catch  {
                        throw new Error('amountOutput is invalid.')
                    }
                }
            })

            return {
                monthNumber: month,
                month: listOfMonths[month].substring(0, 3),
                amountEntry: Number(amountEntry.toFixed(2)),
                amountOutput: Number(amountOutput.toFixed(2)),
            }

        })
        .filter(item => {
            const currentMonth = new Date().getMonth()
            const currentYear = new Date().getFullYear()

            return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)
        })
    }, [yearSelected])

    const relationExpensesRecurrentEventual = useMemo(() => {
        let amountRecurrent: number = 0;
        let amountEventual: number = 0;

        expenses.filter(expense => {
            const date = new Date(expense.date)
            const year = date.getFullYear()
            const month = date.getMonth() + 1

            return month === monthSelected && year === yearSelected
        }).forEach(expense => {
            if (expense.frequency === "recurrent") {
                return amountRecurrent += Number(expense.amount)
            }

            if (expense.frequency === "eventual") {
                return amountEventual += Number(expense.amount)
            }
        })

        const total = amountEventual + amountRecurrent

        const recurrentPercent = Number(((amountRecurrent / total) * 100).toFixed(1))
        const eventualPercent = Number(((amountEventual / total) * 100).toFixed(1))

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: recurrentPercent ? recurrentPercent : 0,
                color: "#F7931B"
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: eventualPercent ? eventualPercent : 0,
                color: "#E44C4E"
            }
        ]
         
    }, [monthSelected, yearSelected])

    const relationEntriesRecurrentEventual = useMemo(() => {
        let amountRecurrent: number = 0;
        let amountEventual: number = 0;

        entries.filter(entry => {
            const date = new Date(entry.date)
            const year = date.getFullYear()
            const month = date.getMonth() + 1

            return month === monthSelected && year === yearSelected
        }).forEach(entry => {
            if (entry.frequency === "recurrent") {
                return amountRecurrent += Number(entry.amount)
            }

            if (entry.frequency === "eventual") {
                return amountEventual += Number(entry.amount)
            }
        })

        const total = amountEventual + amountRecurrent

        const recurrentPercent = Number(((amountRecurrent / total) * 100).toFixed(1))
        const eventualPercent = Number(((amountEventual / total) * 100).toFixed(1))

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: recurrentPercent ? recurrentPercent : 0,
                color: "#F7931B"
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: eventualPercent ? eventualPercent : 0,
                color: "#E44C4E"
            }
        ]
         
    }, [monthSelected, yearSelected])

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

                <PieChartBox data={relationExpensesVersusEntries} />

                <HistoryBox
                    data={historyData}
                    lineColorAmountEntry="#F7931B"
                    lineColorAmountOutput="#E44C4E"
                />

                <BarChartBox
                    title="Entradas"
                    data={relationEntriesRecurrentEventual}
                />

                <BarChartBox
                    title="Saídas"
                    data={relationExpensesRecurrentEventual}
                />
            </Content>
        </Container>
    )
}

export default Dashboard