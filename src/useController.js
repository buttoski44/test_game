import { useReducer, useState } from "react";

export const useController = () => {
  const [disabled, setDiabled] = useState({
    up: true,
    down: false,
    left: true,
    right: false,
  });

  const [state, dispatch] = useReducer(reducer, { left: 0, top: 0 });
  function reducer(state, action) {
    switch (action.type) {
      case "right":
        if (state.left + 100 >= 500) {
          setDiabled({ ...disabled, right: true });
        } else if (disabled.left) {
          setDiabled({ ...disabled, left: false });
        }
        return {
          ...state,
          left: state.left + 50,
        };
      case "left":
        if (state.left === 50) {
          setDiabled({ ...disabled, left: true });
        } else if (disabled.right) {
          setDiabled({ ...disabled, right: false });
        }
        return {
          ...state,
          left: state.left - 50,
        };
      case "up":
        if (state.top === 50) {
          setDiabled({ ...disabled, up: true });
        } else if (disabled.down) {
          setDiabled({ ...disabled, down: false });
        }
        return {
          ...state,
          top: state.top - 50,
        };
      case "down":
        if (state.top + 100 >= 500) {
          setDiabled({ ...disabled, down: true });
        } else if (disabled.up) {
          setDiabled({ ...disabled, up: false });
        }
        return {
          ...state,
          top: state.top + 50,
        };

      default:
        return state;
    }
  }

  return [disabled, state, dispatch];
};
