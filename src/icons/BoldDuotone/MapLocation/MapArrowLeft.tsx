import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapArrowLeft = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M9.85639 15.9621C9.72902 16.2169 9.83984 16.5264 10.1 16.6424L19.5016 20.835C20.9975 21.5021 22.549 20.0209 21.8081 18.6331L18.6561 12.7294C18.4109 12.2702 18.4109 11.7298 18.6561 11.2706L21.8081 5.36689C22.549 3.97914 20.9975 2.49789 19.5016 3.16496L15.9773 4.73662C15.5545 4.9252 15.2101 5.25466 15.003 5.6688L9.85639 15.9621Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M8.46574 15.3904C8.34609 15.6297 8.05925 15.7324 7.81489 15.6235L2.99232 13.4728C1.66857 12.8825 1.66857 11.1181 2.99232 10.5278L11.8901 6.55983C12.3188 6.36864 12.7508 6.82023 12.5409 7.24008L8.46574 15.3904Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMapArrowLeft;
