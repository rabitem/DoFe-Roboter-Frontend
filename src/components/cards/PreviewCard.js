import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default class PreviewCard extends React.Component {
  render() {
    return (
      <Box sx={{ minWidth: 275, height: "100%" }}>
        <Card variant="outlined" sx={{ height: "100%" }}>
          <React.Fragment>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {this.props.subHeader}
                </Typography>
                <Typography variant="h5">
                  {this.props.mainHeader}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {this.props.lastUpdated}
                </Typography>
                {this.props.description}
              </CardContent>
              <CardActions>
                <Button size="small" onClick={this.props.updateState}>
                  Read More
                </Button>
              </CardActions>
            </Box>
          </React.Fragment>
        </Card>
      </Box>
    );
  }
}
