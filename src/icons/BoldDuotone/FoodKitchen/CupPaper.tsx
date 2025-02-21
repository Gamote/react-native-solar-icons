import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCupPaper = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14.8149 2H9.18527C7.34749 2 6.42859 2 5.70585 2.44432C5.58115 2.52098 5.46223 2.60666 5.35004 2.70069C4.69979 3.24563 4.40893 4.11727 3.82722 5.86056L3.79139 5.96791C3.47263 6.92318 3.31325 7.40081 3.48163 7.76195C3.53477 7.87592 3.60893 7.97884 3.70022 8.06533C3.98949 8.33937 4.49301 8.33937 5.50006 8.33937H18.5001C19.5071 8.33937 20.0106 8.33937 20.2999 8.06533C20.3912 7.97884 20.4653 7.87592 20.5185 7.76195C20.6869 7.40081 20.5275 6.92318 20.2087 5.96791L20.1729 5.86056L20.1729 5.8605C19.5912 4.11727 19.3003 3.24562 18.6501 2.70069C18.5379 2.60666 18.419 2.52098 18.2943 2.44432C17.5715 2 16.6526 2 14.8149 2Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M10.958 22H13.044C14.6926 22 15.517 22 16.0802 21.5132C16.6435 21.0264 16.7629 20.2107 17.0018 18.5794L18.501 8.33936H5.50098L7.00019 18.5794C7.23902 20.2107 7.35843 21.0264 7.92171 21.5132C8.48499 22 9.30932 22 10.958 22Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6.7689 17H17.233L17.965 12H6.03687L6.7689 17Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgCupPaper;
