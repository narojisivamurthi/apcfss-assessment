import React from 'react';
import { MegamenuItem, PrimaryNavigationContainer } from './styles';
import { FlexColumn, InfoCard } from '../style';
import Button from '../DesignSystem/Button';
import dashboardGrayIcon from  "../../assets/dashboard-gray.svg";
import dashboardRedIcon from  "../../assets/dashboard-red.svg";
import orderGrayIcon from  "../../assets/order-gray.svg";
import orderRedIcon from  "../../assets/order-red.svg";
import teamGrayIcon from  "../../assets/team-gray.svg";
import teamRedIcon from  "../../assets/team-red.svg";
import partnerGrayIcon from  "../../assets/partner-gray.svg";
import partnerRedIcon from  "../../assets/partner-red.svg";
import productsGrayIcon from  "../../assets/products-gray.svg";
import productsRedIcon from  "../../assets/products-red.svg";
import awardGrayIcon from  "../../assets/award-gray.svg";
import awardRedIcon from  "../../assets/award-red.svg";
import aboutGrayIcon from  "../../assets/about-gray.svg";
import aboutRedIcon from  "../../assets/about-red.svg";
import paymentGrayIcon from  "../../assets/payment-gray.svg";
import paymentRedIcon from  "../../assets/payment-red.svg";
import questionIcon from  "../../assets/question.svg";
import logoNavigation from "../../assets/logo-navigation.jpg";

//import { NavLink } from 'react-router-dom';

const PrimaryNavigation = () => {
    const navigationList = [
        {
            id: '1',
            nameHeader: 'Dashboard',
            normalSrc: dashboardGrayIcon,
            hoverSrc: dashboardRedIcon
        },
        {
            id: '2',
            nameHeader: 'Orders',
            normalSrc: orderGrayIcon,
            hoverSrc: orderRedIcon
        },
        {
            id: '3',
            nameHeader: 'Team Members',
            normalSrc: teamGrayIcon,
            hoverSrc: teamRedIcon
        },
        {
            id: '4',
            nameHeader: 'Partners',
            normalSrc: partnerGrayIcon,
            hoverSrc: partnerRedIcon
        },
        {
            id: '5',
            nameHeader: 'Product Listings',
            normalSrc: productsGrayIcon,
            hoverSrc: productsRedIcon
        },
        {
            id: '6',
            nameHeader: 'Awards & Honours',
            normalSrc: awardGrayIcon,
            hoverSrc: awardRedIcon
        },
        {
            id: '7',
            nameHeader: 'About Us',
            normalSrc: aboutGrayIcon,
            hoverSrc: aboutRedIcon
        },
        {
            id: '8',
            nameHeader: 'Payment Info',
            normalSrc: paymentGrayIcon,
            hoverSrc: paymentRedIcon
        }
    ]
    return (
        <PrimaryNavigationContainer className='justify-content-between'>
            <img className='logo-navigation' src={logoNavigation} alt='icon'/>
            <FlexColumn className='py-3'>
                {navigationList.map((item) => 
                    <MegamenuItem isSelected={item.id === '7'}>
                        {/* <NavLink
                            to={item.link}
                            activeClassName={'is-active'}
                        > */}
                            <img className='normal-img' src={item.normalSrc} alt='dashboard'/>
                            <img className='hover-img' src={item.hoverSrc} alt='dashboard'/>
                            {item.nameHeader}
                        {/* </NavLink> */}
                    </MegamenuItem>
                )} 
            </FlexColumn>
            <div>
                <InfoCard className='text-center'>
                    <div className='card-title pb-1 flex-column'>
                        <img className='big-logo mb-2' src={questionIcon} alt='icon'/>
                        Need Help?</div>
                    <div className='card-text'>Out Support team is at your disposal</div>
                    <div className='p-1'>
                        <Button variant="primary">Get Help</Button>
                    </div>
                </InfoCard>
            </div>
        </PrimaryNavigationContainer>
    );
};

export default PrimaryNavigation;