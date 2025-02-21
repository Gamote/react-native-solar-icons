import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFacemaskSquare = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5M10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19 1.444.194 2.584.6 3.479 1.494.895.895 1.3 2.035 1.494 3.48.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53-.194 1.444-.6 2.584-1.494 3.479-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19m-5.33 1.676c-1.278.172-2.049.5-2.618 1.069-.57.57-.897 1.34-1.069 2.619-.174 1.3-.176 3.008-.176 5.386v.293l.055.022 4.21 1.871 2.85-1.14a5.75 5.75 0 0 1 4.27 0l2.85 1.14 4.21-1.871.055-.022V12c0-2.378-.002-4.086-.176-5.386-.172-1.279-.5-2.05-1.069-2.62-.57-.569-1.34-.896-2.619-1.068-1.3-.174-3.008-.176-5.386-.176s-4.086.002-5.386.176m14.632 11.008-3.532 1.57-.222 2.89 2.844 1.22c.371-.528.603-1.22.739-2.228.123-.917.16-2.037.171-3.452M19 20.673l-1.63-.699-.085 1.113.102-.013c.659-.089 1.182-.219 1.613-.401m-3.228.532.439-5.713-2.632-1.053a4.25 4.25 0 0 0-3.156 0L7.79 15.492l.44 5.713c1.033.044 2.268.045 3.77.045s2.737 0 3.77-.045m-9.055-.118-.086-1.113-1.63.699c.432.183.955.312 1.614.4zm-3.051-1.474 2.844-1.218-.222-2.891-3.532-1.57c.011 1.415.048 2.535.171 3.452.136 1.008.368 1.7.739 2.227"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFacemaskSquare;
