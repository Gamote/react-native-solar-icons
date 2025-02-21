import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShockAbsorber = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 19.4027 10.2619 18.8665 10.6771 18.5H10.25C9.2835 18.5 8.5 17.7165 8.5 16.75C8.5 16.1553 8.79663 15.6299 9.25 15.3137V6H8C7.05719 6 6.58579 6 6.29289 5.70711C6 5.41421 6 4.94281 6 4C6 3.05719 6 2.58579 6.29289 2.29289C6.58579 2 7.05719 2 8 2H16C16.9428 2 17.4142 2 17.7071 2.29289C18 2.58579 18 3.05719 18 4C18 4.94281 18 5.41421 17.7071 5.70711C17.4142 6 16.9428 6 16 6H14.75V15.3137C15.2034 15.6299 15.5 16.1553 15.5 16.75C15.5 17.7165 14.7165 18.5 13.75 18.5H13.3229C13.7381 18.8665 14 19.4027 14 20ZM13.25 6H10.75V15H13.25V6Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.27257 7.81828C7.37303 7.41643 7.78023 7.17211 8.18208 7.27257L16.1821 9.27257C16.5839 9.37303 16.8282 9.78023 16.7278 10.1821C16.6273 10.5839 16.2201 10.8282 15.8183 10.7278L7.81828 8.72778C7.41643 8.62732 7.17211 8.22012 7.27257 7.81828ZM7.27257 11.3183C7.37303 10.9164 7.78023 10.6721 8.18208 10.7726L16.1821 12.7726C16.5839 12.873 16.8282 13.2802 16.7278 13.6821C16.6273 14.0839 16.2201 14.3282 15.8183 14.2278L7.81828 12.2278C7.41643 12.1273 7.17211 11.7201 7.27257 11.3183Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.3114 7.47237C20.6028 7.76675 20.6004 8.24161 20.306 8.53302L19.5989 9.23298C19.3045 9.52438 18.8297 9.52197 18.5383 9.22759C18.2469 8.93322 18.2493 8.45835 18.5437 8.16695L19.2508 7.46698C19.5451 7.17558 20.02 7.17799 20.3114 7.47237ZM3.68859 7.47237C3.97999 7.17799 4.45486 7.17558 4.74923 7.46698L5.45634 8.16695C5.75072 8.45835 5.75313 8.93322 5.46173 9.22759C5.17032 9.52197 4.69546 9.52438 4.40108 9.23298L3.69397 8.53302C3.3996 8.24161 3.39719 7.76675 3.68859 7.47237ZM22 12.2495H20C19.5858 12.2495 19.25 11.9137 19.25 11.4995C19.25 11.0853 19.5858 10.7495 20 10.7495L22 10.7495C22.4142 10.7495 22.75 11.0853 22.75 11.4995C22.75 11.9137 22.4142 12.2495 22 12.2495ZM1.25 11.5005C1.25 11.0863 1.58579 10.7505 2 10.7505H4C4.41421 10.7505 4.75 11.0863 4.75 11.5005C4.75 11.9147 4.41421 12.2505 4 12.2505H2C1.58579 12.2505 1.25 11.9147 1.25 11.5005ZM5.46173 13.7724C5.75313 14.0668 5.75072 14.5416 5.45634 14.8331L4.74923 15.533C4.45486 15.8244 3.97999 15.822 3.68859 15.5276C3.39719 15.2333 3.3996 14.7584 3.69397 14.467L4.40108 13.767C4.69546 13.4756 5.17032 13.478 5.46173 13.7724ZM18.5383 13.7724C18.8297 13.478 19.3045 13.4756 19.5989 13.767L20.306 14.467C20.6004 14.7584 20.6028 15.2333 20.3114 15.5276C20.02 15.822 19.5451 15.8244 19.2508 15.533L18.5437 14.8331C18.2493 14.5417 18.2469 14.0668 18.5383 13.7724Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgShockAbsorber;
