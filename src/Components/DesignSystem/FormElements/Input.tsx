import React, { FunctionComponent } from "react";
import { useFormContext } from "react-hook-form";
import { LabelHeading, EntryInput, ErrorText } from "./styles";
import { FlexColumn } from "../../style";

interface InputHookProps {
  name: string;
  placeholder: string;
  displayName?: string;
  className?: string;
  id?: string;
  asterisk?: boolean;
  isDisabled?: boolean;
  title?: string;
  autoFocus?: boolean;
  autoComplete?: string;
  type?: string;
  options?: { value: string; label: string }[];
}

const FormInput: FunctionComponent<InputHookProps> = ({
  name,
  type = "text",
  placeholder,
  displayName,
  className = "",
  id = "",
  isDisabled = false,
  title,
  autoFocus,
  options,
}) => {
  const {
    register,
    formState: { errors },
  }: any = useFormContext();
  return (
    <FlexColumn className={className + " my-3 align-items-start"}>
      <LabelHeading>{displayName}</LabelHeading>
      {type === "select" ? (
        <EntryInput
          title={title}
          name={name}
          as="select"
          id={id}
          placeholder={placeholder}
          {...register(name)}
          disabled={isDisabled}
          autoFocus={autoFocus}
        >
          <option value="" disabled>
            Select Month
          </option>
          {options &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </EntryInput>
      ) : (
        <EntryInput
          title={title}
          name={name}
          type={type}
          placeholder={placeholder}
          id={id}
          {...register(name)}
          disabled={isDisabled}
          autoComplete={"off"}
          autoFocus={autoFocus}
        />
      )}
      {errors[name] && <ErrorText>{errors[name].message}</ErrorText>}
    </FlexColumn>
  );
};
export default FormInput;
