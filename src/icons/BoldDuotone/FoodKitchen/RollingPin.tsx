import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRollingPin = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M13.1568 17.0123L17.0126 13.1565C18.4667 11.7024 19.1937 10.9754 19.1937 10.0719C19.1937 9.46661 18.8673 8.94048 18.2146 8.22183C17.8931 7.86785 17.4924 7.46717 17.0126 6.98731C16.5327 6.50746 16.132 6.10675 15.778 5.78525C15.0594 5.13252 14.5333 4.80615 13.9279 4.80615C13.0245 4.80615 12.2974 5.5332 10.8433 6.98731L6.98755 10.8431C5.53345 12.2972 4.8064 13.0242 4.8064 13.9277C4.8064 14.533 5.13276 15.0591 5.7855 15.7778C6.10699 16.1318 6.5077 16.5325 6.98755 17.0123C7.46741 17.4922 7.8681 17.8929 8.22207 18.2144C8.94073 18.8671 9.46685 19.1935 10.0722 19.1935C10.9756 19.1935 11.7027 18.4664 13.1568 17.0123Z"
      fill="black"
    />
    <G opacity={0.5}>
      <Path
        d="M21.2539 2.74615C21.1561 2.64836 21.1072 2.59946 21.0658 2.56209C20.1315 1.71881 18.6794 1.83899 17.8965 2.82438C17.8619 2.86803 17.8215 2.92445 17.7413 3.03686L15.778 5.78545C16.1319 6.10694 16.5327 6.50765 17.0125 6.9875C17.4924 7.46736 17.8931 7.86805 18.2146 8.22202L20.9631 6.25875C21.0757 6.17836 21.132 6.13817 21.1756 6.10347C22.161 5.32058 22.2812 3.86848 21.4379 2.93424C21.4006 2.89286 21.3516 2.84385 21.2539 2.74615Z"
        fill="black"
      />
      <Path
        d="M2.56209 21.0658C2.59946 21.1072 2.64836 21.1561 2.74615 21.2539C2.84385 21.3516 2.89286 21.4006 2.93424 21.4379C3.86848 22.2812 5.32058 22.161 6.10347 21.1756C6.13817 21.132 6.17836 21.0757 6.25875 20.9631L8.22202 18.2146C7.86805 17.8931 7.46736 17.4924 6.9875 17.0125C6.50765 16.5327 6.10694 16.1319 5.78545 15.778L3.03686 17.7413C2.92445 17.8215 2.86803 17.8619 2.82438 17.8965C1.83899 18.6794 1.71881 20.1315 2.56209 21.0658Z"
        fill="black"
      />
    </G>
  </Svg>
);
export default SvgRollingPin;
