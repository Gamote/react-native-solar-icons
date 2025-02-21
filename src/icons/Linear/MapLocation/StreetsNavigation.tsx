import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStreetsNavigation = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18 16.9208C19.1395 16.8215 19.9218 16.5974 20.5376 16.092C20.7401 15.9258 20.9258 15.7401 21.092 15.5376C22 14.4312 22 12.7875 22 9.5C22 6.21252 22 4.56878 21.092 3.46243C20.9258 3.25989 20.7401 3.07418 20.5376 2.90796C19.4312 2 17.7875 2 14.5 2H9.5C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07418 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07418 15.7401 3.25989 15.9258 3.46243 16.092C4.07821 16.5974 4.86048 16.8215 6 16.9208"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M20.5 15.5L14 10.5M3.5 3L14 10.5M20.5 3.5L14 10.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M15.2673 19.2006L13.932 16.5295C13.089 14.8432 12.6675 14 12 14C11.3325 14 10.911 14.8432 10.068 16.5295L8.73273 19.2006C8.22086 20.2245 7.96493 20.7365 8.00387 21.0588C8.06013 21.5245 8.41041 21.9006 8.87082 21.9897C9.18949 22.0514 9.71822 21.8324 10.7757 21.3943C11.1669 21.2322 11.3625 21.1512 11.5629 21.1097C11.8513 21.0501 12.1487 21.0501 12.4371 21.1097C12.6375 21.1512 12.8331 21.2322 13.2243 21.3943C14.2818 21.8324 14.8105 22.0514 15.1292 21.9897C15.5896 21.9006 15.9399 21.5245 15.9961 21.0588C16.0351 20.7365 15.7791 20.2245 15.2673 19.2006Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgStreetsNavigation;
