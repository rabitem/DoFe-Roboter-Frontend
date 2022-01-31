import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import StatisticItem from "./StatisticItem";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import { getStats } from "../../Stats";

export default class StatisticsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: {
        status: "error",
        totalPrints: undefined,
        avgPrintTime: undefined,
        pathsParsed: undefined,
      },
    };
  }

  async setStats() {
    let stats = await getStats();
    this.setState({ stats });
  }

  async componentDidMount() {
    this.setStats();

    setInterval(() => {
      this.setStats();
    }, 10 * 1000); // alle 10 Sekunden status updaten
  }

  render() {
    return (
      <Container className="statistics-container" sx={{ p: 8 }}>
        <Grid
          px={{ xs: 1, sm: 2, md: 8 }}
          container
          direction="row"
          justifyContent="space-evenly"
          columnSpacing={8}
          rowSpacing={2}
        >
          <Grid item xs={12} sm={6} md={4}>
            <StatisticItem
              icon={<SmartToyOutlinedIcon fontSize="large" sx={{ my: 2 }} />}
              header="Total SVGs Printed"
              description={
                <Container>
                  The commander of the humans has already tried&nbsp;
                  <Typography sx={{ fontWeight: "bold", display: "inline" }}>
                    {this.state.stats === undefined ||
                    this.state.stats.status === "error"
                      ? "-"
                      : this.state.stats.totalPrints}
                  </Typography>
                  &nbsp;times on an SVG file and mastered it successfully.
                </Container>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StatisticItem
              icon={
                <AccessTimeFilledOutlinedIcon fontSize="large" sx={{ my: 2 }} />
              }
              header="Average Print Time"
              description={
                <Container>
                  Slowly, we also need time to work. On average, the robot
                  needs&nbsp;
                  <Typography sx={{ fontWeight: "bold", display: "inline" }}>
                    {this.state.stats === undefined ||
                    this.state.stats.status === "error"
                      ? "-:--"
                      : this.state.stats.avgPrintTime / 1000}
                  </Typography>
                  &nbsp;seconds per print. Time for a quick coffee!
                </Container>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StatisticItem
              icon={<AnalyticsOutlinedIcon fontSize="large" sx={{ my: 2 }} />}
              header="Paths parsed"
              description={
                <Container>
                  The power-grabbing robot has already read&nbsp;
                  <Typography sx={{ fontWeight: "bold", display: "inline" }}>
                    {this.state.stats === undefined ||
                    this.state.stats.status === "error"
                      ? "-"
                      : this.state.stats.pathsParsed}
                  </Typography>
                  &nbsp;SVG Paths and successfully ate emm printed them of
                  course!
                </Container>
              }
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}
