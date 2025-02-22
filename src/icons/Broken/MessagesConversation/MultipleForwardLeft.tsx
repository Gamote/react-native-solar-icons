import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMultipleForwardLeft = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18 10.1318C16.3867 8.97769 14.5454 8.57172 13.0001 8.57172V6.22714C13.0001 5.26915 13.0001 4.79015 12.7049 4.6576C12.4098 4.52505 12.0517 4.84327 11.3357 5.47973L7.36344 9.01066C5.79482 10.405 5.0105 11.1022 5.0105 12.0003C5.0105 12.8984 5.79481 13.5956 7.36344 14.9899L11.3357 18.5209C12.0517 19.1573 12.4098 19.4755 12.7049 19.343C13.0001 19.2104 13.0001 18.7314 13.0001 17.7735V15.4289C16.6001 15.4289 20.5001 17.1432 22.0001 20.0003C22.0001 17.5686 21.6228 15.622 21 14.0744"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.46129 4.5L3.24509 9.34362C2.45098 10.081 1.99976 11.1158 1.99976 12.1994C1.99976 13.3418 2.50097 14.4266 3.37087 15.1671L8.46129 19.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgMultipleForwardLeft;
