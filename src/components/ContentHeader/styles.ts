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
`

export const Controllers = styled.div`
    display: flex;
    gap: 7px;
`