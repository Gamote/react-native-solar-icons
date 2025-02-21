import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHourglass = (props: SvgProps) => (
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
      d="M11.938 1.25h.124c2.014 0 3.603 0 4.761.153 1.138.15 2.16.48 2.645 1.423q.106.204.177.422c.331 1.01-.159 1.966-.857 2.87-.71.919-1.834 2.032-3.258 3.442L13.066 12l2.464 2.44c1.424 1.41 2.548 2.523 3.258 3.442.698.904 1.188 1.86.857 2.87a3 3 0 0 1-.177.422c-.485.943-1.507 1.273-2.645 1.423-1.158.153-2.747.153-4.76.153h-.125c-2.014 0-3.603 0-4.761-.153-1.138-.15-2.16-.48-2.646-1.423a3 3 0 0 1-.176-.422c-.331-1.01.159-1.966.857-2.87.71-.919 1.834-2.032 3.258-3.442L10.934 12 8.47 9.56C7.046 8.15 5.922 7.037 5.212 6.118c-.698-.904-1.188-1.86-.857-2.87q.072-.218.176-.422c.486-.943 1.508-1.273 2.646-1.423 1.158-.153 2.747-.153 4.76-.153M12 10.945l2.43-2.407c1.478-1.463 2.53-2.507 3.17-3.337.662-.856.697-1.248.62-1.486a1.4 1.4 0 0 0-.085-.202c-.117-.227-.429-.481-1.508-.623-1.048-.138-2.537-.14-4.627-.14s-3.58.002-4.627.14c-1.08.142-1.391.396-1.508.623a1.4 1.4 0 0 0-.085.202c-.077.238-.042.63.62 1.486.64.83 1.692 1.874 3.17 3.337zm0 2.11-2.43 2.407c-1.478 1.463-2.53 2.507-3.17 3.337-.662.856-.697 1.249-.62 1.486q.034.105.085.202c.117.227.429.481 1.508.623 1.048.138 2.537.14 4.627.14s3.58-.002 4.627-.14c1.08-.142 1.391-.396 1.508-.623a1.4 1.4 0 0 0 .085-.202c.078-.238.042-.63-.62-1.486-.64-.83-1.692-1.874-3.17-3.337z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgHourglass;
