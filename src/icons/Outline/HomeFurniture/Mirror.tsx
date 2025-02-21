import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMirror = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.75C9.24801 2.75 6.74998 5.60725 6.74998 9.5C6.74998 13.3927 9.24801 16.25 12 16.25C14.752 16.25 17.25 13.3927 17.25 9.5C17.25 5.60725 14.752 2.75 12 2.75ZM5.27427 8.80174C5.55975 4.7075 8.33143 1.25 12 1.25C15.6685 1.25 18.4402 4.7075 18.7257 8.80174C18.8106 8.76834 18.9032 8.75 19 8.75C19.4142 8.75 19.75 9.08579 19.75 9.5V19C19.75 19.4868 19.9079 19.9605 20.2 20.35L21.1 21.55C21.3485 21.8814 21.2814 22.3515 20.95 22.6C20.6186 22.8485 20.1485 22.7814 19.9 22.45L19 21.25C18.8809 21.0912 18.7751 20.9239 18.6834 20.75H5.31661C5.22485 20.9239 5.11911 21.0912 4.99998 21.25L4.09998 22.45C3.85146 22.7814 3.38135 22.8485 3.04998 22.6C2.71861 22.3515 2.65145 21.8814 2.89998 21.55L3.79998 20.35C4.09208 19.9605 4.24998 19.4868 4.24998 19V9.5C4.24998 9.08579 4.58577 8.75 4.99998 8.75C5.09679 8.75 5.18932 8.76834 5.27427 8.80174ZM5.74998 12.6128V19C5.74998 19.0836 5.74719 19.167 5.74164 19.25H18.2583C18.2528 19.167 18.25 19.0836 18.25 19V12.6128C17.2655 15.5653 14.9161 17.75 12 17.75C9.08386 17.75 6.73444 15.5653 5.74998 12.6128ZM12.3374 4.90475C12.5314 4.53879 12.9853 4.3994 13.3513 4.59343C14.5943 5.25242 15.4173 6.73578 15.6672 8.38804C15.7292 8.7976 15.4474 9.17982 15.0378 9.24177C14.6283 9.30371 14.246 9.02191 14.1841 8.61236C13.9767 7.24078 13.3274 6.27852 12.6487 5.91869C12.2827 5.72467 12.1433 5.27071 12.3374 4.90475Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMirror;
