import React from "react";
import { FlexColumn, InfoCard } from "../style";
import { labelValues } from "./helpers";

interface ViewDetailsProps {
  studentDetails: any;
}

const ViewDetails = (props: ViewDetailsProps): JSX.Element => {
  const { studentDetails } = props;

  const keys = Object.keys(studentDetails);
  return (
    <FlexColumn className="w-100">
      <b className="my-3">Successfully Submited form</b>

      <div className="d-flex flex-wrap">
        {keys.map((key): JSX.Element => {
          const nestedKeys = Object.keys(studentDetails[key]);
          return (
            <div className="col-6 p-3">
              <InfoCard>
                {nestedKeys.map((nestedKey) => (
                  <p>
                    {labelValues[nestedKey]?.label} :{" "}
                    <b>{studentDetails[key][nestedKey]}</b>
                  </p>
                ))}
              </InfoCard>
            </div>
          );
        })}
      </div>
    </FlexColumn>
  );
};

export default ViewDetails;
