import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgInfinity = (props: SvgProps) => (
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
      d="M7 7.75a4.25 4.25 0 0 0 0 8.5c.597 0 1.045-.107 1.407-.284.362-.176.679-.442.986-.816.54-.66.983-1.558 1.567-2.741q.175-.355.37-.744l.34-.69c.581-1.181 1.117-2.27 1.777-3.075.41-.501.89-.923 1.49-1.215S16.216 6.25 17 6.25a5.75 5.75 0 1 1-3.45 10.35.75.75 0 0 1 .9-1.2A4.25 4.25 0 1 0 17 7.75c-.597 0-1.045.107-1.407.284-.362.176-.679.442-.986.816-.54.66-.983 1.558-1.567 2.741q-.175.355-.37.744l-.34.69c-.581 1.181-1.117 2.27-1.777 3.076-.41.5-.89.922-1.49 1.214s-1.28.435-2.063.435A5.75 5.75 0 1 1 10.451 7.4a.75.75 0 1 1-.901 1.2A4.23 4.23 0 0 0 7 7.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgInfinity;
