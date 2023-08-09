import React, { useEffect } from "react";
import { MegamenuItem, PrimaryNavigationContainer } from "./styles";
import { FlexColumn } from "../style";
import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const PrimaryNavigation = () => {
  const navigationList = [
    {
      id: "1",
      nameHeader: "Student Form",
      link: "NewStudentForms",
    },
    {
      id: "2",
      nameHeader: "Students Details",
      link: "StudentsData",
    },
  ];
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    navigate("/NewStudentForms");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PrimaryNavigationContainer className="justify-content-between">
      <FlexColumn className="py-3">
        {navigationList.map((item) => (
          <MegamenuItem isSelected={location.pathname.includes(item.link)}>
            <NavLink to={item.link}>{item.nameHeader}</NavLink>
          </MegamenuItem>
        ))}
      </FlexColumn>
    </PrimaryNavigationContainer>
  );
};

export default PrimaryNavigation;
