import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHeartBroken = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15.0383 18.9111C17.9806 16.5917 22 14.0003 22 9.13734C22 4.27441 16.4998 0.825708 12 5.50088L10.8822 7.73593C10.6998 8.10073 10.6086 8.28314 10.6531 8.46224C10.6975 8.64134 10.8635 8.75987 11.1954 8.99695L13.111 10.3652C13.5268 10.6622 13.7346 10.8107 13.7612 11.0293C13.7878 11.2478 13.6215 11.4418 13.289 11.8298L11.6027 13.7971C11.3168 14.1307 11.1738 14.2975 11.1813 14.4933C11.1888 14.6891 11.3442 14.8444 11.6548 15.155L12.5996 16.0999C12.7952 16.2954 12.893 16.3932 12.9281 16.5202C12.9633 16.6471 12.9298 16.7812 12.8627 17.0495L12 20.5002C13 20.5002 14 19.7296 15.0383 18.9111Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M8.10627 18.2471C5.29819 16.0836 2 13.5424 2 9.13734C2 4.27441 7.50016 0.825708 12 5.50088L10.8822 7.73593C10.6998 8.10073 10.6086 8.28314 10.6531 8.46224C10.6975 8.64134 10.8635 8.75987 11.1954 8.99695L13.111 10.3652C13.5268 10.6622 13.7346 10.8107 13.7612 11.0293C13.7878 11.2478 13.6215 11.4418 13.289 11.8297L11.6027 13.7971C11.3168 14.1307 11.1738 14.2975 11.1813 14.4933C11.1888 14.6891 11.3442 14.8444 11.6548 15.155L12.5996 16.0999C12.7952 16.2954 12.893 16.3932 12.9281 16.5202C12.9633 16.6471 12.9298 16.7812 12.8627 17.0495L12 20.5002C11 20.5002 10 19.7296 8.96173 18.9111C8.68471 18.6927 8.39814 18.4719 8.10627 18.2471Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgHeartBroken;
