import React from "react";

import { 
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
 } from 'recharts'

import { Container, LeftSide, SubtitleContainer, Subtitle, RightSide } from './styles'

type Props = {
    data: {
        name: string;
        value: number;
        percent: number;
        color: string;
    }[]
}

const PieChartBox: React.FC<Props> = ({ data }) => (
        <>
            <Container>
                <LeftSide>
                    <h2>Relação</h2>

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
                        <PieChart>
                            <Pie
                             data={data}
                             dataKey="percent"
                            >
                                {
                                    data.map(indicator => (
                                        <Cell key={indicator.name} fill={indicator.color} />
                                    ))
                                }
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </RightSide>
            </Container>
        </>
)


export default PieChartBox