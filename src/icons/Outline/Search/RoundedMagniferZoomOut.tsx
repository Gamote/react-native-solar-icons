import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundedMagniferZoomOut = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 2.75C6.44365 2.75 2.75 6.44365 2.75 11C2.75 15.5563 6.44365 19.25 11 19.25C15.5563 19.25 19.25 15.5563 19.25 11C19.25 6.44365 15.5563 2.75 11 2.75ZM1.25 11C1.25 5.61522 5.61522 1.25 11 1.25C16.3848 1.25 20.75 5.61522 20.75 11C20.75 16.3848 16.3848 20.75 11 20.75C5.61522 20.75 1.25 16.3848 1.25 11ZM8.25 11C8.25 10.5858 8.58579 10.25 9 10.25H13C13.4142 10.25 13.75 10.5858 13.75 11C13.75 11.4142 13.4142 11.75 13 11.75H9C8.58579 11.75 8.25 11.4142 8.25 11ZM20.1579 19.7511C19.9264 19.7335 19.7335 19.9264 19.7511 20.1579C19.7514 20.1592 19.7553 20.1848 19.7746 20.2573C19.7974 20.3424 19.8312 20.4554 19.8828 20.6277C19.9301 20.7857 19.9609 20.8881 19.9862 20.9641C20.0121 21.0419 20.021 21.0568 20.0171 21.0496C20.1225 21.2465 20.3745 21.31 20.5607 21.1867C20.5538 21.1912 20.5688 21.1824 20.6284 21.1261C20.6868 21.0712 20.7624 20.9957 20.8791 20.8791C20.9957 20.7624 21.0712 20.6868 21.1261 20.6284C21.1727 20.579 21.1868 20.5602 21.1877 20.5592C21.3093 20.3736 21.2463 20.1236 21.0511 20.018C21.0499 20.0175 21.0287 20.0077 20.9641 19.9862C20.8881 19.9609 20.7857 19.9301 20.6277 19.8828C20.4554 19.8312 20.3424 19.7974 20.2573 19.7746C20.1848 19.7553 20.1591 19.7514 20.1579 19.7511ZM18.2564 20.2833C18.1612 19.1267 19.1267 18.1612 20.2833 18.2564C20.4833 18.2728 20.7251 18.3457 20.9862 18.4242C21.0101 18.4314 21.0341 18.4387 21.0583 18.4459C21.0801 18.4524 21.1018 18.4589 21.1234 18.4654C21.3632 18.5369 21.5881 18.604 21.7576 18.6948C22.7335 19.2173 23.0485 20.4659 22.4373 21.3889C22.3312 21.5492 22.165 21.715 21.9878 21.8917C21.9719 21.9076 21.9558 21.9236 21.9397 21.9397C21.9236 21.9558 21.9076 21.9719 21.8917 21.9878C21.7149 22.165 21.5492 22.3312 21.3889 22.4373C20.4659 23.0485 19.2173 22.7335 18.6948 21.7576C18.604 21.5881 18.5369 21.3632 18.4654 21.1234C18.4589 21.1018 18.4524 21.0801 18.4459 21.0583C18.4387 21.0341 18.4314 21.0101 18.4242 20.9862C18.3457 20.7252 18.2728 20.4833 18.2564 20.2833Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRoundedMagniferZoomOut;
