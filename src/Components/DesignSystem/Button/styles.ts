import styled from 'styled-components/macro';
import { HoverStyleReturnType, StyleReturnType } from './helpers';

// This interface is for Styles passed from Function Component
interface Styles {
    generalStyle: StyleReturnType;
    hoverStyle: HoverStyleReturnType;
}

export const Button = styled.button<Styles>`
    cursor: pointer;
    border-radius: 8px;
    font-size: 16px;
    margin: 0 5px;
    min-width: ${(props: Styles): string => props.generalStyle.minWidth};
    min-height: ${(props: Styles): string => props.generalStyle.minHeight};
    color: ${(props: Styles): string => props.generalStyle.color};
    opacity: ${(props: Styles): number => props.generalStyle.opacity};
    pointer-events: ${(props: Styles): string => props.generalStyle.pointerEvents};
    background-color: ${(props: Styles): string => props.generalStyle.backgroundColor};
    border: ${(props: Styles): string => props.generalStyle.border};
    border-color: ${(props: Styles): string => props.generalStyle.borderColor};
    box-shadow: ${(props: Styles): string => props.generalStyle.boxShadow};
    font-weight: 500;
    padding: 5px 20px;

    img {
        margin-right: 5px;
    }

    &:hover {
        color: ${(props: Styles): string => props.hoverStyle.color};
        background-color: ${(props: Styles): string => props.hoverStyle.backgroundColor};
        border-color: ${(props: Styles): string => props.hoverStyle.borderColor};
    }

`;
