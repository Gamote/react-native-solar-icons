import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSnowflake = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 2V18M12 22V18M12 18L15 21M12 18L9 21M15 3L12 6L9 3"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M3.33985 6.99993L6.80395 8.99993M6.80395 8.99993L17.1963 14.9999M6.80395 8.99993L5.70587 4.90186M6.80395 8.99993L2.70587 10.098M17.1963 14.9999L20.6604 16.9999M17.1963 14.9999L21.2943 13.9019M17.1963 14.9999L18.2943 19.098"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M20.6602 6.99993L17.1961 8.99993M17.1961 8.99993L6.80375 14.9999M17.1961 8.99993L18.2941 4.90186M17.1961 8.99993L21.2941 10.098M6.80375 14.9999L3.33965 16.9999M6.80375 14.9999L2.70567 13.9019M6.80375 14.9999L5.70567 19.098"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgSnowflake;
