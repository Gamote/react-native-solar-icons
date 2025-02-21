import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloudRain = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0303 14.9697C12.3232 15.2626 12.3232 15.7374 12.0303 16.0303L10.0303 18.0303C9.73744 18.3232 9.26256 18.3232 8.96967 18.0303C8.67678 17.7374 8.67678 17.2626 8.96967 16.9697L10.9697 14.9697C11.2626 14.6768 11.7374 14.6768 12.0303 14.9697ZM16.5303 14.9697C16.8232 15.2626 16.8232 15.7374 16.5303 16.0303L14.5303 18.0303C14.2374 18.3232 13.7626 18.3232 13.4697 18.0303C13.1768 17.7374 13.1768 17.2626 13.4697 16.9697L15.4697 14.9697C15.7626 14.6768 16.2374 14.6768 16.5303 14.9697ZM8.03033 18.4697C8.32322 18.7626 8.32322 19.2374 8.03033 19.5303L6.03033 21.5303C5.73744 21.8232 5.26256 21.8232 4.96967 21.5303C4.67678 21.2374 4.67678 20.7626 4.96967 20.4697L6.96967 18.4697C7.26256 18.1768 7.73744 18.1768 8.03033 18.4697ZM17.5303 18.4697C17.8232 18.7626 17.8232 19.2374 17.5303 19.5303L15.5303 21.5303C15.2374 21.8232 14.7626 21.8232 14.4697 21.5303C14.1768 21.2374 14.1768 20.7626 14.4697 20.4697L16.4697 18.4697C16.7626 18.1768 17.2374 18.1768 17.5303 18.4697ZM12.5303 19.4697C12.8232 19.7626 12.8232 20.2374 12.5303 20.5303L10.5303 22.5303C10.2374 22.8232 9.76256 22.8232 9.46967 22.5303C9.17678 22.2374 9.17678 21.7626 9.46967 21.4697L11.4697 19.4697C11.7626 19.1768 12.2374 19.1768 12.5303 19.4697Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.0303 14.9697C12.3232 15.2626 12.3232 15.7374 12.0303 16.0303L10.0303 18.0303C9.91413 18.1465 9.7693 18.2166 9.61855 18.2406C9.3893 18.2771 9.14637 18.207 8.96967 18.0303C8.87927 17.9399 8.81677 17.8322 8.78218 17.7178C8.72864 17.5409 8.74191 17.348 8.82198 17.1789C8.85782 17.1032 8.90705 17.0323 8.96967 16.9697L10.9697 14.9697C11.2626 14.6768 11.7374 14.6768 12.0303 14.9697Z"
      fill={props.primaryColor}
    />
    <Path
      d="M15.4697 14.9697L13.4697 16.9697C13.1768 17.2626 13.1768 17.7374 13.4697 18.0303C13.7626 18.3232 14.2374 18.3232 14.5303 18.0303L16.5303 16.0303C16.8232 15.7374 16.8232 15.2626 16.5303 14.9697C16.2374 14.6768 15.7626 14.6768 15.4697 14.9697Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M16.2857 19C19.4416 19 22 16.4717 22 13.3529C22 10.8811 20.393 8.78024 18.1551 8.01498C17.8371 5.19371 15.4159 3 12.4762 3C9.32028 3 6.7619 5.52827 6.7619 8.64706C6.7619 9.33687 6.88706 9.9978 7.11616 10.6089C6.8475 10.5567 6.56983 10.5294 6.28571 10.5294C3.91878 10.5294 2 12.4256 2 14.7647C2 17.1038 3.91878 19 6.28571 19H16.2857Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgCloudRain;
