import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTemperature = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.25 5C8.25 2.92893 9.92893 1.25 12 1.25C14.0711 1.25 15.75 2.92893 15.75 5V11.3477C15.75 11.42 15.7896 11.5273 15.9078 11.6221C17.3345 12.7663 18.25 14.5265 18.25 16.5C18.25 19.9518 15.4518 22.75 12 22.75C8.54822 22.75 5.75 19.9518 5.75 16.5C5.75 14.5265 6.66555 12.7663 8.09215 11.6221C8.21038 11.5273 8.25 11.42 8.25 11.3477V5ZM12 2.75C10.7574 2.75 9.75 3.75736 9.75 5V11.3477C9.75 11.9513 9.43973 12.4642 9.03066 12.7923C7.94374 13.664 7.25 15.0007 7.25 16.5C7.25 19.1234 9.37665 21.25 12 21.25C14.6234 21.25 16.75 19.1234 16.75 16.5C16.75 15.0007 16.0563 13.664 14.9693 12.7923C14.5603 12.4642 14.25 11.9513 14.25 11.3477V5C14.25 3.75736 13.2426 2.75 12 2.75ZM12 4.25C12.4142 4.25001 12.75 4.58581 12.75 5.00002L12.7498 13.3369C14.1831 13.6754 15.2498 14.9631 15.2498 16.4999C15.2498 18.2948 13.7947 19.7499 11.9998 19.7499C10.2048 19.7499 8.74977 18.2948 8.74977 16.4999C8.74977 14.9631 9.81643 13.6754 11.2498 13.3368L11.25 4.99998C11.25 4.58577 11.5858 4.24999 12 4.25ZM11.9998 14.7499C11.0333 14.7499 10.2498 15.5334 10.2498 16.4999C10.2498 17.4664 11.0333 18.2499 11.9998 18.2499C12.9663 18.2499 13.7498 17.4664 13.7498 16.4999C13.7498 15.5334 12.9663 14.7499 11.9998 14.7499Z"
      fill="black"
    />
  </Svg>
);
export default SvgTemperature;
