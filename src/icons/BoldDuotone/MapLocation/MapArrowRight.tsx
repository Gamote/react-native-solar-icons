import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapArrowRight = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14.1427 15.9621C14.2701 16.2169 14.1593 16.5264 13.8991 16.6424L4.49746 20.835C3.00163 21.5021 1.45007 20.0209 2.19099 18.6331L5.34302 12.7294C5.58818 12.2702 5.58818 11.7298 5.34302 11.2706L2.19099 5.36689C1.45006 3.97914 3.00163 2.49789 4.49746 3.16496L8.02178 4.73662C8.44465 4.9252 8.78899 5.25466 8.99606 5.6688L14.1427 15.9621Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M15.5337 15.3904C15.6534 15.6297 15.9402 15.7324 16.1846 15.6235L21.0071 13.4728C22.3309 12.8825 22.3309 11.1181 21.0071 10.5278L12.1094 6.55983C11.6807 6.36864 11.2486 6.82023 11.4585 7.24008L15.5337 15.3904Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMapArrowRight;
