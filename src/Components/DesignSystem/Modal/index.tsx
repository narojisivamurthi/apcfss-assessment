import Modal from 'react-modal';
import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import leftArrowIcon from "../../../assets/arrow-left.svg";
// @ts-ignore
import { ModelBody, ModalHeadingPrimary } from './styles';
import { FlexColumn } from '../../style';

const WithModal = (Component: FunctionComponent) => {
    const HigherOrderComponent = (props: any) => {
        const styles = {
            overlay: {
                backgroundColor: 'rgba(114, 114, 114, 0)',
                zIndex: 99
            },
            content: {
                left: 'unset',
                right: '0',
                top: '0',
                bottom: 'unset',
                border: 'none',
                padding: '0px',
                zIndex: '999',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                minWidth: 470,
                maxWidth: 470,
                height: '100%',
                backgroundColor: '#ffffff',
                position: 'absolute',
                boxShadow: '0px 0px 12px 6px #dbdbdb'
            }
        };

        const closeModal = () => {
            if (props.postModalClose) {
                props.postModalClose();
            }
        };

        let modelStyles = _.merge({}, styles, props.style);
        return (
            <Modal
                isOpen={props.isOpen}
                onRequestClose={closeModal}
                id={'pop-up-modal'}
                style={modelStyles}
                shouldCloseOnOverlayClick={true}
                appElement={document.getElementById('root') as HTMLElement}
                shouldCloseOnEsc={true}
            >
                <ModalHeadingPrimary className='pb-0'>
                    <img src={leftArrowIcon} className='pe-3 left-icon' alt='icon' onClick={closeModal}/>
                    {props.title}
                </ModalHeadingPrimary>

                <ModelBody>
                    <FlexColumn className={'overflow-auto h-100 flex-grow-1'}>
                        <Component {...props} closeModal={closeModal} />
                    </FlexColumn>
                </ModelBody>
            </Modal>
        );
    };
    return HigherOrderComponent;
};

WithModal.propTypes = {
    postModalClose: PropTypes.func
};
export default WithModal;
