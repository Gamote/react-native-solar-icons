import * as React from "react";
import Svg, { Ellipse, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGolf = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Ellipse
      opacity={0.5}
      cx={12}
      cy={18.5}
      rx={10}
      ry={3.5}
      fill={props.primaryColor}
    />
    <Path
      d="M11.9999 1.25C12.4141 1.25 12.7499 1.58579 12.7499 2V3.03647L17.7577 5.54032L17.8117 5.56731C18.5461 5.93447 19.1721 6.24743 19.6078 6.55149C20.0495 6.85982 20.514 7.3075 20.514 8C20.514 8.6925 20.0495 9.14018 19.6078 9.44851C19.1721 9.75257 18.5461 10.0655 17.8117 10.4327L12.7499 12.9635V18C12.7499 18.4142 12.4141 18.75 11.9999 18.75C11.5857 18.75 11.2499 18.4142 11.2499 18V12.5162C11.2497 12.5058 11.2497 12.4953 11.2499 12.4849V3.51509C11.2497 3.50466 11.2497 3.49421 11.2499 3.48375V2C11.2499 1.58579 11.5857 1.25 11.9999 1.25Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgGolf;
