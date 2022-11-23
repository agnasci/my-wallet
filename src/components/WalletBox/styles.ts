import styled from "styled-components";

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
`