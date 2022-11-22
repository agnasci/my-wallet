import styled from "styled-components";

type TagProps = {
    color: string;
}

export const Container = styled.li`
    background-color: ${props => props.theme.colors.tertiary};

    list-style: none;
    border-radius: 5px;

    margin: 10px 0;
    padding: 12px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    transition: all 0.1s;

    position: relative;

    &:hover {
        opacity: 0.8;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;

        gap: 2px;
    }

    > div span {
        font-size: 20px;
        font-weight: 500;
    }
`

export const Tag = styled.div<TagProps>`
    width: 10px;
    height: 60%;

    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;

    background-color: ${props => props.color};

    position: absolute;
    left: 0;
`