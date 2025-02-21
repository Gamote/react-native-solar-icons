import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGalleryWide = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M4 7L3.98779 6C4.10022 5.06898 4.33494 4.42559 4.82498 3.93726C5.76553 3 7.27932 3 10.3069 3H13.5181C16.5457 3 18.0595 3 19 3.93726C19.4901 4.42559 19.7248 5.06898 19.8372 6V7"
      stroke="black"
      strokeWidth={1.5}
    />
    <Circle cx={17.5} cy={10.5} r={1.5} stroke="black" strokeWidth={1.5} />
    <Path
      d="M2 14.5001L3.75159 12.9675C4.66286 12.1702 6.03628 12.2159 6.89249 13.0721L11.1822 17.3618C11.8694 18.0491 12.9512 18.1428 13.7464 17.5839L14.0446 17.3744C15.1888 16.5702 16.7369 16.6634 17.7765 17.599L21 20.5001"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgGalleryWide;
