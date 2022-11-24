import styled, { keyframes } from "styled-components"

const animate = keyframes`
    0% {
        transform: translateY(100px);
        opacity: 0;
    }

    50% {
        opacity: 0.3;
    }

    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`

type SubtitleProps = {
    color: string;
}

export const Container = styled.div`
    width: 48%;
    min-height: 260px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    display: flex;

    animation: ${animate} 0.5s;

    @media(max-width: 1200px) {
       display: flex;
       flex-direction: column;

       width: 100%;
       height: auto;
    }
`

export const LeftSide = styled.aside`
    flex: 1;

    padding: 30px 20px;

    > h2 {
        padding-left: 22px;
        margin-bottom: 10px;
    }

    @media(max-width: 1200px) {
        > h2 {
            text-align: center;
        }
    }
`

export const RightSide = styled.main`
    flex: 1;
    min-height: 150px;

    display: flex;
    justify-content: center;

    padding-top: 35px;
`

export const SubtitleContainer = styled.ul`
    list-style: none;

    height: 143px;
    padding-right: 15px;

    @media(max-width: 1200px) {
       display: flex;

       height: auto;
    }
`

export const Subtitle = styled.li<SubtitleProps>`
    display: flex;
    align-items: center;

    margin-bottom: 7px;

    padding-left: 22px;

    > div {
        background-color: ${props => props.color};

        width: 50px;
        height: 50px;
        border-radius: 5px;

        font-size: 16px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    > span {
        margin-left: 5px;
    }

    @media(max-width: 1200px) {
       > div {
        width: 40px;
        height: 40px;

        font-size: 14px;
       }
    }
`
