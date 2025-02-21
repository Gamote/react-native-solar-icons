import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArmchair2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6.88633 18H16.5332C17.1502 18 17.4587 18 17.7354 17.9611C18.8608 17.8028 19.8348 17.1756 20.3588 16.2717C20.4876 16.0494 20.5852 15.7879 20.7803 15.2649L21.8997 12.2643C22.3153 11.1504 21.3873 10 20.0731 10C19.2628 10 18.5392 10.4533 18.263 11.1339L17.2623 13.6C17.0683 14.078 16.9713 14.317 16.787 14.4835C16.6864 14.5744 16.5683 14.6484 16.4383 14.7019C16.2004 14.8 15.9158 14.8 15.3467 14.8H8.36757C8.07437 14.8 7.92777 14.8 7.79716 14.7735C7.49217 14.7116 7.22656 14.5452 7.05744 14.3101C6.98502 14.2094 6.93505 14.0863 6.83511 13.84L5.73699 11.1339C5.46079 10.4533 4.7372 10 3.92689 10C2.61268 10 1.68469 11.1504 2.10028 12.2643L3.40329 15.757C3.42288 15.8095 3.43267 15.8357 3.44197 15.8594C3.93869 17.1243 5.26517 17.9786 6.76531 17.9996C6.7934 18 6.82438 18 6.88633 18Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M6 12V8.57143C6 6.41644 6 5.33894 6.70294 4.66947C7.40589 4 8.53726 4 10.8 4H13.2C15.4627 4 16.5941 4 17.2971 4.66947C18 5.33894 18 6.41644 18 8.57143V12"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M18 20V18M6 20V18.6667"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgArmchair2;
