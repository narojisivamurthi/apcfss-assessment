import React, { useState } from "react";
import StudentDetailsTableComponent from "./StudentDetailsTableComponent";
import StudentAttendenceForm from "./StudentAttendenceForm";
import { FlexColumn, RouterContainer, TitleText } from "../style";
import { dummyTableData } from "./helpers";

const StudentDetails = () => {
  const [customTableData, setCustomTableData] = useState(dummyTableData);
  const [statusMessage, setStatusMessage] = useState("");

  const handleStatusMessage = () => {
    setStatusMessage("Succesfully Added Student Details to top of the table");
    setTimeout(() => {
      setStatusMessage("");
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  const handleFormSubmit = (data: any) => {
    setCustomTableData([data, ...customTableData]);
    handleStatusMessage();
  };

  return (
    <RouterContainer className="w-100">
      <FlexColumn className="w-100">
        <div className="d-flex flex-wrap w-100">
          <div className="col-12 col-md-7 col-lg-8 col-xl-9">
            <StudentDetailsTableComponent tableData={customTableData} />
          </div>
          <div className="col-12 col-md-5 col-lg-4 col-xl-3">
            <StudentAttendenceForm handleFormSubmit={handleFormSubmit} />
          </div>
        </div>
        {statusMessage && <TitleText>{statusMessage}</TitleText>}
      </FlexColumn>
    </RouterContainer>
  );
};

export default StudentDetails;
