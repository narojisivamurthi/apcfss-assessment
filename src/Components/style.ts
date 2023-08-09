import styled from "styled-components";

export const WeatherInfoCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #d5d5d5;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid black;
    text-align: left;

    .location-name {
        color: black;
        font-size: 16px;
        font-weight: 500;
    }
    .time-stamp {
        color: black;
        font-size: 12px;
        font-weight: 400;
    }
    .temparature-count {
        font-size: 30px;
        color: black;
        font-weight: 700;
    }
    .weather-condition {
        font-size: 12px;
        color: black;
        font-weight: 600;
    }

    p{
        margin: 0;
    }
`;

export const MainBody = styled.div`
    flex: 1;
    width: 100%;
    padding: 25px;
    display: flex;
    background-color: #EFF2F9;
    overflow: auto;
`;

export const RouterContainer = styled.div`
    background-color: white;
    border-radius: 15px;
    flex: 1;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: start;
    box-shadow: 0px 0px 2px 2px rgb(216 216 223 / 30%);
    overflow: auto;

    .about-us-logo{
        height: 125px;
    }
`;

export const InfoCard = styled.div`
    height: 100%;
    border: 1px solid #cccccc;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 1px 1px #e9e9e9;
    text-align: start;
    display: flex;
    flex-direction: column;
    position: relative;

    .edit-icon-container {
        position: absolute;
        right: 0;
        top: 0;
        margin: 20px;
        cursor: pointer;
        img {
            width: 20px;
            height: 20px;
        }
    }

    .social-media-icons {
        width: 24px;
        padding: 0;
    }

    .icon-text {
        font-size: 12px;
        font-weight: 400;
        margin: 5px 0;
    }

    .card-title {
        font-size: 20px;
        font-weight: 600;
        padding-bottom: 10px;
        display: flex;
        align-items: center;
        padding-right: 20px;
        word-break: break-word;

        img {
            width: 24px;
            height: 24px;
            margin-right: 8px;
        }
        .big-logo {
            width: 40px;
            height: 40px;
        }
    }
    .card-text {
        font-size: 14px;
        font-weight: 400;
        padding: 10px 0;
        display: flex;
        align-items: center;
        word-break: break-word;

        img {
            margin-right: 8px;
            width: 20px;
            height: 20px;
        }
    }
`;

export const RoundContainer = styled.div`
    background-color: #FFF2F2;
    max-width: 36px;
    max-height: 36px;
    min-height: 36px;
    min-width: 36px;
    border-radius: 20px;
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    overflow: auto;
`;

export const InformationText = styled.div`
    font-size: 16px;
    font-weight: 400;
    padding: 10px 0;
    color: #666666;
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TitleText = styled.h1`
    font-size: 24px;
    font-weight: 600;
    color: black; 
    margin-bottom: 16px;
`;

export const WeatherInfoContainer = styled.div`
    border: 2px dashed black;
    border-radius: 20px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    width: 470px;

    .heading {
        font-size: 32px;
        font-weight: 500;
        color: black;
        margin: 0;
    }
`;

export const FormContainer = styled.form`
    padding: 24px 0;
    display: flex;
`;

export const Button = styled.button`
    border-radius: 8px;
    height: 40px;
    padding: 0 20px;
    background-color: #6665ff;
    border: none;
    color: white;
    font-size: 14px;

`;

export const InfoRow = styled.div`
    padding: 10px;
    width: 40%;
    border-bottom: 1px dashed black;
    display: flex;
    justify-content: space-between;

    .info-label{
        font-size: 14px;
        font-weight: 500;
        margin: 0;
    }
    .info-value {
        font-size: 12px;
        font-weight: 400;
        margin: 0;
    }
`;

export const FormInput = styled.input`
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 8px;
`;