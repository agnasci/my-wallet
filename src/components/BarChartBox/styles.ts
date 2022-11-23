import styled from "styled-components"

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
`

export const LeftSide = styled.aside`
    flex: 1;

    padding: 30px 20px;

    > h2 {
        padding-left: 22px;
        margin-bottom: 10px;
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
`