
import { Controller } from "react-hook-form";
import React, {FunctionComponent} from "react";
import { LabelHeading, EntryInput } from './styles';
import { FlexColumn } from "../../style";

interface InputHookProps{
    name: string,
    placeholder:string,
    displayName?:string,
    className?: string,
    id?:string,
    asterisk?:boolean,
    isDisabled?:boolean,
    title?: string,
    autoFocus?: boolean,
    autoComplete?: string,
    control?: any,
}

const FormInput:FunctionComponent<InputHookProps> = ({name, placeholder, displayName, className="", id="",isDisabled=false, title, autoFocus, control}) =>  {
    // const { control } = useForm();
    
    return  <FlexColumn className={className + " my-3 "}>
                <LabelHeading>{displayName}</LabelHeading>
                <Controller
                    name={name}
                    control={control}
                    defaultValue=""
                    render={({ field }:any) => (
                        <EntryInput title={title}{...field} name={name} type='text' placeholder={placeholder} id={id} disabled={isDisabled} autoComplete={"off"}
                        autoFocus={autoFocus}/>
                    )}
                /> 
            </FlexColumn>
}
export default FormInput;
