import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Alert, Button, Input, Snackbar, Tooltip } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { connect } from "react-redux";
import { uploadSvg } from "../../Upload";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const mapStateToProps = (state) => ({
  status: state.status,
  timestamp: state.timestamp,
});
class UploadModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      snackbar: { open: false, message: "", severity: "success" },
      file: null,
      uploading: false,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.setState({ file: null });
  };

  handleFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  };

  handleSubmit = () => {
    this.setState({ uploading: true });

    // Get the Svg file
    var reader = new FileReader();
    reader.readAsText(this.state.file);
    reader.onload = (event) => {
      var data = event.target.result;

      // Upload the file
      uploadSvg(data)
        .then((response) => {
          // if the upload was successful
          if (response.type === "upload") {
            this.setState({ file: null });
            this.setState({
              snackbar: {
                open: true,
                message:
                  "SVG uploaded successfully at " +
                  new Date(response.timestamp).toLocaleString("de-DE"),
                severity: "success",
              },
            });
          }
          this.setState({ uploading: false, open: false });
        })
        // if the upload failed, we do not expect this to happen in production
        .catch((error) => {
          this.setState({
            snackbar: {
              open: true,
              message: "SVG upload failed",
              severity: "error",
            },
          });
          this.setState({ uploading: false, open: false });
        });
    };
  };

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.snackbar.open}
          autoHideDuration={6000}
          onClose={() => this.setState({ snackbar: { open: false } })}
        >
          <Alert
            onClose={() => this.setState({ snackbar: { open: false } })}
            severity={this.state.snackbar.severity}
          >
            {this.state.snackbar.message}
          </Alert>
        </Snackbar>
        <Tooltip
          title={
            "Status: " +
            this.props.status +
            " (" +
            new Date(this.props.timestamp).toLocaleString("de-DE") +
            ")"
          }
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            variant="dot"
            color={this.props.status === "READY" ? "success" : "error"}
          >
            <Button
              sx={{ px: 2, mx: 2 }}
              color="inherit"
              variant="outlined"
              onClick={this.handleClickOpen}
              disabled={this.props.status !== "READY"}
            >
              Print
            </Button>
          </StyledBadge>
        </Tooltip>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Upload File</DialogTitle>
          <DialogContent>
            <DialogContentText margin="dense">
              To start printing, please upload your SVG file or select a sample.
              You will then be redirected to the live view.
            </DialogContentText>
            <Input
              type="file"
              inputProps={{ accept: ".svg" }}
              color="primary"
              autoFocus
              id="file"
              fullWidth
              onChange={this.handleFileChange}
              error={this.state.file === null}
              sx={{ mt: 2 }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              color="secondary"
              endIcon={<SaveIcon />}
              variant="contained"
              sx={{ mx: 2, mb: 2 }}
            >
              Samples
            </Button>
            <LoadingButton
              onClick={this.handleSubmit}
              variant="contained"
              color="success"
              endIcon={<SendIcon />}
              sx={{ mx: 2, mb: 2 }}
              loading={this.state.uploading}
              disabled={this.props.status !== "READY" || !this.state.file}
              loadingPosition="end"
            >
              Print
            </LoadingButton>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default connect(mapStateToProps)(UploadModal);
