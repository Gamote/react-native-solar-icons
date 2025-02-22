import * as React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBombEmoji = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10 16L12 16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M14 12.5C14 13.3284 13.5523 14 13 14C12.4477 14 12 13.3284 12 12.5C12 11.6716 12.4477 11 13 11C13.5523 11 14 11.6716 14 12.5Z"
      fill={props.primaryColor}
    />
    <Ellipse cx={9} cy={12.5} rx={1} ry={1.5} fill={props.primaryColor} />
    <Path
      d="M17 7L15 9"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M17.9811 2.35316C18.1668 1.88228 18.8332 1.88228 19.0189 2.35316L19.6733 4.01242C19.73 4.15618 19.8438 4.26998 19.9876 4.32668L21.6468 4.98108C22.1177 5.16679 22.1177 5.83321 21.6468 6.01892L19.9876 6.67332C19.8438 6.73002 19.73 6.84382 19.6733 6.98758L19.0189 8.64684C18.8332 9.11772 18.1668 9.11772 17.9811 8.64684L17.3267 6.98758C17.27 6.84382 17.1562 6.73002 17.0124 6.67332L15.3532 6.01892C14.8823 5.83321 14.8823 5.16679 15.3532 4.98108L17.0124 4.32668C17.1562 4.26998 17.27 4.15618 17.3267 4.01242L17.9811 2.35316Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M5.75 8.00337C6.85315 7.36523 8.13392 7 9.5 7C13.6421 7 17 10.3579 17 14.5C17 18.6421 13.6421 22 9.5 22C5.35786 22 2 18.6421 2 14.5C2 13.1339 2.36523 11.8532 3.00337 10.75"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBombEmoji;
