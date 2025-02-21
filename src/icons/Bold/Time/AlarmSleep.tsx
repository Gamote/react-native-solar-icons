import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlarmSleep = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.136 1.6026C8.35553 1.95386 8.24875 2.41657 7.8975 2.6361L3.89748 5.1361C3.54622 5.35563 3.08351 5.24885 2.86398 4.8976C2.64445 4.54634 2.75123 4.08363 3.10248 3.8641L7.1025 1.3641C7.45376 1.14457 7.91647 1.25135 8.136 1.6026ZM15.864 1.6026C16.0835 1.25135 16.5462 1.14457 16.8975 1.3641L20.8975 3.8641C21.2487 4.08363 21.3555 4.54635 21.136 4.8976C20.9164 5.24885 20.4537 5.35563 20.1025 5.1361L16.1025 2.6361C15.7512 2.41657 15.6444 1.95385 15.864 1.6026Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22.0001C16.9705 22.0001 21 17.9707 21 13.0001C21 8.02954 16.9705 4.0001 12 4.0001C7.02942 4.0001 2.99998 8.02954 2.99998 13.0001C2.99998 17.9707 7.02942 22.0001 12 22.0001ZM8.99998 10.7501C8.58576 10.7501 8.24998 10.4143 8.24998 10.0001C8.24998 9.58589 8.58576 9.2501 8.99998 9.2501H15C15.3033 9.2501 15.5768 9.43283 15.6929 9.71309C15.809 9.99334 15.7448 10.3159 15.5303 10.5304L10.8106 15.2501H15C15.4142 15.2501 15.75 15.5859 15.75 16.0001C15.75 16.4143 15.4142 16.7501 15 16.7501H8.99998C8.69663 16.7501 8.42315 16.5674 8.30707 16.2871C8.19098 16.0069 8.25515 15.6843 8.46965 15.4698L13.1893 10.7501H8.99998Z"
      fill="black"
    />
  </Svg>
);
export default SvgAlarmSleep;
