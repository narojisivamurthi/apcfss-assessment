import React from "react";
import { ButtonsWrapper, FlexColumn } from "../style";
import Button from "../DesignSystem/Button";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../DesignSystem/FormElements/Input";

interface AddressFormProps {
  defaultValue?: any;
  handleSubmit: (data: any) => void;
  handleCancel: () => void;
}

const AddressForm = (props: AddressFormProps): JSX.Element => {
  const { handleSubmit, defaultValue, handleCancel } = props;
  const AddorEditAmenitySchema = yup.object().shape({
    address1: yup.string().required("Required"),
    address2: yup.string().required("Required"),
    district: yup.string().required("Required"),
    state: yup.string().required("Required"),
    pincode: yup.number().required("Required"),
  });

  const getDefaultValues = () => {
    return {
      address1: "",
      address2: "",
      district: "",
      state: "",
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
              displayName="Address 1"
              name="address1"
              placeholder="Enter Address 1"
            />
            <FormInput
              displayName="Address 2"
              name="address2"
              placeholder="Enter Address 2"
            />
            <FormInput
              displayName="District"
              name="district"
              placeholder="Enter District"
            />
            <FormInput
              displayName="State"
              name="state"
              placeholder="Enter State"
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

export default AddressForm;
