import React from 'react';
import { InfoRow } from './style';

const WeatherDetails = () => {
    return (
        <div className='d-flex flex-wrap justify-content-between mt-2'>
            <InfoRow>
                <p className='info-label'>Test</p>
                <p className='info-value'>20</p>
            </InfoRow>
            <InfoRow>
                <p className='info-label'>Test</p>
                <p className='info-value'>20</p>
            </InfoRow> 
            <InfoRow>
                <p className='info-label'>Test</p>
                <p className='info-value'>20</p>
            </InfoRow> 
            <InfoRow>
                <p className='info-label'>Test</p>
                <p className='info-value'>20</p>
            </InfoRow> 
            <InfoRow>
                <p className='info-label'>Test</p>
                <p className='info-value'>20</p>
            </InfoRow> 
            <InfoRow>
                <p className='info-label'>Test</p>
                <p className='info-value'>20</p>
            </InfoRow>
        </div>
    );
};

export default WeatherDetails;