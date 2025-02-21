import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChatRoundLike = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 13.4811 3.09753 14.8788 3.7148 16.1181C3.96254 16.6155 4.05794 17.2103 3.90163 17.7945L3.30602 20.0205C3.19663 20.4293 3.57066 20.8034 3.97949 20.694L6.20553 20.0984C6.78973 19.9421 7.38451 20.0375 7.88191 20.2852C9.12121 20.9025 10.5189 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C10.2817 22.75 8.65552 22.3463 7.21315 21.6279C6.99791 21.5207 6.77814 21.4979 6.59324 21.5474L4.3672 22.143C2.84337 22.5507 1.44927 21.1566 1.857 19.6328L2.4526 17.4068C2.50208 17.2219 2.47933 17.0021 2.37213 16.7869C1.65371 15.3445 1.25 13.7183 1.25 12ZM15.272 7.82214C16.507 8.28392 17.25 9.53897 17.25 11.1084C17.25 12.0241 16.8154 12.8821 16.2951 13.5946C15.766 14.3192 15.0855 14.9787 14.4574 15.513C14.4262 15.5396 14.3952 15.566 14.3644 15.5923C13.6274 16.2207 13.0148 16.7431 12 16.7431C10.9852 16.7431 10.3726 16.2207 9.63564 15.5923C9.60486 15.566 9.57385 15.5396 9.54259 15.513C8.91448 14.9786 8.23403 14.3192 7.70492 13.5946C7.18465 12.8821 6.75 12.0241 6.75 11.1084C6.75 9.53898 7.49299 8.28393 8.72797 7.82214C9.77086 7.43218 10.9575 7.6854 12 8.4956C13.0425 7.6854 14.2291 7.43218 15.272 7.82214ZM14.7467 9.22713C14.2295 9.03374 13.4049 9.13696 12.5359 10.0245C12.3948 10.1686 12.2017 10.2498 12 10.2498C11.7983 10.2498 11.6052 10.1686 11.4641 10.0245C10.5951 9.13696 9.77051 9.03374 9.25333 9.22713C8.74454 9.41738 8.25 10.0007 8.25 11.1084C8.25 11.5612 8.47476 12.1053 8.91635 12.71C9.34909 13.3027 9.93292 13.8757 10.5145 14.3705C11.3828 15.1091 11.586 15.2431 12 15.2431C12.414 15.2431 12.6172 15.1091 13.4855 14.3705C14.0671 13.8757 14.6509 13.3027 15.0837 12.71C15.5252 12.1053 15.75 11.5612 15.75 11.1084C15.75 10.0007 15.2555 9.41738 14.7467 9.22713Z"
      fill="black"
    />
  </Svg>
);
export default SvgChatRoundLike;
