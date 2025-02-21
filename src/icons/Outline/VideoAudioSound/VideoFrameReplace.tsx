import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVideoFrameReplace = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.948 1.25H11.052C11.9505 1.24997 12.6997 1.24995 13.2945 1.32991C13.9223 1.41432 14.4891 1.59999 14.9445 2.05546C15.4 2.51093 15.5857 3.07773 15.6701 3.70552C15.7501 4.30031 15.75 5.04953 15.75 5.94801V6.052C15.75 6.95048 15.7501 7.6997 15.6701 8.29448C15.5857 8.92228 15.4 9.48908 14.9445 9.94455C14.4891 10.4 13.9223 10.5857 13.2945 10.6701C12.6997 10.7501 11.9505 10.75 11.052 10.75H5.94801C5.04953 10.75 4.3003 10.7501 3.70552 10.6701C3.07773 10.5857 2.51093 10.4 2.05546 9.94455C1.59999 9.48908 1.41432 8.92228 1.32991 8.29448C1.24995 7.6997 1.24997 6.95048 1.25 6.052V5.948C1.24997 5.04952 1.24995 4.3003 1.32991 3.70552C1.41432 3.07773 1.59999 2.51093 2.05546 2.05546C2.51093 1.59999 3.07773 1.41432 3.70552 1.32991C4.3003 1.24995 5.04952 1.24997 5.948 1.25ZM3.90539 2.81654C3.44393 2.87858 3.24644 2.9858 3.11612 3.11612C2.9858 3.24644 2.87858 3.44393 2.81654 3.90539C2.77009 4.25089 2.75605 4.68056 2.75182 5.25H5.25V2.75182C4.68056 2.75605 4.25089 2.77009 3.90539 2.81654ZM6.75 2.75V9.25H10.25V2.75H6.75ZM11.75 2.75182V5.25H14.2482C14.244 4.68056 14.2299 4.25089 14.1835 3.90539C14.1214 3.44393 14.0142 3.24644 13.8839 3.11612C13.7536 2.9858 13.5561 2.87858 13.0946 2.81654C12.7491 2.77009 12.3194 2.75605 11.75 2.75182ZM14.2482 6.75H11.75V9.24819C12.3194 9.24396 12.7491 9.22992 13.0946 9.18347C13.5561 9.12143 13.7536 9.0142 13.8839 8.88389C14.0142 8.75357 14.1214 8.55607 14.1835 8.09461C14.2299 7.74911 14.244 7.31944 14.2482 6.75ZM5.25 9.24819V6.75H2.75182C2.75605 7.31944 2.77009 7.74911 2.81654 8.09461C2.87858 8.55607 2.9858 8.75357 3.11612 8.88389C3.24644 9.0142 3.44393 9.12143 3.90539 9.18347C4.25089 9.22992 4.68056 9.24396 5.25 9.24819ZM19.0433 6.76729C18.7958 6.75041 18.4762 6.75 18 6.75C17.5858 6.75 17.25 6.41422 17.25 6C17.25 5.58579 17.5858 5.25 18 5.25L18.0253 5.25C18.4697 5.24999 18.8408 5.24999 19.1454 5.27077C19.4625 5.29241 19.762 5.33905 20.0524 5.45933C20.7262 5.73844 21.2616 6.2738 21.5407 6.94762C21.6251 7.15155 21.6606 7.41236 21.6817 7.61233C21.7057 7.84059 21.7207 8.10675 21.7305 8.37872C21.7411 8.67507 21.746 8.99167 21.7482 9.29336C22.0124 9.1994 22.3188 9.25817 22.5303 9.46967C22.8232 9.76257 22.8232 10.2374 22.5303 10.5303L21.5303 11.5303C21.2374 11.8232 20.7626 11.8232 20.4697 11.5303L19.4697 10.5303C19.1768 10.2374 19.1768 9.76257 19.4697 9.46967C19.6802 9.25915 19.9847 9.19995 20.2481 9.29205C20.246 9.00421 20.2414 8.70798 20.2315 8.43266C20.2222 8.17572 20.2087 7.94823 20.1899 7.76914C20.1749 7.62668 20.16 7.55364 20.1549 7.52841C20.1526 7.51691 20.1522 7.51534 20.1549 7.52165C20.028 7.21536 19.7846 6.97202 19.4784 6.84515C19.4012 6.81319 19.284 6.78372 19.0433 6.76729ZM2.46967 12.4697C2.76257 12.1768 3.23744 12.1768 3.53033 12.4697L4.53033 13.4697C4.82323 13.7626 4.82323 14.2374 4.53033 14.5303C4.31981 14.7409 4.01528 14.8001 3.75188 14.708C3.75403 14.9958 3.75864 15.292 3.76855 15.5673C3.77779 15.8243 3.79129 16.0518 3.81012 16.2309C3.82509 16.3733 3.83997 16.4464 3.8451 16.4716C3.84745 16.4831 3.84777 16.4847 3.84515 16.4784C3.97202 16.7846 4.21536 17.028 4.52165 17.1549C4.5988 17.1868 4.71602 17.2163 4.95674 17.2327C5.20421 17.2496 5.5238 17.25 6 17.25C6.41422 17.25 6.75 17.5858 6.75 18C6.75 18.4142 6.41422 18.75 6 18.75H5.97474C5.53029 18.75 5.15925 18.75 4.85464 18.7292C4.53754 18.7076 4.23801 18.661 3.94762 18.5407C3.2738 18.2616 2.73844 17.7262 2.45933 17.0524C2.37486 16.8485 2.33936 16.5876 2.31834 16.3877C2.29435 16.1594 2.2793 15.8933 2.26952 15.6213C2.25886 15.3249 2.25402 15.0083 2.25182 14.7066C1.98758 14.8006 1.68118 14.7418 1.46967 14.5303C1.17678 14.2374 1.17678 13.7626 1.46967 13.4697L2.46967 12.4697ZM13.948 13.25H17.052C17.9505 13.25 18.6997 13.2499 19.2945 13.3299C19.9223 13.4143 20.4891 13.6 20.9445 14.0555C21.4 14.5109 21.5857 15.0777 21.6701 15.7055C21.7501 16.3003 21.75 17.0495 21.75 17.948V18.052C21.75 18.9505 21.7501 19.6997 21.6701 20.2945C21.5857 20.9223 21.4 21.4891 20.9445 21.9445C20.4891 22.4 19.9223 22.5857 19.2945 22.6701C18.8077 22.7355 18.2174 22.7474 17.5266 22.7495C17.5178 22.7498 17.5089 22.75 17.5 22.75C17.4925 22.75 17.4851 22.7499 17.4776 22.7497C17.3397 22.75 17.1978 22.75 17.052 22.75H13.948C13.8022 22.75 13.6603 22.75 13.5224 22.7497C13.5149 22.7499 13.5075 22.75 13.5 22.75C13.4911 22.75 13.4822 22.7498 13.4734 22.7495C12.7826 22.7474 12.1923 22.7355 11.7055 22.6701C11.0777 22.5857 10.5109 22.4 10.0555 21.9445C9.59999 21.4891 9.41432 20.9223 9.32991 20.2945C9.24995 19.6997 9.24997 18.9505 9.25 18.052V17.948C9.24997 17.0495 9.24995 16.3003 9.32991 15.7055C9.41432 15.0777 9.59999 14.5109 10.0555 14.0555C10.5109 13.6 11.0777 13.4143 11.7055 13.3299C12.3003 13.2499 13.0495 13.25 13.948 13.25ZM14.25 21.25H16.75V14.75H14.25V21.25ZM12.75 18.75V21.2405C12.4173 21.2318 12.1416 21.2152 11.9054 21.1835C11.4439 21.1214 11.2464 21.0142 11.1161 20.8839C10.9858 20.7536 10.8786 20.5561 10.8165 20.0946C10.7689 19.7406 10.7554 19.2983 10.7515 18.7079C10.8293 18.7352 10.9129 18.75 11 18.75H12.75ZM12.75 17.25V14.7595C12.4173 14.7682 12.1416 14.7848 11.9054 14.8165C11.4439 14.8786 11.2464 14.9858 11.1161 15.1161C10.9858 15.2464 10.8786 15.4439 10.8165 15.9054C10.7689 16.2594 10.7554 16.7017 10.7515 17.2921C10.8293 17.2648 10.9129 17.25 11 17.25H12.75ZM18.25 14.7595V17.25H20.2482C20.244 16.6806 20.2299 16.2509 20.1835 15.9054C20.1214 15.4439 20.0142 15.2464 19.8839 15.1161C19.7536 14.9858 19.5561 14.8786 19.0946 14.8165C18.8584 14.7848 18.5827 14.7682 18.25 14.7595ZM20.2482 18.75H18.25V21.2405C18.5827 21.2318 18.8584 21.2152 19.0946 21.1835C19.5561 21.1214 19.7536 21.0142 19.8839 20.8839C20.0142 20.7536 20.1214 20.5561 20.1835 20.0946C20.2299 19.7491 20.244 19.3194 20.2482 18.75Z"
      fill="black"
    />
  </Svg>
);
export default SvgVideoFrameReplace;
