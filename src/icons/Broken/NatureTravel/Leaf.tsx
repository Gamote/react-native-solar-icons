import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLeaf = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 9L16 5M12 14.5L15 11.5M18.5 8L16.875 9.625M12 19.5L13.875 17.625M19.5 12L15.75 15.75"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 22C16.4183 22 20 18.3541 20 13.8567C20 9.39453 17.4467 4.18759 13.4629 2.32555C12.9986 2.10852 12.4993 2 12 2M12 22C7.58172 22 4 18.3541 4 13.8567C4 12.2707 4.32258 10.5906 4.91731 9M12 22V2M12 2C11.5007 2 11.0014 2.10852 10.5371 2.32555C8.93605 3.07388 7.56606 4.36246 6.5 5.92583"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgLeaf;
