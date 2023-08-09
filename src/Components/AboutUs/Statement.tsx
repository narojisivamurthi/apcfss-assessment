import React, { useState } from 'react';
import { InfoCard, RoundContainer } from '../style';
import editIcon from  "../../assets/edit-red.svg";
import statementIcon from  "../../assets/statement.svg";
import StatementModal from './StatementModal';
//import { NavLink } from 'react-router-dom';

const Statement = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <InfoCard>
            <div className='edit-icon-container'>
                <img src={editIcon} alt='dashboard' onClick={() => setIsOpen(true)}/>
            </div>
            <div className='card-title'>
                <img src={statementIcon} alt='dashboard'/>
                StateMents
            </div>
            <div className='d-flex justify-content-between pt-3'>
                <div className='card-text'>
                    You think it we ink it.
                </div>
                <div className='ps-3'>
                    <RoundContainer className='number-container'>
                        +1
                    </RoundContainer>
                </div>
            </div>
            {isOpen && <StatementModal
                title={"Statement"}
                isOpen={isOpen}
                postModalClose={() => setIsOpen(false)}/>
            }
        </InfoCard>
    );
};

export default Statement;