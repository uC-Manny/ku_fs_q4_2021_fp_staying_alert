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

const TextPanel = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
      <>
         <label htmlFor={props.id || props.name}>{label}</label>
         <textarea {...field} {...props} />
         {meta.touched && meta.error ? <div>{meta.error}</div> : null}
      </>
   );
};

export { MyTextInput, TextPanel };
