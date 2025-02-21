import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloset = (props: SvgProps) => (
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
      d="M9.944 1.25h4.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v3.112q.002.992-.007 1.84a.8.8 0 0 1-.003.23c-.016.907-.053 1.69-.143 2.363-.158 1.172-.49 2.121-1.238 2.87-.464.464-1.005.768-1.629.97q.02.082.02.171v.5a.75.75 0 0 1-1.5 0v-.374c-1.102.124-2.482.124-4.194.124H9.944c-1.712 0-3.092 0-4.194-.124V22a.75.75 0 0 1-1.5 0v-.5q0-.09.02-.172c-.624-.201-1.165-.505-1.629-.97-.748-.748-1.08-1.697-1.238-2.869-.09-.673-.127-1.456-.143-2.363a.8.8 0 0 1-.003-.23q-.009-.848-.007-1.84V9.944q-.002-.992.007-1.84a.8.8 0 0 1 .003-.23c.016-.907.053-1.69.143-2.363.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153m-7.192 7.5Q2.75 9.332 2.75 10v3q0 .668.002 1.25h8.498v-5.5zm8.498-1.5H2.776c.02-.587.054-1.094.114-1.54.135-1.005.389-1.585.812-2.008s1.003-.677 2.009-.812c1.028-.138 2.382-.14 4.289-.14h1.25zm1.5 7h8.498q.002-.582.002-1.25v-3c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-1.25zm8.474 1.5H12.75v4.5H14c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.06-.445.094-.952.114-1.539m-9.974 4.5v-4.5H2.776c.02.587.054 1.094.114 1.54.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14zm3.75-13a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M6.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m8 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCloset;
