import React, {useMemo} from "react";

import emojis from "../../utils/emojis";
import Toggle from "../Toggle";

import {
    Container,
    Profile,
    Welcome,
    UserName
} from './styles'

const MainHeader: React.FC = () => {
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length)
        return emojis[indice]
    }, [])

    return (
        <>
            <Container>
                <Toggle />

                <Profile>
                <Welcome>{emoji} Olá, </Welcome>
                    <UserName>Matheus Aguiar</UserName>
                </Profile>
            </Container>
        </>
    )
}

export default MainHeader