import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTranslation2 = (props: SvgProps) => (
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
      d="M12 6a6 6 0 0 0-4.243 10.243m8.486 0A5.98 5.98 0 0 0 18 12a5.97 5.97 0 0 0-1-3.318"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 2c5.523 0 10 4.477 10 10a9.97 9.97 0 0 1-2.929 7.071m-14.142 0A9.97 9.97 0 0 1 2 12a10 10 0 0 1 5-8.662"
    />
    <Circle cx={12} cy={12} r={2} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M9.887 17.344c.96-.876 1.44-1.314 2.032-1.342q.081-.004.162 0c.593.028 1.072.466 2.032 1.342 2.087 1.906 3.13 2.858 2.839 3.68a1.3 1.3 0 0 1-.094.206c-.43.77-1.906.77-4.858.77s-4.428 0-4.858-.77a1.4 1.4 0 0 1-.094-.206c-.292-.822.752-1.774 2.84-3.68Z"
    />
  </Svg>
);
export default SvgTranslation2;
