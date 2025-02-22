import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlbum = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.2855 9.04765 22.0625 10.6294 21.6165 13.793L21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M19.5619 7C19.7905 5.69523 18.7865 4.5 17.4619 4.5H6.53806C5.21341 4.5 4.2094 5.69523 4.43803 7"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M17.5 4.5C17.5284 4.24092 17.5426 4.11135 17.5428 4.00435C17.545 2.98072 16.774 2.12064 15.7562 2.01142C15.6498 2 15.5195 2 15.2588 2H8.74105C8.48041 2 8.35008 2 8.24368 2.01142C7.2259 2.12064 6.45487 2.98072 6.4571 4.00434C6.45733 4.11135 6.47152 4.2409 6.49989 4.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Circle
      cx={16.5}
      cy={11.5}
      r={1.5}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M20 20L17.1158 17.8514C16.1857 17.1586 14.8006 17.0896 13.7768 17.6851L13.51 17.8403C12.7985 18.2542 11.8306 18.1848 11.2157 17.6758L7.3775 14.4989C6.61142 13.8648 5.38257 13.8309 4.56722 14.4214L3.24329 15.3803"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgAlbum;
