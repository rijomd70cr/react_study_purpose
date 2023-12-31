import { useState } from "react";
import { Stack, TextField } from "@mui/material";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs, { Dayjs } from "dayjs";

type Props = {
  onChange: (data: any | null) => void;
};

export const DatePickerSearch = ({ onChange }: Props) => {
  const [value, setValue] = useState<Dayjs | null>(dayjs(null));

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    onChange(newValue?.toISOString());
  };
  const onKeyDown = (e: any) => {
    e.preventDefault();
  };
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <DesktopDatePicker
            inputFormat="DD/MM/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                error={false}
                placeholder="Date"
                variant="standard"
                onKeyDown={onKeyDown}
              />
            )}
          />
        </Stack>
      </LocalizationProvider>
  );
};
