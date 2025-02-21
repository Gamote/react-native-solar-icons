import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStar = (props: SvgProps) => (
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
      d="M12 3.25a.75.75 0 0 1 .75.75v2.4a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75M3.25 12a.75.75 0 0 1 .75-.75h2.4a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m13.6 0a.75.75 0 0 1 .75-.75H20a.75.75 0 0 1 0 1.5h-2.4a.75.75 0 0 1-.75-.75M12 16.85a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-1.5 0v-2.4a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <G fill="#000" opacity={0.5}>
      <Path d="M18.187 5.812a.75.75 0 0 1 0 1.061L16.49 8.57a.75.75 0 0 1-1.06-1.06l1.696-1.698a.75.75 0 0 1 1.061 0M5.812 5.813a.75.75 0 0 1 1.061 0L8.57 7.51a.75.75 0 0 1-1.06 1.06L5.812 6.873a.75.75 0 0 1 0-1.06M8.57 15.43a.75.75 0 0 1 0 1.06l-1.697 1.697a.75.75 0 0 1-1.06-1.06l1.697-1.698a.75.75 0 0 1 1.06 0M15.43 15.43a.75.75 0 0 1 1.06 0l1.697 1.696a.75.75 0 0 1-1.06 1.061l-1.698-1.697a.75.75 0 0 1 0-1.06" />
    </G>
  </Svg>
);
export default SvgStar;
