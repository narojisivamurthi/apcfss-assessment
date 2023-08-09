import React, { useState } from 'react';
import { InfoCard } from '../style';
import editIcon from  "../../assets/edit-red.svg";
import locationIcon from  "../../assets/location.svg";
import AddressModal from './AddressModal';
//import { NavLink } from 'react-router-dom';

const Address = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <InfoCard>
            <div className='edit-icon-container'>
                <img src={editIcon} alt='dashboard' onClick={() => setIsOpen(true)}/>
            </div>
            <div className='card-title'>
                <img src={locationIcon} alt='dashboard'/>
                Address
            </div>
            <div className='card-text'>
                Out Support team is at your disposal
            </div>
            {isOpen && <AddressModal
                title={"Address"}
                isOpen={isOpen}
                postModalClose={() => setIsOpen(false)}/>
            }
        </InfoCard>
    );
};

export default Address;