import React from "react";
import {
  useTable,
  useResizeColumns,
  useFlexLayout,
  useExpanded,
  Column,
  HeaderGroup,
} from "react-table";
import { TableContainer } from "./style";

interface ReactTableProps {
  className?: string;
  data: any[];
  columns: Column[];
  loading?: boolean;
  getTdProps?: () => {};
  trClassName?: string;
}

const ReactTable: React.FC<ReactTableProps> = ({
  className = "",
  data,
  columns,
  loading = false,
  trClassName = "",
}) => {
  const defaultColumn = {
    minWidth: 30,
    width: 50,
    maxWidth: 400,
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      { columns, data, defaultColumn },
      useFlexLayout,
      useResizeColumns,
      useExpanded
    );

  return (
    <TableContainer>
      <div className={`ReactTable ${className}`}>
        <div {...getTableProps()} className="rt-table">
          <div className="rt-thead -header">
            {headerGroups.map((headerGroup: HeaderGroup) => (
              <div
                {...headerGroup.getHeaderGroupProps()}
                className="rt-tr"
                key={headerGroup.id}
              >
                {headerGroup.headers.map((column) => (
                  <div
                    {...column.getHeaderProps()}
                    className="rt-th"
                    key={column.id}
                  >
                    {column.render("Header")}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="rt-tbody">
            <div {...getTableBodyProps()} className="rt-tr-group">
              {rows.map((row, ind) => {
                prepareRow(row);
                return (
                  <React.Fragment key={row.id}>
                    <div
                      {...row.getRowProps()}
                      className={`rt-tr ${
                        ind % 2 === 0 ? "-odd" : "-even"
                      } ${trClassName}`}
                    >
                      {row.cells.map((cell) => (
                        <div
                          {...cell.getCellProps()}
                          className={`rt-td `}
                          key={cell.column.id}
                        >
                          {cell.render("Cell")}
                        </div>
                      ))}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <div className={`-loading ${loading ? "-active" : ""}`}>
          <div className="-loading-inner">Loading...</div>
        </div>
        <div className="rt-footer">
          <div className="rt-footer-content">
            {headerGroups.map((headerGroup: HeaderGroup) => (
              <div
                {...headerGroup.getHeaderGroupProps()}
                className="rt-tr"
                key={headerGroup.id}
              >
                {headerGroup.headers.map((column) => (
                  <div
                    {...column.getHeaderProps()}
                    className="rt-th"
                    key={column.id}
                  >
                    {column.render("Footer")}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </TableContainer>
  );
};

export default ReactTable;
