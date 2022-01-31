import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1 / 4,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default class ArticleModal extends React.Component {
  render() {
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={this.props.state}
          onClose={this.props.updateState}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.props.state}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h5"
                fontWeight="bold"
              >
                {this.props.header}
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                {this.props.description}
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  }
}
