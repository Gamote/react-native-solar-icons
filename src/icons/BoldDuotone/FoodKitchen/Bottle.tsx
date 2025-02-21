import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBottle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M16.1556 3.31738L18.3344 4.62987L18.617 8.15786C18.6247 8.25408 18.6286 8.3022 18.6315 8.34785C18.737 10.0069 18.0957 11.6201 16.8963 12.7129C16.8633 12.743 16.8279 12.7741 16.7572 12.8363C16.6885 12.8968 16.6541 12.9271 16.6208 12.9571C15.4234 14.0356 14.576 15.4739 14.1945 17.0755C14.1839 17.12 14.1735 17.1656 14.1528 17.257L13.9018 18.365C13.5684 19.8367 13.4016 20.5725 13.0506 21.0359C12.5153 21.7423 11.6734 22.1191 10.8113 22.0382C10.2458 21.9851 9.6161 21.6057 8.35666 20.847L7.68411 20.4419C6.42467 19.6832 5.79495 19.3039 5.46815 18.8195C4.96988 18.0809 4.86171 17.1317 5.18044 16.2949C5.38948 15.746 5.91688 15.2274 6.97166 14.1903L7.7658 13.4094C7.83127 13.345 7.86401 13.3129 7.89565 13.281C9.03421 12.1355 9.80432 10.6507 10.1008 9.02942C10.109 8.98436 10.117 8.93816 10.1328 8.84574C10.1491 8.75076 10.1572 8.70327 10.1657 8.65842C10.473 7.02824 11.4914 5.64211 12.9212 4.90793C12.9605 4.88772 13.0024 4.86715 13.0861 4.826L16.1556 3.31738Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.8963 12.7126C17.9626 11.741 18.5878 10.3581 18.6393 8.89733L17.0427 9.42951C16.1617 9.72318 15.1919 9.55021 14.4667 8.97007C13.6329 8.30298 12.4872 8.18161 11.5321 8.65917L10.0618 9.39432L10.0207 9.41484C9.67894 10.8853 8.94327 12.2266 7.89565 13.2807C7.86401 13.3125 7.83127 13.3447 7.7658 13.4091L6.97166 14.1899C5.91688 15.227 5.38948 15.7456 5.18044 16.2945C4.86171 17.1314 4.96988 18.0805 5.46815 18.8191C5.79495 19.3035 6.42467 19.6828 7.68411 20.4415L8.35666 20.8467C9.6161 21.6054 10.2458 21.9847 10.8113 22.0378C11.6734 22.1188 12.5153 21.7419 13.0506 21.0355C13.4016 20.5722 13.5684 19.8363 13.9018 18.3646L14.1528 17.2566C14.1735 17.1653 14.1839 17.1196 14.1945 17.0751C14.576 15.4735 15.4234 14.0352 16.6208 12.9567C16.6541 12.9267 16.6885 12.8965 16.7572 12.836C16.8279 12.7737 16.8633 12.7426 16.8963 12.7126Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16.1553 3.31715L18.334 4.62964L18.7947 3.79714C18.9274 3.55722 18.9938 3.43725 18.9992 3.3188C19.0039 3.21456 18.9763 3.1114 18.9201 3.02346C18.8563 2.92353 18.7388 2.85278 18.504 2.71129L17.7136 2.23518C17.4626 2.08397 17.3371 2.00836 17.2128 2.00091C17.1036 1.99436 16.9952 2.02339 16.9038 2.08365C16.7999 2.15219 16.7289 2.28039 16.5871 2.5368L16.1553 3.31715Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgBottle;
