import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUndoLeftSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.3011 6.91415C9.58205 7.21851 9.56307 7.693 9.25871 7.97396L8.41824 8.74978L14.0758 8.74978C14.7279 8.74976 15.2721 8.74975 15.7133 8.7935C16.1748 8.83927 16.6038 8.9387 16.9931 9.19043C17.3199 9.40169 17.5981 9.6799 17.8093 10.0067C18.0611 10.396 18.1605 10.825 18.2063 11.2865C18.25 11.7276 18.25 12.2719 18.25 12.924V12.9986C18.25 13.6508 18.25 14.195 18.2063 14.6361C18.1605 15.0976 18.0611 15.5266 17.8094 15.916C17.5981 16.2427 17.3199 16.5209 16.9931 16.7322C16.6038 16.9839 16.1748 17.0834 15.7133 17.1291C15.2721 17.1729 14.7279 17.1729 14.0758 17.1729H9.5C9.08579 17.1729 8.75 16.8371 8.75 16.4229C8.75 16.0086 9.08579 15.6729 9.5 15.6729H14.0385C14.7376 15.6729 15.2069 15.672 15.5652 15.6365C15.9116 15.6021 16.0724 15.5413 16.1787 15.4726C16.3272 15.3765 16.4537 15.2501 16.5497 15.1015C16.6185 14.9952 16.6793 14.8344 16.7136 14.4881C16.7491 14.1298 16.75 13.6604 16.75 12.9613C16.75 12.2622 16.7491 11.7929 16.7136 11.4345C16.6793 11.0882 16.6184 10.9274 16.5497 10.8211C16.4537 10.6726 16.3272 10.5461 16.1787 10.4501C16.0724 10.3813 15.9116 10.3205 15.5652 10.2862C15.2069 10.2506 14.7376 10.2498 14.0385 10.2498H8.41824L9.25871 11.0256C9.56307 11.3066 9.58205 11.781 9.3011 12.0854C9.02015 12.3898 8.54565 12.4088 8.24129 12.1278L5.99129 10.0509C5.83748 9.9089 5.75 9.7091 5.75 9.49978C5.75 9.29045 5.83748 9.09066 5.99129 8.94868L8.24129 6.87175C8.54565 6.5908 9.02015 6.60978 9.3011 6.91415Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgUndoLeftSquare;
