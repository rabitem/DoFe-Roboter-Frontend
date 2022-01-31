import config from "./config";

export async function getStats() {
  var requestOptions = {
    headers: config.DEV_MODE
      ? config.DEV_MODE_HEADERS
      : config.PROD_MODE_HEADERS,
    method: "GET",
    redirect: "follow",
  };

  let response = await fetch(
    config.DEV_MODE ? config.API_STATS_DEV_URL : config.API_STATS_URL,
    requestOptions
  );

  if (response.status !== 200) {
    console.log("Failed to fetch stats");
    return {
      status: "error",
      totalPrints: undefined,
      avgPrintTime: undefined,
    };
  }

  let data = await response.json();
  console.log("Stats fetched: " + JSON.stringify(data));

  return {
    status: "success",
    totalPrints: data.totalPrints,
    avgPrintTime: data.avgPrintTime,
    pathsParsed: data.pathsParsed,
  };
}
