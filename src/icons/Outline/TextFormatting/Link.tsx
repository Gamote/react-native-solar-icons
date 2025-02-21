import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLink = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15.7284 3.88409C17.1627 2.4442 19.2608 2.41396 20.4222 3.57993C21.5859 4.7481 21.5546 6.85934 20.1193 8.30021L17.6954 10.7335C17.4031 11.0269 17.404 11.5018 17.6975 11.7941C17.9909 12.0864 18.4658 12.0855 18.7581 11.7921L21.182 9.35882C23.0933 7.4401 23.3332 4.37677 21.485 2.52133C19.6345 0.663673 16.5779 0.905786 14.6657 2.82548L9.81802 7.69194C7.90672 9.61066 7.66677 12.674 9.51503 14.5295C9.80736 14.8229 10.2822 14.8238 10.5757 14.5315C10.8692 14.2392 10.8701 13.7643 10.5777 13.4709C9.41409 12.3027 9.44543 10.1914 10.8807 8.75054L15.7284 3.88409Z"
      fill="black"
    />
    <Path
      d="M14.4849 9.47086C14.1926 9.1774 13.7177 9.17648 13.4243 9.46881C13.1308 9.76113 13.1299 10.236 13.4222 10.5295C14.5859 11.6976 14.5546 13.8089 13.1192 15.2497L8.27162 20.1162C6.8373 21.5561 4.73922 21.5864 3.57775 20.4204C2.41409 19.2522 2.44543 17.1409 3.88074 15.7001L6.30458 13.2668C6.5969 12.9733 6.59598 12.4985 6.30252 12.2062C6.00906 11.9138 5.53419 11.9147 5.24187 12.2082L2.81802 14.6415C0.906723 16.5602 0.666764 19.6235 2.51504 21.479C4.36551 23.3367 7.42206 23.0945 9.33434 21.1748L14.182 16.3083C16.0933 14.3896 16.3332 11.3263 14.4849 9.47086Z"
      fill="black"
    />
  </Svg>
);
export default SvgLink;
