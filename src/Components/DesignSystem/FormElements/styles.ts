import styled from "styled-components"

interface EntryInputProps {
    isDisable?: boolean;
    isSearchIcon?: boolean;
    isRoundedBordered?: boolean;
}

export const EntryInput = styled.input<EntryInputProps>`
    width: 100%;
    min-height: 44px;
    font-size: 14px;
    font-weight: 400;
    border: 1px solid #ccc;
    background-color: #EFF2F9;
    padding: 5px 10px;
    padding-left: ${props => props.isSearchIcon ? "40px" : "10px"};
    border-radius:  ${props => props.isRoundedBordered ? "22px" : '6px'};
`;

export const LabelHeading = styled.label`
    color: black;
    font-size: 14px;
    font-weight: 500;
    margin: 5px 0;
`;

export const ErrorText = styled.div`
    color: red;
    font-size: 12px;
    font-weight: 500;
    margin: 5px 0;
`;

export const InputContainer = styled.div`
    position: relative;
    display: flex;
    img {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0%, -50%);
        padding: 5px;
    }
`;