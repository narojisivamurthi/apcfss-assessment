import React from "react";
import { ButtonsWrapper, FlexColumn, TitleText } from "../style";
import Button from "../DesignSystem/Button";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../DesignSystem/FormElements/Input";

interface StudentAttendenceFormProps {
  defaultValue?: any;
  handleFormSubmit?: (data: any) => void;
}

const StudentAttendenceForm = (
  props: StudentAttendenceFormProps
): JSX.Element => {
  const { handleFormSubmit, defaultValue } = props;
  const AddorEditAmenitySchema = yup.object().shape({
    student_id: yup.string().required("Required"),
    student_name: yup.string().required("Required"),
    no_of_days_present: yup.number().required("Required"),
    no_of_days_absent: yup.number().required("Required"),
    month: yup.string().required("Required"),
    remarks: yup.string().required("Required"),
  });
  const getDefaultValues = () => {
    return {
      student_id: null,
      student_name: "",
      no_of_days_present: null,
      no_of_days_absent: null,
      month: "",
      remarks: "",
    };
  };
  const methods = useForm({
    defaultValues: defaultValue ? defaultValue : getDefaultValues(),
    resolver: yupResolver(AddorEditAmenitySchema),
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    if (handleFormSubmit) {
      handleFormSubmit(data);
    }
    reset(getDefaultValues());
  };

  const monthsOptions = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];

  return (
    <FlexColumn className="justify-content-between flex-fill w-100">
      <TitleText>Student Details Form</TitleText>
      <FlexColumn className="flex-fill px-3">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              displayName="Student ID"
              name="student_id"
              placeholder="Enter Student ID"
              type="number"
            />
            <FormInput
              displayName="Student Name"
              name="student_name"
              placeholder="Enter Student Name"
            />
            <FormInput
              displayName="No of Days Present"
              name="no_of_days_present"
              placeholder="Enter No of Days Present"
              type="number"
            />
            <FormInput
              displayName="No of Days Absent"
              name="no_of_days_absent"
              placeholder="Enter No of Days Absent"
              type="number"
            />
            <FormInput
              name="month"
              type="select"
              displayName="Month"
              placeholder="Select Month"
              options={monthsOptions}
            />
            <FormInput
              displayName="Remarks"
              name="remarks"
              placeholder="Enter Remarks"
            />

            <FlexColumn className="p-3 align-items-end">
              <ButtonsWrapper className="">
                <Button
                  className="m-0"
                  variant="danger"
                  onClick={() => reset(getDefaultValues())}
                >
                  Reset
                </Button>
                <Button className="m-0" variant="danger" type="submit">
                  Add to Table
                </Button>
              </ButtonsWrapper>
            </FlexColumn>
          </form>
        </FormProvider>
      </FlexColumn>
    </FlexColumn>
  );
};

export default StudentAttendenceForm;
