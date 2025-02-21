import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCorkscrew = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 12C22 13.1874 21.0374 14.15 19.85 14.15C18.6626 14.15 17.7 13.1874 17.7 12C17.7 10.8126 18.6626 9.85 19.85 9.85C21.0374 9.85 22 10.8126 22 12Z"
      fill="black"
    />
    <Path
      opacity={0.5}
      d="M21.3582 10.3849L13.6148 2.64148C12.7595 1.78617 11.3728 1.78617 10.5175 2.64148C9.66215 3.4968 9.66215 4.88353 10.5175 5.73885L18.2609 13.4823C18.4323 13.6537 18.6251 13.7908 18.8307 13.8935C18.1575 13.5303 17.7 12.8186 17.7 12C17.7 10.8126 18.6626 9.85 19.85 9.85C21.0232 9.85 21.9769 10.7896 21.9996 11.9573C22.0057 11.3889 21.7919 10.8186 21.3582 10.3849Z"
      fill="black"
    />
    <Path
      d="M12.5349 10.4047L13.8591 9.08057L14.773 9.99448L14.9197 10.1412L13.5955 11.4654C13.4826 11.5784 13.4619 11.7542 13.5457 11.8903L14.1916 12.94C14.929 14.1383 13.499 15.489 12.3446 14.6845L9.72175 12.8564L7.72702 11.4661L8.98638 13.2731L12.6712 18.56C13.4816 19.7227 12.1075 21.157 10.9111 20.3973L4.79546 16.5136L5.4448 17.8844C5.77832 18.5885 5.63444 19.4265 5.0826 19.9783L2.53033 22.5306C2.23744 22.8235 1.76256 22.8235 1.46967 22.5306C1.17678 22.2377 1.17678 21.7628 1.46967 21.47L4.02194 18.9177C4.12458 18.815 4.15191 18.659 4.08919 18.5265L3.13994 16.5226C2.58305 15.3469 3.91 14.1744 5.00816 14.8718L5.55239 15.2174L5.55349 15.2181L10.8641 18.5905L7.67509 14.015L5.84814 11.3937C5.01991 10.2054 6.46624 8.75904 7.65457 9.58727L11.1683 12.0362L12.4044 12.8978L12.2682 12.6764C12.0575 12.3341 11.9704 11.9443 12.0001 11.5651C12.0337 11.1384 12.2151 10.7245 12.5349 10.4047Z"
      fill="black"
    />
  </Svg>
);
export default SvgCorkscrew;
