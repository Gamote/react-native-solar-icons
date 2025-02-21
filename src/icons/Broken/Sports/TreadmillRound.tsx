import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTreadmillRound = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={15} cy={4} r={2} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11 16v-.974c0-.118 0-.177-.002-.234a3 3 0 0 0-.992-2.117c-.042-.038-.087-.076-.178-.152-.134-.111-.2-.167-.252-.216a2 2 0 0 1-.125-2.75c.047-.055.108-.116.231-.239l.33-.33a1.904 1.904 0 0 0-2.356-2.96L4.5 8M3 15.5h.379c1.358 0 2.66-.54 3.621-1.5M12.5 10a4.74 4.74 0 0 0 3 0"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.288 22H3.087a1.087 1.087 0 0 1-.188-2.157l16.157-2.828A2.511 2.511 0 1 1 19.489 22H15"
    />
    <Path
      fill="#000"
      d="M18.38 9.91a.75.75 0 1 0 1.483.223zm3.767-2.175a.75.75 0 1 0-.294-1.47zm-2.844 6.137a.75.75 0 0 0-1.484-.223zm.56-3.74a2.88 2.88 0 0 1 2.284-2.397l-.294-1.47A4.38 4.38 0 0 0 18.38 9.91zm-1.121 7.48.56-3.74-1.483-.223-.56 3.74z"
    />
  </Svg>
);
export default SvgTreadmillRound;
