import React from "react";
import "./searchBar.css";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";

//aqui deve chamar novas props que vao se linkar com as props originais do componente button
const SearchBar = ({ texto, onClick, type, placeholder, value, onChange }) => {
  return (
    <div className="searchBar--container">
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Button texto={texto} 
      onClick={onClick} />
    </div>
  );
};

export default SearchBar;
