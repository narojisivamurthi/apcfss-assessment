import React, { FunctionComponent } from 'react';
import WithModal from '../DesignSystem/Modal';
import { FlexColumn } from '../style';
import FormInput from '../DesignSystem/FormElements/Input';
import { useForm } from 'react-hook-form';

const SocialMediaModal: FunctionComponent = (props:any) => {
    const {handleSubmit, control} = useForm({});

    const onSubmit = (data:any) => {
      console.log(data);
    };
    return (
        <FlexColumn className='justify-content-between flex-fill'>
            <FlexColumn className='flex-fill'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormInput displayName='Instagram' name="instagram" placeholder='instagram' control={control} isDisabled={true}/>
                    <FormInput displayName='Facebook' name="facebook" placeholder='facebook' control={control} isDisabled={true}/>
                    <FormInput displayName='Twitter' name="twitter" placeholder='twitter' control={control} isDisabled={true}/>
                    <FormInput displayName='Website' name="website" placeholder='website' control={control} isDisabled={true}/>
                </form>
            </FlexColumn>
        </FlexColumn>
    );
};

export default WithModal(SocialMediaModal);
