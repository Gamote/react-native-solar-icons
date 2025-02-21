import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStarRing = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16.2733 19.4499C16.9027 19.6961 17.4879 19.8839 18.0206 20.0155L18.028 20.0173C18.9815 20.2521 19.739 20.2995 20.2774 20.2031C20.4294 20.1758 20.5575 20.1389 20.6655 20.0943C20.929 19.9837 21.0738 19.8265 21.1502 19.6637C21.2379 19.4768 21.2785 19.2057 21.2276 18.837C21.2002 18.6392 21.1464 18.4129 21.0592 18.1559C21.0459 18.1167 21.0319 18.0772 21.0173 18.0372C20.8989 17.7141 20.7363 17.3647 20.5303 16.9936L20.5192 16.9738C20.4896 16.9207 20.4591 16.8672 20.4277 16.8133C20.1531 16.3411 19.8116 15.8373 19.4059 15.3108L19.4016 15.3051C18.005 13.4939 15.9115 11.4961 13.3966 9.70961C10.7308 7.81595 8.15043 6.55663 6.15282 6.02888C6.09541 6.01372 6.03867 5.9992 5.98258 5.98533L5.97207 5.98282C5.0185 5.748 4.261 5.70061 3.72263 5.797C3.50713 5.83558 3.33981 5.89367 3.20977 5.96535C3.02463 6.06755 2.91508 6.19723 2.84982 6.33631C2.73735 6.57599 2.70832 6.9437 2.82591 7.44706C2.8628 7.60436 2.91427 7.77605 2.98272 7.96284C3.05862 8.16999 3.15258 8.38762 3.26426 8.61453C3.28022 8.64693 3.2966 8.67966 3.31341 8.71269L3.34262 8.7696C3.37671 8.83542 3.41218 8.90188 3.44902 8.96894C3.74229 9.50281 4.1253 10.081 4.5941 10.6894L4.59693 10.6931C5.1008 11.3467 5.69871 12.0288 6.38022 12.7207C6.53497 12.8778 6.67873 13.0224 6.81225 13.1555L6.83631 12.8473C6.93672 11.5612 6.98693 10.9181 7.42304 10.6889C7.85915 10.4597 8.39234 10.7961 9.45873 11.469L9.73462 11.6431C10.0377 11.8343 10.1892 11.9299 10.3637 11.9538C10.5382 11.9777 10.716 11.9272 11.0715 11.8261L11.3952 11.7342C12.6464 11.3786 13.272 11.2009 13.6068 11.5356C13.9416 11.8704 13.7638 12.496 13.4083 13.7472L13.3163 14.0709C13.2152 14.4264 13.1647 14.6042 13.1886 14.7787C13.2125 14.9532 13.3081 15.1048 13.4993 15.4078L13.6734 15.6837C14.3463 16.7501 14.6827 17.2833 14.4535 17.7194C14.2243 18.1555 13.5812 18.2057 12.2951 18.3061L11.9624 18.3321C11.5969 18.3606 11.4142 18.3749 11.2544 18.4589C11.0946 18.5428 10.976 18.687 10.7386 18.9753L10.5225 19.2378C9.68713 20.2524 9.26946 20.7597 8.79304 20.6944C8.31661 20.6292 8.09694 20.0346 7.65761 18.8455L7.54395 18.5379C7.4191 18.2 7.35668 18.031 7.23405 17.9084C7.11142 17.7857 6.94246 17.7233 6.60455 17.5985L6.2969 17.4848C5.10778 17.0455 4.5132 16.8258 4.44797 16.3494C4.38274 15.873 4.89003 15.4553 5.90463 14.62L6.04384 14.5053C5.82866 14.2942 5.58576 14.0516 5.31162 13.7733C4.47983 12.9289 3.74802 12.08 3.14345 11.256C3.02109 11.0893 2.90394 10.9235 2.79223 10.7591C2.67321 10.5839 2.56037 10.4101 2.45397 10.2381C2.39856 10.1485 2.3449 10.0594 2.29303 9.97077C2.19204 9.79828 2.09783 9.62774 2.01067 9.45946C1.9776 9.39562 1.94529 9.33159 1.9138 9.26742C1.7821 8.99908 1.66843 8.73581 1.5743 8.47893C1.49125 8.25229 1.42093 8.02357 1.36722 7.79538C1.19114 7.0491 1.197 6.32756 1.49189 5.69911C1.7399 5.17057 2.14467 4.80813 2.63096 4.57836C2.91123 4.44593 3.21858 4.35757 3.53861 4.30688C4.39881 4.17062 5.42979 4.2864 6.53596 4.57864C8.75846 5.16581 11.5025 6.52419 14.2652 8.48675C17.031 10.4515 19.3455 12.6877 20.8493 14.7341C21.3469 15.4113 21.7645 16.0795 22.0802 16.7204C22.1811 16.9252 22.2716 17.1273 22.3509 17.3259C22.3977 17.4431 22.4407 17.5591 22.4796 17.6738C22.7858 18.576 22.8797 19.5091 22.5081 20.3009C22.2358 20.8812 21.7817 21.2568 21.2374 21.4799C21.0179 21.5706 20.7838 21.6362 20.5417 21.6796C20.3358 21.7165 20.1197 21.7384 19.8951 21.7464C19.8603 21.7477 19.8254 21.7486 19.7905 21.7492C19.6446 21.7517 19.4946 21.7485 19.3407 21.7398C19.0403 21.723 18.7253 21.6852 18.3981 21.6281C17.5736 21.484 16.6712 21.2163 15.7267 20.8467C15.341 20.6958 15.1506 20.2608 15.3016 19.875C15.4525 19.4893 15.8875 19.2989 16.2733 19.4499Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.6653 2.40887C19.9918 2.66377 20.0498 3.13509 19.7949 3.46158L19.6836 3.60419C19.8074 4.26218 20.1092 4.871 20.5544 5.35951C20.8334 5.66567 20.8113 6.14003 20.5052 6.41902C20.199 6.69802 19.7246 6.676 19.4456 6.36983C18.9952 5.87554 18.6498 5.29762 18.4247 4.67251C18.3203 4.73491 18.2146 4.79175 18.105 4.84354C17.9852 4.90014 17.8639 4.94919 17.7385 4.99298C18.0635 5.58426 18.2703 6.23955 18.343 6.9205C18.3869 7.33238 18.0886 7.70188 17.6767 7.7458C17.2648 7.78973 16.8953 7.49144 16.8514 7.07956C16.7805 6.41466 16.5297 5.78795 16.1329 5.26875L15.9748 5.26343C15.5608 5.2495 15.2365 4.90261 15.2504 4.48863C15.2644 4.07465 15.6112 3.75035 16.0252 3.76428L16.4325 3.77798C16.9586 3.67412 17.2301 3.59791 17.4642 3.48731C17.6993 3.37622 17.9338 3.21283 18.3552 2.86811L18.6126 2.53849C18.8675 2.212 19.3388 2.15396 19.6653 2.40887Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgStarRing;
