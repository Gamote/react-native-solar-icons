import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFilters = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z"
      fill={props.primaryColor}
    />
    <Path
      d="M5.03349 10.7837C3.22163 11.8163 2 13.7656 2 16.0002C2 19.3139 4.68629 22.0002 8 22.0002C11.3137 22.0002 14 19.3139 14 16.0002C14 15.7439 13.9839 15.4913 13.9527 15.2435C13.3301 15.4109 12.6755 15.5002 12 15.5002C8.84139 15.5002 6.13882 13.5477 5.03349 10.7837Z"
      fill={props.primaryColor}
    />
    <Path
      d="M15.3866 14.6939C15.4611 15.1181 15.5 15.5546 15.5 16.0002C15.5 18.0909 14.6446 19.9817 13.2646 21.3419C14.0849 21.7627 15.0147 22.0002 16 22.0002C19.3137 22.0002 22 19.3139 22 16.0002C22 13.7656 20.7783 11.8163 18.9665 10.7837C18.2876 12.4813 17.0062 13.8728 15.3866 14.6939Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgFilters;
