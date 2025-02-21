import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMirror = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5.63636 22H18.3636C20.3719 22 22 20.3719 22 18.3636C22 17.6105 21.3895 17 20.6364 17H16.8284C16.298 17 15.7893 17.2107 15.4142 17.5858L14.5858 18.4142C14.2107 18.7893 13.702 19 13.1716 19H10.8284C10.298 19 9.78929 18.7893 9.41421 18.4142L8.58579 17.5858C8.21071 17.2107 7.70201 17 7.17157 17H3.36364C2.61052 17 2 17.6105 2 18.3636C2 20.3719 3.62806 22 5.63636 22Z"
      fill="black"
    />
    <Path
      d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 13.2414 20.7487 14.4241 20.2941 15.5H16.8284C15.9002 15.5 15.0099 15.8687 14.3536 16.5251L13.5251 17.3536C13.4314 17.4473 13.3042 17.5 13.1716 17.5H10.8284C10.6958 17.5 10.5686 17.4473 10.4749 17.3536L9.64645 16.5251C8.99007 15.8687 8.09983 15.5 7.17157 15.5H3.70591C3.25134 14.4241 3 13.2414 3 12Z"
      fill="black"
    />
  </Svg>
);
export default SvgMirror;
