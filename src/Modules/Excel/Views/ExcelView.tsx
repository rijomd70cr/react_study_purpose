import { memo } from 'react';
import { Grid } from "@mui/material";

type Props = {}
const ExcelView = (props: Props) => {

    const styles: { [key: string]: React.CSSProperties } = {
        container: {
            width: "100%",
            background: "#fff",
            margin: "0px",
            marginBottom: "0px",
            padding: "8px",
            minHeight: "40px",
        },
    };

    return (
        <Grid container sx={styles.container}>
            <Grid item md={12} lg={12} xs={12}>

            </Grid>
        </Grid>
    )
}
export default memo(ExcelView);
