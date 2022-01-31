import config from "./config";
import store from "./redux/store";

let ws = new WebSocket(
  config.DEV_MODE ? config.WEBSOCKET_DEV_URL : config.WEBSOCKET_URL
);
console.log("WebSocket initialized");

ws.onopen = (e) => {
  console.log("WebSocket connected");
};

ws.onmessage = (e) => {
  console.log("WebSocket message received: " + e.data);
  let data = JSON.parse(e.data);
  if (data.type === "status") {
    setStatus(e.data);
  }
};

ws.onclose = (e) => {
  console.log("WebSocket closed");
};

export function initWebSocket() {
  return ws;
}

export function getWebSocket() {
  return ws;
}

export function setStatus(data) {
  
  store.dispatch({ type: "SET_STATE", state: JSON.parse(data) });
}
