import React from 'react'

import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts'

import formatCurrency from '../../utils/formatCurrency'

import { Container, ChartContainer, Header, SubtitleContainer, Subtitle } from './styles'

type Props = {
  data: {
    month: string
    amountEntry: number
    amountOutput: number
  }[]
  lineColorAmountEntry: string
  lineColorAmountOutput: string
}

const HistoryBox: React.FC<Props> = ({ data, lineColorAmountEntry, lineColorAmountOutput }) => (
  <>
    <Container>
      <Header>
        <h2>Histórico de Saldo</h2>

        <SubtitleContainer>
          <Subtitle color={lineColorAmountEntry}>
            <div />
            <span>Entradas</span>
          </Subtitle>

          <Subtitle color={lineColorAmountOutput}>
            <div />
            <span>Saídas</span>
          </Subtitle>
        </SubtitleContainer>
      </Header>

      <ChartContainer>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
            <XAxis dataKey="month" stroke="#cecece" />
            <Tooltip formatter={value => formatCurrency(Number(value))} />
            <Line
              type="monotone"
              dataKey="amountEntry"
              name="Entradas"
              stroke={lineColorAmountEntry}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="amountOutput"
              name="Saídas"
              stroke={lineColorAmountOutput}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Container>
  </>
)

export default HistoryBox
