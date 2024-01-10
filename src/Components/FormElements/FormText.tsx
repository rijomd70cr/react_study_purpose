import React from "react";
import { TextField } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';

import { FormTextThemes, getColors } from "../../Themes/FormTextThemes";
import { color } from "html2canvas/dist/types/css/types/color";

interface TextInterface {
  label: string;
  placeholder?: string;
  error?: { isError: boolean; errorMsg: string };
  value: String | number | string;
  onChange: (data: any) => void;
  onKeyPress?: () => void;
  required?: boolean;
  type?: string;
  fullWidth?: boolean;
  name: string;
}

export const TextInput: React.FC<TextInterface> = (props) => {
  const { label, placeholder, error, onChange = () => { }, value, required, type, fullWidth, name, onKeyPress = () => { } } = props;
  const inputStyle = {
    color: getColors["primary"]
  };

  return (
    <ThemeProvider theme={FormTextThemes}>
      <TextField
        variant="outlined"
        size="small"
        name={name}
        fullWidth={fullWidth}
        error={error?.isError}
        onChange={(e) => onChange(e)}
        helperText={error?.isError ? error.errorMsg : ""}
        label={label}
        placeholder={placeholder}
        value={value}
        required={required}
        type={type}
        onKeyPress={(event) => {
          event.key === "Enter" && onKeyPress();
        }}
        color="error"
      // InputProps={{
      //   style: inputStyle,
      // }}
      />
    </ThemeProvider>
  );
};
