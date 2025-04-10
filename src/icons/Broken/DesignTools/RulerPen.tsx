import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRulerPen = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 7V6C22 4.11438 22 3.17157 21.4142 2.58579C20.8284 2 19.8856 2 18 2L16 2C14.1144 2 13.1716 2 12.5858 2.58579C12 3.17157 12 4.11438 12 6L12 18C12 19.8856 12 20.8284 12.5858 21.4142C13.1716 22 14.1144 22 16 22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V11"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 12H14M12 6L14 6M12 18H14M12 15L15 15M12 9L15 9"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2 6L2 5C2 3.34315 3.34315 2 5 2C6.65685 2 8 3.34315 8 5V6M2 6C2 6 3.125 7 5 7C6.875 7 8 6 8 6M2 6L2 10.5462M8 6V15.1935C8 15.8161 8 16.1275 7.96223 16.433C7.91768 16.7934 7.834 17.1479 7.71267 17.4902C7.60981 17.7804 7.47057 18.0589 7.1921 18.6158L6.01206 20.9759M6.01206 20.9759L5.72361 21.5528C5.58657 21.8269 5.30643 22 5 22C4.69357 22 4.41343 21.8269 4.27639 21.5528L3.98794 20.9759M6.01206 20.9759H3.98794M3.98794 20.9759L2.8079 18.6158C2.52943 18.0589 2.39019 17.7804 2.28733 17.4902C2.166 17.1479 2.08232 16.7934 2.03777 16.433C2 16.1275 2 15.8162 2 15.1935L2 14.3224"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgRulerPen;
