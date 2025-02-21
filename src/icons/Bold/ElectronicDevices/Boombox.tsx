import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBoombox = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M5.75 16c0-.98.626-1.813 1.5-2.122V15a.75.75 0 0 0 1.5 0v-1.122a2.251 2.251 0 1 1-3 2.122M14.409 14.409a2.25 2.25 0 0 1 2.561-.44l-.793.794a.75.75 0 1 0 1.06 1.06l.794-.793a2.251 2.251 0 1 1-3.622-.621"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12.052 1.25h-.104c-.899 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243v.078c-2.021.066-3.235.302-4.078 1.146C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14s0-5.657-1.172-6.828c-.843-.844-2.057-1.08-4.078-1.146v-.078c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.344-.08-2.242-.08m3.196 4.752c-.005-.847-.019-1.758-.064-2.097-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.045.34-.06 1.25-.064 2.097Q9.34 5.999 10 6h4q.662 0 1.248.002M8 12.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m10.652 1.098a3.75 3.75 0 1 0-5.304 5.304 3.75 3.75 0 0 0 5.304-5.304M5.25 9.5A.75.75 0 0 1 6 8.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBoombox;
