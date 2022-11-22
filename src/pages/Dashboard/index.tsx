import React from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import { Container } from "./styles";

const Dashboard: React.FC = () => {

    const months = [
        {value: 7, label: 'Julho'},
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'},
    ]

    const years = [
        {value: 2020, label: 2020},
        {value: 2021, label: 2021},
        {value: 2022, label: 2022},
    ]

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={months} />

                <SelectInput options={years} />
            </ContentHeader>
        </Container>
    )
}

export default Dashboard