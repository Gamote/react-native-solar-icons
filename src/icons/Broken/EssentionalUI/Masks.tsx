import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMasks = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.5 17.221c1.058-.456 2.114-1.154 2.932-2.221M7.387 8.108l.7-2.729c.44-1.719.66-2.578 1.236-3.01.193-.145.41-.252.638-.317.684-.194 1.46.17 3.015.897 1.15.54 1.726.809 2.326 1q.314.099.632.176c.611.149 1.239.216 2.493.351 1.694.182 2.54.273 3.04.798.167.177.303.383.4.609.292.675.072 1.534-.369 3.253L21.021 11"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2.467 13c-.417-1.629-.618-2.46-.335-3.117.098-.226.234-.432.401-.609.5-.525 1.346-.616 3.04-.798 1.255-.135 1.882-.202 2.493-.35a10 10 0 0 0 .632-.178c.6-.19 1.175-.46 2.326-.999 1.554-.727 2.331-1.091 3.015-.897.229.065.445.172.638.317.575.432.796 1.291 1.236 3.01l.845 3.298c.994 3.876-1.284 6.658-3.026 8.145-.531.454-.797.68-1.825.968s-1.367.23-2.044.116C7.755 21.548 4.67 20.43 3.514 17"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5.259 13.296c.06-.62.521-1.175 1.19-1.355s1.346.072 1.708.578M19.18 8.936c-.06-.62-.521-1.175-1.19-1.354-.67-.18-1.346.071-1.708.577M11.055 11.742c.06-.619.52-1.175 1.19-1.354s1.346.072 1.708.578"
    />
    <Path
      fill="#000"
      d="M11.096 7.042a.75.75 0 0 1-1.22-.872zm.904-.29c-.38-.1-.73.048-.904.29l-1.22-.872c.55-.77 1.553-1.123 2.512-.866zm.478.314A.9.9 0 0 0 12 6.753l.388-1.45c.524.141.966.445 1.276.843z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.2 16.231s-1.024-.76-2.812-.282c-1.787.48-2.294 1.65-2.294 1.65"
    />
  </Svg>
);
export default SvgMasks;
