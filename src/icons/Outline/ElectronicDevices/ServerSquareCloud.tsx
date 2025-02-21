import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgServerSquareCloud = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.94358 2.25H14.0564C15.8942 2.24998 17.3498 2.24997 18.489 2.40314C19.6614 2.56076 20.6104 2.89288 21.3588 3.64124C22.1071 4.38961 22.4392 5.33856 22.5969 6.51098C22.75 7.65019 22.75 9.10583 22.75 10.9436V13C22.75 13.4142 22.4142 13.75 22 13.75C21.5858 13.75 21.25 13.4142 21.25 13V12.75H2.75V13C2.75 14.9068 2.75159 16.2615 2.88976 17.2892C3.02502 18.2952 3.27869 18.8749 3.7019 19.2981C4.12511 19.7213 4.70476 19.975 5.71085 20.1102C6.73851 20.2484 8.09318 20.25 10 20.25H13C13.4142 20.25 13.75 20.5858 13.75 21C13.75 21.4142 13.4142 21.75 13 21.75H9.94359C8.10583 21.75 6.65019 21.75 5.51098 21.5969C4.33856 21.4392 3.38961 21.1071 2.64124 20.3588C1.89288 19.6104 1.56076 18.6614 1.40314 17.489C1.24997 16.3498 1.24998 14.8942 1.25 13.0564V10.9436C1.24998 9.10582 1.24997 7.65019 1.40314 6.51098C1.56076 5.33856 1.89288 4.38961 2.64124 3.64124C3.38961 2.89288 4.33856 2.56076 5.51098 2.40314C6.65019 2.24997 8.10582 2.24998 9.94358 2.25ZM2.75 11.25H21.25V11C21.25 9.09318 21.2484 7.73851 21.1102 6.71085C20.975 5.70476 20.7213 5.12511 20.2981 4.7019C19.8749 4.27869 19.2952 4.02502 18.2892 3.88976C17.2615 3.75159 15.9068 3.75 14 3.75H10C8.09318 3.75 6.73851 3.75159 5.71085 3.88976C4.70476 4.02502 4.12511 4.27869 3.7019 4.7019C3.27869 5.12511 3.02502 5.70476 2.88976 6.71085C2.75159 7.73851 2.75 9.09318 2.75 11V11.25ZM6 5.75C6.41421 5.75 6.75 6.08579 6.75 6.5V8.5C6.75 8.91421 6.41421 9.25 6 9.25C5.58579 9.25 5.25 8.91421 5.25 8.5V6.5C5.25 6.08579 5.58579 5.75 6 5.75ZM9 5.75C9.41421 5.75 9.75 6.08579 9.75 6.5V8.5C9.75 8.91421 9.41421 9.25 9 9.25C8.58579 9.25 8.25 8.91421 8.25 8.5V6.5C8.25 6.08579 8.58579 5.75 9 5.75ZM12.75 7.5C12.75 7.08579 13.0858 6.75 13.5 6.75H18C18.4142 6.75 18.75 7.08579 18.75 7.5C18.75 7.91421 18.4142 8.25 18 8.25H13.5C13.0858 8.25 12.75 7.91421 12.75 7.5ZM18.6667 15.75C18.0161 15.75 17.4167 16.3214 17.4167 17.1176C17.4167 17.1727 17.4196 17.2268 17.4253 17.2799C17.5456 17.3363 17.6599 17.4031 17.767 17.4791C18.105 17.7186 18.1847 18.1867 17.9452 18.5247C17.7057 18.8626 17.2376 18.9424 16.8997 18.7029C16.8191 18.6458 16.7305 18.6069 16.638 18.5876C16.5938 18.5784 16.5478 18.5735 16.5 18.5735C16.1256 18.5735 15.75 18.9079 15.75 19.4118C15.75 19.9157 16.1256 20.25 16.5 20.25H20C20.6505 20.25 21.25 19.6786 21.25 18.8824C21.25 18.258 20.8728 17.7594 20.3963 17.5848C20.2722 17.5394 20.1394 17.5147 20 17.5147C19.8579 17.5147 19.7224 17.5404 19.5962 17.5876C19.2083 17.7328 18.7761 17.536 18.6309 17.1481C18.4857 16.7601 18.6825 16.328 19.0705 16.1828C19.1988 16.1348 19.3315 16.0964 19.4677 16.0685C19.2454 15.8666 18.9617 15.75 18.6667 15.75ZM21.3208 16.3663C21.0086 15.1703 19.9636 14.25 18.6667 14.25C17.1081 14.25 15.9167 15.5749 15.9167 17.1176C15.9167 17.129 15.9167 17.1404 15.9169 17.1517C14.9353 17.4222 14.25 18.3594 14.25 19.4118C14.25 20.6622 15.2175 21.75 16.5 21.75H20C21.5586 21.75 22.75 20.4251 22.75 18.8824C22.75 17.8134 22.1848 16.8596 21.3208 16.3663ZM6 14.75C6.41421 14.75 6.75 15.0858 6.75 15.5V17.5C6.75 17.9142 6.41421 18.25 6 18.25C5.58579 18.25 5.25 17.9142 5.25 17.5V15.5C5.25 15.0858 5.58579 14.75 6 14.75ZM9 14.75C9.41421 14.75 9.75 15.0858 9.75 15.5V17.5C9.75 17.9142 9.41421 18.25 9 18.25C8.58579 18.25 8.25 17.9142 8.25 17.5V15.5C8.25 15.0858 8.58579 14.75 9 14.75Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgServerSquareCloud;
