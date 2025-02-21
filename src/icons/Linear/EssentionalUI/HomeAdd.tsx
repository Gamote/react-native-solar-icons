import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeAdd = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 12.2041C2 9.91567 2 8.77146 2.5192 7.82292C3.0384 6.87439 3.98695 6.2857 5.88403 5.10831L7.88403 3.86705C9.88939 2.62247 10.8921 2.00018 12 2.00018C13.1079 2.00018 14.1106 2.62247 16.116 3.86705L18.116 5.10831C20.0131 6.2857 20.9616 6.87439 21.4808 7.82292C22 8.77146 22 9.91567 22 12.2041V13.7251C22 17.626 22 19.5765 20.8284 20.7883C19.6569 22.0002 17.7712 22.0002 14 22.0002H10C6.22876 22.0002 4.34315 22.0002 3.17157 20.7883C2 19.5765 2 17.626 2 13.7251V12.2041Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M15 14L12 14M12 14L9 14M12 14L12 11M12 14L12 17"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgHomeAdd;
