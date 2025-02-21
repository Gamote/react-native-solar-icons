import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTornado = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 6c4.97 0 9-.672 9-1.5 0-.52-1.588-.978-4-1.247M12 3c-4.97 0-9 .672-9 1.5 0 .589 2.037 1.099 5 1.344M20 8s-2.791 1-8.276 1S4 8 4 8M16 14s-1.258.5-4 .5-4-.5-4-.5M13 17c-1.352 0-2.342-.121-3-.245m6-.255a10 10 0 0 1-1 .289M11.719 19.46q.575.039 1.281.04a9.3 9.3 0 0 0 1.5-.114M18 11s-.515 1-6 1m-6-1s.219.425 1.892.721M13 22h.5"
    />
  </Svg>
);
export default SvgTornado;
