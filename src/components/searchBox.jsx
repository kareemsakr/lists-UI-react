import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      className="form-control my-3" //margin, on the y axis 3 pixels
      placeholder="Search title..."
      onChange={e => onChange(e.target.value)}
    />
  );
};
export default SearchBox;
