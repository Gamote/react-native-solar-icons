import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextCrossCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
    />
    <Path
      fill="#000"
      d="M15.25 9.222a.75.75 0 0 0 1.5 0zm-8 0a.75.75 0 1 0 1.5 0zm4 .278a.75.75 0 0 0 1.5 0zm0 7.5a.75.75 0 0 0 1.5 0zm1.5-2.5a.75.75 0 0 0-1.5 0zm2.957-7.175-.557.502zM9.5 16.25a.75.75 0 0 0 0 1.5zm5 1.5a.75.75 0 0 0 0-1.5zM8 11.25a.75.75 0 0 0 0 1.5zm8 1.5a.75.75 0 0 0 0-1.5zm-6-5h2v-1.5h-2zm2 0h2v-1.5h-2zm.75 1.75V7h-1.5v2.5zm0 7.5v-2.5h-1.5V17zM14 7.75c.495 0 .782.002.986.032.092.014.135.03.152.037.01.005.01.006.012.008l1.115-1.003c-.305-.339-.686-.47-1.057-.525-.34-.051-.76-.049-1.208-.049zm2.75 1.472c0-.504.001-.95-.042-1.31-.045-.371-.149-.761-.443-1.088L15.15 7.827c.002.003.01.012.023.045.014.038.032.105.046.221.03.247.031.586.031 1.13zM10 6.25c-.448 0-.868-.002-1.208.049-.371.055-.752.186-1.057.525L8.85 7.827c.002-.002.002-.003.012-.008a.6.6 0 0 1 .152-.037c.204-.03.491-.032.986-.032zM8.75 9.222c0-.543.001-.882.031-1.129.014-.116.032-.183.046-.22.012-.034.02-.043.023-.046L7.735 6.824c-.294.327-.398.717-.443 1.089-.043.358-.042.805-.042 1.31zm.75 8.528h5v-1.5h-5zm-1.5-5h8v-1.5H8z"
    />
  </Svg>
);
export default SvgTextCrossCircle;
