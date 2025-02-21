import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgReorder = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M9.5 17.5C9.5 16.5654 9.5 16.0981 9.70096 15.75C9.83261 15.522 10.022 15.3326 10.25 15.201C10.5981 15 11.0654 15 12 15C12.9346 15 13.4019 15 13.75 15.201C13.978 15.3326 14.1674 15.522 14.299 15.75C14.5 16.0981 14.5 16.5654 14.5 17.5C14.5 18.4346 14.5 18.9019 14.299 19.25C14.1674 19.478 13.978 19.6674 13.75 19.799C13.4019 20 12.9346 20 12 20C11.0654 20 10.5981 20 10.25 19.799C10.022 19.6674 9.83261 19.478 9.70096 19.25C9.5 18.9019 9.5 18.4346 9.5 17.5Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.7}
      d="M17 17.5C17 16.5654 17 16.0981 17.201 15.75C17.3326 15.522 17.522 15.3326 17.75 15.201C18.0981 15 18.5654 15 19.5 15C20.4346 15 20.9019 15 21.25 15.201C21.478 15.3326 21.6674 15.522 21.799 15.75C22 16.0981 22 16.5654 22 17.5C22 18.4346 22 18.9019 21.799 19.25C21.6674 19.478 21.478 19.6674 21.25 19.799C20.9019 20 20.4346 20 19.5 20C18.5654 20 18.0981 20 17.75 19.799C17.522 19.6674 17.3326 19.478 17.201 19.25C17 18.9019 17 18.4346 17 17.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M9.44631 3.25C8.31349 3.24998 7.38774 3.24996 6.65688 3.34822C5.89293 3.45093 5.2306 3.67321 4.7019 4.20191C4.17321 4.7306 3.95093 5.39294 3.84822 6.15689C3.74996 6.88775 3.74997 7.81348 3.75 8.94631L3.75 15C3.75 15.002 3.75001 15.0041 3.75002 15.0061C3.28493 15.0196 2.98929 15.0628 2.75 15.201C2.52197 15.3326 2.33261 15.522 2.20096 15.75C2 16.0981 2 16.5654 2 17.5C2 18.4346 2 18.9019 2.20096 19.25C2.33261 19.478 2.52197 19.6674 2.75 19.799C3.09808 20 3.56538 20 4.5 20C5.43462 20 5.90192 20 6.25 19.799C6.47803 19.6674 6.66739 19.478 6.79904 19.25C7 18.9019 7 18.4346 7 17.5C7 16.5654 7 16.0981 6.79904 15.75C6.66739 15.522 6.47803 15.3326 6.25 15.201C6.01071 15.0628 5.71507 15.0196 5.24998 15.0061C5.24999 15.0041 5.25 15.002 5.25 15V9C5.25 7.80029 5.25159 6.97595 5.33484 6.35676C5.41519 5.75914 5.55902 5.46611 5.76256 5.26257C5.9661 5.05903 6.25914 4.91519 6.85676 4.83484C7.47595 4.7516 8.30029 4.75 9.5 4.75H14.5C15.6997 4.75 16.524 4.7516 17.1432 4.83484C17.7409 4.91519 18.0339 5.05903 18.2374 5.26257C18.441 5.46611 18.5848 5.75914 18.6652 6.35676C18.7484 6.97595 18.75 7.80029 18.75 9V10.1893L18.0303 9.46967C17.7374 9.17678 17.2626 9.17678 16.9697 9.46967C16.6768 9.76257 16.6768 10.2374 16.9697 10.5303L18.9697 12.5303C19.2626 12.8232 19.7374 12.8232 20.0303 12.5303L22.0303 10.5303C22.3232 10.2374 22.3232 9.76257 22.0303 9.46967C21.7374 9.17678 21.2626 9.17678 20.9697 9.46967L20.25 10.1893V8.94632C20.25 7.81349 20.25 6.88775 20.1518 6.15689C20.0491 5.39294 19.8268 4.7306 19.2981 4.20191C18.7694 3.67321 18.1071 3.45093 17.3431 3.34822C16.6123 3.24996 15.6865 3.24998 14.5537 3.25H9.44631Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgReorder;
