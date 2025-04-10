import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFolderPathConnect = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M16.5 7.5L13.5 7.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M5 5.21734C5 4.64369 5 4.35687 5.04855 4.11795C5.26225 3.0662 6.14822 2.24352 7.28087 2.04508C7.53817 2 7.84705 2 8.46482 2C8.7355 2 8.87083 2 9.0009 2.01129C9.56166 2.05999 10.0936 2.26457 10.5272 2.59833C10.6277 2.67575 10.7234 2.76461 10.9148 2.94234L11.3 3.3C11.871 3.83026 12.1566 4.09538 12.4985 4.27203C12.6863 4.36906 12.8855 4.44569 13.0922 4.5004C13.4685 4.6 13.8723 4.6 14.6799 4.6H14.9415C16.7841 4.6 17.7055 4.6 18.3043 5.10015C18.3594 5.14616 18.4118 5.19484 18.4614 5.24599C19 5.80208 19 6.6576 19 8.36864V9.8C19 12.2513 19 13.477 18.1799 14.2385C17.3598 15 16.0399 15 13.4 15H10.6C7.96013 15 6.6402 15 5.8201 14.2385C5 13.477 5 12.2513 5 9.8V5.21734Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M22 20H14M2 20H10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M12 18V15"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle
      cx={12}
      cy={20}
      r={2}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgFolderPathConnect;
