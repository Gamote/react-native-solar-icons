import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCursor = (props: SvgProps) => (
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
      d="m11.433 16.464 1.203-1.202 2.626-2.626 1.202-1.203c1.232-1.23 1.847-1.846 1.702-2.508s-.963-.963-2.596-1.565l-5.45-2.007C6.861 4.152 5.232 3.55 4.392 4.39s-.24 2.47.962 5.73L7.36 15.57c.602 1.633.903 2.45 1.565 2.596s1.277-.47 2.508-1.702"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="m12.636 15.262 3.938 3.938c.408.408.612.612.84.706.302.126.643.126.946 0 .228-.094.432-.298.84-.706.407-.408.611-.612.706-.84a1.24 1.24 0 0 0 0-.946c-.095-.228-.299-.432-.706-.84l-3.939-3.938z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgCursor;
