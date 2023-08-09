import React from 'react';
import { InfoCard } from '../style';
import editIcon from  "../../assets/edit-red.svg";
import operationsIcon from  "../../assets/operations.svg";

//import { NavLink } from 'react-router-dom';

const Operations = () => {
    return (
        <InfoCard>
            <div className='edit-icon-container'>
                <img src={editIcon} alt='dashboard'/>
            </div>
            <div className='card-title'>
                <img src={operationsIcon} alt='dashboard'/>
                House of Operations
            </div>
            <div className='card-text'>
                Monday to friday
            </div>
        </InfoCard>
    );
};

export default Operations;