import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMouseCircle = (props: SvgProps) => (
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
      d="M11.25 3.85c0-.76-.58-1.186-1.088-1.082-4.224.858-7.412 4.625-7.412 9.149 0 5.16 4.147 9.333 9.25 9.333s9.25-4.173 9.25-9.333c0-3.697-2.13-6.89-5.216-8.402a.75.75 0 1 1 .66-1.347 10.84 10.84 0 0 1 6.056 9.749c0 5.977-4.807 10.833-10.75 10.833S1.25 17.894 1.25 11.917c0-5.242 3.696-9.62 8.613-10.62C11.521.962 12.75 2.383 12.75 3.85V5.31c2.267.36 4 2.323 4 4.69v4a4.75 4.75 0 1 1-9.5 0v-4a4.75 4.75 0 0 1 4-4.69zm0 2.987A3.26 3.26 0 0 0 8.837 9.25h2.413zm1.5 2.413h2.413a3.26 3.26 0 0 0-2.413-2.413zm2.5 1.5h-6.5V14a3.25 3.25 0 1 0 6.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMouseCircle;
