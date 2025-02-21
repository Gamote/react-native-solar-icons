import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeWiFi = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22ZM17.4498 12.192C14.4329 8.93571 9.56706 8.93571 6.55017 12.192C6.26866 12.4959 5.79413 12.514 5.49028 12.2325C5.18643 11.951 5.16832 11.4764 5.44983 11.1726C9.06036 7.27552 14.9396 7.27552 18.5502 11.1726C18.8317 11.4764 18.8136 11.951 18.5097 12.2325C18.2059 12.514 17.7313 12.4959 17.4498 12.192ZM15.4498 14.3505C13.5375 12.2864 10.4625 12.2864 8.55019 14.3505C8.26868 14.6544 7.79415 14.6725 7.4903 14.391C7.18645 14.1095 7.16834 13.6349 7.44985 13.3311C9.95581 10.6262 14.0442 10.6262 16.5502 13.3311C16.8317 13.6349 16.8136 14.1095 16.5097 14.391C16.2059 14.6725 15.7314 14.6544 15.4498 14.3505ZM13.4499 16.5095C12.6421 15.6377 11.358 15.6377 10.5502 16.5095C10.2687 16.8134 9.79417 16.8315 9.49031 16.55C9.18646 16.2684 9.16835 15.7939 9.44986 15.4901C10.8513 13.9775 13.1488 13.9775 14.5502 15.4901C14.8317 15.7939 14.8136 16.2684 14.5098 16.55C14.2059 16.8315 13.7314 16.8134 13.4499 16.5095Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgHomeWiFi;
