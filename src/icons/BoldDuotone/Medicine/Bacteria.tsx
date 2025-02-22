import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBacteria = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6 15C6 13.3431 7.34315 12 9 12C10.6569 12 12 13.3431 12 15C12 16.6569 10.6569 18 9 18C7.34315 18 6 16.6569 6 15Z"
      fill={props.primaryColor}
    />
    <Path
      d="M14.4648 7.17134C14.4648 7.17134 15.7077 6.99995 16.5862 7.87844C17.4647 8.75694 17.2933 9.99977 17.2933 9.99977"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8.99989 9.29303C8.99989 9.29303 7.75706 9.46441 6.87857 8.58592C6.00007 7.70743 6.17146 6.4646 6.17146 6.4646"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M19.0001 13.1362C19.0001 13.1362 17.8381 13.6092 17.5165 14.8093C17.195 16.0093 17.9648 16.9999 17.9648 16.9999"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13.4209 17.772L14.9995 19"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM5.60721 10.7869C5.76567 10.4042 5.58389 9.96547 5.20118 9.80701C4.81848 9.64854 4.37978 9.83033 4.22131 10.213L3.80725 11.213C3.64879 11.5957 3.83057 12.0344 4.21327 12.1929C4.59598 12.3514 5.03468 12.1696 5.19314 11.7869L5.60721 10.7869ZM14.5 11.25C14.9142 11.25 15.25 11.5858 15.25 12V14C15.25 14.4142 14.9142 14.75 14.5 14.75C14.0858 14.75 13.75 14.4142 13.75 14V12C13.75 11.5858 14.0858 11.25 14.5 11.25ZM12 4.25H10C9.58579 4.25 9.25 4.58579 9.25 5C9.25 5.41421 9.58579 5.75 10 5.75H12C12.4142 5.75 12.75 5.41421 12.75 5C12.75 4.58579 12.4142 4.25 12 4.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.5 9.5L11.5 8.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBacteria;
