import * as React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEmojiFunnySquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8.9126 15.9331C10.1709 16.2485 11.5985 16.2487 13.0351 15.8638C14.4717 15.4788 15.7079 14.7649 16.64 13.8626"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Ellipse
      cx={14.5094}
      cy={9.77454}
      rx={1}
      ry={1.5}
      transform="rotate(-15 14.5094 9.77454)"
      fill={props.primaryColor}
    />
    <Ellipse
      cx={8.71402}
      cy={11.3278}
      rx={1}
      ry={1.5}
      transform="rotate(-15 8.71402 11.3278)"
      fill={props.primaryColor}
    />
    <Path
      d="M3.20356 14.357C2.09246 10.2103 1.53691 8.13698 2.47995 6.50359C3.42298 4.87021 5.49632 4.31466 9.643 3.20356C13.7897 2.09246 15.863 1.53691 17.4964 2.47995C19.1298 3.42298 19.6853 5.49632 20.7964 9.643C21.9075 13.7897 22.4631 15.863 21.5201 17.4964C20.577 19.1298 18.5037 19.6853 14.357 20.7964C10.2103 21.9075 8.13698 22.4631 6.50359 21.5201C4.87021 20.577 4.31466 18.5037 3.20356 14.357Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M13 15.9999L13.478 16.9737C13.8393 17.7099 14.7249 18.0193 15.4661 17.6685C16.2223 17.3105 16.5394 16.403 16.1708 15.6519L15.7115 14.7163"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgEmojiFunnySquare;
