import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDiagramUp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2.75 2C2.75 1.58579 2.41421 1.25 2 1.25C1.58579 1.25 1.25 1.58579 1.25 2V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H12C9.62178 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12V2Z"
      fill="black"
    />
    <Path
      d="M19.5875 7.46644C19.8451 7.14207 19.791 6.67029 19.4666 6.4127C19.1422 6.1551 18.6705 6.20924 18.4129 6.53362L15.2948 10.46C15.0496 10.7689 14.8887 10.9708 14.7562 11.1163C14.6265 11.2586 14.5657 11.2989 14.538 11.3137C14.3272 11.4264 14.0754 11.4319 13.8599 11.3285C13.8316 11.3149 13.7691 11.2772 13.6334 11.1407C13.4946 11.0011 13.3251 10.8064 13.0667 10.5085L13.0505 10.4899C12.8127 10.2157 12.6098 9.98191 12.4309 9.80187C12.2448 9.61472 12.0414 9.44013 11.7894 9.31921C11.143 9.00901 10.3875 9.02544 9.75521 9.36345C9.50875 9.49521 9.3131 9.67848 9.13539 9.87354C8.96444 10.0612 8.77195 10.3036 8.54622 10.5878L5.4127 14.5336C5.15511 14.858 5.20924 15.3298 5.53361 15.5874C5.85798 15.845 6.32976 15.7908 6.58735 15.4665L9.70554 11.54C9.9508 11.2312 10.1117 11.0292 10.2442 10.8837C10.3739 10.7415 10.4347 10.7011 10.4624 10.6863C10.6731 10.5736 10.925 10.5681 11.1405 10.6715C11.1688 10.6851 11.2313 10.7228 11.367 10.8593C11.5057 10.9989 11.6752 11.1937 11.9337 11.4915L11.9499 11.5102C12.1877 11.7843 12.3906 12.0181 12.5695 12.1982C12.7555 12.3853 12.959 12.5599 13.2109 12.6808C13.8573 12.991 14.6129 12.9746 15.2452 12.6366C15.4917 12.5048 15.6873 12.3215 15.865 12.1265C16.0359 11.9388 16.2284 11.6964 16.4541 11.4122L19.5875 7.46644Z"
      fill="black"
    />
  </Svg>
);
export default SvgDiagramUp;
