import styled from 'styled-components';

export const ModalHeadingPrimary = styled.div`
    display: flex;
    align-items: center;
    padding: 28px;
    font-size: 28px;
    font-weight: 600;
    color: black;
    margin: 0;
    cursor: pointer;
`;

export const ModalHeadingSecondary = styled(ModalHeadingPrimary)`
`;

export const ModelBody = styled.div`
    background-color: white;
    max-height: 100%;
    overflow: auto;
    height: 100%;
    flex: 1;
    padding: 28px;

    .compo-content {
        overflow-x: hidden !important;
    }
`;

export const PrimaryModelBody = styled.div`
    background-color: white;
    overflow: auto;
    padding: 20px 25px;
`;
