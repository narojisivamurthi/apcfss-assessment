import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { Button, FormContainer, FormInput } from './style';

const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
      const onSubmit = (data:any) => {
        console.log(data);
        const {cityName , countryName} = data;
        const API_KEY = "7179076ef4f2fb19a2b95f61ff693b85";
        const json  = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=${API_KEY}`)
              .then(response => console.log(response))
              .then(data => {
                // Do something with the weather data here
                console.log(data , "Asdhaskdhas");
              })
              .catch(error => {
                console.error(error);
              });
      };
      

// let json  = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
//   .then(response => console.log(response))
//   .then(data => {
//     // Do something with the weather data here
//     console.log(data , "Asdhaskdhas");
//   })
//   .catch(error => {
//     console.error(error);
//   });
    return (
        <FormContainer className='align-items-center' onSubmit={handleSubmit(onSubmit)}>
                <div className='d-flex align-items-center me-3'>
                    <FormInput className='w-50 me-2' placeholder='City' {...register("cityName")}></FormInput>
                    <FormInput className='w-50 ms-2' placeholder='Country' {...register("countryName")}></FormInput>
                </div>
                <Button type='submit'>Submit</Button>
        </FormContainer>
    );
};

export default Form;