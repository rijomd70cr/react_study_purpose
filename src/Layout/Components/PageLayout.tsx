import React from "react";
import { Box, Grid, Button } from "@mui/material";

import { HeaderText } from "../../Components/HeaderText";
import { FormButton } from "../../Components/FormElements/FormButton";



interface typeAction {
  label: string;
  icon: JSX.Element;
  color: any;
  onClick: (data: Object) => Object;
};

interface Props {
  title: string;
  children: any;
  actions: typeAction[];
  customMenu?: any;
  [x: string]: any
};

export const PageLayout: React.FC<Props> = ({ title, children, actions, customMenu }) => {
  const styles: { [key: string]: React.CSSProperties } = {
    layout: {
      width: "100%",
      background: "#fff",
      margin: "0px",
      marginBottom: "0px",
      padding: "8px",
      paddingTop: "0px"
    },
    container: { height: "auto", width: "100%", alignItems: "center" },
  };

  return (
    <Box sx={styles.layout}>
      <Grid container sx={{ ...styles.container, borderBottom: "1px solid #ccc", padding: "6px" }}>
        <Grid item md={6} xs={12}>
          <HeaderText title={title} />
        </Grid>
        <Grid item md={6} xs={12} textAlign="end">
          {actions.length > 0 &&
            actions.map((item, index) => {
              return (
                <div key={index}>
                  <FormButton
                    style={{ mr: 2, fontSize: 13 }}
                    fullWidth={false}
                    loading={false}
                    onClick={() => item.onClick({})}
                    color={item.color}
                    variant="contained"
                  >
                    {item.label + " "} {item.icon}
                  </FormButton>
                </div>
              );
            })}
          {customMenu}
        </Grid>
      </Grid>
      <Grid container sx={{ ...styles.container, paddingTop: "8px" }}>
        <Grid item lg={12} md={12} xs={12}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};
