import React, { useEffect, useState } from "react";
import { Column } from "react-table";
import ReactTable from "../DesignSystem/CommonTable/ReactTable";
import { FlexColumn, TitleText } from "../style";
import { PaginationButton, PaginationButtonWrapper } from "../AboutUs/styles";
import { EntryInput } from "../DesignSystem/FormElements/styles";
import { columns } from "./helpers";

interface Props {
  tableData: any;
}

const StudentDetailsTableComponent = (props: Props) => {
  const { tableData } = props;
  const itemsPerPage = 10;
  const [searchFilterValue, setSearchFilterValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * itemsPerPage;
  const [presetPageData, setPresentPageData] = useState(
    tableData.slice(offset, offset + itemsPerPage)
  );
  const [totalPages, setTotalPages] = useState(
    Math.ceil(tableData.length / itemsPerPage)
  );
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i);

  const maxSize = (totalLength: number, presentPage: number) => {
    const offset = (presentPage - 1) * itemsPerPage;
    if (totalLength < itemsPerPage + offset) {
      return totalLength;
    }
    return itemsPerPage + offset;
  };

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      const tempOffset = (pageNumber - 1) * itemsPerPage;
      setPresentPageData(
        tableData.slice(tempOffset, maxSize(tableData.length, pageNumber))
      );
    }
  };

  useEffect(() => {
    if (searchFilterValue.length) {
      const filteredData = tableData.filter((item: any) => {
        if (
          item.student_id
            .toString()
            .toLowerCase()
            .includes(searchFilterValue.toLowerCase()) ||
          item.student_name
            .toLowerCase()
            .includes(searchFilterValue.toLowerCase())
        ) {
          return true;
        }
        return false;
      });
      const totalPages = Math.ceil(filteredData.length / itemsPerPage);
      setTotalPages(totalPages);
      setCurrentPage(1);
      setPresentPageData(
        filteredData.slice(0, maxSize(filteredData.length, 1))
      );
    } else {
      const totalPages = Math.ceil(tableData.length / itemsPerPage);
      setTotalPages(totalPages);
      setCurrentPage(1);
      setPresentPageData(tableData.slice(0, maxSize(tableData.length, 1)));
    }
  }, [searchFilterValue, tableData]);

  return (
    <>
      <div className="d-flex align-items-center justify-content-between w-100">
        <TitleText>Student Details</TitleText>
        <div className="d-flex pb-4">
          <EntryInput
            type="text"
            placeholder="Search Filter"
            isRoundedBordered={true}
            onChange={(e: any) => {
              setSearchFilterValue(e.target.value);
            }}
          />
        </div>
      </div>

      <FlexColumn className="w-100">
        <ReactTable
          data={presetPageData}
          columns={columns as Column[]}
          className="-striped -highlight"
        />
        <div className="d-flex align-items-center justify-content-end">
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <PaginationButtonWrapper className="pagination-controls">
            <PaginationButton
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >{`<`}</PaginationButton>
            {pageNumbers.map((pageNumber) => (
              <PaginationButton
                key={pageNumber + 1}
                onClick={() => goToPage(pageNumber + 1)}
                className={currentPage === pageNumber + 1 ? "active" : ""}
              >
                {pageNumber + 1}
              </PaginationButton>
            ))}
            <PaginationButton
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >{`>`}</PaginationButton>
          </PaginationButtonWrapper>
        </div>
      </FlexColumn>
    </>
  );
};

export default StudentDetailsTableComponent;
