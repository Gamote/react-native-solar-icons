import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDelivery = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M9.56443 8.73049L10.0789 10.5926C10.5639 12.3481 10.8064 13.2259 11.5194 13.6252C12.2323 14.0244 13.1374 13.7892 14.9474 13.3188L16.8673 12.8199C18.6774 12.3495 19.5824 12.1143 19.9941 11.4227C20.4057 10.7312 20.1632 9.85344 19.6782 8.09788L19.1638 6.2358C18.6788 4.48023 18.4363 3.60244 17.7233 3.20319C17.0103 2.80394 16.1052 3.03915 14.2952 3.50955L12.3753 4.00849C10.5652 4.47889 9.66021 4.71409 9.24856 5.40562C8.83692 6.09714 9.07943 6.97493 9.56443 8.73049Z"
      fill="black"
    />
    <Path
      d="M2.27749 5.24694C2.38823 4.84781 2.80157 4.61402 3.2007 4.72476L4.9044 5.19744C5.82129 5.45183 6.5469 6.15866 6.80003 7.07489L8.95106 14.8609L9.10935 15.4075C9.74249 15.6438 10.2863 16.0866 10.6314 16.6747L10.9414 16.579L19.8115 14.2739C20.2124 14.1697 20.6219 14.4102 20.7261 14.8111C20.8303 15.212 20.5897 15.6214 20.1888 15.7256L11.3515 18.0223L11.0228 18.1238C11.0161 19.3947 10.1392 20.5555 8.81236 20.9003C7.22189 21.3136 5.58709 20.3982 5.16092 18.8556C4.73476 17.313 5.67861 15.7274 7.26908 15.3141C7.3479 15.2936 7.42682 15.2764 7.5057 15.2623L5.35419 7.47433C5.24592 7.08242 4.92897 6.76092 4.50338 6.64284L2.79968 6.17016C2.40054 6.05942 2.16675 5.64608 2.27749 5.24694Z"
      fill="black"
    />
  </Svg>
);
export default SvgDelivery;
