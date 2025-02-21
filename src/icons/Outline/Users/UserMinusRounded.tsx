import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserMinusRounded = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M15.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M13.91 21.608c-.61.093-1.251.142-1.91.142-2.04 0-3.922-.47-5.322-1.27C5.3 19.692 4.25 18.49 4.25 17s1.05-2.692 2.428-3.48c1.4-.8 3.283-1.27 5.322-1.27 1.805 0 3.483.368 4.812 1.004q.093-.004.188-.004a4.75 4.75 0 1 1-3.09 8.358M13.75 18a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m.668-3.987A4.75 4.75 0 0 0 12.25 18c0 .803.2 1.56.55 2.222q-.393.028-.8.028c-1.827 0-3.444-.425-4.578-1.073C6.267 18.517 5.75 17.72 5.75 17s.517-1.517 1.672-2.177c1.134-.648 2.751-1.073 4.578-1.073.861 0 1.677.094 2.418.263"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgUserMinusRounded;
