import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAugmentedReality = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.0002 7.25C13.586 7.25 13.2502 7.58579 13.2502 8V16C13.2502 16.4142 13.586 16.75 14.0002 16.75C14.4144 16.75 14.7502 16.4142 14.7502 16V12.75H15.0845L17.3642 16.3975C17.5837 16.7488 18.0464 16.8555 18.3977 16.636C18.749 16.4165 18.8557 15.9538 18.6362 15.6025L16.7828 12.637C17.9203 12.3 18.7502 11.2469 18.7502 10C18.7502 8.48122 17.519 7.25 16.0002 7.25H14.0002ZM14.7502 8.75V11.25H16.0002C16.6906 11.25 17.2502 10.6904 17.2502 10C17.2502 9.30964 16.6906 8.75 16.0002 8.75H14.7502Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.21606 7.77629C9.11822 7.46319 8.82824 7.25 8.5002 7.25C8.17216 7.25 7.88219 7.46319 7.78434 7.77629L5.28434 15.7763C5.16079 16.1717 5.38114 16.5923 5.77649 16.7159C6.17185 16.8394 6.59251 16.6191 6.71606 16.2237L7.42659 13.95H9.57381L10.2843 16.2237C10.4079 16.6191 10.8285 16.8394 11.2239 16.7159C11.6193 16.5923 11.8396 16.1717 11.7161 15.7763L9.21606 7.77629ZM7.89534 12.45H9.10506L8.5002 10.5145L7.89534 12.45Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgAugmentedReality;
