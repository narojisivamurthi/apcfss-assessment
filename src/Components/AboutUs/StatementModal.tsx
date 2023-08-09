import React, { FunctionComponent } from 'react';
import WithModal from '../DesignSystem/Modal';
import { FlexColumn, InfoCard, InformationText } from '../style';
import editIcon from  "../../assets/edit-red.svg";
import deleteIcon from  "../../assets/bin.svg";
import statementIcon from "../../assets/statement.svg";

const StatementModal: FunctionComponent = (props:any) => {
    const statementList = [
        {
            text: 'eg. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed so eiusmod tepor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        },
        {
            text: 'eg. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed so eiusmod tepor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
        }
    ];

    return (
        <FlexColumn className='justify-content-between flex-fill'>
            <FlexColumn className='flex-fill'>
                <InformationText className='pt-0 pb-3'>Please provide the company's email & contacts</InformationText>
                { statementList && statementList.map((item) => 
                    <div className='my-2'>
                        <InfoCard>
                            <div className='edit-icon-container'>
                                <img className='me-3' src={deleteIcon} alt='icon'/>
                                <img className='ml-1' src={editIcon} alt='icon'/>
                            </div>
                            <div className='card-title'>
                                <img className='icon-img' src={statementIcon} alt='dashboard'/>
                            </div>
                            <div className='d-flex justify-content-between pt-3'>
                                <FlexColumn>
                                    <div className='card-text'>
                                        {item.text}
                                    </div>
                                </FlexColumn>
                            </div>
                        </InfoCard>
                    </div>
                )}
            </FlexColumn>
            {/* <FlexColumn className=''>
                <Button className='w-100 m-0' onClick={props.postModalClose}>
                    Save
                </Button>
            </FlexColumn> */}
        </FlexColumn>
    );
};

export default WithModal(StatementModal);
