import React from "react";
import "./companyInfos.css";

const CompanyInfos = ({ logo, company, position, postedAt, contract, location }) => {
  return (
    <div className="companyInfo--container">
      <img src={logo} alt={`${company} --logo`}></img>
      <h3>{company}</h3>
      <h2>{position}</h2>
      <div>
        <h3>{postedAt}</h3>
        <span></span>
        <h3>{contract}</h3>
        <span></span>
        <h3>{location}</h3>
      </div>
    </div>
  );
};

export default CompanyInfos;
