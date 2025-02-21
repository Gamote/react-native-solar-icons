import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMouseCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2.53488 11.9161C2.53488 17.1834 6.77256 21.4534 12 21.4534C17.2274 21.4534 21.4651 17.1834 21.4651 11.9161C21.4651 8.14213 19.2898 4.87867 16.1303 3.33204C15.749 3.14542 15.5901 2.68271 15.7753 2.29856C15.9605 1.91442 16.4197 1.75429 16.801 1.94091C20.4689 3.73641 23 7.52765 23 11.9161C23 18.0375 18.0751 23 12 23C5.92487 23 1 18.0375 1 11.9161C1 6.54784 4.78661 2.07251 9.81487 1.05095C11.5037 0.707845 12.7674 2.15503 12.7674 3.66754V5.80249C14.6612 6.16648 16.0933 7.85287 16.0933 9.87826V13.9999C16.0933 16.2911 14.2608 18.1484 12.0002 18.1484C9.73974 18.1484 7.90723 16.2911 7.90723 13.9999V9.87826C7.90723 7.85305 9.339 6.16678 11.2326 5.80259V3.66754C11.2326 2.90228 10.6454 2.45995 10.1182 2.56704C5.79222 3.44593 2.53488 7.29856 2.53488 11.9161Z"
      fill={props.primaryColor}
    />
    <Path
      d="M7.90723 13.9537C7.90723 16.2449 9.73974 18.1023 12.0002 18.1023C14.2608 18.1023 16.0933 16.2449 16.0933 13.9537V10.5831H7.90723V13.9537Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.7677 9.33822H16.0214C15.7094 7.67081 14.4128 6.04579 12.7677 5.72949V9.33822Z"
      fill={props.primaryColor}
    />
    <Path
      d="M11.2328 9.33822V5.72949C9.58771 6.04579 8.29112 7.67081 7.97906 9.33822H11.2328Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMouseCircle;
