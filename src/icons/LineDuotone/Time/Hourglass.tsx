import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHourglass = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14.9577 9.07107L12 12L9.0423 9.07107L9.0423 9.07107C6.11981 6.177 4.65857 4.72997 5.06765 3.48149C5.10282 3.37417 5.14649 3.26977 5.19825 3.16926C5.80046 2 7.86697 2 12 2C16.133 2 18.1995 2 18.8017 3.16926C18.8535 3.26977 18.8972 3.37417 18.9323 3.48149C19.3414 4.72997 17.8802 6.177 14.9577 9.07107Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M9.0423 14.9289L12 12L14.9577 14.9289C17.8802 17.823 19.3414 19.27 18.9323 20.5185C18.8972 20.6258 18.8535 20.7302 18.8017 20.8307C18.1995 22 16.133 22 12 22C7.86697 22 5.80046 22 5.19825 20.8307C5.14649 20.7302 5.10282 20.6258 5.06765 20.5185C4.65857 19.27 6.11981 17.823 9.04229 14.9289L9.0423 14.9289Z"
      stroke="black"
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgHourglass;
