import React from "react";
import "./card.css";
import CompanyInfos from "../CompanyInfos/CompanyInfos";
import RoleInfos from "../RoleInfos/RoleInfos";

const Card = ({
  logo,
  company,
  position,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  return (
    <div className="card--container">
      <CompanyInfos
        logo={logo}
        company={company}
        position={position}
        postedAt={postedAt}
        contract={contract}
        location={location}
      />

      <RoleInfos languages={languages}
       tools={tools} />
    </div>
  );
};

export default Card;
