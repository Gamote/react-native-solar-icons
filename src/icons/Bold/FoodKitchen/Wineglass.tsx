import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWineglass = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5 4.89474C5 3.8483 5.8483 3 6.89474 3H17.1053C18.1517 3 19 3.8483 19 4.89474V8C19 8.08368 18.9985 8.16701 18.9956 8.24997C18.9032 8.25046 18.8094 8.26813 18.7185 8.30484L18.7148 8.30632L18.6981 8.31297C18.683 8.31899 18.6598 8.3281 18.6295 8.33989C18.5688 8.36346 18.4792 8.39769 18.3666 8.43924C18.1409 8.52248 17.8245 8.6344 17.4626 8.74874C16.722 8.98276 15.8541 9.20628 15.1885 9.24402C14.1043 9.3055 13.3288 8.88551 12.3672 8.3459L12.3243 8.32176C11.3911 7.79786 10.2738 7.17056 8.72697 7.25827C7.86456 7.30717 6.84781 7.58009 6.08585 7.82084C5.69641 7.94389 5.35704 8.06394 5.11471 8.15334C5.0747 8.16809 5.03728 8.18204 5.00266 8.19504C5.00089 8.13024 5 8.06523 5 8V4.89474Z"
      fill={props.primaryColor}
    />
    <Path
      d="M5.21268 9.7192C5.91966 12.519 8.31356 14.6475 11.25 14.9603V20.2499H8C7.58579 20.2499 7.25 20.5857 7.25 20.9999C7.25 21.4141 7.58579 21.7499 8 21.7499H16C16.4142 21.7499 16.75 21.4141 16.75 20.9999C16.75 20.5857 16.4142 20.2499 16 20.2499H12.75V14.9603C15.6229 14.6543 17.9765 12.6103 18.7391 9.90002C18.514 9.98118 18.2308 10.0791 17.9145 10.179C17.1526 10.4198 16.1358 10.6927 15.2734 10.7416C13.7266 10.8293 12.6093 10.202 11.6761 9.67812L11.6332 9.65399C10.6716 9.11438 9.89609 8.69439 8.81189 8.75586C8.1463 8.7936 7.27844 9.01712 6.53778 9.25115C6.17591 9.36548 5.85947 9.47741 5.63383 9.56064C5.52118 9.60219 5.43164 9.63642 5.3709 9.66C5.34055 9.67178 5.31743 9.68089 5.30225 9.68691L5.28556 9.69356L5.28186 9.69505C5.25896 9.7043 5.23588 9.71234 5.21268 9.7192Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgWineglass;
