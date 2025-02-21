import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRuler = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="m13.688 4.142.964.964a.75.75 0 0 1-1.061 1.06l-.964-.964-1.06 1.06 1.67 1.672a.75.75 0 0 1-1.06 1.06l-1.671-1.67-1.061 1.06.964.964a.75.75 0 1 1-1.06 1.061l-.965-.964-1.06 1.06 1.67 1.672a.75.75 0 1 1-1.06 1.06l-1.671-1.67-1.06 1.06.963.964a.75.75 0 1 1-1.06 1.06l-.964-.963c-.464.469-.799.821-1.034 1.13-.29.38-.358.604-.358.798 0 .193.068.417.358.797.303.398.77.868 1.468 1.565l1.446 1.446c.697.697 1.167 1.165 1.565 1.468.38.29.604.358.797.358s.418-.068.798-.358c.397-.303.868-.77 1.564-1.468l8.678-8.677c.697-.697 1.165-1.168 1.468-1.565.29-.38.358-.604.358-.798 0-.193-.068-.417-.358-.797-.303-.398-.77-.868-1.468-1.565l-1.446-1.446c-.697-.697-1.167-1.165-1.565-1.468-.38-.29-.604-.358-.797-.358s-.418.068-.798.358c-.309.235-.661.57-1.13 1.034m.22-2.227c.514-.392 1.054-.665 1.708-.665s1.194.273 1.707.665c.487.372 1.028.913 1.679 1.563l1.52 1.52c.65.65 1.191 1.192 1.563 1.679.392.513.665 1.054.665 1.707 0 .654-.273 1.194-.665 1.708-.372.487-.913 1.028-1.563 1.678l-8.752 8.752c-.65.65-1.191 1.191-1.678 1.563-.514.392-1.054.665-1.708.665s-1.194-.273-1.707-.665c-.487-.372-1.028-.913-1.679-1.563l-1.52-1.52c-.65-.65-1.191-1.192-1.563-1.679-.392-.513-.665-1.054-.665-1.707 0-.654.273-1.194.665-1.708.372-.487.913-1.028 1.563-1.678l8.752-8.752c.65-.65 1.191-1.191 1.678-1.563"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRuler;
