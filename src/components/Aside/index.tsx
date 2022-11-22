import React from "react";

import logoImg from '../../assets/logo.svg'

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md'

import { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink } from './styles'

const Aside: React.FC = () => {
    return (
        <>
            <Container>
                <Header>
                    <LogoImg src={logoImg} alt="Logo My Wallet" />
                    <Title>My Wallet</Title>
                </Header>

                <MenuContainer>
                    <MenuItemLink href='/'>
                        <MdDashboard />
                        Dashboard
                    </MenuItemLink>

                    <MenuItemLink href='/list/entries'>
                        <MdArrowUpward />
                        Entradas
                    </MenuItemLink>

                    <MenuItemLink href='/list/output'>
                        <MdArrowDownward />
                        Saídas
                    </MenuItemLink>

                    <MenuItemLink href='#'>
                        <MdExitToApp />
                        Sair
                    </MenuItemLink>
                </MenuContainer>
            </Container>
        </>
    )
}

export default Aside