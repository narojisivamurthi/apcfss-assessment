import React, { useState } from 'react';
import { FlexColumn, InfoCard, RoundContainer } from '../style';
import editIcon from  "../../assets/edit-red.svg";
import emailIcon from  "../../assets/email.svg";
import phoneIcon from  "../../assets/phone.svg";
import contactIcon from "../../assets/contacts.svg";
import ContactModal from './ContactModal';
//import { NavLink } from 'react-router-dom';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const contactList = [
        {
            title: 'Sales Team',
            email: 'test@gmail.com',
            phone: '8639141013'
        },
        {
            title: 'Sales Team',
            email: 'test@gmail.com',
            phone: '8639141013'
        },
        {
            title: 'Sales Team',
            email: 'test@gmail.com',
            phone: '8639141013'
        }
    ];
    const [cardsList, setCardsList] = useState(contactList);

    return (
        <InfoCard>
            <div className='edit-icon-container'>
                <img src={editIcon} alt='icon' onClick={() => setIsOpen(true)}/>
            </div>
            <div className='card-title'>
                <img className='icon-img' src={contactIcon} alt='dashboard'/>
                Contact
            </div>
            <div className='d-flex justify-content-between pt-3'>
                <FlexColumn>
                    {cardsList.length ? <>
                        <div className='card-text'>
                            <img className='icon-img' src={emailIcon} alt='icon'/>
                            {cardsList[0].email}
                        </div>
                        <div className='card-text'>
                            <img className='icon-img' src={phoneIcon} alt='icon'/>
                            {cardsList[0].phone}
                        </div>
                    </> : 
                    <div className='card-text'>
                        No Data
                    </div>
                    }
                </FlexColumn>
                {cardsList.length > 1 &&<div className='ps-3'>
                    <RoundContainer className='number-container'>
                        {`+ ${cardsList.length - 1}`}
                    </RoundContainer>
                </div>}
            </div>
            {isOpen && 
            <ContactModal
                title={"Contacts"}
                isOpen={isOpen}
                cardsList={cardsList}
                setCardsList={setCardsList}
                postModalClose={() => setIsOpen(false)}
            />}
        </InfoCard>
    );
};

export default Contact;