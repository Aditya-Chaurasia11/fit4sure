// import Gender from "./Gender";
import React, { useState } from "react";
// import "./trackHealth.css";
import { useNavigate } from "react-router-dom";
import Result from "./Result";
import Gender from "./Gender";
import Language from "./Language";
import Category from "./Category";

const Form = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [bool, setBool] = useState(false);
  const [formData, setFormData] = useState({
    gender: "Male",
    category: "",
    language: "",
  });
  const FormTitles = [
    "Enter your gender",
    "Enter your category",
    "Enter your language",
    // "Result",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <Gender formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Category formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Language formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      {bool === false ? (
        <div className="form-container">
          <div className="header">
            {/* <h1>{FormTitles[page]}</h1> */}
            {FormTitles.map((k, ind) => (
              <h1
                className={`header_pageName ${ind === page ? " active" : ""}`}
                key={ind}
              >
                {k}
              </h1>
            ))}
          </div>
          <div className="form_right_side">
            <h1>{FormTitles[page]}</h1>
            <div className="body">{PageDisplay()}</div>
            <div className="footer">
              <button
                className="footer_prev_button"
                disabled={page == 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Prev
              </button>
              <button
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    // alert("FORM SUBMITTED");
                    // navigate("/trainer/result");
                    console.log(formData);
                    setBool(true);
                    // setPage((currPage) => currPage + 1);
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
                className="footer_next_button"
              >
                {page === FormTitles.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Result formData={formData} setFormData={setFormData}></Result>
      )}
    </div>
  );
};
export default Form;
