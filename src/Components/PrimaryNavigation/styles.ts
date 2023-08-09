import styled from "styled-components";

export const PrimaryNavigationContainer = styled.div`
    background: white;
    border-radius: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: 270px;
    margin-right: 25px;
    padding: 15px;
    box-shadow: 0px 0px 2px 2px rgb(216 216 223 / 30%);
    overflow: auto;

    .logo-navigation {
        width: 135px;
    }
`;

interface MegamenuItemProps {
    isSelected?: boolean;
}
export const MegamenuItem = styled.div<MegamenuItemProps>`
    display: flex;
    align-items: center;
    background-color: ${props => props.isSelected ? '#FFF2F2' : 'white'};
    padding: 15px 20px;
    border-radius: 10px;
    color:  ${props => props.isSelected ? 'red' : '#A5A5A5'};
    font-size: 16px;
    font-weight: 500;
    text-align: start;
    cursor: pointer;
    
    
    .hover-img {
        display: ${props => props.isSelected ? 'flex' : 'none'};
    }

    .normal-img {
        display: ${props => props.isSelected ? 'none' : 'flex'};
    }

    &:hover {
        background-color: #FFF2F2;
        color: red;

        .normal-img {
            display: none;
        }
        .hover-img {
            display: flex;
        }
    }

    .hover-img , .normal-img {
        padding-right: 10px;
        width: 32px;
    }
`;