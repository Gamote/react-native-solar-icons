import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShieldUp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.37752 5.08241C3 5.62028 3 7.21907 3 10.4167V11.9914C3 17.6294 7.23896 20.3655 9.89856 21.5273C10.62 21.8424 10.9807 22 12 22C13.0193 22 13.38 21.8424 14.1014 21.5273C16.761 20.3655 21 17.6294 21 11.9914V10.4167C21 7.21907 21 5.62028 20.6225 5.08241C20.245 4.54454 18.7417 4.02996 15.7351 3.00079L15.1623 2.80472C13.595 2.26824 12.8114 2 12 2C11.1886 2 10.405 2.26824 8.83772 2.80472L8.26491 3.00079C5.25832 4.02996 3.75503 4.54454 3.37752 5.08241ZM16.45 10.95L13.05 8.4C12.4278 7.93333 11.5722 7.93333 10.95 8.4L7.55 10.95C7.21863 11.1985 7.15147 11.6686 7.4 12C7.64853 12.3314 8.11863 12.3985 8.45 12.15L11.85 9.6C11.9389 9.53333 12.0611 9.53333 12.15 9.6L15.55 12.15C15.8814 12.3985 16.3515 12.3314 16.6 12C16.8485 11.6686 16.7814 11.1985 16.45 10.95ZM14.45 13.45L12.45 11.95C12.1833 11.75 11.8167 11.75 11.55 11.95L9.55 13.45C9.21863 13.6985 9.15147 14.1686 9.4 14.5C9.64853 14.8314 10.1186 14.8985 10.45 14.65L12 13.4875L13.55 14.65C13.8814 14.8985 14.3515 14.8314 14.6 14.5C14.8485 14.1686 14.7814 13.6985 14.45 13.45Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgShieldUp;
