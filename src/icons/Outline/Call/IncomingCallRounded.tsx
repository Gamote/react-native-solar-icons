import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgIncomingCallRounded = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.6925 4.95069C9.52269 2.85457 6.68755 2.72685 5.00748 4.40692C4.10882 5.30558 3.31033 6.5005 3.2571 7.90469C3.17821 9.98563 3.71559 13.4409 7.13738 16.8626C10.5592 20.2844 14.0144 20.8218 16.0953 20.7429C17.4995 20.6897 18.6944 19.8912 19.5931 18.9925C21.2732 17.3125 21.1455 14.4773 19.0493 13.3075L17.8864 12.6585C16.5176 11.8946 14.7905 12.2201 13.6585 13.3384C13.6381 13.3533 13.5231 13.4323 13.3221 13.4421C13.0657 13.4546 12.473 13.3633 11.5548 12.4452C10.6364 11.5267 10.5454 10.934 10.5579 10.6776C10.5678 10.4768 10.6467 10.3619 10.6616 10.3415C11.7799 9.20952 12.1054 7.48244 11.3415 6.11362L10.6925 4.95069ZM6.06814 5.46758C7.17397 4.36175 8.78366 4.60834 9.38268 5.68169L10.0317 6.84462C10.4354 7.56803 10.2977 8.58417 9.58439 9.29749C9.51474 9.36714 9.09849 9.81278 9.05973 10.6043C9.02006 11.4146 9.38398 12.3956 10.4942 13.5058C11.604 14.6157 12.5848 14.9797 13.395 14.9403C14.1865 14.9018 14.6323 14.4859 14.7023 14.4158C15.4157 13.7025 16.432 13.5646 17.1554 13.9683L18.3183 14.6173C19.3917 15.2164 19.6383 16.826 18.5324 17.9319C17.7571 18.7072 16.9013 19.2113 16.0385 19.244C14.3032 19.3098 11.2774 18.8814 8.19804 15.802C5.11867 12.7226 4.69023 9.69686 4.75602 7.96152C4.78873 7.09874 5.29279 6.24293 6.06814 5.46758Z"
      fill={props.primaryColor}
    />
    <Path
      d="M18 9.75002C18.4142 9.75002 18.75 9.41423 18.75 9.00002C18.75 8.58581 18.4142 8.25002 18 8.25002H16.8107L19.5303 5.53035C19.8232 5.23746 19.8232 4.76258 19.5303 4.46969C19.2374 4.1768 18.7626 4.1768 18.4697 4.46969L15.75 7.18936V6.00002C15.75 5.58581 15.4142 5.25002 15 5.25002C14.5858 5.25002 14.25 5.58581 14.25 6.00002V9.00002C14.25 9.41423 14.5858 9.75002 15 9.75002H18Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgIncomingCallRounded;
