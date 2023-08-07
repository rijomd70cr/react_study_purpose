import { useState } from "react";
import { TextField, Box } from "@mui/material";

export const FileInput = (props) => {
  const { label, placeholder, error, value, required, fullWidth, name } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  console.log(selectedFile, "selectedFile");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Box>
      <TextField
        variant="outlined"
        size="small"
        type="file"
        name={name}
        fullWidth={fullWidth}
        error={error.isError}
        helperText={error.isError ? error.errorMsg : ""}
        onChange={(e) => handleFileChange(e)}
        label={label}
        placeholder={placeholder}
        value={value}
        required={required}
      />
      <input
        id="upload-image"
        hidden
        accept="image/*"
        type="file"
        onChange={handleFileUpload}
      />
      {imageUrl && <img src={imageUrl} alt="Uploaded Image" height="300" />}
    </Box>
  );
};
