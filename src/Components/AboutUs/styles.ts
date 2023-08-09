import styled from "styled-components";

interface TabItemProps {
    selected?: boolean;
}
export const TabContainer = styled.div`
    width: 100%;
    display: flex;
`;
export const TabItem = styled.div<TabItemProps>`
    border-bottom: 2px solid ${props => props.selected ? 'red' : 'gray'};
    padding: 8px 25px;
    color: ${props => props.selected ? 'black' : '#979797'};
    cursor: pointer;

    &:not(:last-child):hover {
        color: black;
        border-bottom: 2px solid red;
        background-color: #f1f1f1;
        border-radius: 8px 8px 0 0;
    }

    &:first-child {
        padding: 5px 10px;
    }

    &:last-child {
        padding-right: 0px;
        flex: 1;
    }
    
`;