import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPanorama = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.4475 3.07312C17.3881 2.74149 16.4186 3.58696 16.4186 4.62005V8.24569C15.1217 8.49768 13.614 8.64346 12 8.64346C10.386 8.64346 8.87826 8.49768 7.5814 8.24569V4.62005C7.5814 3.58696 6.61193 2.74149 5.55252 3.07312C4.57111 3.38033 3.7219 3.77027 3.10283 4.24246C2.49454 4.70643 2 5.33865 2 6.13148V18.0787C2 18.294 2.03738 18.4996 2.10405 18.6934C2.16388 18.8674 2.24729 19.0319 2.34845 19.1856C2.67187 19.677 3.18915 20.0798 3.7886 20.409C4.3967 20.7431 5.13903 21.0285 5.97267 21.2614C7.64058 21.7273 9.73668 22 12 22C13.9009 22 15.6816 21.8076 17.1889 21.4712C18.6818 21.138 19.9619 20.6512 20.8188 20.0262C21.0272 19.8742 21.2239 19.7036 21.3949 19.5146C21.7545 19.1171 22 18.638 22 18.0787V6.13148C22 5.33865 21.5055 4.70643 20.8972 4.24246C20.2781 3.77027 19.4289 3.38033 18.4475 3.07312ZM20.6047 8.22659C20.5778 8.24416 20.5507 8.26148 20.5236 8.27855C19.7014 8.7951 18.5721 9.20856 17.27 9.50563C15.7455 9.85343 13.9349 10.0527 12 10.0527C10.0651 10.0527 8.25452 9.85343 6.73 9.50563C5.4279 9.20856 4.29864 8.7951 3.47645 8.27855C3.44929 8.26148 3.42224 8.24416 3.39535 8.22659V17.3892L6.22606 14.7138L7.50233 13.6349C8.42996 12.8507 9.81971 12.8937 10.6944 13.7388L13.7838 16.7236C14.0393 16.9704 14.4553 17.0087 14.759 16.8025L14.9737 16.6567C16.0566 15.9214 17.5173 16.0043 18.5058 16.8637L20.4069 18.5168C20.5626 18.3291 20.6047 18.1795 20.6047 18.0787V8.22659Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M19.2096 12.8399C19.2096 13.6182 18.5849 14.2492 17.8143 14.2492C17.0437 14.2492 16.4189 13.6182 16.4189 12.8399C16.4189 12.0616 17.0437 11.4307 17.8143 11.4307C18.5849 11.4307 19.2096 12.0616 19.2096 12.8399Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgPanorama;
