import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlashDrive = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M19.8302 10.441L18.2959 12L18.1853 12.1106L18.0968 12.022C17.6071 11.1519 16.6506 10.1954 15.2274 8.77225C13.8197 7.36455 12.8687 6.41349 12.0061 5.91907L13.6931 4.20481C15.1397 2.73494 15.8629 2 16.7617 2C17.6604 2 18.3837 2.73494 19.8302 4.20481C21.2767 5.67469 22 6.40962 22 7.32289C22 8.23615 21.2767 8.97109 19.8302 10.441Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 14.1422C2 15.4903 3.08489 16.5752 5.25467 18.745C7.42446 20.9148 8.50935 21.9997 9.85748 21.9997C11.2056 21.9997 12.2905 20.9148 14.4603 18.745L15.2274 17.9779C17.3972 15.8081 18.4821 14.7232 18.4821 13.3751C18.4821 12.0269 17.3972 10.942 15.2274 8.77226C13.0576 6.60248 11.9727 5.51758 10.6246 5.51758C9.27648 5.51758 8.19159 6.60247 6.02181 8.77225L5.25467 9.53939C3.08489 11.7092 2 12.7941 2 14.1422ZM5.78521 13.6122C5.49232 13.3194 5.01745 13.3194 4.72455 13.6122C4.43166 13.9051 4.43166 14.38 4.72455 14.6729L9.32736 19.2757C9.62025 19.5686 10.0951 19.5686 10.388 19.2757C10.6809 18.9828 10.6809 18.5079 10.388 18.2151L5.78521 13.6122Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.2476 6.8731C19.5405 7.166 19.5405 7.64087 19.2476 7.93376L18.5405 8.64087C18.2476 8.93376 17.7727 8.93376 17.4798 8.64087C17.187 8.34798 17.187 7.8731 17.4798 7.58021L18.187 6.8731C18.4798 6.58021 18.9547 6.58021 19.2476 6.8731Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.1265 4.75201C17.4194 5.0449 17.4194 5.51978 17.1265 5.81267L16.4194 6.51978C16.1265 6.81267 15.6516 6.81267 15.3588 6.51978C15.0659 6.22688 15.0659 5.75201 15.3588 5.45912L16.0659 4.75201C16.3588 4.45912 16.8336 4.45912 17.1265 4.75201Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgFlashDrive;
