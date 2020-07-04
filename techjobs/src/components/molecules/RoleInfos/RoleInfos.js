import React from "react";
import "./roleInfos.css";

const RoleInfos = ({ languages, tools }) => {
  return (
    <div className="roleInfos--container">
      {/* o duplo && dentro de expressao vira 'então', em formato reduzido */}
      {/* se languages é true, entao faz um map para cada item desse array languages e retorna
       essa div com h2 do item */}
      {languages &&
        languages.map((item, index) => {
          return (
            <div key={`${index +1}--language`}>
              <h2>{item}</h2>
            </div>
          );
        })}
      ;
      {tools &&
        tools.map((item, index) => {
          return (
            <div key={`${index +1}--tool`}>
              <h2>{item}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default RoleInfos;
