import * as React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStickerSmileCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 12C2 17.5228 6.47715 22 12 22C12.6477 22 13.2503 21.7004 13.7083 21.2424L21.2424 13.7083C21.7004 13.2503 22 12.6477 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M8.9126 15.9331C9.94668 16.1923 11.0951 16.2386 12.2688 16.0333"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Ellipse
      cx={14.5094}
      cy={9.77454}
      rx={1}
      ry={1.5}
      transform="rotate(-15 14.5094 9.77454)"
      fill="black"
    />
    <Ellipse
      cx={8.71402}
      cy={11.3278}
      rx={1}
      ry={1.5}
      transform="rotate(-15 8.71402 11.3278)"
      fill="black"
    />
    <Path
      d="M12 22C12 19.2071 12 17.8107 12.3928 16.688C13.0964 14.6773 14.6773 13.0964 16.688 12.3928C17.8107 12 19.2071 12 22 12"
      stroke="black"
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgStickerSmileCircle;
