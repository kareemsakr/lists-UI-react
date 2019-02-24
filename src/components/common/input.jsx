import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        // value={value} //this is now a controlled element (i.e. doesnt have its own state and notify changes to a data by raising events)
        // onChange={onChange}
        // type={type}
        //we will replace the above with the below {...rest}
        {...rest}
        name={name}
        id={name}
        className="form-control"
        //ref={this.username}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
