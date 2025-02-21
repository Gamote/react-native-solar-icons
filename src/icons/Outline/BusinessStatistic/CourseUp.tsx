import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCourseUp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.6679 7C15.6679 6.58579 16.0037 6.25 16.4179 6.25H22C22.4142 6.25 22.75 6.58579 22.75 7V12.5458C22.75 12.96 22.4142 13.2958 22 13.2958C21.5858 13.2958 21.25 12.96 21.25 12.5458V8.80286L15.1142 14.9013C14.6452 15.3674 14.241 15.7692 13.8739 16.0477C13.4805 16.3462 13.0432 16.572 12.505 16.572C11.9668 16.5719 11.5297 16.346 11.1363 16.0474C10.7693 15.7688 10.3652 15.367 9.89632 14.9007L9.62206 14.628C9.1079 14.1167 8.77455 13.7875 8.49698 13.5769C8.23675 13.3794 8.11509 13.3573 8.03452 13.3574C7.95396 13.3574 7.83231 13.3795 7.57222 13.5772C7.29481 13.7881 6.9617 14.1175 6.44792 14.6292L2.52925 18.5314C2.23574 18.8237 1.76087 18.8227 1.46859 18.5292C1.17631 18.2357 1.17731 17.7608 1.47081 17.4686L5.42436 13.5315C5.89329 13.0645 6.29745 12.662 6.66455 12.383C7.05805 12.0839 7.49539 11.8576 8.03398 11.8574C8.57257 11.8572 9.01006 12.0832 9.40378 12.382C9.77108 12.6607 10.1755 13.063 10.6448 13.5296L10.9191 13.8024C11.4328 14.3132 11.7658 14.6421 12.0431 14.8526C12.3031 15.0499 12.4247 15.072 12.5052 15.072C12.5858 15.072 12.7073 15.0499 12.9674 14.8527C13.2447 14.6423 13.5778 14.3134 14.0917 13.8027L20.1815 7.75H16.4179C16.0037 7.75 15.6679 7.41421 15.6679 7Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgCourseUp;
