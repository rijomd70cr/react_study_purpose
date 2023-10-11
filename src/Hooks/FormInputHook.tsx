import { useState, useEffect } from "react";

type initialValue = {
  value: string;
  label?: string;
  fullWidth?: boolean;
  required?: boolean;
  type?: string;
  placeholder?: string
};

export const useFormsInput = (initialValue: initialValue) => {
  const [value, setValue] = useState<string | number>(initialValue.value);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  const inputProps = {
    value: value,
    onChange: handleChange,
    label: initialValue.label,
    fullWidth: initialValue.fullWidth,
    required: initialValue.required,
    type: initialValue.type,
    placeholder: initialValue.type
  };

  return inputProps;
};

// usage:-
// const fnameprops=useFormsInput({...passing values});
// value=fnameprops.value
// <input {...fnameprops}/>
