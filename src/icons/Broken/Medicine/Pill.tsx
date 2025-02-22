import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPill = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2.59996 6C2.92854 5.27154 3.3921 4.58912 3.99066 3.99057C6.64475 1.33648 10.9479 1.33648 13.602 3.99057L20.0095 10.3981C21.0291 11.4177 21.657 12.6807 21.8932 14M2.10693 10C2.34316 11.3193 2.97106 12.5823 3.99066 13.6019L10.3982 20.0094C13.0523 22.6635 17.3554 22.6635 20.0095 20.0094C20.6081 19.4109 21.0716 18.7285 21.4002 18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16.8057 7.19434C16.8057 7.19434 16.2649 9.99999 13.1322 13.1327C9.99952 16.2653 7.19434 16.8057 7.19434 16.8057"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgPill;
