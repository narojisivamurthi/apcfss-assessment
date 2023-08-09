import React, { useState } from 'react';
import { FlexColumn, InfoCard } from '../style';
import linkIcon from  "../../assets/link.svg";
import editIcon from  "../../assets/edit-red.svg";
import websiteIcon from  "../../assets/globe.svg";
import instagramIcon from  "../../assets/instagram.svg";
import facebookIcon from  "../../assets/facebook.svg";
import twitterIcon from "../../assets/twitter.svg";
import SocialMediaModal from './SocialMediaModal';
//import { NavLink } from 'react-router-dom';

const SocialMedia = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <InfoCard>
            <div className='edit-icon-container'>
                <img src={editIcon} alt='dashboard' onClick={() => setIsOpen(true)}/>
            </div>
            <div className='card-title'>
                <img className='icon-img' src={linkIcon} alt='dashboard'/>
                Socila Media & Links
            </div>
            <div className='d-flex pt-4 flex-wrap'>
                <FlexColumn className='px-3 align-items-center'>
                    <img className='social-media-icons' src={websiteIcon} alt='dashboard'/>
                    <p className='icon-text'>Website</p>
                </FlexColumn>
                <FlexColumn className='px-3 align-items-center'>
                    <img className='social-media-icons' src={instagramIcon} alt='dashboard'/>
                    <p className='icon-text'>Instagram</p>
                </FlexColumn>
                <FlexColumn className='px-3 align-items-center'>
                    <img className='social-media-icons' src={facebookIcon} alt='dashboard'/>
                    <p className='icon-text'>Facebook</p>
                </FlexColumn>
                <FlexColumn className='px-3 align-items-center'>
                    <img className='social-media-icons' src={twitterIcon} alt='dashboard'/>
                    <p className='icon-text'>Twitter</p>
                </FlexColumn>
            </div>
            {isOpen && <SocialMediaModal
                title={"Address"}
                isOpen={isOpen}
                postModalClose={() => setIsOpen(false)}/>
            }
        </InfoCard>
    );
};

export default SocialMedia;