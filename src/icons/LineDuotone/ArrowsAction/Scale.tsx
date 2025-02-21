import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgScale = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M11.0001 2C6.94506 2.0073 4.82162 2.10686 3.46459 3.46389C2.00012 4.92835 2.00012 7.28538 2.00012 11.9994C2.00012 16.7135 2.00012 19.0705 3.46459 20.535C4.92905 21.9994 7.28608 21.9994 12.0001 21.9994C16.7142 21.9994 19.0712 21.9994 20.5357 20.535C21.8927 19.1779 21.9922 17.0545 21.9995 12.9994"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13 11L22 2M22 2H16.6562M22 2V7.34375M21 3L12 12M12 12H16M12 12V8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgScale;
