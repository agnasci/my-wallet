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

type ContainerProps = {
    color: string;
}

export const Container = styled.div<ContainerProps>`

    width: 32%;
    height: 150px;

    margin: 10px 0;

    background-color: ${props => props.color};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;
    padding: 10px 20px;

    position: relative;
    overflow: hidden;

    animation: ${animate} 0.5s;

    > img {
        height: 110%;

        position: absolute;
        top: -10px;
        right: -22px;

        opacity: 0.3;
    }

    > span {
        font-size: 18px;
        font-weight: 500;
    }

    > small {
        font-size: 11px;
        position: absolute;
        bottom: 10px;
        opacity: 0.8;
    }

    @media(max-width: 770px) {
        > span {
            font-size: 14px;
        }

        > h1 {
            word-wrap: break-word;
            font-size: 22px;

            > strong {
                display: inline-block;
                width: 100%;
            }
        }
    }

    @media(max-width: 420px) {
        width: 100%;

        > h1 {
            display: flex;

            > strong {
                position: initial;
                width: auto;
            }

            > strong::after {
                content: '';
                display: inline-block;
                width: 1px;
            }
        }
    }
`