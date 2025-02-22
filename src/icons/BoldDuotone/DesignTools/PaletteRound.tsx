import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPaletteRound = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7 18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18C5 17.4477 5.44772 17 6 17C6.55228 17 7 17.4477 7 18Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.4}
      d="M10 6V18C10 20.2091 8.20914 22 6 22C3.79086 22 2 20.2091 2 18V6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.7}
      d="M9.24756 20.336L13.2218 16.3617L19.0599 10.2721C20.5819 8.68462 20.5554 6.17162 19.0003 4.61654C17.4218 3.03798 14.8624 3.03798 13.2838 4.61654L10 7.90039V18.0002C10 18.8721 9.72106 19.6788 9.24756 20.336Z"
      fill={props.primaryColor}
    />
    <Path
      d="M13.2218 16.3617L9.24756 20.336C9.72014 19.6801 9.99891 18.8752 10 18.0053C9.99711 20.212 8.20736 22 6 22H17.8994C20.1086 22 21.8994 20.2091 21.8994 18C21.8994 15.7909 20.1086 14 17.8994 14H15.486L13.2218 16.3617Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgPaletteRound;
