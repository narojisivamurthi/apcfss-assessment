import React from 'react';
import { PrimaryHeader } from './styles';
import Button from '../DesignSystem/Button';
import shoppingCartIcon from "../../assets/shopping-cart.svg";
import logo from "../../assets/logo-header.jpg";
import userIcon from "../../assets/user.svg";
import downIcon from "../../assets/down.svg";
import searchIcon from "../../assets/search.svg";
import { EntryInput, InputContainer } from '../DesignSystem/FormElements/styles';

const Header = () => {
    return (
        <PrimaryHeader>
            <div  className='left-side'>
                <img className='logo-img' src={logo} alt="logo"/>
            </div>
            <div className='right-side'>
                <InputContainer className={"flex-column align-items-start"}>
                    <EntryInput name={"search"} type='text' placeholder={"search"} isSearchIcon={true}/> 
                     <img src={searchIcon} alt='icon'/>
                </InputContainer>
                <div className='d-flex align-items-center'>
                    <Button>
                        <img src={shoppingCartIcon} alt="icon"/>
                        Checkout (200)
                    </Button>
                    <div className='d-flex align-items-center ps-3'>
                        <img src={userIcon} alt="icon"/>
                        <span className='px-2'>Usre Name</span>
                        <img src={downIcon} alt="icon"/>
                    </div>
                </div>
            </div>
        </PrimaryHeader>
    );
};

export default Header;