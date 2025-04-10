import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPaletteRound = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 8V6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6V18C10 20.2091 8.20914 22 6 22C3.79086 22 2 20.2091 2 18V12"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10 8.24256L13.3137 4.9289C14.8758 3.3668 17.4084 3.3668 18.9705 4.9289C20.5326 6.49099 20.5326 9.02365 18.9705 10.5858L9.3064 20.2499"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M18 22L18 21.25H18V22ZM18 14L18 14.75L18 14ZM22 18L21.25 18L22 18ZM13 22.75C13.4142 22.75 13.75 22.4142 13.75 22C13.75 21.5858 13.4142 21.25 13 21.25L13 22.75ZM17 21.25C16.5858 21.25 16.25 21.5858 16.25 22C16.25 22.4142 16.5858 22.75 17 22.75V21.25ZM15.5 14.75L18 14.75L18 13.25L15.5 13.25L15.5 14.75ZM21.25 18C21.25 19.7949 19.7949 21.25 18 21.25L18 22.75C20.6234 22.75 22.75 20.6234 22.75 18L21.25 18ZM22.75 18C22.75 15.3766 20.6234 13.25 18 13.25L18 14.75C19.7949 14.75 21.25 16.2051 21.25 18L22.75 18ZM13 21.25L6 21.25L6 22.75L13 22.75L13 21.25ZM18 21.25H17V22.75H18V21.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M7 18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18C5 17.4477 5.44772 17 6 17C6.55228 17 7 17.4477 7 18Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgPaletteRound;
