import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDisplay = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.87868 3.84352C2 4.68705 2 6.04468 2 8.75994V9.71993C2 12.4352 2 13.7928 2.87868 14.6363C3.75736 15.4799 5.17157 15.4799 8 15.4799H11.25H12.75H16C18.8284 15.4799 20.2426 15.4799 21.1213 14.6363C22 13.7928 22 12.4352 22 9.71993V8.75994C22 6.04468 22 4.68705 21.1213 3.84352C20.2426 3 18.8284 3 16 3H8C5.17157 3 3.75736 3 2.87868 3.84352Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M18.2374 19.5964L12.7502 17.8405V15.4795H11.2502V17.8405L5.76303 19.5964C5.37008 19.7221 5.15771 20.1299 5.28869 20.5071C5.41968 20.8844 5.84442 21.0882 6.23737 20.9625L12.0002 19.1184L17.763 20.9625C18.156 21.0882 18.5807 20.8844 18.7117 20.5071C18.8427 20.1299 18.6303 19.7221 18.2374 19.5964Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgDisplay;
