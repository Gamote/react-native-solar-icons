import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDialog2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10.8693 21.5102L11.5147 21.8922L11.5147 21.8922L10.8693 21.5102ZM11.1288 21.0719L10.4833 20.6899L10.4833 20.6899L11.1288 21.0719ZM8.87121 21.0719L9.51663 20.6899L9.51662 20.6899L8.87121 21.0719ZM9.13064 21.5102L8.48523 21.8922L8.48523 21.8922L9.13064 21.5102ZM2.30448 17.1308L2.99739 16.8438L2.99739 16.8438L2.30448 17.1308ZM6.28931 19.585L6.31328 18.8354L6.31328 18.8354L6.28931 19.585ZM4.46927 19.2956L4.18225 19.9885L4.18225 19.9885L4.46927 19.2956ZM17.6955 17.1308L18.3884 17.4178L18.3884 17.4178L17.6955 17.1308ZM13.7107 19.585L13.6867 18.8354L13.6867 18.8354L13.7107 19.585ZM15.5307 19.2956L15.8177 19.9885L15.8177 19.9885L15.5307 19.2956ZM16.09 6.58944L16.4819 5.94996L16.4819 5.94996L16.09 6.58944ZM17.4106 7.91001L18.05 7.51814L18.05 7.51814L17.4106 7.91001ZM3.91001 6.58944L3.51813 5.94996L3.51813 5.94996L3.91001 6.58944ZM2.58944 7.91001L1.94996 7.51814L1.94996 7.51814L2.58944 7.91001ZM7.91637 19.8223L7.53453 20.4679L7.53453 20.4679L7.91637 19.8223ZM11.5147 21.8922L11.7742 21.4539L10.4833 20.6899L10.2239 21.1282L11.5147 21.8922ZM8.22579 21.4539L8.48523 21.8922L9.77606 21.1282L9.51663 20.6899L8.22579 21.4539ZM10.2239 21.1282C10.1785 21.2049 10.0992 21.25 9.99998 21.25C9.90074 21.25 9.82147 21.2049 9.77606 21.1282L8.48523 21.8922C9.16217 23.0359 10.8378 23.0359 11.5147 21.8922L10.2239 21.1282ZM8.8 6.75H11.2V5.25H8.8V6.75ZM17.25 12.8V13.6H18.75V12.8H17.25ZM2.75 13.6V12.8H1.25V13.6H2.75ZM1.25 13.6C1.25 14.5217 1.24959 15.2504 1.2898 15.8397C1.33047 16.4357 1.41517 16.9436 1.61157 17.4178L2.99739 16.8438C2.88931 16.5828 2.82178 16.2573 2.78632 15.7376C2.75041 15.2112 2.75 14.5422 2.75 13.6H1.25ZM6.31328 18.8354C5.52102 18.81 5.09046 18.7411 4.75628 18.6027L4.18225 19.9885C4.77912 20.2357 5.43744 20.3081 6.26533 20.3346L6.31328 18.8354ZM1.61157 17.4178C2.09367 18.5817 3.01837 19.5064 4.18225 19.9885L4.75628 18.6027C3.95994 18.2728 3.32725 17.6401 2.99739 16.8438L1.61157 17.4178ZM17.25 13.6C17.25 14.5422 17.2496 15.2112 17.2137 15.7376C17.1782 16.2573 17.1107 16.5828 17.0026 16.8438L18.3884 17.4178C18.5848 16.9436 18.6695 16.4357 18.7102 15.8397C18.7504 15.2504 18.75 14.5217 18.75 13.6H17.25ZM13.7346 20.3346C14.5625 20.3081 15.2209 20.2357 15.8177 19.9885L15.2437 18.6027C14.9095 18.7411 14.479 18.81 13.6867 18.8354L13.7346 20.3346ZM17.0026 16.8438C16.6728 17.6401 16.0401 18.2728 15.2437 18.6027L15.8177 19.9885C16.9816 19.5064 17.9063 18.5817 18.3884 17.4178L17.0026 16.8438ZM11.2 6.75C12.5239 6.75 13.4641 6.75079 14.1953 6.82031C14.9154 6.88877 15.3548 7.01855 15.6981 7.22892L16.4819 5.94996C15.8633 5.57089 15.1671 5.40595 14.3373 5.32705C13.5187 5.24921 12.4948 5.25 11.2 5.25V6.75ZM18.75 12.8C18.75 11.5052 18.7508 10.4814 18.673 9.6627C18.5941 8.83288 18.4291 8.13673 18.05 7.51814L16.7711 8.30189C16.9814 8.64518 17.1112 9.08466 17.1797 9.80468C17.2492 10.5359 17.25 11.4761 17.25 12.8H18.75ZM15.6981 7.22892C16.1354 7.4969 16.5031 7.86458 16.7711 8.30189L18.05 7.51814C17.6584 6.879 17.121 6.34163 16.4819 5.94996L15.6981 7.22892ZM8.8 5.25C7.50515 5.25 6.48135 5.24921 5.66269 5.32705C4.83287 5.40595 4.13672 5.57089 3.51813 5.94996L4.30188 7.22892C4.64517 7.01855 5.08465 6.88877 5.80467 6.82031C6.53585 6.75079 7.47611 6.75 8.8 6.75V5.25ZM2.75 12.8C2.75 11.4761 2.75079 10.5359 2.82031 9.80468C2.88877 9.08466 3.01855 8.64518 3.22892 8.30189L1.94996 7.51814C1.57089 8.13673 1.40595 8.83288 1.32705 9.6627C1.24921 10.4814 1.25 11.5052 1.25 12.8H2.75ZM3.51813 5.94996C2.87899 6.34163 2.34162 6.879 1.94996 7.51814L3.22892 8.30189C3.4969 7.86458 3.86458 7.4969 4.30188 7.22892L3.51813 5.94996ZM9.51662 20.6899C9.31582 20.3506 9.13969 20.0516 8.96888 19.8164C8.78917 19.569 8.58327 19.3454 8.29822 19.1768L7.53453 20.4679C7.58064 20.4951 7.64427 20.5451 7.75524 20.6979C7.87511 20.863 8.01082 21.0907 8.2258 21.4539L9.51662 20.6899ZM6.26533 20.3346C6.71078 20.3489 6.99552 20.3587 7.21182 20.3851C7.41631 20.41 7.49305 20.4433 7.53453 20.4679L8.29822 19.1768C8.00853 19.0055 7.70371 18.9339 7.39344 18.8961C7.09498 18.8597 6.73177 18.8488 6.31328 18.8354L6.26533 20.3346ZM11.7742 21.4539C11.9891 21.0907 12.1249 20.863 12.2447 20.6979C12.3557 20.5451 12.4193 20.4951 12.4654 20.4679L11.7018 19.1768C11.4167 19.3454 11.2108 19.569 11.0311 19.8164C10.8603 20.0516 10.6841 20.3506 10.4833 20.6899L11.7742 21.4539ZM13.6867 18.8354C13.2682 18.8488 12.905 18.8597 12.6065 18.8961C12.2963 18.9339 11.9914 19.0055 11.7018 19.1768L12.4654 20.4679C12.5069 20.4433 12.5837 20.41 12.7881 20.3851C13.0044 20.3587 13.2892 20.3489 13.7346 20.3346L13.6867 18.8354Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.7145 12.4351L22.4074 12.7221L22.4074 12.7221L21.7145 12.4351ZM19.685 14.4646L19.972 15.1575L19.972 15.1575L19.685 14.4646ZM20.2093 2.5526L19.8174 3.19208L19.8174 3.19208L20.2093 2.5526ZM21.4473 3.79064L22.0868 3.39877L22.0868 3.39876L21.4473 3.79064ZM8.79058 2.5526L8.3987 1.91312L8.3987 1.91312L8.79058 2.5526ZM7.55255 3.79064L6.91307 3.39876L6.91307 3.39876L7.55255 3.79064ZM13.3749 2.75H15.6249V1.25H13.3749V2.75ZM21.2499 8.37503V9.12503H22.7499V8.37503H21.2499ZM21.2499 9.12503C21.2499 10.0089 21.2495 10.6343 21.216 11.1258C21.1829 11.6106 21.1201 11.9101 21.0216 12.1481L22.4074 12.7221C22.5943 12.2709 22.6742 11.7891 22.7125 11.2279C22.7504 10.6735 22.7499 9.98841 22.7499 9.12503H21.2499ZM21.0216 12.1481C20.7171 12.8832 20.1331 13.4672 19.398 13.7717L19.972 15.1575C21.0747 14.7008 21.9507 13.8247 22.4074 12.7221L21.0216 12.1481ZM15.6249 2.75C16.867 2.75 17.7459 2.75079 18.4286 2.81571C19.1002 2.87956 19.5042 3.00013 19.8174 3.19208L20.6012 1.91312C20.0127 1.55247 19.352 1.39674 18.5706 1.32244C17.8004 1.24921 16.838 1.25 15.6249 1.25V2.75ZM22.7499 8.37503C22.7499 7.16201 22.7507 6.19958 22.6775 5.42935C22.6032 4.64796 22.4475 3.98729 22.0868 3.39877L20.8079 4.18251C20.9998 4.49574 21.1204 4.89973 21.1842 5.57133C21.2492 6.25408 21.2499 7.13296 21.2499 8.37503H22.7499ZM19.8174 3.19208C20.2211 3.43945 20.5605 3.77884 20.8079 4.18251L22.0868 3.39876C21.7158 2.79326 21.2067 2.28417 20.6012 1.91312L19.8174 3.19208ZM13.3749 1.25C12.1619 1.25 11.1995 1.24921 10.4293 1.32244C9.64789 1.39674 8.98723 1.55247 8.3987 1.91312L9.18245 3.19208C9.49568 3.00013 9.89967 2.87956 10.5713 2.81571C11.254 2.75079 12.1329 2.75 13.3749 2.75V1.25ZM8.3987 1.91312C7.7932 2.28417 7.28412 2.79326 6.91307 3.39876L8.19203 4.18251C8.43939 3.77884 8.77879 3.43945 9.18245 3.19208L8.3987 1.91312ZM7.78219 6.03896C7.83215 5.07858 7.95706 4.56594 8.19203 4.18251L6.91307 3.39876C6.47594 4.11209 6.33747 4.93717 6.28422 5.96104L7.78219 6.03896ZM18.0249 15.4848C18.7916 15.4593 19.4094 15.3906 19.972 15.1575L19.398 13.7717C19.096 13.8968 18.7039 13.9614 17.9751 13.9857L18.0249 15.4848Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6.50906 13H6.51806M9.99979 13H10.0088M13.4908 13H13.4998"
      stroke={props.primaryColor}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgDialog2;
