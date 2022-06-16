import React from "react";
import { useField } from "formik";
import "./Form.css";

const MyTextInput = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
      <div className="form-field">
         <label htmlFor={props.id || props.name}>{label}</label>
         <input {...field} {...props} />
         {meta.touched && meta.error ? <div>{meta.error}</div> : null}
      </div>
   );
};

export { MyTextInput };
