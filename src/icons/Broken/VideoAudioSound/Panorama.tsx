import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPanorama = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 5.85964C22 5.06508 21.2094 4.33374 19.883 3.75279C18.7083 3.23834 17.5 4.21963 17.5 5.50199V8.71946M22 5.85964C22 7.05487 20.2111 8.10705 17.5 8.71946M22 5.85964V8.99982M2 5.85964C2 5.06508 2.79055 4.33374 4.11705 3.75279C5.29169 3.23834 6.5 4.21963 6.5 5.50199V8.71946M2 5.85964V18.5761C2 20.467 6.47715 21.9998 12 21.9998C17.5228 21.9998 22 20.467 22 18.5761V12.9998M2 5.85964C2 7.05487 3.78889 8.10705 6.5 8.71946M6.5 8.71946C8.0779 9.07589 9.96818 9.28335 12 9.28335C14.0318 9.28335 15.9221 9.07589 17.5 8.71946"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M19.5 13C19.5 13.8284 18.8284 14.5 18 14.5C17.1716 14.5 16.5 13.8284 16.5 13C16.5 12.1716 17.1716 11.5 18 11.5C18.8284 11.5 19.5 12.1716 19.5 13Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M21 20L18.5044 17.8514C17.6996 17.1586 16.501 17.0896 15.6152 17.6851L15.3843 17.8403C14.7687 18.2542 13.9312 18.1848 13.3991 17.6758L10.0781 14.4989C9.41518 13.8648 8.35189 13.8309 7.64639 14.4214L6.29032 15.5565L2.5 19.1035"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgPanorama;
