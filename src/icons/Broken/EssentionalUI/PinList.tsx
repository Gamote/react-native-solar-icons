import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPinList = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.632 8.224c1.53 1.53 2.295 2.295 2.294 3.124a2 2 0 0 1-.162.788c-.328.762-1.333 1.162-3.344 1.963l-.145.057c-.57.227-.855.34-1.085.523a2 2 0 0 0-.444.492c-.158.247-.242.542-.41 1.132-.259.915-.389 1.373-.666 1.576a1 1 0 0 1-.714.186c-.341-.042-.678-.379-1.35-1.051l-3.13-3.13c-.673-.674-1.01-1.01-1.052-1.35a1 1 0 0 1 .186-.715c.203-.277.66-.407 1.576-.667.59-.167.885-.251 1.132-.409q.284-.181.492-.444c.182-.23.296-.515.523-1.085l.057-.145c.8-2.01 1.2-3.016 1.963-3.344a2 2 0 0 1 .788-.162c.362 0 .712.145 1.118.437M3.347 18.142l2.694-2.694M22 8h-5M22 12.5h-4M22 17h-1m-8 0h4"
    />
  </Svg>
);
export default SvgPinList;
