import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgClouds = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M22 12.3529C22 9.88113 20.393 7.78024 18.1551 7.01498M6.28571 18C3.91878 18 2 16.1038 2 13.7647C2 11.4256 3.91878 9.52941 6.28571 9.52941C6.56983 9.52941 6.8475 9.55673 7.11616 9.60887M14.381 7.02721C14.9767 6.81911 15.6178 6.70588 16.2857 6.70588C16.9404 6.70588 17.5693 6.81468 18.1551 7.01498M7.11616 9.60887C6.88706 8.9978 6.7619 8.33687 6.7619 7.64706C6.7619 4.52827 9.32028 2 12.4762 2C15.4159 2 17.8371 4.19371 18.1551 7.01498M7.11616 9.60887C7.68059 9.71839 8.20528 9.9374 8.66667 10.2426"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M17.0476 15.142C17.4349 15.0119 17.8516 14.9412 18.2857 14.9412C18.7113 14.9412 19.1201 15.0092 19.5008 15.1344M12.3255 16.7555C12.1509 16.723 11.9704 16.7059 11.7857 16.7059C10.2472 16.7059 9 17.891 9 19.3529C9 20.8149 10.2472 22 11.7857 22H18.2857C20.3371 22 22 20.4198 22 18.4706C22 16.9257 20.9554 15.6126 19.5008 15.1344M12.3255 16.7555C12.1766 16.3736 12.0952 15.9605 12.0952 15.5294C12.0952 13.5802 13.7582 12 15.8095 12C17.7203 12 19.2941 13.3711 19.5008 15.1344M12.3255 16.7555C12.6924 16.824 13.0334 16.9609 13.3333 17.1516"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgClouds;
