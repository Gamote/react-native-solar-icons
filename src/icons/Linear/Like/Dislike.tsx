import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDislike = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20.9752 11.8148L20.2361 11.9426L20.2361 11.9426L20.9752 11.8148ZM20.2696 7.73505L19.5306 7.86285L19.5306 7.86285L20.2696 7.73505ZM6.93777 3.52293L6.19056 3.45832L6.19056 3.45832L6.93777 3.52293ZM6.12561 12.9156L6.87282 12.9802L6.87282 12.9802L6.12561 12.9156ZM13.995 18.7786L14.7351 18.6573L14.7351 18.6573L13.995 18.7786ZM13.3323 14.734L14.0724 14.6128L14.0724 14.6128L13.3323 14.734ZM6.69814 14.3225L6.20855 14.8907L6.20855 14.8907L6.69814 14.3225ZM8.13688 15.5623L8.62647 14.9942L8.62647 14.9942L8.13688 15.5623ZM10.5181 19.2163L9.79208 19.4046L9.79208 19.4046L10.5181 19.2163ZM10.9938 21.0501L11.7197 20.8618L11.7197 20.8618L10.9938 21.0501ZM12.6676 21.9356L12.4382 21.2216L12.4382 21.2216L12.6676 21.9356ZM12.8126 21.8891L13.042 22.6031L13.042 22.6031L12.8126 21.8891ZM9.86195 17.5374L10.5235 17.184L10.5235 17.184L9.86195 17.5374ZM13.9047 20.7525L13.1787 20.5642L13.1787 20.5642L13.9047 20.7525ZM11.6742 21.8676L11.3486 22.5433L11.3486 22.5433L11.6742 21.8676ZM3.9716 2.52928L3.22439 2.46467L3.22439 2.46467L3.9716 2.52928ZM3 13.7658L3.74721 13.8304C3.71261 14.2306 3.36893 14.5324 2.96767 14.5151C2.5664 14.4978 2.25 14.1674 2.25 13.7658L3 13.7658ZM20.2361 11.9426L19.5306 7.86285L21.0087 7.60724L21.7142 11.687L20.2361 11.9426ZM13.245 2.75H8.59635V1.25H13.245V2.75ZM7.68498 3.58754L6.87282 12.9802L5.3784 12.851L6.19056 3.45832L7.68498 3.58754ZM19.5306 7.86285C19.0238 4.93226 16.3813 2.75 13.245 2.75V1.25C17.0712 1.25 20.3708 3.91896 21.0087 7.60724L19.5306 7.86285ZM13.2548 18.8998L12.5921 14.8553L14.0724 14.6128L14.7351 18.6573L13.2548 18.8998ZM7.18773 13.7544L8.62647 14.9942L7.64729 16.1305L6.20855 14.8907L7.18773 13.7544ZM11.244 19.0279L11.7197 20.8618L10.2678 21.2384L9.79208 19.4046L11.244 19.0279ZM12.4382 21.2216L12.5832 21.175L13.042 22.6031L12.897 22.6497L12.4382 21.2216ZM10.5235 17.184C10.8354 17.768 11.0777 18.3866 11.244 19.0279L9.79208 19.4046C9.65573 18.8789 9.45699 18.3711 9.20042 17.8908L10.5235 17.184ZM12.5832 21.175C12.8896 21.0766 13.1072 20.8399 13.1787 20.5642L14.6307 20.9408C14.4252 21.7328 13.819 22.3535 13.042 22.6031L12.5832 21.175ZM11.7197 20.8618C11.7548 20.9968 11.8523 21.1209 11.9998 21.192L11.3486 22.5433C10.8166 22.2869 10.417 21.8137 10.2678 21.2384L11.7197 20.8618ZM11.9998 21.192C12.1345 21.2569 12.2931 21.2682 12.4382 21.2216L12.897 22.6497C12.3873 22.8135 11.8312 22.7758 11.3486 22.5433L11.9998 21.192ZM14.1537 13.0158H19.3348V14.5158H14.1537V13.0158ZM4.71881 2.59389L3.74721 13.8304L2.25279 13.7012L3.22439 2.46467L4.71881 2.59389ZM3.75 2.48726V13.7658H2.25V2.48726H3.75ZM3.22439 2.46467C3.2112 2.61722 3.33146 2.75 3.48671 2.75V1.25C4.21268 1.25 4.78122 1.8721 4.71881 2.59389L3.22439 2.46467ZM14.7351 18.6573C14.8596 19.4174 14.8241 20.1952 14.6307 20.9408L13.1787 20.5642C13.3197 20.0208 13.3456 19.4539 13.2548 18.8998L14.7351 18.6573ZM8.59635 2.75C8.12244 2.75 7.72601 3.11302 7.68498 3.58754L6.19056 3.45832C6.29852 2.20975 7.3427 1.25 8.59635 1.25V2.75ZM8.62647 14.9942C9.30632 15.58 10.0392 16.2773 10.5235 17.184L9.20042 17.8908C8.85404 17.2423 8.3025 16.6951 7.64729 16.1305L8.62647 14.9942ZM21.7142 11.687C21.9695 13.1635 20.8341 14.5158 19.3348 14.5158V13.0158C19.9014 13.0158 20.3332 12.5041 20.2361 11.9426L21.7142 11.687ZM3.48671 2.75C3.63292 2.75 3.75 2.63156 3.75 2.48726H2.25C2.25 1.80474 2.80289 1.25 3.48671 1.25V2.75ZM12.5921 14.8553C12.4344 13.8924 13.1766 13.0158 14.1537 13.0158V14.5158C14.1038 14.5158 14.0639 14.561 14.0724 14.6128L12.5921 14.8553ZM6.87282 12.9802C6.8474 13.2742 6.96475 13.5622 7.18773 13.7544L6.20855 14.8907C5.62022 14.3837 5.31149 13.6247 5.3784 12.851L6.87282 12.9802Z"
      fill="black"
    />
  </Svg>
);
export default SvgDislike;
