import styled from "styled-components"

export const Container = styled.div`
    width: 48%;
    height: 260px;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    margin: 10px 0;
    padding: 30px 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > header div {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    > header div h1 {
        font-size: 32px;
        font-weight: 800;
    }

    > header div img {
        width: 35px;
        margin-left: 10px;
    }

    > header p {
        font-size: 24px;
        font-weight: 600;
    }

    > footer p {
        font-size: 18px;
        font-weight: 400;
    }
`