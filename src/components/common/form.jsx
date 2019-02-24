import React, { Component } from "react";
import Input from "./input";
import Select from "./select";

import Joi from "joi-browser";

class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const validationOptions = {
      abortEarly: false
    };
    const { error } = Joi.validate(
      this.state.data,
      this.schema,
      validationOptions
    ); //without abortEarly, once it find an issue with an input , it will stop validating the rest
    if (!error) return null;

    const errors = {};
    error.details.map(item => (errors[item.path[0]] = item.message));
    //console.log("validate called", error);

    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }; //object parameter name will be determinted at runtime based on our input
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    if (!error) return null;

    const errorDetails = error.details[0];

    return errorDetails.message;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderSubmit = label => {
    return (
      <button
        type="submit"
        className="btn btn-primary"
        disabled={this.validate()}
      >
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        type={type}
        error={errors[name]}
      />
    );
  };

  renderSelect = (name, label, options) => {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        options={options}
        //type={type}
        error={errors[name]}
      />
    );
  };
}

export default Form;
