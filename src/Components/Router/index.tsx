import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../AboutUs";
import StudentDetails from "../StudentDetails";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/NewStudentForms" Component={AboutUs} />
      <Route path="/StudentsData" Component={StudentDetails} />
    </Routes>
  );
};

export default RouterComponent;
