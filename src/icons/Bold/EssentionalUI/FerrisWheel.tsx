import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFerrisWheel = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.6976 3.07336C13.5072 2.31307 12.8193 1.75 12 1.75C11.1808 1.75 10.493 2.31295 10.3024 3.07312C10.2696 3.08978 10.237 3.10695 10.2046 3.12464L5.41033 5.73881C5.32768 5.78387 5.24718 5.83179 5.16891 5.88239C4.96283 5.79708 4.73691 5.75 4.5 5.75C3.5335 5.75 2.75 6.5335 2.75 7.5C2.75 8.07596 3.02825 8.58694 3.45765 8.90584C3.45626 8.94751 3.45557 8.98928 3.45557 9.03117V13.9688C3.45557 14.1693 3.47157 14.3675 3.50266 14.5618C3.04779 14.8779 2.75 15.4041 2.75 16C2.75 16.9665 3.5335 17.75 4.5 17.75C4.91556 17.75 5.29729 17.6052 5.59745 17.3632L6.90514 18.0763L4.85105 21.6242C4.64352 21.9827 4.76588 22.4415 5.12435 22.6491C5.48282 22.8566 5.94166 22.7342 6.14919 22.3758L8.22252 18.7946L10.2046 19.8753C10.237 19.893 10.2696 19.9102 10.3024 19.9269C10.493 20.687 11.1807 21.25 12 21.25C12.8193 21.25 13.5072 20.6869 13.6976 19.9266C13.7303 19.91 13.7628 19.8929 13.795 19.8753L15.7776 18.7943L17.8511 22.3758C18.0586 22.7342 18.5174 22.8566 18.8759 22.6491C19.2344 22.4415 19.3567 21.9827 19.1492 21.6242L17.0949 18.076L18.4024 17.3631C18.7026 17.6051 19.0844 17.75 19.5 17.75C20.4665 17.75 21.25 16.9665 21.25 16C21.25 15.404 20.952 14.8776 20.497 14.5616C20.528 14.3673 20.544 14.1692 20.544 13.9688V9.03117C20.544 8.98938 20.5433 8.94771 20.5419 8.90614C20.9716 8.58726 21.25 8.07615 21.25 7.5C21.25 6.5335 20.4665 5.75 19.5 5.75C19.263 5.75 19.037 5.79712 18.8308 5.88249C18.7525 5.83185 18.672 5.78391 18.5893 5.73881L13.795 3.12464C13.7628 3.10703 13.7303 3.08994 13.6976 3.07336ZM10.6368 4.59745C10.9576 4.9954 11.4491 5.25 12 5.25C12.5509 5.25 13.0423 4.99547 13.3631 4.5976L17.8152 7.02522C17.7727 7.1762 17.75 7.33545 17.75 7.5C17.75 8.30876 18.2986 8.98938 19.044 9.19V13.9688C19.044 14.0867 19.0348 14.2032 19.0169 14.3175C18.2853 14.5272 17.75 15.2011 17.75 16C17.75 16.0034 17.75 16.0069 17.75 16.0103L16.3431 16.7774L13.6516 12.1284C13.8715 11.8072 14.0001 11.4186 14.0001 11C14.0001 9.89543 13.1047 9 12.0001 9C10.8956 9 10.0001 9.89543 10.0001 11C10.0001 11.4186 10.1287 11.8072 10.3486 12.1284L7.65694 16.7777L6.24997 16.0105C6.24999 16.007 6.25 16.0035 6.25 16C6.25 15.2009 5.71444 14.5269 4.98269 14.3174C4.96478 14.2031 4.95557 14.0866 4.95557 13.9688V9.19011C5.70117 8.98963 6.25 8.30891 6.25 7.5C6.25 7.33538 6.22727 7.17606 6.18477 7.02503L10.6368 4.59745ZM8.97432 17.496L10.6368 18.4025C10.9576 18.0046 11.4491 17.75 12 17.75C12.5509 17.75 13.0423 18.0045 13.3631 18.4024L15.0258 17.4957L12.3998 12.96C12.2707 12.9862 12.137 13 12.0001 13C11.8632 13 11.7296 12.9862 11.6004 12.96L8.97432 17.496Z"
      fill="black"
    />
  </Svg>
);
export default SvgFerrisWheel;
