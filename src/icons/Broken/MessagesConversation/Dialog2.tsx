import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDialog2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10.8693 21.5102L11.5147 21.8922L11.5147 21.8922L10.8693 21.5102ZM11.1288 21.0719L10.4833 20.6899L10.4833 20.6899L11.1288 21.0719ZM8.87121 21.0719L9.51663 20.6899L9.51662 20.6899L8.87121 21.0719ZM9.13064 21.5102L8.48523 21.8922L8.48523 21.8922L9.13064 21.5102ZM1.25 12.8C1.25 13.2142 1.58579 13.55 2 13.55C2.41421 13.55 2.75 13.2142 2.75 12.8H1.25ZM2.99739 16.8438C2.83888 16.4611 2.40015 16.2794 2.01747 16.4379C1.63479 16.5964 1.45306 17.0351 1.61157 17.4178L2.99739 16.8438ZM6.28931 19.585L6.31328 18.8354L6.31328 18.8354L6.28931 19.585ZM4.46927 19.2956L4.18225 19.9885L4.18225 19.9885L4.46927 19.2956ZM17.6955 17.1308L18.3884 17.4178L18.3884 17.4178L17.6955 17.1308ZM13.7107 19.585L13.6867 18.8354L13.6867 18.8354L13.7107 19.585ZM15.5307 19.2956L15.8177 19.9885L15.8177 19.9885L15.5307 19.2956ZM3.91001 6.58944L3.51813 5.94996L3.51813 5.94996L3.91001 6.58944ZM2.58944 7.91001L1.94996 7.51814L1.94996 7.51814L2.58944 7.91001ZM7.91637 19.8223L7.53453 20.4679L7.53453 20.4679L7.91637 19.8223ZM14.8484 6.91393C15.2541 6.99765 15.6508 6.73665 15.7345 6.33099C15.8182 5.92532 15.5572 5.5286 15.1516 5.44489L14.8484 6.91393ZM18.5551 8.84842C18.4714 8.44275 18.0747 8.18176 17.669 8.26548C17.2633 8.34919 17.0024 8.74591 17.0861 9.15158L18.5551 8.84842ZM11.5147 21.8922L11.7742 21.4539L10.4833 20.6899L10.2239 21.1282L11.5147 21.8922ZM8.22579 21.4539L8.48523 21.8922L9.77606 21.1282L9.51663 20.6899L8.22579 21.4539ZM10.2239 21.1282C10.1785 21.2049 10.0992 21.25 9.99998 21.25C9.90074 21.25 9.82147 21.2049 9.77606 21.1282L8.48523 21.8922C9.16217 23.0359 10.8378 23.0359 11.5147 21.8922L10.2239 21.1282ZM8.8 6.75H11.2V5.25H8.8V6.75ZM17.25 12.8V13.6H18.75V12.8H17.25ZM6.31328 18.8354C5.52102 18.81 5.09046 18.7411 4.75628 18.6027L4.18225 19.9885C4.77912 20.2357 5.43744 20.3081 6.26533 20.3346L6.31328 18.8354ZM1.61157 17.4178C2.09367 18.5817 3.01837 19.5064 4.18225 19.9885L4.75628 18.6027C3.95994 18.2728 3.32725 17.6401 2.99739 16.8438L1.61157 17.4178ZM17.25 13.6C17.25 14.5422 17.2496 15.2112 17.2137 15.7376C17.1782 16.2573 17.1107 16.5828 17.0026 16.8438L18.3884 17.4178C18.5848 16.9436 18.6695 16.4357 18.7102 15.8397C18.7504 15.2504 18.75 14.5217 18.75 13.6H17.25ZM13.7346 20.3346C14.5625 20.3081 15.2209 20.2357 15.8177 19.9885L15.2437 18.6027C14.9095 18.7411 14.479 18.81 13.6867 18.8354L13.7346 20.3346ZM17.0026 16.8438C16.6728 17.6401 16.0401 18.2728 15.2437 18.6027L15.8177 19.9885C16.9816 19.5064 17.9063 18.5817 18.3884 17.4178L17.0026 16.8438ZM8.8 5.25C7.50515 5.25 6.48135 5.24921 5.66269 5.32705C4.83287 5.40595 4.13672 5.57089 3.51813 5.94996L4.30188 7.22892C4.64517 7.01855 5.08465 6.88877 5.80467 6.82031C6.53585 6.75079 7.47611 6.75 8.8 6.75V5.25ZM2.75 12.8C2.75 11.4761 2.75079 10.5359 2.82031 9.80468C2.88877 9.08466 3.01855 8.64518 3.22892 8.30189L1.94996 7.51814C1.57089 8.13673 1.40595 8.83288 1.32705 9.6627C1.24921 10.4814 1.25 11.5052 1.25 12.8H2.75ZM3.51813 5.94996C2.87899 6.34163 2.34162 6.879 1.94996 7.51814L3.22892 8.30189C3.4969 7.86458 3.86458 7.4969 4.30188 7.22892L3.51813 5.94996ZM9.51662 20.6899C9.31582 20.3506 9.13969 20.0516 8.96888 19.8164C8.78917 19.569 8.58327 19.3454 8.29822 19.1768L7.53453 20.4679C7.58064 20.4951 7.64427 20.5451 7.75524 20.6979C7.87511 20.863 8.01082 21.0907 8.2258 21.4539L9.51662 20.6899ZM6.26533 20.3346C6.71078 20.3489 6.99552 20.3587 7.21182 20.3851C7.41631 20.41 7.49305 20.4433 7.53453 20.4679L8.29822 19.1768C8.00853 19.0055 7.70371 18.9339 7.39344 18.8961C7.09498 18.8597 6.73177 18.8488 6.31328 18.8354L6.26533 20.3346ZM11.7742 21.4539C11.9891 21.0907 12.1249 20.863 12.2447 20.6979C12.3557 20.5451 12.4193 20.4951 12.4654 20.4679L11.7018 19.1768C11.4167 19.3454 11.2108 19.569 11.0311 19.8164C10.8603 20.0516 10.6841 20.3506 10.4833 20.6899L11.7742 21.4539ZM13.6867 18.8354C13.2682 18.8488 12.905 18.8597 12.6065 18.8961C12.2963 18.9339 11.9914 19.0055 11.7018 19.1768L12.4654 20.4679C12.5069 20.4433 12.5837 20.41 12.7881 20.3851C13.0044 20.3587 13.2892 20.3489 13.7346 20.3346L13.6867 18.8354ZM11.2 6.75C12.9978 6.75 14.0727 6.75386 14.8484 6.91393L15.1516 5.44489C14.1885 5.24614 12.9253 5.25 11.2 5.25V6.75ZM18.75 12.8C18.75 11.0747 18.7539 9.81149 18.5551 8.84842L17.0861 9.15158C17.2461 9.92727 17.25 11.0022 17.25 12.8H18.75Z"
      fill="black"
    />
    <Path
      d="M7.0332 6C7.08481 5.00787 7.2165 4.33902 7.55255 3.79064C7.86176 3.28605 8.28599 2.86181 8.79058 2.5526C9.69234 2 10.9199 2 13.3749 2H15.6249C17.153 2 18.2056 2 19 2.13325M18 14.7352C18.7477 14.7104 19.2527 14.6437 19.685 14.4646C20.6039 14.084 21.3339 13.354 21.7145 12.4351C21.9999 11.746 21.9999 10.8723 21.9999 9.12503V8.37503C21.9999 6.84695 21.9999 5.79442 21.8667 5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6.50928 13H6.51828M10 13H10.009M13.491 13H13.5"
      stroke="black"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgDialog2;
