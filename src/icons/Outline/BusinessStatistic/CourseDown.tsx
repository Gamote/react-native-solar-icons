import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCourseDown = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.46859 6.47078C1.76087 6.17728 2.23574 6.17628 2.52925 6.46856L6.44792 10.3708C6.9617 10.8825 7.29481 11.2119 7.57222 11.4228C7.83231 11.6205 7.95396 11.6426 8.03452 11.6426C8.11509 11.6427 8.23675 11.6206 8.49698 11.4231C8.77455 11.2125 9.1079 10.8833 9.62206 10.372L9.8963 10.0993C10.3651 9.63304 10.7693 9.23116 11.1363 8.9526C11.5297 8.654 11.9668 8.42808 12.505 8.42802C13.0432 8.42796 13.4805 8.65377 13.8739 8.95229C14.241 9.23077 14.6452 9.63256 15.1142 10.0987L21.25 16.1971V12.4542C21.25 12.04 21.5858 11.7042 22 11.7042C22.4142 11.7042 22.75 12.04 22.75 12.4542V18C22.75 18.4142 22.4142 18.75 22 18.75H16.4179C16.0037 18.75 15.6679 18.4142 15.6679 18C15.6679 17.5858 16.0037 17.25 16.4179 17.25H20.1815L14.0917 11.1973C13.5778 10.6866 13.2447 10.3577 12.9674 10.1473C12.7073 9.95006 12.5858 9.92801 12.5052 9.92802C12.4247 9.92803 12.3031 9.95011 12.0431 10.1474C11.7658 10.3579 11.4328 10.6868 10.9191 11.1976L10.6448 11.4704C10.1755 11.937 9.77108 12.3393 9.40378 12.618C9.01006 12.9168 8.57257 13.1428 8.03398 13.1426C7.49539 13.1424 7.05805 12.9161 6.66455 12.617C6.29745 12.338 5.89329 11.9355 5.42436 11.4685C5.41278 11.4569 5.40115 11.4453 5.38948 11.4337L1.47081 7.53144C1.17731 7.23916 1.17631 6.76429 1.46859 6.47078Z"
      fill="black"
    />
  </Svg>
);
export default SvgCourseDown;
