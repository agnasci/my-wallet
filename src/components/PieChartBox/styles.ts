import styled, { keyframes } from "styled-components";

const animate = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0;
    }

    50% {
        opacity: 0.3;
    }

    100% {
        transform: translateX(0px);
        opacity: 1;
    }
`

type SubtitleProps = {
    color: string;
}

export const Container = styled.div`
    width: 48%;
    height: 260px;

    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    display: flex;

    animation: ${animate} 0.5s;

    @media(max-width: 770px) {
       display: flex;
       width: 100%;
    }
`

export const LeftSide = styled.aside`
    padding: 30px 20px;

    > h2 {
        margin-bottom: 20px;
    }

    @media(max-width: 1345px) {
       padding: 0 15px 5px;
       margin-bottom: 7px;

       > h2 {
        margin-top: 15px;
        margin-bottom: 7px;
        /* text-align: center; */
       }
    }

    @media(max-width: 420px) {
       padding: 15px;
       margin-bottom: 7px;

       > h2 {
        margin-bottom: 20px;
       }
    }
`

export const SubtitleContainer = styled.ul`
    list-style: none;

    height: 143px;
    padding-right: 15px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
        border-radius: 10px;
    }

    @media(max-width: 1345px) {
       display: flex;
       flex-direction: column;
    }
`

export const Subtitle = styled.li<SubtitleProps>`
    display: flex;
    align-items: center;

    margin-bottom: 7px;

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
`

export const RightSide = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
`
