import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDialog = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14 7.07026C12.8233 6.38958 11.4571 6 10 6C5.58172 6 2 9.58172 2 14C2 15.2797 2.30049 16.4893 2.83477 17.562C2.97675 17.847 3.02401 18.1729 2.94169 18.4805L2.46521 20.2613C2.25836 21.0344 2.96561 21.7416 3.73868 21.5348L5.51951 21.0583C5.82715 20.976 6.15297 21.0233 6.43802 21.1652C7.51069 21.6995 8.72025 22 10 22C14.4183 22 18 18.4183 18 14C18 12.5429 17.6104 11.1767 16.9297 10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18 14.5018C18.0665 14.4741 18.1324 14.4453 18.1977 14.4155C18.5598 14.2501 18.9661 14.1882 19.3506 14.2911L19.8267 14.4185C20.793 14.677 21.677 13.793 21.4185 12.8267L21.2911 12.3506C21.1882 11.9661 21.2501 11.5598 21.4155 11.1977C21.7908 10.376 22 9.46242 22 8.5C22 7.22592 21.6334 6.03745 21 5.03431M9.5 5.9956C10.4806 3.64899 12.7977 2 15.5 2C16.7886 2 17.9897 2.375 19 3.02182"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6.51828 14H6.52728M10.009 14H10.018M13.5 14H13.509"
      stroke={props.primaryColor}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgDialog;
