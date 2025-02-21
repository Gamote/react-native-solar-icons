import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHanger = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6599 5.75C10.8238 5.75 10.2859 6.34219 10.2859 6.90909C10.2859 7.3233 9.95009 7.65909 9.53587 7.65909C9.12166 7.65909 8.78587 7.3233 8.78587 6.90909C8.78587 5.36727 10.1499 4.25 11.6599 4.25C13.1699 4.25 14.5339 5.36727 14.5339 6.90909C14.5339 7.58928 14.2867 8.22354 13.8447 8.7044C13.7047 8.85669 13.5498 9.00942 13.4087 9.14851C13.3836 9.17327 13.3589 9.1976 13.3348 9.22141C13.1678 9.38672 13.0204 9.53616 12.8942 9.68456C12.8069 9.78721 12.7398 9.87796 12.6891 9.95888C13.2576 10.0668 13.8097 10.2856 14.3037 10.6187L21.7362 15.629C22.6859 16.2692 22.9431 17.3256 22.6127 18.2165C22.2877 19.0928 21.4221 19.75 20.2975 19.75H3.70253C2.58986 19.75 1.728 19.1049 1.39588 18.2392C1.05827 17.3591 1.29679 16.3086 2.22379 15.6566L9.31949 10.6653C9.85596 10.2879 10.4658 10.0483 11.0932 9.94251C11.1987 9.43649 11.4862 9.02479 11.7515 8.71278C11.9233 8.51074 12.1114 8.32181 12.2799 8.15509C12.3076 8.12767 12.3347 8.10096 12.3611 8.07485C12.503 7.93486 12.6275 7.81207 12.7404 7.68925C12.9225 7.49112 13.0339 7.22136 13.0339 6.90909C13.0339 6.34219 12.496 5.75 11.6599 5.75ZM13.4653 11.8624C12.9827 11.5371 12.3995 11.373 11.8102 11.3799C11.2258 11.3866 10.6527 11.5614 10.1825 11.8922L3.0868 16.8834C2.74171 17.1262 2.69618 17.4407 2.79637 17.7019C2.90206 17.9775 3.19986 18.25 3.70253 18.25H20.2975C20.8058 18.25 21.1032 17.9729 21.2063 17.6949C21.304 17.4314 21.2545 17.1133 20.8978 16.8728L13.4653 11.8624Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgHanger;
