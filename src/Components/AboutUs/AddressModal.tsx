import React, { FunctionComponent } from 'react';
import WithModal from '../DesignSystem/Modal';
import { FlexColumn } from '../style';
import Button from '../DesignSystem/Button';
import FormInput from '../DesignSystem/FormElements/Input';
import { useForm } from 'react-hook-form';

const AddressModal: FunctionComponent = (props:any) => {
    const {handleSubmit, control} = useForm({});

    const onSubmit = (data:any) => {
      console.log(data);
    };
    return (
        <FlexColumn className='justify-content-between flex-fill'>
            <FlexColumn className='flex-fill'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormInput name="floornumber" placeholder='Floor Number' control={control} isDisabled={true}/>
                    <FormInput name="area" placeholder='Area' control={control} isDisabled={true}/>
                    <FormInput name="landmark" placeholder='Landmark' control={control} isDisabled={true}/>
                    <FormInput name="city" placeholder='City' control={control} isDisabled={true}/>
                    <FormInput name="pincode" placeholder='Pincode' control={control} isDisabled={true}/>
                </form>
            </FlexColumn>
            <FlexColumn className=''>
                <Button className='w-100 m-0' variant='danger' onClick={props.postModalClose}>
                    Save
                </Button>
            </FlexColumn>
        </FlexColumn>
    );
};

export default WithModal(AddressModal);
