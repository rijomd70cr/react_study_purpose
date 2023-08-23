
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type FormSelectBoxProps = {
    value: string,
    label: string,
    onChange: (data: string) => void,
    options: Item[],
    fullWidth: boolean
}

type Item = {
    label: string,
    value: string | number
}


export const FormSelectBox: React.FC<FormSelectBoxProps> = ({ value, onChange, label, options = [], fullWidth = true }) => {

    const handleChange = (event: SelectChangeEvent) => {
        onChange(event.target.value);
    };

    return (
        <FormControl fullWidth={fullWidth}>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label={label}
                onChange={handleChange}
            >
                {options.length > 0 && options.map((item: Item) => {
                    return <MenuItem value={item.value}>{item.label}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}