import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAtom = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.4616 4.04707C14.665 4.8695 15.8622 5.85967 17.0014 6.99881C18.1405 8.13797 19.1307 9.33518 19.9531 10.5386C20.6542 9.1612 21.0756 7.85689 21.2062 6.72533C21.3709 5.29824 21.0676 4.24382 20.412 3.58821C19.7564 2.93259 18.702 2.62936 17.2749 2.79402C16.1433 2.92458 14.839 3.34601 13.4616 4.04707ZM20.8685 12.0004C21.8739 10.2352 22.514 8.47697 22.6963 6.89726C22.8913 5.20688 22.5675 3.62239 21.4727 2.52755C20.3778 1.43271 18.7933 1.10887 17.103 1.3039C15.5233 1.48617 13.765 2.12628 11.9999 3.13166C10.2348 2.12634 8.47661 1.48627 6.89694 1.30403C5.20662 1.10902 3.62218 1.43287 2.52736 2.52769C1.43253 3.62252 1.10869 5.20698 1.30371 6.89733C1.48597 8.47702 2.12605 10.2352 3.13141 12.0004C2.12613 13.7654 1.48611 15.5236 1.30389 17.1032C1.10891 18.7935 1.43276 20.3779 2.52756 21.4727C3.62235 22.5675 5.20676 22.8914 6.89705 22.6964C8.47668 22.5142 10.2348 21.8741 11.9999 20.8688C13.765 21.8742 15.5232 22.5143 17.1029 22.6965C18.7932 22.8915 20.3777 22.5677 21.4725 21.4728C22.5673 20.378 22.8911 18.7936 22.6961 17.1033C22.5139 15.5236 21.8738 13.7655 20.8685 12.0004ZM19.1193 12.0004C18.2824 10.6752 17.2141 9.33286 15.9407 8.05947C14.6673 6.78611 13.325 5.71785 11.9999 4.88093C10.6749 5.71783 9.33262 6.78604 8.05933 8.05933C6.7859 9.33276 5.7176 10.6752 4.88066 12.0004C5.71757 13.3254 6.78581 14.6677 8.05913 15.9411C9.33249 17.2144 10.6748 18.2827 11.9999 19.1196C13.3251 18.2827 14.6675 17.2143 15.9409 15.9409C17.2142 14.6676 18.2824 13.3254 19.1193 12.0004ZM13.4616 19.9534C14.6651 19.131 15.8624 18.1408 17.0016 17.0016C18.1406 15.8625 19.1307 14.6654 19.9531 13.4621C20.6541 14.8395 21.0755 16.1437 21.206 17.2752C21.3706 18.7022 21.0674 19.7566 20.4118 20.4122C19.7562 21.0678 18.7018 21.371 17.2748 21.2064C16.1433 21.0758 14.839 20.6545 13.4616 19.9534ZM10.5381 19.9534C9.33474 19.131 8.13759 18.1408 6.99847 17.0017C5.85938 15.8626 4.86924 14.6655 4.04684 13.4621C3.34589 14.8394 2.92453 16.1436 2.79401 17.2751C2.6294 18.7021 2.93263 19.7565 3.58822 20.4121C4.24381 21.0676 5.29816 21.3709 6.72515 21.2063C7.85662 21.0757 9.16082 20.6544 10.5381 19.9534ZM4.04681 10.5386C4.86926 9.33512 5.85948 8.13787 6.99867 6.99867C8.13773 5.85961 9.33483 4.86949 10.5382 4.04709C9.1608 3.34608 7.85655 2.92469 6.72503 2.79415C5.298 2.62951 4.24362 2.93274 3.58802 3.58835C2.93241 4.24396 2.62918 5.29836 2.79383 6.72541C2.92438 7.85695 3.34578 9.16122 4.04681 10.5386ZM12 10.2502C11.0335 10.2502 10.25 11.0337 10.25 12.0002C10.25 12.9667 11.0335 13.7502 12 13.7502C12.9665 13.7502 13.75 12.9667 13.75 12.0002C13.75 11.0337 12.9665 10.2502 12 10.2502ZM8.75001 12.0002C8.75001 10.2053 10.2051 8.7502 12 8.7502C13.7949 8.7502 15.25 10.2053 15.25 12.0002C15.25 13.7951 13.7949 15.2502 12 15.2502C10.2051 15.2502 8.75001 13.7951 8.75001 12.0002Z"
      fill="black"
    />
  </Svg>
);
export default SvgAtom;
