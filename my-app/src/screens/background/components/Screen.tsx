import {
  WINDOW_NAMES,
  DISPLAY_OVERWOLF_HOOKS_LOGS,
} from "app/shared/constants";
import { useGameEventProvider, useWindow } from "overwolf-hooks";
import { useEffect } from "react";


const { DESKTOP, INGAME } = WINDOW_NAMES;

const BackgroundWindow = () => {
  const [desktop] = useWindow(DESKTOP, DISPLAY_OVERWOLF_HOOKS_LOGS);
  const [ingame] = useWindow(INGAME, DISPLAY_OVERWOLF_HOOKS_LOGS);
  const [{ event, info }, setGameFeatures] = useGameEventProvider<Record<string, string>, Record<string, string>>(DISPLAY_OVERWOLF_HOOKS_LOGS);

  useEffect(() => {
    if (event) {
      // do something with the event
    }
    // eslint-disable-next-line
  }, [event]);

  useEffect(() => {
    if (info) {
// do something with the info
    }
    // eslint-disable-next-line
  }, [info]);

  return null;
};

export default BackgroundWindow;
