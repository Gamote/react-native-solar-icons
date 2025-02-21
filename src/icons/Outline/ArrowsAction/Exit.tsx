import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgExit = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12.75 11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V13C11.25 13.4142 11.5858 13.75 12 13.75C12.4142 13.75 12.75 13.4142 12.75 13V11Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.7247 2.02709L16.1585 2.43272C17.3143 2.62533 18.2506 2.78137 18.9831 2.99943C19.7459 3.22653 20.3761 3.54467 20.8613 4.11746C21.3465 4.69024 21.5568 5.36421 21.6554 6.15397C21.75 6.91231 21.75 7.86155 21.75 9.03325V14.9667C21.75 16.1384 21.75 17.0877 21.6554 17.846C21.5568 18.6358 21.3465 19.3097 20.8613 19.8825C20.3761 20.4553 19.7459 20.7734 18.9831 21.0005C18.2506 21.2186 17.3143 21.3746 16.1586 21.5672L13.7247 21.9729C12.6915 22.1451 11.8373 22.2875 11.155 22.304C10.4394 22.3213 9.77599 22.2063 9.22247 21.7374C8.75523 21.3416 8.52385 20.827 8.40256 20.25H7.94632C6.8135 20.25 5.88774 20.25 5.15689 20.1518C4.39294 20.0491 3.7306 19.8268 3.20191 19.2981C2.67321 18.7694 2.45093 18.1071 2.34822 17.3431C2.24996 16.6123 2.24998 15.6865 2.25 14.5537V9.4463C2.24998 8.31348 2.24996 7.38773 2.34822 6.65688C2.45093 5.89293 2.67321 5.23059 3.20191 4.7019C3.7306 4.1732 4.39294 3.95092 5.15689 3.84821C5.88775 3.74995 6.81348 3.74997 7.94631 3.74999L8.40256 3.74999C8.52384 3.17295 8.75523 2.65841 9.22247 2.2626C9.77599 1.7937 10.4394 1.67869 11.155 1.69597C11.8373 1.71246 12.6916 1.85487 13.7247 2.02709ZM8.25 17.3351C8.24999 17.8511 8.24997 18.3231 8.26143 18.75H8C6.80029 18.75 5.97595 18.7484 5.35676 18.6652C4.75914 18.5848 4.46611 18.441 4.26257 18.2374C4.05903 18.0339 3.91519 17.7409 3.83484 17.1432C3.7516 16.524 3.75 15.6997 3.75 14.5V9.49999C3.75 8.30028 3.7516 7.47594 3.83484 6.85675C3.91519 6.25913 4.05903 5.9661 4.26257 5.76256C4.46611 5.55902 4.75914 5.41518 5.35676 5.33483C5.97595 5.25159 6.80029 5.24999 8 5.24999H8.26143C8.24997 5.6769 8.24999 6.14889 8.25 6.6649V17.3351ZM11.1188 3.19554C10.5765 3.18243 10.3458 3.2769 10.192 3.40713C10.0383 3.53736 9.90719 3.7494 9.83097 4.28646C9.75179 4.84427 9.75 5.60296 9.75 6.72183V17.2781C9.75 18.397 9.75179 19.1557 9.83097 19.7135C9.90719 20.2506 10.0383 20.4626 10.192 20.5928C10.3458 20.7231 10.5765 20.8175 11.1188 20.8044C11.682 20.7908 12.4307 20.6679 13.5343 20.4839L15.8631 20.0958C17.0793 19.8931 17.9228 19.7511 18.5551 19.5629C19.1672 19.3806 19.4911 19.1794 19.7168 18.9129C19.9425 18.6465 20.0878 18.294 20.1669 17.6602C20.2486 17.0056 20.25 16.1502 20.25 14.9172V9.08275C20.25 7.84973 20.2486 6.99439 20.1669 6.33981C20.0878 5.706 19.9425 5.35347 19.7168 5.08702C19.4911 4.82057 19.1672 4.61933 18.5551 4.43707C17.9228 4.24885 17.0793 4.10688 15.8631 3.90418L13.5343 3.51604C12.4307 3.33211 11.682 3.20914 11.1188 3.19554Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgExit;
