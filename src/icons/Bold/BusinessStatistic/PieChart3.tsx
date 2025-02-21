import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPieChart3 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6.4443 3.68518C6.97115 3.33315 7.52766 3.0337 8.10577 2.78928C9.50868 2.19615 10.2101 1.89958 11.1051 2.49284C12 3.0861 12 4.05736 12 5.99988V7.99987C12 9.88549 12 10.8283 12.5858 11.4141C13.1716 11.9999 14.1144 11.9999 16 11.9999H18C19.9425 11.9999 20.9138 11.9999 21.507 12.8948C22.1003 13.7897 21.8037 14.4912 21.2106 15.8941C20.9662 16.4722 20.6667 17.0287 20.3147 17.5556C19.2159 19.2001 17.6541 20.4818 15.8268 21.2387C13.9996 21.9955 11.9889 22.1936 10.0491 21.8077C8.10929 21.4219 6.32746 20.4695 4.92894 19.0709C3.53041 17.6724 2.578 15.8906 2.19215 13.9508C1.8063 12.011 2.00433 10.0003 2.76121 8.17304C3.51809 6.34578 4.79981 4.78399 6.4443 3.68518Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.7737 2.12818C13.877 1.72704 14.2859 1.48555 14.687 1.58879C18.4657 2.56135 21.4388 5.53449 22.4113 9.31314C22.5146 9.71427 22.2731 10.1232 21.872 10.2264C21.4708 10.3297 21.0619 10.0882 20.9587 9.68702C20.1224 6.43763 17.5625 3.87779 14.3131 3.04145C13.912 2.9382 13.6705 2.52932 13.7737 2.12818Z"
      fill="black"
    />
  </Svg>
);
export default SvgPieChart3;
