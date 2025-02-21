import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStretchingRound = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17 4.5C17 5.88071 15.8807 7 14.5 7C13.1193 7 12 5.88071 12 4.5C12 3.11929 13.1193 2 14.5 2C15.8807 2 17 3.11929 17 4.5Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5072 14.4639C17.7239 14.1069 19.75 15.8031 19.75 18.0486V21.9957C19.75 22.4099 19.4142 22.7457 19 22.7457C18.5858 22.7457 18.25 22.4099 18.25 21.9957V18.0486C18.25 16.7424 17.0661 15.7322 15.7458 15.9449C15.3368 16.0107 14.9519 15.7326 14.886 15.3237C14.8202 14.9147 15.0983 14.5298 15.5072 14.4639Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M13.3633 10.3462C13.8381 11.094 14.0951 12.1107 14.0951 13.4346C14.0951 18.5174 10.1339 22.7503 5 22.7503C4.58579 22.7503 4.25 22.4145 4.25 22.0003C4.25 21.5861 4.58579 21.2503 5 21.2503C9.2549 21.2503 12.5951 17.7405 12.5951 13.4346C12.5951 12.2912 12.3715 11.5826 12.097 11.1501C11.8323 10.7333 11.4884 10.5212 11.116 10.422C10.726 10.318 10.2869 10.3352 9.87888 10.4247C9.46283 10.5159 9.15214 10.6658 9.02681 10.7546C8.70695 10.9813 8.38076 11.4087 8.24551 11.8569C8.11753 12.2809 8.18065 12.6166 8.44446 12.8716L8.46924 12.8955C8.7671 13.1833 8.77522 13.6582 8.48738 13.956C8.19954 14.2539 7.72473 14.262 7.42687 13.9741L7.40209 13.9502C6.62406 13.1983 6.56874 12.2212 6.80948 11.4235C7.04295 10.6499 7.57265 9.94663 8.15959 9.53074C8.48766 9.29829 8.99767 9.08227 9.55761 8.95949C10.1256 8.83495 10.8178 8.79007 11.5024 8.97259C12.2047 9.15981 12.8787 9.5828 13.3633 10.3462Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgStretchingRound;
