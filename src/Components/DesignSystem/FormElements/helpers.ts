import * as yup from 'yup';

export interface validateYupSchemaParamTypes {
  numberRange?: {
      minNumber: number;
      maxNumber: number;
  };
  fileParams?: {
      size: {
          fileSize: number;
          message: string;
      } | null;
      format: {
          fileType: string[];
          message: string;
      } | null;
  };
  pinDigitsOnlyText?: string;
  pinMinDigitsText?: string;
  passwordMinText?: string;
  passwordCharacterText?: string;
  multiSelectMinText?: string;
  arrayMinNumber?: number;
}

export function validateYupSchema(
  type: string,
  name: string,
  required = true,
  params: validateYupSchemaParamTypes = {}
): any {
  function func(data: any): typeof yup {
    return required ? data.required(`${name} is required`) : data;
  }

  function validate() {
    let minNumber = type === "password" ? 8 : Number.MIN_SAFE_INTEGER,
      maxNumber = type === "password" ? 16 : Number.MAX_SAFE_INTEGER;
    if (params.numberRange) {
      minNumber = params.numberRange.minNumber;
      maxNumber = params.numberRange.maxNumber;
    }
    const numberValidation =
      params &&
      yup
        .number()
        .transform((transformValue: any, originalValue: any) =>
          originalValue === "" ? null : transformValue
        )
        .nullable()
        .min(minNumber, `${name} must be greater than ${minNumber - 1}`)
        .max(maxNumber, `${name} must be less than or equal to ${maxNumber}`)
        .typeError(`${name} must be a number`);
    switch (type) {
      // when the input field can accept both integer and decimal values
      case "number":
        return func(numberValidation);
      // when the input field can accept only integer values
      case "text":
        return func(
          yup
            .string()
            .trim()
            .max(
              maxNumber,
              `${name} can only have maximum ${maxNumber} characters`
            )
        );
      default:
        break;
    }
    return func(yup.string());
  }

  return validate();
}
