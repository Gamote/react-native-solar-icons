import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChatSquareCode = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.4606 1.25H13.5394C15.1427 1.24999 16.3997 1.24999 17.4039 1.34547C18.4274 1.44279 19.2655 1.64457 20.0044 2.09732C20.7781 2.57144 21.4286 3.22194 21.9027 3.99563C22.3554 4.73445 22.5572 5.57256 22.6545 6.59611C22.75 7.60029 22.75 8.85725 22.75 10.4606V11.5278C22.75 12.6691 22.75 13.564 22.7007 14.2868C22.6505 15.0223 22.5468 15.6344 22.3123 16.2004C21.7287 17.6093 20.6093 18.7287 19.2004 19.3123C18.3955 19.6457 17.4786 19.7197 16.2233 19.7413C15.7842 19.7489 15.5061 19.7545 15.2941 19.7779C15.096 19.7999 15.0192 19.832 14.9742 19.8582C14.9268 19.8857 14.8622 19.936 14.7501 20.0898C14.6287 20.2564 14.4916 20.4865 14.2742 20.8539L13.7321 21.7697C12.9585 23.0767 11.0415 23.0767 10.2679 21.7697L9.72579 20.8539C9.50835 20.4865 9.37122 20.2564 9.24985 20.0898C9.13772 19.936 9.07313 19.8857 9.02572 19.8582C8.98078 19.832 8.90399 19.7999 8.70588 19.7779C8.49387 19.7545 8.21575 19.7489 7.77666 19.7413C6.52138 19.7197 5.60454 19.6457 4.79957 19.3123C3.39066 18.7287 2.27128 17.6093 1.68769 16.2004C1.45323 15.6344 1.3495 15.0223 1.29932 14.2868C1.24999 13.564 1.25 12.6691 1.25 11.5278L1.25 10.4606C1.24999 8.85726 1.24999 7.60029 1.34547 6.59611C1.44279 5.57256 1.64457 4.73445 2.09732 3.99563C2.57144 3.22194 3.22194 2.57144 3.99563 2.09732C4.73445 1.64457 5.57256 1.44279 6.59611 1.34547C7.60029 1.24999 8.85726 1.24999 10.4606 1.25ZM6.73809 2.83873C5.82434 2.92561 5.24291 3.09223 4.77938 3.37628C4.20752 3.72672 3.72672 4.20752 3.37628 4.77938C3.09223 5.24291 2.92561 5.82434 2.83873 6.73809C2.75079 7.663 2.75 8.84876 2.75 10.5V11.5C2.75 12.6751 2.75041 13.5189 2.79584 14.1847C2.84081 14.8438 2.92737 15.2736 3.07351 15.6264C3.50486 16.6678 4.33223 17.4951 5.3736 17.9265C5.88923 18.1401 6.54706 18.2199 7.8025 18.2416L7.83432 18.2421C8.23232 18.249 8.58109 18.2549 8.87097 18.287C9.18246 18.3215 9.4871 18.3912 9.77986 18.5615C10.0702 18.7304 10.2795 18.9559 10.4621 19.2063C10.6307 19.4378 10.804 19.7306 11.0004 20.0623L11.5587 21.0057C11.7515 21.3313 12.2485 21.3313 12.4412 21.0057L12.9996 20.0623C13.1959 19.7306 13.3692 19.4378 13.5379 19.2063C13.7204 18.9559 13.9298 18.7304 14.2201 18.5615C14.5129 18.3912 14.8175 18.3215 15.129 18.287C15.4189 18.2549 15.7676 18.249 16.1656 18.2421L16.1975 18.2416C17.4529 18.2199 18.1108 18.1401 18.6264 17.9265C19.6678 17.4951 20.4951 16.6678 20.9265 15.6264C21.0726 15.2736 21.1592 14.8438 21.2042 14.1847C21.2496 13.5189 21.25 12.6751 21.25 11.5V10.5C21.25 8.84876 21.2492 7.663 21.1613 6.73809C21.0744 5.82434 20.9078 5.24291 20.6237 4.77938C20.2733 4.20752 19.7925 3.72672 19.2206 3.37628C18.7571 3.09223 18.1757 2.92561 17.2619 2.83873C16.337 2.75079 15.1512 2.75 13.5 2.75H10.5C8.84876 2.75 7.663 2.75079 6.73809 2.83873ZM13.4881 5.27556C13.8882 5.38276 14.1256 5.79401 14.0184 6.19411L11.4302 15.8534C11.323 16.2535 10.9117 16.4909 10.5116 16.3837C10.1115 16.2765 9.8741 15.8652 9.98131 15.4651L12.5695 5.80589C12.6767 5.40579 13.088 5.16835 13.4881 5.27556ZM9.03033 7.29926C9.32322 7.59215 9.32322 8.06703 9.03033 8.35992L8.85876 8.53149C8.1771 9.21315 7.72033 9.67217 7.42469 10.0597C7.14226 10.4298 7.07843 10.6453 7.07843 10.8296C7.07843 11.0139 7.14226 11.2294 7.42469 11.5995C7.72033 11.987 8.1771 12.446 8.85876 13.1277L9.03033 13.2993C9.32322 13.5922 9.32322 14.067 9.03033 14.3599C8.73744 14.6528 8.26256 14.6528 7.96967 14.3599L7.76134 14.1516C7.12599 13.5163 6.59619 12.9865 6.23216 12.5094C5.84793 12.0058 5.57843 11.4737 5.57843 10.8296C5.57843 10.1855 5.84793 9.65338 6.23216 9.14978C6.59619 8.67267 7.12598 8.14291 7.76131 7.50761L7.96967 7.29926C8.26256 7.00637 8.73744 7.00637 9.03033 7.29926ZM14.9697 7.29926C15.2626 7.00637 15.7374 7.00637 16.0303 7.29926L16.2387 7.50759C16.874 8.14289 17.4038 8.67266 17.7678 9.14978C18.1521 9.65338 18.4216 10.1855 18.4216 10.8296C18.4216 11.4737 18.1521 12.0058 17.7678 12.5094C17.4038 12.9865 16.874 13.5163 16.2386 14.1516L16.0303 14.3599C15.7374 14.6528 15.2626 14.6528 14.9697 14.3599C14.6768 14.067 14.6768 13.5922 14.9697 13.2993L15.1412 13.1277C15.8229 12.446 16.2797 11.987 16.5753 11.5995C16.8577 11.2294 16.9216 11.0139 16.9216 10.8296C16.9216 10.6453 16.8577 10.4298 16.5753 10.0597C16.2797 9.67217 15.8229 9.21315 15.1412 8.53149L14.9697 8.35992C14.6768 8.06703 14.6768 7.59215 14.9697 7.29926Z"
      fill="black"
    />
  </Svg>
);
export default SvgChatSquareCode;
