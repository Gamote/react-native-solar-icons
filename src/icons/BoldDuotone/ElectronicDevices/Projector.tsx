import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgProjector = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6.25 9.4999C6.24995 9.08569 5.91412 8.74995 5.4999 8.75C5.08569 8.75005 4.74995 9.08588 4.75 9.5001L4.7502 11.0002C4.75025 11.4144 5.08608 11.7502 5.50029 11.7501C5.91451 11.75 6.25025 11.4142 6.2502 11L6.25 9.4999Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 9C19 11.7614 16.7614 14 14 14C11.2386 14 9 11.7614 9 9C9 6.23858 11.2386 4 14 4C16.7614 4 19 6.23858 19 9ZM13.25 7C13.25 6.58579 13.5858 6.25 14 6.25C15.5188 6.25 16.75 7.48122 16.75 9C16.75 10.5188 15.5188 11.75 14 11.75C12.4812 11.75 11.25 10.5188 11.25 9C11.25 8.58579 11.5858 8.25 12 8.25C12.4142 8.25 12.75 8.58579 12.75 9C12.75 9.69036 13.3096 10.25 14 10.25C14.6904 10.25 15.25 9.69036 15.25 9C15.25 8.30964 14.6904 7.75 14 7.75C13.5858 7.75 13.25 7.41421 13.25 7Z"
      fill="black"
    />
    <Path
      opacity={0.5}
      d="M14 14C16.7614 14 19 11.7614 19 9C19 7.88234 18.6333 6.85034 18.0136 6.01774C18.7706 6.04096 19.3783 6.0946 19.8765 6.21845C20.3952 6.34741 20.7951 6.5525 21.1213 6.87868C22 7.75736 22 9.17157 22 12C22 14.8284 22 16.2426 21.1213 17.1213C20.5744 17.6682 19.82 17.8747 18.6463 17.9527L19.6431 19.6141C19.8562 19.9693 19.7411 20.43 19.3859 20.6431C19.0307 20.8562 18.57 20.7411 18.3569 20.3859L16.9245 17.9986C16.6343 18 16.3266 18 16 18H8C7.67341 18 7.36568 18 7.07545 17.9986L5.64312 20.3859C5.43001 20.7411 4.96931 20.8562 4.61413 20.6431C4.25894 20.43 4.14377 19.9693 4.35688 19.6141L5.35373 17.9527C4.17999 17.8747 3.42559 17.6682 2.87868 17.1213C2 16.2426 2 14.8284 2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6H9.99963C9.37194 6.83566 9 7.87439 9 9C9 11.7614 11.2386 14 14 14Z"
      fill="black"
    />
  </Svg>
);
export default SvgProjector;
