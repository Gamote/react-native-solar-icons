import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWineglassTriangle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 14.5714L20.5162 5.86382C21.5624 4.79408 20.7999 3 19.2991 3H4.70095C3.20008 3 2.43759 4.79409 3.48381 5.86382L12 14.5714ZM12 14.5714V21M12 21H16.2439M12 21H7.7561M7.47318 9.75H16.5268"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgWineglassTriangle;
