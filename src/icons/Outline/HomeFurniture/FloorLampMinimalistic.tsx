import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFloorLampMinimalistic = (props: SvgProps) => (
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
      d="M9.463 1.962c.682-.455 1.581-.712 2.537-.712s1.855.257 2.537.712c.472.314.876.753 1.077 1.288H16c.478 0 .936.197 1.249.54.324.358.485.878.314 1.42-.606 1.915-2.55 3.255-4.813 3.5v12.54H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-3.313a3.39 3.39 0 0 0-1.295-2.67l-3.322-2.375a3.8 3.8 0 0 1-3.842.805 1.44 1.44 0 0 1-.952-1.137 1.7 1.7 0 0 1 .038-.72 2.83 2.83 0 0 1-.029-3.515 2.785 2.785 0 0 1 3.405-.8 1.64 1.64 0 0 1 .684-.203 1.43 1.43 0 0 1 1.325.669c.696 1.095.8 2.49.25 3.686l3.34 2.387.011.009q.204.158.387.334V8.71c-2.263-.245-4.207-1.585-4.812-3.5a1.44 1.44 0 0 1 .313-1.42A1.7 1.7 0 0 1 8 3.25h.386c.201-.535.605-.974 1.077-1.288m.774 1.288h3.526l-.058-.04c-.403-.27-1.004-.46-1.705-.46s-1.302.19-1.705.46zM8 4.75a.23.23 0 0 0-.123.036C8.315 6.118 9.915 7.25 12 7.25s3.685-1.132 4.123-2.464l-.032-.018A.2.2 0 0 0 16 4.75zM4.118 8.752a1.29 1.29 0 0 0-1.088.496 1.33 1.33 0 0 0-.227 1.188zm1.862.086a.3.3 0 0 0-.078.067L3.37 12.146a.3.3 0 0 0-.047.095.2.2 0 0 0-.007.05 2.3 2.3 0 0 0 2.599-.84 2.37 2.37 0 0 0 .099-2.628z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFloorLampMinimalistic;
