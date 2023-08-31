import { Typography } from '@mui/material';

type Props = {
    title: string,
    style?: React.CSSProperties
}
export const HeaderText = (props: Props) => {
    const { title, style } = props;
    return (
        <div>
            <Typography variant="subtitle2" gutterBottom sx={{ fontSize: "15px", fontWeight: "bold", ...style }} >{title}</Typography>
        </div>
    )
}