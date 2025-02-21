import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgListHeart = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16.5203 18.3408L16.0758 18.9449L16.0758 18.9449L16.5203 18.3408ZM17.5 13.8296L16.9737 14.364C17.2657 14.6515 17.7343 14.6515 18.0263 14.364L17.5 13.8296ZM18.4797 18.3408L18.0351 17.7367L18.0351 17.7367L18.4797 18.3408ZM17.5 18.8201L17.5 19.5701L17.5 18.8201ZM16.9649 17.7367C16.4677 17.3709 15.8871 16.891 15.4382 16.374C14.9683 15.8329 14.75 15.3733 14.75 15.0361H13.25C13.25 15.9337 13.7742 16.7455 14.3056 17.3575C14.858 17.9937 15.5376 18.5488 16.0758 18.9449L16.9649 17.7367ZM14.75 15.0361C14.75 14.2796 15.0929 13.9195 15.4138 13.8038C15.7508 13.6823 16.3333 13.7332 16.9737 14.364L18.0263 13.2953C17.0918 12.3749 15.9243 12.0252 14.905 12.3927C13.8697 12.766 13.25 13.7847 13.25 15.0361H14.75ZM18.9242 18.9449C19.4624 18.5488 20.142 17.9937 20.6944 17.3575C21.2258 16.7455 21.75 15.9337 21.75 15.0361H20.25C20.25 15.3733 20.0317 15.8329 19.5618 16.374C19.1129 16.891 18.5323 17.3709 18.0351 17.7367L18.9242 18.9449ZM21.75 15.0361C21.75 13.7847 21.1303 12.766 20.095 12.3927C19.0757 12.0252 17.9082 12.3749 16.9737 13.2953L18.0263 14.364C18.6667 13.7332 19.2492 13.6823 19.5862 13.8038C19.9071 13.9195 20.25 14.2796 20.25 15.0361H21.75ZM16.0758 18.9449C16.4541 19.2232 16.8783 19.5701 17.5 19.5701L17.5 18.0701C17.4796 18.0701 17.4637 18.071 17.4032 18.0387C17.3121 17.99 17.1982 17.9084 16.9649 17.7367L16.0758 18.9449ZM18.0351 17.7367C17.8019 17.9084 17.688 17.99 17.5968 18.0387C17.5363 18.071 17.5204 18.0701 17.5 18.0701L17.5 19.5701C18.1217 19.5701 18.5459 19.2232 18.9242 18.9449L18.0351 17.7367Z"
      fill={props.primaryColor}
    />
    <Path
      d="M10 14H3"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10 18H3"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M3 6L13.5 6M20 6L17.75 6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M20 10L9.5 10M3 10H5.25"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgListHeart;
