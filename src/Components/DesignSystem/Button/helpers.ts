import { variant as buttonVariants } from './buttonVariants';

// Style Parameters to be applied when we hover over a button
export type HoverStyleReturnType = {
    backgroundColor: string;
    color: string;
    border: string;
    borderColor: string;
    boxShadow: string;
};

// Size of button
export type size = 'sm' | 'lg';

// Style Parameters to be applied on button reuses the return types of hover
export interface StyleReturnType extends HoverStyleReturnType {
    minHeight: string;
    height: number;
    minWidth: string;
    opacity: number;
    pointerEvents: string;
}

export const defaultStyle = {
    backgroundColor: "black",
    color: "white",
    height: 44,
    minHeight: '44px',
    minWidth: '90px',
    opacity: 1,
    pointerEvents: 'all',
    border: '1px solid',
    borderColor: "black",
    boxShadow: ' 0 1px 3px rgba(0, 0, 0, 0.08)'
};

// This returns general style for button as a dictionary
export const getStyle = (
    variant: buttonVariants,
    size: size | undefined,
    disabled: boolean | undefined
): StyleReturnType => {
    const additionalStyle = { ...defaultStyle };

    if (disabled === true) {
        additionalStyle.opacity = 0.5;
        additionalStyle.pointerEvents = 'none';
        additionalStyle.backgroundColor = "black";
        additionalStyle.color = 'white';
    }

    if (size === 'lg') {
        additionalStyle.height = 40;
    }

    if (size === 'sm') {
        additionalStyle.height = 32;
    }

    const style: { [variant: string]: StyleReturnType } = {
        primary: {
            ...additionalStyle,
            backgroundColor: "black"
        },
        danger: {
            ...additionalStyle,
            backgroundColor: 'red',
            borderColor: 'red',
            color: 'white',
        },
        dangerPrimary: {
            ...additionalStyle,
            backgroundColor: '#FEF2F2',
            color: 'red',
            borderColor: '#FEF2F2'
        }
    };

    return style[variant];
};

// This returns hover style for button as a dictionary
export const getHoverStyle = (variant: buttonVariants): HoverStyleReturnType => {
    const additionalStyle = {
        border: '1px solid',
        borderColor: 'black',
        boxShadow: ' 0 4px 4px rgba(0, 0, 0, 0.09)'
    };
    const style: { [variant: string]: HoverStyleReturnType } = {
        primary: {
            ...additionalStyle,
            backgroundColor: 'black',
            color: 'white',
            border: 'none'
        },
        danger: {
            ...additionalStyle,
            backgroundColor: 'red',
            color: 'white',
            borderColor: 'red'
        },
        dangerPrimary: {
            ...additionalStyle,
            backgroundColor: '#FEF2F2',
            color: 'red',
            borderColor: '#FEF2F2'
        }
    };

    return style[variant];
};
