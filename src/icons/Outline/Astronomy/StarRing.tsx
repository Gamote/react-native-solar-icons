import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStarRing = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.85873 10.835L9.81068 10.8047C9.31892 10.4943 8.87783 10.2159 8.50327 10.0531C8.10261 9.87898 7.59115 9.75344 7.07388 10.0253C6.5642 10.2932 6.36907 10.7798 6.27223 11.2058C6.19534 11.5439 6.15394 11.969 6.11525 12.4478C5.5428 11.8496 5.03442 11.2606 4.59693 10.6931L4.5941 10.6894C4.1253 10.081 3.74229 9.50282 3.44902 8.96894C3.41218 8.90188 3.37671 8.83542 3.34262 8.7696L3.31341 8.71269C3.2966 8.67966 3.28022 8.64694 3.26426 8.61453C3.15258 8.38762 3.05862 8.16999 2.98272 7.96284C2.91427 7.77605 2.8628 7.60436 2.82591 7.44706C2.70832 6.9437 2.73735 6.57599 2.84982 6.33631C2.91508 6.19723 3.02463 6.06755 3.20977 5.96535C3.33981 5.89367 3.50713 5.83558 3.72263 5.797C4.261 5.70061 5.0185 5.74801 5.97207 5.98283L5.98258 5.98534C6.03867 5.99921 6.09541 6.01372 6.15282 6.02889C8.15043 6.55663 10.7308 7.81595 13.3966 9.70961C15.9115 11.4961 18.005 13.4939 19.4016 15.3051L19.4059 15.3108C19.8116 15.8373 20.1531 16.3411 20.4277 16.8133C20.4591 16.8672 20.4896 16.9207 20.5192 16.9738L20.5303 16.9936C20.7363 17.3647 20.8989 17.7141 21.0173 18.0372C21.0319 18.0772 21.0459 18.1167 21.0592 18.1559C21.1464 18.4129 21.2002 18.6392 21.2276 18.837C21.2785 19.2058 21.2379 19.4768 21.1502 19.6637C21.0738 19.8265 20.929 19.9837 20.6655 20.0943C20.5575 20.1389 20.4294 20.1759 20.2774 20.2031C19.739 20.2995 18.9815 20.2521 18.028 20.0173L18.0206 20.0155C17.4879 19.8839 16.9027 19.6961 16.2733 19.4499C15.8875 19.2989 15.4525 19.4893 15.3016 19.875C15.1506 20.2608 15.341 20.6958 15.7267 20.8467C16.6712 21.2163 17.5736 21.484 18.3981 21.6281C18.7253 21.6852 19.0403 21.723 19.3407 21.7398C19.4946 21.7485 19.6446 21.7517 19.7905 21.7492C19.8254 21.7486 19.8603 21.7477 19.8951 21.7464C20.1197 21.7384 20.3358 21.7165 20.5417 21.6796C20.7838 21.6362 21.0179 21.5706 21.2374 21.4799C21.7817 21.2568 22.2358 20.8812 22.5081 20.3009C22.8797 19.5091 22.7858 18.576 22.4796 17.6738C22.4407 17.5591 22.3977 17.4431 22.3509 17.3259C22.2716 17.1273 22.1811 16.9252 22.0802 16.7204C21.7645 16.0795 21.3469 15.4113 20.8493 14.7341C19.3455 12.6877 17.031 10.4515 14.2652 8.48675C11.5025 6.52419 8.75846 5.16581 6.53596 4.57864C5.42979 4.2864 4.39881 4.17062 3.53861 4.30688C3.21858 4.35757 2.91123 4.44593 2.63096 4.57836C2.14467 4.80813 1.7399 5.17057 1.49189 5.69911C1.197 6.32756 1.19114 7.0491 1.36722 7.79538C1.42093 8.02357 1.49125 8.25229 1.5743 8.47893C1.66843 8.73581 1.7821 8.99908 1.9138 9.26742C1.94529 9.33159 1.9776 9.39562 2.01067 9.45946C2.09783 9.62774 2.19204 9.79828 2.29303 9.97077C2.3449 10.0594 2.39856 10.1485 2.45397 10.2381C2.56037 10.4101 2.67321 10.5839 2.79223 10.7591C2.90394 10.9235 3.02109 11.0893 3.14345 11.256C3.74802 12.08 4.47983 12.9289 5.31162 13.7733C5.38536 13.8482 5.47095 13.9043 5.56245 13.9416L5.42771 14.0412L5.3858 14.0757C4.91446 14.4637 4.49948 14.8053 4.21774 15.1133C3.92682 15.4314 3.62569 15.8745 3.70468 16.4514C3.78576 17.0435 4.21037 17.3783 4.58702 17.5872C4.94328 17.7848 5.43472 17.9663 5.98298 18.1687L6.03676 18.1886L6.3444 18.3023C6.52465 18.3689 6.61753 18.4038 6.68285 18.4343L6.69997 18.4425L6.70821 18.4596C6.73867 18.525 6.77361 18.6178 6.84021 18.7981L6.95387 19.1057L6.97373 19.1595C7.17622 19.7078 7.35772 20.1992 7.5553 20.5555C7.76417 20.9321 8.09896 21.3567 8.69107 21.4378C9.26795 21.5168 9.7111 21.2157 10.0291 20.9247C10.3372 20.643 10.6788 20.228 11.0667 19.7567L11.3174 19.4523C11.4431 19.2996 11.5114 19.2174 11.5663 19.1603C11.5843 19.1415 11.5963 19.1304 11.6032 19.1244C11.6115 19.1224 11.6258 19.1193 11.6483 19.1157C11.7236 19.1038 11.8264 19.0953 12.0205 19.0801L12.408 19.0498C13.004 19.0034 13.5324 18.9622 13.9367 18.8703C14.3626 18.7734 14.8493 18.5783 15.1172 18.0686C15.389 17.5513 15.2635 17.0399 15.0894 16.6392C14.9266 16.2647 14.6482 15.8236 14.3378 15.3318L14.3075 15.2837L14.1334 15.0079C14.0314 14.8462 13.9794 14.7627 13.9463 14.6991C13.9412 14.6892 13.9373 14.6814 13.9345 14.6754C13.9357 14.6672 13.9376 14.6559 13.9407 14.6409C13.9558 14.5656 13.9839 14.4649 14.0375 14.2762L14.1295 13.9525L14.1447 13.8989C14.3094 13.3194 14.4554 12.806 14.5097 12.3966C14.5657 11.9741 14.5586 11.4273 14.1369 11.0056C13.7152 10.5839 13.1684 10.5768 12.7458 10.6328C12.3365 10.6871 11.8231 10.833 11.2436 10.9978L11.19 11.013L10.8663 11.105C10.6775 11.1586 10.5768 11.1867 10.5016 11.2018C10.4866 11.2048 10.4753 11.2067 10.4671 11.208C10.4611 11.2051 10.4532 11.2013 10.4434 11.1962C10.3798 11.1631 10.2963 11.1111 10.1346 11.0091L9.85873 10.835ZM7.7141 11.3679C7.7141 11.3679 7.71697 11.3672 7.72429 11.3682C7.71803 11.3687 7.7141 11.3679 7.7141 11.3679ZM7.90535 11.4288C7.85055 11.405 7.80957 11.3903 7.77989 11.3813C7.7673 11.4146 7.75162 11.4648 7.7349 11.5383C7.67039 11.8221 7.63595 12.2382 7.58381 12.906L7.55783 13.2387L7.55228 13.3122C7.53084 13.6002 7.50589 13.9354 7.34723 14.2372C7.19005 14.5363 6.92935 14.7494 6.70189 14.9354L6.64361 14.9831L6.38112 15.1992C5.85514 15.6323 5.52547 15.9061 5.32455 16.1257C5.28578 16.1681 5.25753 16.2024 5.23708 16.2295C5.25763 16.2427 5.28311 16.258 5.31449 16.2754C5.55749 16.4102 5.93733 16.5528 6.5566 16.7816L6.86425 16.8952L6.93409 16.9208C7.19659 17.0164 7.52018 17.1343 7.76416 17.3783C8.00814 17.6223 8.12604 17.9459 8.22168 18.2084L8.24725 18.2782L8.36091 18.5859C8.5897 19.2051 8.73232 19.585 8.86708 19.828C8.88448 19.8594 8.89979 19.8848 8.91298 19.9054C8.94003 19.8849 8.97435 19.8567 9.01674 19.8179C9.2364 19.617 9.51019 19.2873 9.94324 18.7614L10.1594 18.4989L10.2071 18.4406C10.3931 18.2131 10.6062 17.9524 10.9052 17.7952C11.2071 17.6366 11.5423 17.6116 11.8303 17.5902L11.9038 17.5846L12.2365 17.5587C12.9043 17.5065 13.3204 17.4721 13.6041 17.4076C13.6777 17.3909 13.7279 17.3752 13.7612 17.3626C13.7522 17.3329 13.7375 17.2919 13.7137 17.2371C13.6026 16.9816 13.3893 16.6395 13.0389 16.0842L12.8648 15.8083L12.8257 15.7466C12.6753 15.5105 12.4922 15.2231 12.4453 14.8807C12.3992 14.5439 12.4939 14.2159 12.5737 13.9391L12.5946 13.8662L12.6866 13.5425C12.8712 12.8927 12.9846 12.4867 13.0227 12.1994C13.0273 12.1648 13.0303 12.1353 13.0321 12.1103C13.0072 12.1122 12.9777 12.1152 12.9431 12.1198C12.6557 12.1579 12.2498 12.2713 11.6 12.4559L11.2763 12.5479L11.2034 12.5688C10.9266 12.6486 10.5985 12.7433 10.2617 12.6971C9.91938 12.6503 9.63194 12.4672 9.39587 12.3168L9.33418 12.2777L9.05829 12.1036C8.503 11.7532 8.16085 11.5398 7.90535 11.4288ZM5.15859 16.1689C5.15859 16.1689 5.16108 16.171 5.1642 16.1753C5.15984 16.1711 5.15859 16.1689 5.15859 16.1689ZM5.18878 16.3043C5.18757 16.3088 5.18623 16.3113 5.18623 16.3113C5.18623 16.3113 5.18659 16.3091 5.18878 16.3043ZM8.83117 19.9562C8.83117 19.9562 8.83365 19.9549 8.83815 19.9537C8.83336 19.9559 8.83117 19.9562 8.83117 19.9562ZM8.96716 19.9783C8.97143 19.9814 8.97355 19.9839 8.97355 19.9839C8.97355 19.9839 8.9714 19.9826 8.96716 19.9783ZM13.7746 17.4284C13.7746 17.4284 13.7738 17.4245 13.7743 17.4182C13.7752 17.4255 13.7746 17.4284 13.7746 17.4284ZM13.8125 17.3392C13.8168 17.3352 13.8201 17.3336 13.8201 17.3336C13.8201 17.3336 13.8183 17.3357 13.8125 17.3392ZM7.80326 11.33C7.80679 11.3242 7.80892 11.3224 7.80892 11.3224C7.80892 11.3224 7.80728 11.3257 7.80326 11.33Z"
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
