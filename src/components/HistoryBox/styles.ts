import styled from "styled-components"

type SubtitleProps = {
    color: string;
}

export const Container = styled.div`

    width: 100%;
    height: 360px;

    display: flex;
    flex-direction: column;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    margin: 10px 0;
    padding: 30px 20px;

    border-radius: 7px;
`

export const ChartContainer = styled.div`
    flex: 1;
`

export const Header = styled.header`
    width: 100%;
    padding: 0 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h2 {
        margin-bottom: 20px;
    }

    @media(max-width: 1280px) {
       flex-direction: column;
    }
`

export const SubtitleContainer = styled.ul`
    list-style: none;

    display: flex;
    gap: 15px;
`

export const Subtitle = styled.li<SubtitleProps>`
    display: flex;
    align-items: center;

    margin-bottom: 7px;

    > div {
        background-color: ${props => props.color};

        width: 40px;
        height: 40px;
        border-radius: 5px;

        font-size: 16px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    > span {
        margin-left: 5px;
    }

    @media(max-width: 1280px) {
        > div {
            width: 27px;
            height: 27px;
        }
    }
`