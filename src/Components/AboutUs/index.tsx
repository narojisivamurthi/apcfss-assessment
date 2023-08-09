import React, { useState } from 'react';
import { InformationText, RouterContainer, TitleText } from '../style';
import aboutUsLogo from  "../../assets/logo-abouts.jpg";
import successIcon from  "../../assets/success.svg";
import Contact from './Contact';
import SocialMedia from './SocialMedia';
import Address from './Address';
import Operations from './Operations';
import Statement from './Statement';
import { TabContainer, TabItem } from './styles';

const AboutUs = () => {
    const tabsList = [
        {label: 'Info', id: 'info'},
        {label: 'FAQ', id: 'faq'},
        {label: 'Complaints and Feedback', id: 'complaintsAndFeedback'},
        {label: 'Privacy Policy', id: 'privacyPolicy'},
        {label: 'Terms & Conditions', id: 'terms&Conditions'},
    ]
    const [selectedTab , setSelectedTab] = useState(tabsList[0].id);
    return (
        <RouterContainer>
            <div className='px-3 d-flex flex-column w-100 align-items-start justify-content-start text-left'>
                <TitleText>About Us</TitleText>
                <div className='d-flex align-items-start'>
                    <img className='about-us-logo' src={aboutUsLogo} alt="logo"/>
                    <div className='d-flex align-items-center p-4 m-2'>
                        <img className='pe-2' src={successIcon} alt="icon"/>
                        <a href='http://localhost:3000/'>Verify Company</a>
                    </div>
                </div>
                <InformationText className='py-4'>Excellent back office team, amazing 100% on time delivery record and a very hand’s on support. Love working with you guys.</InformationText>
                
                <TabContainer className='d-flex'>
                    {tabsList.map((item) => (
                        <TabItem selected={selectedTab === item.id} onClick={() => setSelectedTab(item.id)}>
                            {item.label}
                        </TabItem>)
                    )}
                    <TabItem/>
                </TabContainer>
            </div>
            {selectedTab === tabsList[0].id &&
                <div className='d-flex flex-wrap col-12 mt-2'>
                    <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <Contact/>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3'>
                        <Address/>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3'>
                        <Operations/>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3'>
                        <SocialMedia/>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3'>
                        <Statement/>
                    </div>
                </div>}
            {selectedTab === tabsList[1].id && 
                <div className='p-3'>
                    Welcome to FAQ
                </div>}
            {selectedTab === tabsList[2].id && 
                <div className='p-3'>
                    Welcome to Complaints And Feedback
                </div>}
            {selectedTab === tabsList[3].id && 
                <div className='p-3'>
                    Welcome to Privacy Policy
                </div>}
            {selectedTab === tabsList[4].id && 
                <div className='p-3'>
                    Welcome to Termes & Conditions
                </div>}
        </RouterContainer>
    );
};

export default AboutUs;