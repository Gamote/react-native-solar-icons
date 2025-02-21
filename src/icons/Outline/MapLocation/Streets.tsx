import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStreets = (props: SvgProps) => (
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
      d="M17.386 2.926c-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176c-1.279.172-2.05.5-2.62 1.069-.569.57-.896 1.34-1.068 2.619-.174 1.3-.176 3.008-.176 5.386s.002 4.086.176 5.386c.119.882.311 1.522.606 2.021L19.407 3.532c-.499-.295-1.139-.487-2.02-.606m3.082 1.667L13.061 12l7.407 7.407c.295-.499.487-1.139.606-2.02.174-1.3.176-3.009.176-5.387s-.002-4.086-.176-5.386c-.119-.882-.311-1.522-.606-2.021m-1.06 15.875L12 13.061l-7.407 7.407c.499.295 1.139.487 2.02.606 1.3.174 3.009.176 5.387.176s4.086-.002 5.386-.176c.882-.119 1.522-.311 2.021-.606M17.586 1.44c1.445.194 2.585.6 3.48 1.494.895.895 1.3 2.035 1.494 3.48.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53-.194 1.444-.6 2.584-1.494 3.479-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19h.114c2.309 0 4.118 0 5.53.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgStreets;
