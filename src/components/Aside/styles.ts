import styled, { css } from "styled-components";

type ContainerProps = {
    menuIsOpen: boolean
}

type FooterProps = {
    menuIsOpen: boolean
}

export const Container = styled.div<ContainerProps>`
    grid-area: AS;

    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;

    border-right: 1px solid ${props => props.theme.colors.grey};

    position: relative;

    @media(max-width: 600px) {
        padding-left: 15px;
        position: fixed;
        z-index: 2;

        width: 170px;

        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;

        ${props => !props.menuIsOpen  && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.grey};
        `};
    }
`

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
`

export const LogoImg = styled.img`
    height: 40px;
    width: 40px;

    @media(max-width: 600px) {
        display: none;
    }
`

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;

    @media(max-width: 600px) {
        display: none;
    }
`

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 15px;

    margin-top: 50px;
`

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info};
    text-decoration: none;

    display: flex;
    align-items: center;
    
    transition: opacity 0.1s;

    &:hover {
        opacity: 0.8;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`

export const MenuItemButton = styled.button`
    font-size: 16px;
    color: ${props => props.theme.colors.info};

    border: none;
    background: none;
    display: flex;
    align-items: center;
    
    transition: opacity 0.1s;

    &:hover {
        opacity: 0.8;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`

export const ToggleMenu = styled.button`
    display: none;

    width: 40px;
    height: 40px;

    border-radius: 5px;
    font-size: 22px;
    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.white};

    transition: opacity 0.3s;

    &:hover {
        opacity: 0.7;
    }

    @media(max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const ToggleThemeFooter = styled.footer<FooterProps>`
    display: none;
    position: absolute;
    bottom: 30px;

    @media(max-width: 470px) {
        display: ${props => props.menuIsOpen ? 'flex' : 'none'}
    }
`