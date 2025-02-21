import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSidebarMinimalistic = (props: SvgProps) => (
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
      d="M9.944 2.25c-1.838 0-3.294 0-4.433.153-1.172.158-2.121.49-2.87 1.238-.748.749-1.08 1.698-1.238 2.87-.153 1.14-.153 2.595-.153 4.433v2.112c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h5.022l.072-.001c1.384-.004 2.523-.027 3.451-.152 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433v-2.112c0-1.838 0-3.294-.153-4.433-.158-1.172-.49-2.121-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238-.928-.125-2.067-.148-3.45-.152h-.073l-.91-.001zm4.306 1.5H10c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812S3.025 5.705 2.89 6.71C2.752 7.739 2.75 9.093 2.75 11v2c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4.25zm1.5 16.494c1.034-.01 1.858-.042 2.54-.134 1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-2c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-.68-.092-1.505-.123-2.539-.134z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSidebarMinimalistic;
