import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGift = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9426 1.25C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25H11.9426ZM11.25 2.75028C9.25629 2.75238 7.77266 2.77054 6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.77054 7.77266 2.75238 9.25629 2.75028 11.25H6.91376C6.56279 10.8116 6.30055 10.2945 6.15756 9.72253C5.6193 7.56951 7.56951 5.6193 9.72253 6.15756C10.2945 6.30055 10.8116 6.56279 11.25 6.91376V2.75028ZM2.75028 12.75C2.75238 14.7437 2.77054 16.2273 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.77266 21.2295 9.25629 21.2476 11.25 21.2497V14.1236C10.4704 15.6809 8.86003 16.75 7 16.75C6.58579 16.75 6.25 16.4142 6.25 16C6.25 15.5858 6.58579 15.25 7 15.25C8.53679 15.25 9.82445 14.1834 10.163 12.75H10.0351L10.0259 12.75H2.75028ZM12.75 21.2497C14.7437 21.2476 16.2273 21.2295 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2295 16.2273 21.2476 14.7437 21.2497 12.75H13.9741L13.9649 12.75H13.837C14.1756 14.1834 15.4632 15.25 17 15.25C17.4142 15.25 17.75 15.5858 17.75 16C17.75 16.4142 17.4142 16.75 17 16.75C15.14 16.75 13.5296 15.6809 12.75 14.1236V21.2497ZM21.2497 11.25H17.0863C17.4372 10.8116 17.6995 10.2945 17.8425 9.72253C18.3807 7.56951 16.4305 5.6193 14.2775 6.15756C13.7055 6.30055 13.1884 6.56279 12.75 6.91376V2.75028C14.7437 2.75238 16.2273 2.77054 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2295 7.77266 21.2476 9.25629 21.2497 11.25ZM12.75 11.25L12.75 10.0291C12.7527 8.88589 13.5317 7.89017 14.6413 7.61277C15.6957 7.34916 16.6509 8.30428 16.3872 9.35872C16.1099 10.4679 15.1149 11.2467 13.9722 11.25H12.75ZM11.25 10.0275C11.2466 8.88494 10.4678 7.89004 9.35872 7.61277C8.30428 7.34916 7.34916 8.30428 7.61277 9.35872C7.89006 10.4679 8.88513 11.2467 10.0278 11.25H11.25V10.0275Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgGift;
