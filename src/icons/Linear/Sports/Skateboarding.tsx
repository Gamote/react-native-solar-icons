import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSkateboarding = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3 17L4.20414 18.3379C4.58342 18.7594 5.12375 19 5.69073 19H18.3093C18.8762 19 19.4166 18.7594 19.7959 18.3379L21 17"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx={7} cy={21} r={1} fill="black" />
    <Circle cx={17} cy={21} r={1} fill="black" />
    <Circle cx={19} cy={4} r={2} stroke="black" strokeWidth={1.5} />
    <Path
      d="M15 16.4999V15.2491C15 15.1652 15 15.1233 14.999 15.0838C14.9732 14.1057 14.4721 13.2016 13.6563 12.6614C13.6234 12.6396 13.5842 12.6151 13.5057 12.566C13.4089 12.5055 13.3604 12.4752 13.3291 12.454C12.241 11.7153 12.1498 10.1456 13.145 9.28581C13.1735 9.26111 13.2125 9.22996 13.2903 9.1677L13.7358 8.81128C14.7607 7.99138 14.5413 6.37478 13.3349 5.85776C12.8119 5.63361 12.2123 5.67979 11.7297 5.98137L8.5 7.99995"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M7 15.5H7.37868C8.73694 15.5 10.0396 14.9604 11 14"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16.5 10C17.8131 10.3283 19.1869 10.3283 20.5 10"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgSkateboarding;
