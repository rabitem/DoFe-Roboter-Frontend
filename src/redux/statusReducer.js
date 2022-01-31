const INITIAL_STATE = {
  status: "unavailable",
  timestamp: null,
};

export function statusReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_STATE":
      return {
        ...state,
        ...action.state,
      };
    case "SET_STATUS":
      return {
        ...state,
        status: action.status,
      };
    case "SET_TIMESTAMP":
      return {
        ...state,
        timestamp: action.timestamp,
      };
    default:
      return state;
  }
}
