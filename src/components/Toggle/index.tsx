import React from "react";

import { Container, ToggleLabel, ToggleSelector } from './styles'

type Props = {
    labelLeft: string;
    labelRight: string;
    checked: boolean;
    onChange(): void;
}

const Toggle: React.FC<Props> = ({
    labelLeft,
    labelRight,
    checked,
    onChange,
}) => (
    <Container>
        <ToggleLabel>
            {labelLeft}
        </ToggleLabel>

        <ToggleSelector
        uncheckedIcon={false}
        checkedIcon={false}
        checked={checked}
        onChange={onChange}
        />

        <ToggleLabel>
            {labelRight}
        </ToggleLabel>
    </Container>
)

export default Toggle