import React, { useState } from "react";
import { RouterContainer, TitleText } from "../style";
import { TabContainer, TabItem } from "./styles";
import PersonalDetailsForm from "./PersonalDetailsForm";
import FamilyDetailsForm from "./FamilyDetailsForm";
import EducationDetailsForm from "./EducationDetailsForm";
import AddressForm from "./AddressForm";
import { tabsList } from "./helpers";
import ViewDetails from "./ViewDetails";

const AboutUs = () => {
  const [selectedTab, setSelectedTab] = useState(tabsList[0].id);
  const [studentDetails, setStudentDetails] = useState<any>({});
  const [enbledTabList, setEnbledTabList] = useState([tabsList[0].id]);

  const handleSubmit = (data: any, presentTabId: string, nextTabId: string) => {
    const dataLabel = tabsList.filter((tab) => tab.id === presentTabId);
    const tempObj: any = {};
    tempObj[dataLabel[0].label] = data;
    setStudentDetails({ ...studentDetails, ...tempObj });
    setEnbledTabList([...enbledTabList, nextTabId]);
    setSelectedTab(nextTabId);
  };
  const handleCancel = () => {
    setEnbledTabList([tabsList[0].id]);
    setSelectedTab(tabsList[0].id);
    setStudentDetails({});
  };

  return (
    <RouterContainer>
      <div className="px-3 d-flex flex-column w-100 align-items-start justify-content-start text-left">
        <TitleText>Student Form</TitleText>

        <TabContainer className="d-flex">
          {tabsList.map((item) => (
            <TabItem
              selected={selectedTab === item.id}
              onClick={() =>
                enbledTabList.includes(item.id) && setSelectedTab(item.id)
              }
              isDisabled={!enbledTabList.includes(item.id)}
            >
              {item.label}
            </TabItem>
          ))}
          <TabItem />
        </TabContainer>
      </div>
      <div className="col-12 col-md-8 col-lg-6 col-xl-4">
        {selectedTab === tabsList[0].id && (
          <PersonalDetailsForm
            defaultValue={studentDetails[tabsList[0].label]}
            handleSubmit={(data) =>
              handleSubmit(data, tabsList[0].id, tabsList[1].id)
            }
            handleCancel={handleCancel}
          />
        )}
        {selectedTab === tabsList[1].id && (
          <FamilyDetailsForm
            defaultValue={studentDetails[tabsList[1].label]}
            handleSubmit={(data) =>
              handleSubmit(data, tabsList[1].id, tabsList[2].id)
            }
            handleCancel={handleCancel}
          />
        )}
        {selectedTab === tabsList[2].id && (
          <EducationDetailsForm
            defaultValue={studentDetails[tabsList[2].label]}
            handleSubmit={(data) =>
              handleSubmit(data, tabsList[2].id, tabsList[3].id)
            }
            handleCancel={handleCancel}
          />
        )}
        {selectedTab === tabsList[3].id && (
          <AddressForm
            defaultValue={studentDetails[tabsList[3].label]}
            handleSubmit={(data) =>
              handleSubmit(data, tabsList[3].id, tabsList[4].id)
            }
            handleCancel={handleCancel}
          />
        )}
      </div>
      {selectedTab === tabsList[4].id && (
        <ViewDetails studentDetails={studentDetails} />
      )}
    </RouterContainer>
  );
};

export default AboutUs;
