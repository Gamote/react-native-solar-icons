import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBombMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15.6646 2.82918C16.0351 2.64393 16.4856 2.7941 16.6708 3.16459L17.1708 4.16459C17.3561 4.53507 17.2059 4.98557 16.8354 5.17082C16.4649 5.35606 16.0144 5.20589 15.8292 4.83541L15.3292 3.83541C15.1439 3.46492 15.2941 3.01442 15.6646 2.82918Z"
      fill={props.primaryColor}
    />
    <Path
      d="M18.8292 7.16459C19.0144 6.7941 19.4649 6.64393 19.8354 6.82918L20.8354 7.32918C21.2059 7.51442 21.3561 7.96492 21.1708 8.33541C20.9856 8.70589 20.5351 8.85606 20.1646 8.67082L19.1646 8.17082C18.7941 7.98557 18.6439 7.53507 18.8292 7.16459Z"
      fill={props.primaryColor}
    />
    <Path
      d="M20.5303 4.53033C20.8232 4.23743 20.8232 3.76256 20.5303 3.46967C20.2374 3.17677 19.7626 3.17677 19.4697 3.46967L18.4697 4.46967C18.1768 4.76256 18.1768 5.23743 18.4697 5.53033C18.7626 5.82322 19.2374 5.82322 19.5303 5.53033L20.5303 4.53033Z"
      fill={props.primaryColor}
    />
    <Path
      d="M17 14.5C17 18.6421 13.6421 22 9.5 22C5.35786 22 2 18.6421 2 14.5C2 10.3579 5.35786 7 9.5 7C13.6421 7 17 10.3579 17 14.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M17.5302 7.53033L16.3722 8.68837C16.0486 8.30614 15.6938 7.95127 15.3115 7.62771L16.4696 6.46967C16.7625 6.17677 17.2373 6.17677 17.5302 6.46967C17.8231 6.76256 17.8231 7.23743 17.5302 7.53033Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgBombMinimalistic;
