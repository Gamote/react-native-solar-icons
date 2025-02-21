import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlain3 = (props: SvgProps) => (
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
      d="m20.352 10.52-1.716 5.15c-1.21 3.63-1.816 5.446-2.703 5.962-.844.49-1.887.49-2.73 0-.888-.516-1.493-2.331-2.703-5.962-.195-.583-.292-.874-.455-1.118a2.2 2.2 0 0 0-.597-.597c-.244-.163-.535-.26-1.118-.454-3.63-1.21-5.446-1.816-5.962-2.703a2.72 2.72 0 0 1 0-2.731C2.884 7.18 4.7 6.575 8.33 5.364l5.15-1.716c4.498-1.5 6.747-2.25 7.934-1.062s.438 3.436-1.062 7.935m-7.306.382a.75.75 0 0 1 .006-1.06l4.21-4.165a.75.75 0 1 1 1.055 1.067l-4.21 4.164a.75.75 0 0 1-1.061-.006"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPlain3;
