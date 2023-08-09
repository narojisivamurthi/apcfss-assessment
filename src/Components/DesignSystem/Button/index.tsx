import React, { FunctionComponent, ReactNode } from 'react';
import { Button as IBIButton } from './styles';
import { getHoverStyle, getStyle, size as sizeType, defaultStyle } from './helpers';
import { variant as variantType } from './buttonVariants';
//import _ from 'lodash';

export interface ButtonProps {
    children: ReactNode;
    loading?: boolean;
    size?: sizeType;
    variant?: variantType;
    disabled?: boolean;
    onClick?: (...args: unknown[]) => unknown;
    title?: string | null;
    className?: string;
    onKeyPress?: any;
    id?: string;
    type?: any;
    value?: any;
    style?: any;
    tooltip?: any;
    tabIndex?: number;
}

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
    /*
     *  We need this as typescript currently doesn't support default props so we need to check
     *  if variant,size are being passed or else typescript marks them undefined
     *  even if default props are passed
     */
    const defaultHoverStyle = {
        backgroundColor: '#FFFFFF',
        color: '#000000',
        border: 'red'
    };

    // This is the default style when button is rendered on dom
    const style = props.variant
        ?   {...getStyle(props.variant, props.size, props.disabled), ...props.style}
        :   {...defaultStyle, ...props.style};

    // Hover Style of button
    const hoverStyle = props.variant
        ?   {...getHoverStyle(props.variant), ...props.style}
        :   {...defaultHoverStyle, ...props.style};

    return (
        <IBIButton
            as='button'
            className={props.className}
            tabIndex={props.tabIndex}
            disabled={props.disabled || false}
            generalStyle={style}
            hoverStyle={hoverStyle}
            title={props.title || ''}
            type={props.type}
            onClick={props.onClick}
        >
            <b className={`d-flex justify-content-center align-items-center text-truncate`}>
                {props.children}
            </b>
        </IBIButton>
    );
};

Button.defaultProps = {
    disabled: false,
    loading: false,
    size: 'lg',
    title: '',
    variant: 'primary',
    className: '',
    type: 'button'
};

export default Button;
