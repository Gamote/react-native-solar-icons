import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStretching = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      cx={14.5}
      cy={4.5}
      r={2.5}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M5 21.9998L8.84856 20.6269C9.30437 20.4644 9.68576 20.142 9.92204 19.7197M19 21.9998V16.7677C19 15.5351 17.8958 14.5958 16.6792 14.7936L15.6667 14.9581M8.5 13.9998L7.88594 13.401C7.12031 12.6546 7.35935 11.3696 8.34221 10.9483L10.798 9.89585C11.7878 9.47165 12.8889 10.1977 12.8889 11.2746V13.895C12.8889 14.2369 12.8012 14.5731 12.6343 14.8715L11.9562 16.0835"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgStretching;
