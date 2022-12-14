import styled from "styled-components";

type TitleProps = {
    lineColor: string;
}

export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 25px;

    @media(max-width: 320px) {
        flex-direction: column;
    }
`

export const Title = styled.div<TitleProps>`
    > h1 {
        &::after {
            content: '';
            display: block;
            width: 55px;
            border-bottom: 10px solid ${props => props.lineColor};
        }
    }

    @media(max-width: 420px) {
        > h1 {
            font-size: 22px;

            &::after {
            border-bottom: 5px solid ${props => props.lineColor};
        }
        }
    }
`

export const Controllers = styled.div`
    display: flex;
    gap: 7px;

    @media(max-width: 320px) {
        width: 100%;
        justify-content: space-around;

        margin-top: 20px;
    }
`