import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgClipboardAdd = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M3.879 4.877c.569-.57 1.363-.77 2.621-.84V4.5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-.463c1.258.07 2.052.27 2.621.84C21 5.756 21 7.17 21 9.998v6c0 2.829 0 4.243-.879 5.122-.878.878-2.293.878-5.121.878H9c-2.828 0-4.243 0-5.121-.878C3 20.24 3 18.827 3 15.998v-6c0-2.828 0-4.242.879-5.121M12.75 11a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V17a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgClipboardAdd;
