import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGraphNew = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 5C22 6.65685 20.6569 8 19 8C17.3431 8 16 6.65685 16 5C16 3.34315 17.3431 2 19 2C20.6569 2 22 3.34315 22 5Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.612 2.03826C14.59 2 13.3988 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 10.6012 22 9.41 21.9617 8.38802C21.1703 9.08042 20.1342 9.5 19 9.5C16.5147 9.5 14.5 7.48528 14.5 5C14.5 3.86584 14.9196 2.82967 15.612 2.03826ZM17.4801 9.42383C17.7983 9.68901 17.8413 10.1619 17.5762 10.4801L15.7473 12.6748C15.4189 13.069 15.1228 13.4244 14.8462 13.6742C14.5452 13.9459 14.1662 14.188 13.6667 14.188C13.1672 14.188 12.7881 13.9459 12.4872 13.6742C12.2106 13.4244 11.9145 13.069 11.586 12.6748L11.2936 12.3239C10.9228 11.8789 10.6951 11.6085 10.5075 11.4391C10.4205 11.3606 10.3689 11.3292 10.3442 11.3173C10.3392 11.3148 10.3356 11.3134 10.3333 11.3125L10.3292 11.3142L10.3225 11.3173C10.2977 11.3292 10.2461 11.3606 10.1591 11.4391C9.97155 11.6085 9.74385 11.8789 9.37306 12.3239L7.57617 14.4801C7.31099 14.7983 6.83807 14.8413 6.51986 14.5762C6.20165 14.311 6.15866 13.8381 6.42383 13.5199L8.25267 11.3253C8.58113 10.931 8.87725 10.5756 9.15384 10.3258C9.45478 10.0541 9.83384 9.81205 10.3333 9.81205C10.8328 9.81205 11.2119 10.0541 11.5128 10.3258C11.7894 10.5756 12.0855 10.931 12.414 11.3252L12.7064 11.6761C13.0772 12.1211 13.3049 12.3915 13.4925 12.5609C13.5795 12.6394 13.6311 12.6708 13.6558 12.6827L13.659 12.6842C13.6624 12.6858 13.6667 12.6875 13.6667 12.6875C13.6689 12.6866 13.6725 12.6852 13.6775 12.6827C13.7023 12.6708 13.7539 12.6394 13.8409 12.5609C14.0284 12.3915 14.2562 12.1211 14.6269 11.6761L16.4238 9.51986C16.689 9.20165 17.1619 9.15866 17.4801 9.42383Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgGraphNew;
