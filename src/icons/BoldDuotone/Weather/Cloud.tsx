import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloud = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 14.3529C22 17.4717 19.4416 20 16.2857 20H10.4995C9.55792 18.7465 9 17.1884 9 15.5C9 11.3579 12.3579 8 16.5 8C17.009 8 17.5062 8.05071 17.9868 8.14736C18.0649 8.42841 18.1216 8.71822 18.1551 9.01498C20.393 9.78024 22 11.8811 22 14.3529Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.4762 4C9.32028 4 6.7619 6.52827 6.7619 9.64706C6.7619 10.3369 6.88706 10.9978 7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H10.4995C9.55792 18.7465 9 17.1884 9 15.5C9 11.3579 12.3579 8 16.5 8C17.009 8 17.5062 8.05071 17.9868 8.14736C17.9721 8.09441 17.9566 8.04178 17.9403 7.98948C17.2237 5.67956 15.0484 4 12.4762 4Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgCloud;
