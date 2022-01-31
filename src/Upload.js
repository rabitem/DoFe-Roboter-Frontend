import { getWebSocket, setStatus } from "./WebSocket";

let ws = getWebSocket();

export function uploadSvg(data) {
  console.log("Sending upload request");
  ws.send(
    JSON.stringify({
      type: "upload",
      data: data,
    })
  );
  console.log("Upload request sent");

  return new Promise((resolve, reject) => {
    ws.onmessage = (e) => {
      let returnData = JSON.parse(e.data);
      if (returnData.type === "upload") {
        resolve(returnData);
      } else if (returnData.type === "error") {
        reject(returnData);
      } else if (returnData.type === "status") {
        console.log("Received status update: " + e.data);
        setStatus(e.data);
      }
    };
  });
}
