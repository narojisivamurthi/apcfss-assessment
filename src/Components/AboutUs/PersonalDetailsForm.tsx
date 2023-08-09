import React from "react";
import { ButtonsWrapper, FlexColumn } from "../style";
import Button from "../DesignSystem/Button";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../DesignSystem/FormElements/Input";

interface PersonalDetailsFormProps {
  defaultValue?: any;
  handleSubmit: (data: any) => void;
  handleCancel: () => void;
}

const PersonalDetailsForm = (props: PersonalDetailsFormProps): JSX.Element => {
  const { handleSubmit, handleCancel, defaultValue } = props;
  const AddorEditAmenitySchema = yup.object().shape({
    first_name: yup.string().required("Required"),
    last_name: yup.string().required("Required"),
    email: yup.string().email("Invalid email format").required("Required"),
    date_of_birth: yup.string().required("Required"),
    gender: yup.string().required("Required"),
  });

  const getDefaultValues = () => {
    return {
      first_name: "",
      last_name: "",
      email: "",
      date_of_birth: "",
      gender: "",
    };
  };

  const methods = useForm({
    defaultValues: defaultValue ? defaultValue : getDefaultValues(),
    resolver: yupResolver(AddorEditAmenitySchema),
  });

  const onSubmit = (data: any) => {
    if (handleSubmit) {
      handleSubmit(data);
    }
  };

  return (
    <FlexColumn className="justify-content-between flex-fill w-100">
      <FlexColumn className="flex-fill p-3">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormInput
              displayName="First Name"
              name="first_name"
              placeholder="Enter First Name"
            />
            <FormInput
              displayName="Last Name"
              name="last_name"
              placeholder="Enter Last Name"
            />
            <FormInput
              displayName="Email"
              name="email"
              placeholder="Enter Email"
            />
            <FormInput
              displayName="Date Of Birth"
              name="date_of_birth"
              placeholder="Enter Date Of Birth"
            />
            <FormInput
              displayName="Gender"
              name="gender"
              placeholder="Enter Gender"
            />

            <FlexColumn className="p-3 align-items-end">
              <ButtonsWrapper>
                <Button className="m-0" variant="danger" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button className="m-0" variant="danger" type="submit">
                  Save and Continue
                </Button>
              </ButtonsWrapper>
            </FlexColumn>
          </form>
        </FormProvider>
      </FlexColumn>
    </FlexColumn>
  );
};

export default PersonalDetailsForm;
