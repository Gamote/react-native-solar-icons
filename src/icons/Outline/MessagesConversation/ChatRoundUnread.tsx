import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChatRoundUnread = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 13.4811 3.09753 14.8788 3.7148 16.1181C3.96254 16.6155 4.05794 17.2103 3.90163 17.7945L3.30602 20.0205C3.19663 20.4293 3.57066 20.8034 3.97949 20.694L6.20553 20.0984C6.78973 19.9421 7.38451 20.0375 7.88191 20.2852C9.12121 20.9025 10.5189 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 11.3655 21.1862 10.7466 21.065 10.1492C20.9826 9.74326 21.2448 9.34739 21.6508 9.26499C22.0567 9.18259 22.4526 9.44487 22.535 9.8508C22.6761 10.5458 22.75 11.2647 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C10.2817 22.75 8.65552 22.3463 7.21315 21.6279C6.99791 21.5207 6.77813 21.4979 6.59324 21.5474L4.3672 22.143C2.84337 22.5507 1.44927 21.1566 1.857 19.6328L2.4526 17.4068C2.50208 17.2219 2.47933 17.0021 2.37213 16.7869C1.65371 15.3445 1.25 13.7183 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.7353 1.25 13.4541 1.32394 14.1492 1.46503C14.5551 1.54743 14.8174 1.9433 14.735 2.34924C14.6526 2.75517 14.2567 3.01745 13.8508 2.93505C13.2534 2.81378 12.6345 2.75 12 2.75ZM15.25 5C15.25 2.92893 16.9289 1.25 19 1.25C21.0711 1.25 22.75 2.92893 22.75 5C22.75 7.07107 21.0711 8.75 19 8.75C16.9289 8.75 15.25 7.07107 15.25 5ZM19 2.75C17.7574 2.75 16.75 3.75736 16.75 5C16.75 6.24264 17.7574 7.25 19 7.25C20.2426 7.25 21.25 6.24264 21.25 5C21.25 3.75736 20.2426 2.75 19 2.75Z"
      fill="black"
    />
  </Svg>
);
export default SvgChatRoundUnread;
