import styled from "styled-components";

export const Container = styled.div``

export const Content = styled.main``

export const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 25px;

    .tag-filter {
        font-size: 18px;
        font-weight: 500;
        background: none;
        color: ${props => props.theme.colors.white};

        margin: 0 10px;

        transition: opacity 0.1s;
        opacity: 0.5;

        &:hover {
            opacity: 0.8;
        }
    }

    .recurrent {
        &::after {
            content: '';
            display: block;
            width: 55px;
            margin: 3px auto;
            border-bottom: 5px solid ${props => props.theme.colors.success};
        }
    }

    .eventual {
        &::after {
            content: '';
            display: block;
            width: 55px;
            margin: 3px auto;
            border-bottom: 5px solid ${props => props.theme.colors.warning};
        }
    }

    .tag-actived {
        opacity: 1;
    }
`
