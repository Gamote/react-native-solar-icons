import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGhost = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10 10.5C10 11.3284 9.55228 12 9 12C8.44772 12 8 11.3284 8 10.5C8 9.67157 8.44772 9 9 9C9.55228 9 10 9.67157 10 10.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1.25C6.04216 1.25 1.25 6.21861 1.25 12.3006V19.723C1.25 21.5695 3.16246 22.8461 4.8426 21.9808C5.52425 21.6297 6.33486 21.6808 6.97157 22.1181C8.19859 22.9606 9.80141 22.9606 11.0284 22.1181L11.3811 21.8759C11.7572 21.6176 12.2428 21.6176 12.6189 21.8759L12.9716 22.1181C14.1986 22.9606 15.8014 22.9606 17.0284 22.1181C17.6651 21.6808 18.4757 21.6297 19.1574 21.9808C20.8375 22.8461 22.75 21.5695 22.75 19.723V12.3006C22.75 6.21861 17.9578 1.25 12 1.25ZM2.75 12.3006C2.75 7.00485 6.91215 2.75 12 2.75C17.0879 2.75 21.25 7.00485 21.25 12.3006V19.723C21.25 20.5212 20.4605 20.9647 19.8442 20.6472C18.6697 20.0424 17.2693 20.133 16.1793 20.8815C15.4639 21.3728 14.5361 21.3728 13.8207 20.8815L13.468 20.6394C12.5804 20.0298 11.4196 20.0298 10.532 20.6394L10.1793 20.8815C9.46387 21.3728 8.53613 21.3728 7.8207 20.8815C6.73074 20.133 5.33026 20.0424 4.1558 20.6472C3.53949 20.9647 2.75 20.5212 2.75 19.723V12.3006Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgGhost;
