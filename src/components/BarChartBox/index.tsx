import React from "react";

import formatCurrency from "../../utils/formatCurrency";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
    Tooltip,
} from 'recharts'

import { Container, LeftSide, RightSide, SubtitleContainer, Subtitle } from './styles'

type Props = {
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string;
    }[]
}

const BarChartBox: React.FC<Props> = ({
    title,
    data,
}) => {
    return (
        <>
            <Container>
                <LeftSide>
                    <h2>{title}</h2>

                    <SubtitleContainer>

                    {
                        data.map(indicator => (
                        <Subtitle key={indicator.name} color={indicator.color}>
                            <div>{indicator.percent}%</div>
                            <span>{indicator.name}</span>
                        </Subtitle>
                        ))
                    }

                    </SubtitleContainer>
                </LeftSide>

                <RightSide>
                    <ResponsiveContainer>
                        <BarChart data={data}>
                            <Bar dataKey="amount">
                                {data.map(indicator => (
                                    <Cell
                                        key={indicator.name}
                                        cursor="pointer"
                                        fill={indicator.color}
                                    />
                                ))}
                            </Bar>
                            <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                        </BarChart>
                    </ResponsiveContainer>
                </RightSide>
            </Container>
        </>
    )
}

export default BarChartBox