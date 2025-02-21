import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloundCross = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C10.1144 22 9.17157 22 8.58579 21.4142C8 20.8284 8 19.8856 8 18C8 16.1144 8 15.1716 8.58579 14.5858C9.17157 14 10.1144 14 12 14C13.8856 14 14.8284 14 15.4142 14.5858C16 15.1716 16 16.1144 16 18C16 19.8856 16 20.8284 15.4142 21.4142C14.8284 22 13.8856 22 12 22ZM10.6936 15.7508C10.4333 15.4905 10.0112 15.4905 9.75082 15.7508C9.49047 16.0112 9.49047 16.4333 9.75082 16.6936L11.0572 18L9.75082 19.3064C9.49047 19.5667 9.49047 19.9888 9.75082 20.2492C10.0112 20.5095 10.4333 20.5095 10.6936 20.2492L12 18.9428L13.3064 20.2492C13.5667 20.5095 13.9888 20.5095 14.2492 20.2492C14.5095 19.9888 14.5095 19.5667 14.2492 19.3064L12.9428 18L14.2492 16.6936C14.5095 16.4333 14.5095 16.0112 14.2492 15.7508C13.9888 15.4905 13.5667 15.4905 13.3064 15.7508L12 17.0572L10.6936 15.7508Z"
      fill="black"
    />
    <Path
      d="M6.50001 18L6.50001 17.9105C6.49991 17.0449 6.49981 16.2512 6.58661 15.6056C6.6822 14.8946 6.90709 14.1432 7.52514 13.5251C8.14319 12.9071 8.89464 12.6822 9.6056 12.5866C10.2512 12.4998 11.0449 12.4999 11.9105 12.5H12.0895C12.9551 12.4999 13.7488 12.4998 14.3944 12.5866C15.1054 12.6822 15.8568 12.9071 16.4749 13.5251C17.0929 14.1432 17.3178 14.8946 17.4134 15.6056C17.4989 16.2417 17.5001 17.0215 17.5 17.8722C20.0726 17.3221 22 15.0599 22 12.3529C22 9.88113 20.393 7.78024 18.1551 7.01498C17.8371 4.19371 15.4159 2 12.4762 2C9.32028 2 6.7619 4.52827 6.7619 7.64706C6.7619 8.33687 6.88706 8.9978 7.11616 9.60887C6.8475 9.55673 6.56983 9.52941 6.28571 9.52941C3.91878 9.52941 2 11.4256 2 13.7647C2 16.1038 3.91878 18 6.28571 18L6.50001 18Z"
      fill="black"
    />
  </Svg>
);
export default SvgCloundCross;
