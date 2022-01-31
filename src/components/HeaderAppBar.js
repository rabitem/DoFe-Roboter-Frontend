import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import UploadModal from "./modals/UploadModal";

export default class HeaderAppBar extends React.Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, ml: 2 }}
            >
              DoFe Roboter{" "}
            </Typography>
            <UploadModal/>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
