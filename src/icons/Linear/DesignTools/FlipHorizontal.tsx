import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlipHorizontal = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 18.1134V5.88616C2 4.18402 2 3.33294 2.54242 3.05381C3.08484 2.77467 3.77738 3.26934 5.16247 4.25869L6.74371 5.38815C7.35957 5.82805 7.6675 6.048 7.83375 6.37105C8 6.69411 8 7.07252 8 7.82935V16.1702C8 16.927 8 17.3055 7.83375 17.6285C7.6675 17.9516 7.35957 18.1715 6.74372 18.6114L5.16248 19.7409C3.77738 20.7302 3.08484 21.2249 2.54242 20.9458C2 20.6666 2 19.8156 2 18.1134Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M22 18.1134V5.88616C22 4.18402 22 3.33294 21.4576 3.05381C20.9152 2.77467 20.2226 3.26934 18.8375 4.25869L17.2563 5.38815C16.6404 5.82805 16.3325 6.048 16.1662 6.37105C16 6.69411 16 7.07252 16 7.82935V16.1702C16 16.927 16 17.3055 16.1662 17.6285C16.3325 17.9516 16.6404 18.1715 17.2563 18.6114L18.8375 19.7409C20.2226 20.7302 20.9152 21.2249 21.4576 20.9458C22 20.6666 22 19.8156 22 18.1134Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M12 14V10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 6V2"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 22V18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgFlipHorizontal;
