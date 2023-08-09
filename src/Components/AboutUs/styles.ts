import styled from "styled-components";

interface TabItemProps {
    selected?: boolean;
    isDisabled?: boolean;
}
export const TabContainer = styled.div`
    width: 100%;
    display: flex;
`;
export const TabItem = styled.div<TabItemProps>`
    border-bottom: 2px solid ${props => props.selected ? 'red' : 'gray'};
    padding: 8px 25px;
    color: ${props => props.selected ? 'black' : '#979797'};
    cursor: ${props => props.isDisabled ? "not-allowed" : "pointer"};
    background-color: ${props => props.isDisabled ? "#ccc" : "transparent"};
    border-radius: 8px 8px 0 0;

    &:not(:last-child):hover {
        color: black;
        border-bottom:  ${props => props.isDisabled ? "2px solid gray" : "2px solid red"};
        background-color: #f1f1f1;
    }

    &:first-child {
        padding: 5px 10px;
    }

    &:last-child {
        padding-right: 0px;
        flex: 1;
    }
    
`;

export const PaginationButton = styled.button`
    border: 1px solid gray;
    padding: 5px 12px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: gray;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

`;

export const PaginationButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 20px 16px;

   button {
        &:first-child {
            border-radius: 4px 0 0 4px;
        }

        &:last-child {
            border-radius: 0 4px 4px 0;
        }
    }

    .active {
        background-color: gray;
        color: white;
    }

`;