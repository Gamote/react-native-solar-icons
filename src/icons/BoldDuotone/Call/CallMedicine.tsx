import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCallMedicine = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M14.5562 15.5477L14.1007 16.0272C14.1007 16.0272 13.0181 17.167 10.0631 14.0559C7.10812 10.9448 8.1907 9.80507 8.1907 9.80507L8.47752 9.50311C9.18407 8.75924 9.25068 7.56497 8.63424 6.6931L7.37326 4.90961C6.61028 3.8305 5.13596 3.68795 4.26145 4.60864L2.69185 6.26114C2.25823 6.71766 1.96765 7.30945 2.00289 7.96594C2.09304 9.64546 2.81071 13.259 6.81536 17.4752C11.0621 21.9462 15.0468 22.1239 16.6763 21.9631C17.1917 21.9122 17.6399 21.6343 18.0011 21.254L19.4217 19.7584C20.3806 18.7489 20.1102 17.0182 18.8833 16.312L16.9728 15.2123C16.1672 14.7486 15.1858 14.8848 14.5562 15.5477Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 7C22 9.76142 19.7614 12 17 12C16.2002 12 15.4442 11.8122 14.7738 11.4783C14.5956 11.3895 14.392 11.36 14.1997 11.4114L13.0867 11.7092C12.6035 11.8385 12.1615 11.3965 12.2908 10.9133L12.5886 9.80031C12.64 9.60803 12.6105 9.4044 12.5217 9.22624C12.1878 8.55582 12 7.79984 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7ZM17 4.8125C17.5178 4.8125 17.9375 5.23223 17.9375 5.75V6.0625H18.25C18.7678 6.0625 19.1875 6.48223 19.1875 7C19.1875 7.51777 18.7678 7.9375 18.25 7.9375H17.9375V8.25C17.9375 8.76777 17.5178 9.1875 17 9.1875C16.4822 9.1875 16.0625 8.76777 16.0625 8.25V7.9375H15.75C15.2322 7.9375 14.8125 7.51777 14.8125 7C14.8125 6.48223 15.2322 6.0625 15.75 6.0625H16.0625V5.75C16.0625 5.23223 16.4822 4.8125 17 4.8125Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgCallMedicine;
