import React from 'react';
import { FlexCenter, WeatherInfoCard } from './style';

const WeatherCard = () => {
    return (
        <WeatherInfoCard>
            <p className='location-name'>Hyderabad</p>
            <p className='time-stamp'>12-0101-21</p>
            <FlexCenter className='py-3 mb-3'>
                <p className='temparature-count'>20 o</p>
                <p className='weather-condition'>Haze</p>
            </FlexCenter>
        </WeatherInfoCard>
    );
};

export default WeatherCard;