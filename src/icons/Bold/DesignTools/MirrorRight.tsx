import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMirrorRight = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6591 2.75C11.6591 3.16421 11.3233 3.5 10.9091 3.5H10C9.5638 3.5 9.1653 3.50001 8.79757 3.50318C8.38337 3.50675 8.0447 3.17387 8.04112 2.75968C8.03755 2.34548 8.37043 2.00681 8.78463 2.00323C9.15945 2 9.56404 2 9.99785 2L10.9091 2C11.3233 2 11.6591 2.33579 11.6591 2.75ZM11.6591 20.75C11.6591 21.1642 11.3233 21.5 10.9091 21.5H9.9977C9.56395 21.5 9.15941 21.5 8.78463 21.4968C8.37043 21.4932 8.03755 21.1545 8.04112 20.7403C8.0447 20.3261 8.38337 19.9932 8.79757 19.9968C9.1653 20 9.56379 20 10 20H10.9091C11.3233 20 11.6591 20.3358 11.6591 20.75ZM6.62882 2.8046C6.75175 3.20015 6.53075 3.62047 6.1352 3.7434C5.81401 3.84322 5.59048 3.97754 5.40901 4.15901C5.22754 4.34048 5.09322 4.56401 4.9934 4.8852C4.87047 5.28075 4.45015 5.50175 4.0546 5.37882C3.65905 5.25589 3.43805 4.83557 3.56098 4.44002C3.72116 3.92463 3.96876 3.47794 4.34835 3.09835C4.72794 2.71876 5.17463 2.47116 5.69002 2.31098C6.08558 2.18805 6.50589 2.40905 6.62882 2.8046ZM6.62882 20.6954C6.50589 21.091 6.08557 21.312 5.69002 21.189C5.17463 21.0288 4.72794 20.7812 4.34835 20.4017C3.96876 20.0221 3.72116 19.5754 3.56098 19.06C3.43805 18.6644 3.65905 18.2441 4.0546 18.1212C4.45015 17.9983 4.87047 18.2193 4.9934 18.6148C5.09322 18.936 5.22754 19.1595 5.40901 19.341C5.59048 19.5225 5.81401 19.6568 6.1352 19.7566C6.53075 19.8795 6.75175 20.2998 6.62882 20.6954ZM4.00968 6.79112C4.42387 6.7947 4.75675 7.13337 4.75318 7.54756C4.75001 7.9153 4.75 8.31379 4.75 8.75V10.1136C4.75 10.5278 4.41421 10.8636 4 10.8636C3.58579 10.8636 3.25 10.5278 3.25 10.1136L3.25 8.7477C3.25 8.31395 3.25 7.90941 3.25324 7.53462C3.25681 7.12043 3.59548 6.78755 4.00968 6.79112ZM4.00967 16.7089C3.59548 16.7125 3.25681 16.3796 3.25323 15.9654C3.25 15.5906 3.25 15.186 3.25 14.7523L3.25 13.3864C3.25 12.9722 3.58579 12.6364 4 12.6364C4.41421 12.6364 4.75 12.9721 4.75 13.3864L4.75 14.75C4.75 15.1862 4.75001 15.5847 4.75318 15.9524C4.75675 16.3666 4.42387 16.7053 4.00967 16.7089Z"
      fill={props.primaryColor}
    />
    <Path
      d="M22 12.75V10.75C22 6.97876 22 5.09315 20.8284 3.92157C19.7358 2.82894 17.1523 2.75532 13.75 2.75036C13.75 2.33614 13.4142 2 13 2C12.5858 2 12.25 2.33579 12.25 2.75L12.25 20.75C12.25 21.1642 12.5858 21.5 13 21.5C13.4142 21.5 13.75 21.1642 13.75 20.75C17.1523 20.745 19.7358 20.6711 20.8284 19.5784C22 18.4069 22 16.5212 22 12.75Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMirrorRight;
