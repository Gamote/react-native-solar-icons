import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDumbbells = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m16.345 8.93.344-2.84c.08-.662.12-.992.051-1.267a1.42 1.42 0 0 0-.624-.869c-.23-.142-.54-.185-1.157-.27-.618-.087-.927-.13-1.183-.055-.343.099-.634.34-.811.668-.133.247-.216.933-.296 1.595l-6.132-.853c.08-.662.164-1.348.095-1.623a1.42 1.42 0 0 0-.625-.868c-.23-.142-.54-.185-1.157-.271-.618-.086-.926-.13-1.183-.055-.342.099-.634.34-.81.669-.133.247-.174.577-.254 1.24L2.26 6.97c-.08.66-.12.992-.051 1.267.092.366.317.679.624.868.23.142.54.185 1.157.27.618.087.927.13 1.183.056.343-.1.634-.34.811-.669.133-.247.216-.933.296-1.594l6.132.853c-.08.661-.164 1.347-.095 1.622.093.367.317.68.625.869.23.142.54.185 1.157.27.617.087.926.13 1.183.055.342-.099.634-.34.81-.668.133-.247.174-.578.254-1.24"
    />
    <Path
      fill="#000"
      d="m7.761 19.925-.692-2.766c-.161-.645-.242-.967-.207-1.25.046-.376.23-.717.512-.949.21-.173.511-.26 1.113-.432.602-.173.903-.26 1.166-.222.352.05.67.247.886.548.162.226.33.894.49 1.539l5.973-1.715c-.161-.644-.328-1.312-.294-1.594.047-.377.23-.718.512-.95.211-.173.512-.26 1.114-.432.601-.173.902-.26 1.166-.222.351.05.67.247.886.548.162.226.242.548.404 1.193l.692 2.766c.16.645.241.967.207 1.25-.047.376-.23.717-.512.948-.21.174-.512.26-1.113.433-.602.173-.903.259-1.167.222a1.32 1.32 0 0 1-.886-.548c-.162-.226-.329-.894-.49-1.539l-5.972 1.714c.16.645.328 1.313.293 1.595-.046.377-.23.718-.511.95-.211.173-.512.26-1.114.432-.601.172-.902.259-1.166.222a1.32 1.32 0 0 1-.886-.548c-.162-.226-.243-.548-.404-1.193"
      opacity={0.5}
    />
  </Svg>
);
export default SvgDumbbells;
