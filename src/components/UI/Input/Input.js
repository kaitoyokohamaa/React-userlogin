import React from "react";
import classes from "./Input.module.css";
const input = props => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <div>
          <p className={classes.Textleft}>{props.elementConfig.type}</p>
          <input
            className={inputClasses.join(" ")}
            //{type: "text", placeholder: "ZIP Code"}etc
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        </div>
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <div>
          <p className={classes.Textleft}>{props.elementConfig.type}</p>
          <select
            className={inputClasses.join(" ")}
            value={props.value}
            onChange={props.changed}
          >
            {props.elementConfig.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            ))}
          </select>
        </div>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};
export default input;