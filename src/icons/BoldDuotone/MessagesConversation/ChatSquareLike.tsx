import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChatSquareLike = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M13.6288 20.4718L13.0867 21.3877C12.6035 22.204 11.3965 22.204 10.9133 21.3877L10.3712 20.4718C9.95073 19.7614 9.74049 19.4063 9.40279 19.2098C9.06509 19.0134 8.63992 19.0061 7.78958 18.9915C6.53422 18.9698 5.74689 18.8929 5.08658 18.6194C3.86144 18.1119 2.88807 17.1386 2.3806 15.9134C2 14.9946 2 13.8297 2 11.5V10.5C2 7.22657 2 5.58985 2.7368 4.38751C3.14908 3.71473 3.71473 3.14908 4.38751 2.7368C5.58985 2 7.22657 2 10.5 2H13.5C16.7734 2 18.4101 2 19.6125 2.7368C20.2853 3.14908 20.8509 3.71473 21.2632 4.38751C22 5.58985 22 7.22657 22 10.5V11.5C22 13.8297 22 14.9946 21.6194 15.9134C21.1119 17.1386 20.1386 18.1119 18.9134 18.6194C18.2531 18.8929 17.4658 18.9698 16.2104 18.9915C15.36 19.0061 14.9349 19.0134 14.5972 19.2098C14.2595 19.4062 14.0492 19.7614 13.6288 20.4718Z"
      fill="black"
    />
    <Path
      d="M10.9901 14.3082C9.6633 13.3304 7.5 11.4674 7.5 9.71476C7.5 7.03759 9.97507 6.03807 12 8.10615C14.0249 6.03807 16.5 7.03759 16.5 9.71475C16.5 11.4674 14.3367 13.3304 13.0099 14.3082C12.5558 14.643 12.3287 14.8103 12 14.8103C11.6713 14.8103 11.4442 14.643 10.9901 14.3082Z"
      fill="black"
    />
  </Svg>
);
export default SvgChatSquareLike;
