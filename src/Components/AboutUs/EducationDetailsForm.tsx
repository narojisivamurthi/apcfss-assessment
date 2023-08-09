import React from "react";
import { ButtonsWrapper, FlexColumn } from "../style";
import Button from "../DesignSystem/Button";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../DesignSystem/FormElements/Input";

interface EducationDetailsFormProps {
  defaultValue?: any;
  handleSubmit: (data: any) => void;
  handleCancel: () => void;
}

const EducationDetailsForm = (
  props: EducationDetailsFormProps
): JSX.Element => {
  const { handleSubmit, handleCancel, defaultValue } = props;
  const AddorEditAmenitySchema = yup.object().shape({
    school_name: yup.string().required("Required"),
    present_class: yup.string().required("Required"),
    area: yup.string().required("Required"),
    mandal: yup.string().required("Required"),
    pincode: yup.number().required("Required"),
  });

  const getDefaultValues = () => {
    return {
      school_name: "",
      present_class: "",
      area: "",
      mandal: "",
      pincode: null,
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
              displayName="School Name"
              name="school_name"
              placeholder="Enter School Name"
            />
            <FormInput
              displayName="Present Class"
              name="present_class"
              placeholder="Enter Present Class"
            />
            <FormInput
              displayName="Area"
              name="area"
              placeholder="Enter Area"
            />
            <FormInput
              displayName="Mandal"
              name="mandal"
              placeholder="Enter Mandal"
            />
            <FormInput
              displayName="Pincode"
              name="pincode"
              placeholder="Enter Pincode"
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

export default EducationDetailsForm;
