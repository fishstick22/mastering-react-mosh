import React from "react";

const Input = ({ type, name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type={type}
        className="form-control"
      />
      {
          //error && <div className="alert alert-danger">{error}</div>
        }
    </div>
  );
};

export default Input;
