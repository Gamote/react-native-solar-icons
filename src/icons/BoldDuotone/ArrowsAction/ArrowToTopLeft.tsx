import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowToTopLeft = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.5303 10.0303C17.8232 9.73744 17.8232 9.26256 17.5303 8.96967L12.5303 3.96967C12.2374 3.67678 11.7626 3.67678 11.4697 3.96967L6.46967 8.96967C6.17678 9.26256 6.17678 9.73744 6.46967 10.0303C6.76256 10.3232 7.23744 10.3232 7.53033 10.0303L12 5.56066L16.4697 10.0303C16.7626 10.3232 17.2374 10.3232 17.5303 10.0303Z"
      fill={props.primaryColor}
    />
    <G opacity={0.5}>
      <Path
        d="M12.75 14.5C12.75 15.4534 12.4702 16.8667 11.6087 18.0632C10.7196 19.298 9.24444 20.25 7 20.25C6.58579 20.25 6.25 19.9142 6.25 19.5C6.25 19.0858 6.58579 18.75 7 18.75C8.75556 18.75 9.7804 18.0353 10.3913 17.1868C11.0298 16.3 11.25 15.2133 11.25 14.5L11.25 6.31066L12 5.56066L12.75 6.31066V14.5Z"
        fill={props.primaryColor}
      />
      <Path
        d="M12.1977 3.77639C12.0432 3.73435 11.878 3.74254 11.7278 3.80095C11.8121 3.76805 11.904 3.75 12 3.75C12.0684 3.75 12.1347 3.75919 12.1977 3.77639Z"
        fill={props.primaryColor}
      />
    </G>
  </Svg>
);
export default SvgArrowToTopLeft;
