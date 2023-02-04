import React from "react";
import { useMemo } from "react";
import { data, columns } from "../data.js";
import { useTable, useResizeColumns, useFlexLayout, useRowSelect, useBlockLayout, useAbsoluteLayout, useGridLayout } from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./Table.css";
import OfferImg from "../assets/Exclusive.png";

export default function Table() {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      // defaultColumn,
    },
    useResizeColumns,
    useFlexLayout,
    useRowSelect
  );
  const regexUrl = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
  return (
    <div className="container">
      <img src={OfferImg} alt="Offer" className="offer--img" />
      <div {...getTableProps()} className="table">
        <div className="thead">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column, index) => (
                <div {...column.getHeaderProps()} className={`th${index == 0 ? " leftSticky topSticky" : " topSticky"}`}>
                  {column.Header.map((head, index) => (
                    <div key={index} className={index == 0 ? "first" : "second"}>
                      {head}
                    </div>
                  ))}
                  {column.canResize && <div {...column.getResizerProps()} className={`resizer ${column.isResizing ? "isResizing" : ""}`} />}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="tbody">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell, index) => {
                  return (
                    <div {...cell.getCellProps()} className={`td col${index}${index == 0 ? " leftSticky" : ""}`}>
                      {typeof cell.value == "boolean" ? (
                        cell.value ? (
                          <FontAwesomeIcon icon={faCircleCheck} className="green" />
                        ) : (
                          <FontAwesomeIcon icon={faCircleXmark} className="red" />
                        )
                      ) : typeof cell.value == "string" && cell.value.match(regexUrl) ? (
                        <a href={cell.value}>
                          <button>Register Now</button>
                        </a>
                      ) : (
                        cell.render("Cell")
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
