import React from "react";
import { ButtonsWrapper, FlexColumn } from "../style";
import Button from "../DesignSystem/Button";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../DesignSystem/FormElements/Input";

interface FamilyDetailsFormProps {
  defaultValue?: any;
  handleSubmit: (data: any) => void;
  handleCancel: () => void;
}

const FamilyDetailsForm = (props: FamilyDetailsFormProps): JSX.Element => {
  const { handleSubmit, handleCancel, defaultValue } = props;
  const AddorEditAmenitySchema = yup.object().shape({
    father_name: yup.string().required("Required"),
    mother_name: yup.string().required("Required"),
    religion: yup.string().required("Required"),
    father_phone_number: yup.number().required("Required"),
    mother_phone_number: yup.number().required("Required"),
  });

  const getDefaultValues = () => {
    return {
      father_name: "",
      mother_name: "",
      religion: "",
      father_phone_number: "",
      mother_phone_number: "",
    };
  };

  const methods = useForm({
    defaultValues: defaultValue ? defaultValue : getDefaultValues(),
    resolver: yupResolver(AddorEditAmenitySchema),
  });

  const onSubmit = (data: any) => {
    console.log(data, "dataSubmit");
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
              displayName="Father Name"
              name="father_name"
              placeholder="Enter Father Name"
            />
            <FormInput
              displayName="Mother Name"
              name="mother_name"
              placeholder="Enter Mother Name"
            />
            <FormInput
              displayName="Religion"
              name="religion"
              placeholder="Enter Religion"
            />
            <FormInput
              displayName="Father Phone Number"
              name="father_phone_number"
              placeholder="Enter Father Phone Number"
              type="number"
            />
            <FormInput
              displayName="Mother Phone Number"
              name="mother_phone_number"
              placeholder="Enter Mother Phone Number"
              type="number"
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

export default FamilyDetailsForm;
