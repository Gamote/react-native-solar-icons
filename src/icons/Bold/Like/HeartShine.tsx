import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHeartShine = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L6.87359 5.81293C7.16648 6.10582 7.16648 6.5807 6.87359 6.87359C6.5807 7.16648 6.10582 7.16648 5.81293 6.87359L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967ZM18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L18.1871 6.87359C17.8942 7.16648 17.4193 7.16648 17.1264 6.87359C16.8335 6.5807 16.8335 6.10582 17.1264 5.81293L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM6.87338 17.1266C7.16627 17.4195 7.16627 17.8944 6.87338 18.1873L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L5.81272 17.1266C6.10561 16.8337 6.58048 16.8337 6.87338 17.1266ZM17.1266 17.1266C17.4195 16.8337 17.8944 16.8337 18.1873 17.1266L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L17.1266 18.1873C16.8337 17.8944 16.8337 17.4195 17.1266 17.1266ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M7 11.0595C7 13.6018 9.00971 14.9566 10.4809 16.1692C11 16.5971 11.5 17 12 17C12.5 17 13 16.5971 13.5191 16.1692C14.9903 14.9566 17 13.6018 17 11.0595C17 8.51718 14.2499 6.71421 12 9.15837C9.75008 6.71421 7 8.51718 7 11.0595Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgHeartShine;
