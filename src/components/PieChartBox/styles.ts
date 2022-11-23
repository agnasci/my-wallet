import styled from "styled-components";

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
`

export const LeftSide = styled.aside`
    padding: 30px 20px;

    > h2 {
        margin-bottom: 20px;
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
