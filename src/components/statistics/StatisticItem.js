import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import React from "react";

export default class StatisticItem extends React.Component {
  render() {
    return (
      <Container sx={{ textAlign: "center", height: "100%" }}>
        <Card sx={{ maxWidth: 345, height: "100%", boxShadow: 2 }}>
          <CardActionArea sx={{ height: "100%" }}>
            <Box sx={{ height: "100%" }}>
              <CardContent>
                {this.props.icon}
                <Typography variant="h5" component={"div"}>
                  {this.props.header}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="div"
                >
                  {this.props.description}
                </Typography>
              </CardContent>
            </Box>
          </CardActionArea>
        </Card>
      </Container>
    );
  }
}
