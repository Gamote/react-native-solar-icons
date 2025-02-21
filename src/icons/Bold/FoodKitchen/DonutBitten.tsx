import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDonutBitten = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12.2803 21.5538C12.0886 20.9089 12.303 20.102 12.9444 19.6276C13.4368 19.2635 14.0224 19.1452 14.5152 19.2623C14.58 19.2776 14.6491 19.2615 14.6961 19.2145C14.7586 19.152 14.766 19.0532 14.7134 18.9821L14.6196 18.8552C14.0081 18.0283 14.3131 16.7641 15.2994 16.0206C15.1559 15.9229 14.9975 15.8179 14.8289 15.7075L14.6506 15.5911C14.4368 15.4518 14.2126 15.3056 14.0103 15.1665C13.4294 15.536 12.7399 15.75 12.0005 15.75C10.9074 15.75 9.92351 15.2823 9.23808 14.5361C8.83106 14.7572 8.35478 14.9796 7.86375 15.171C7.06293 15.483 6.12858 15.75 5.33228 15.75C4.30133 15.75 3.23794 15.3036 2.41274 14.8509C3.64009 18.9848 7.46817 22 12.0005 22C12.2138 22 12.3411 21.7583 12.2803 21.5538Z"
      fill="black"
    />
    <Path
      d="M9.75049 12C9.75049 10.7574 10.7578 9.75 12.0005 9.75C13.2431 9.75 14.2505 10.7574 14.2505 12C14.2505 12.6271 13.994 13.1942 13.5801 13.6023C13.5287 13.6371 13.4808 13.679 13.4378 13.7278L13.4275 13.7396C13.0392 14.0586 12.5422 14.25 12.0005 14.25C10.7578 14.25 9.75049 13.2426 9.75049 12Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.4792 14.7949C20.1866 14.2718 21.0865 14.2561 21.627 14.7168C21.8703 13.8529 22.0005 12.9417 22.0005 12C22.0005 10.0219 21.4261 8.17786 20.4351 6.62569L19.5304 7.53033C19.2375 7.82322 18.7626 7.82322 18.4698 7.53033C18.1769 7.23744 18.1769 6.76256 18.4698 6.46967L19.4698 5.46967C19.4885 5.4509 19.508 5.43334 19.5282 5.41697C17.6952 3.32266 15.0023 2 12.0005 2C10.0223 2 8.17835 2.57437 6.62618 3.56544L7.53041 4.46967C7.82331 4.76256 7.82331 5.23744 7.53041 5.53033C7.23752 5.82322 6.76265 5.82322 6.46975 5.53033L5.46975 4.53033C5.45112 4.5117 5.43368 4.49233 5.41742 4.47232C3.32312 6.30531 2.00049 8.9982 2.00049 12C2.00049 12.2844 2.01236 12.566 2.03563 12.8443C2.25198 12.9978 2.51964 13.177 2.81955 13.3557C3.63825 13.8433 4.57246 14.25 5.33228 14.25C5.8485 14.25 6.57537 14.0632 7.3191 13.7733C7.73954 13.6095 8.13487 13.4248 8.46368 13.2495C8.32561 12.8586 8.25049 12.4381 8.25049 12C8.25049 9.92893 9.92942 8.25 12.0005 8.25C14.0716 8.25 15.7505 9.92893 15.7505 12C15.7505 12.7772 15.5141 13.4991 15.1093 14.0978C15.2235 14.1734 15.3483 14.255 15.4814 14.342L15.6505 14.4525C16.1277 14.7649 16.7133 15.1521 17.0308 15.4696C17.0439 15.4827 17.0564 15.4962 17.0683 15.51C17.5434 15.5687 17.9691 15.7906 18.25 16.1704L18.5254 16.5427C18.5565 16.5848 18.6177 16.5894 18.6547 16.5524C18.6743 16.5328 18.683 16.505 18.6793 16.4776C18.6005 15.8921 18.8922 15.229 19.4792 14.7949ZM16.4501 4.4C16.7815 4.64853 16.8486 5.11863 16.6001 5.45L15.1001 7.45C14.8516 7.78137 14.3815 7.84853 14.0501 7.6C13.7187 7.35147 13.6516 6.88137 13.9001 6.55L15.4001 4.55C15.6486 4.21863 16.1187 4.15147 16.4501 4.4ZM10.4698 3.46967C10.1769 3.76256 10.1769 4.23744 10.4698 4.53033L11.4698 5.53033C11.7626 5.82322 12.2375 5.82322 12.5304 5.53033C12.8233 5.23744 12.8233 4.76256 12.5304 4.46967L11.5304 3.46967C11.2375 3.17678 10.7626 3.17678 10.4698 3.46967ZM8.40961 7.56014C8.51682 7.96024 8.92807 8.19768 9.32817 8.09047L10.6942 7.72444C11.0943 7.61724 11.3317 7.20599 11.2245 6.80589C11.1173 6.40579 10.7061 6.16835 10.306 6.27556L8.93994 6.64158C8.53985 6.74879 8.30241 7.16004 8.40961 7.56014ZM5.89694 7.17364C5.51986 7.34505 5.35313 7.78969 5.52453 8.16677L6.10976 9.45422C6.28117 9.8313 6.72581 9.99803 7.10289 9.82662C7.47998 9.65522 7.64671 9.21057 7.4753 8.83349L6.89007 7.54605C6.71867 7.16896 6.27403 7.00223 5.89694 7.17364ZM16.7514 11.1384C17.1652 11.119 17.4848 10.7678 17.4654 10.354L17.399 8.94139C17.3795 8.52764 17.0284 8.20799 16.6146 8.22743C16.2009 8.24688 15.8812 8.59806 15.9006 9.01181L15.967 10.4245C15.9865 10.8382 16.3377 11.1579 16.7514 11.1384ZM18.4369 12.0586C18.7106 12.3694 19.1846 12.3995 19.4954 12.1257L21.1735 10.6479C21.4843 10.3741 21.5144 9.90018 21.2406 9.58933C20.9669 9.27848 20.493 9.24841 20.1821 9.52217L18.504 11C18.1932 11.2738 18.1631 11.7477 18.4369 12.0586ZM6.94303 10.8948C7.27729 11.1394 7.34994 11.6087 7.10531 11.9429L6.27007 13.0842C6.02544 13.4184 5.55616 13.4911 5.2219 13.2464C4.88765 13.0018 4.81499 12.5325 5.05963 12.1983L5.89486 11.0571C6.13949 10.7228 6.60878 10.6501 6.94303 10.8948ZM3.56263 8.18897C3.14906 8.21201 2.83247 8.56596 2.85551 8.97953L2.93417 10.3916C2.95721 10.8051 3.31116 11.1217 3.72473 11.0987C4.1383 11.0756 4.45489 10.7217 4.43185 10.3081L4.35319 8.89609C4.33015 8.48252 3.97621 8.16593 3.56263 8.18897Z"
      fill="black"
    />
  </Svg>
);
export default SvgDonutBitten;
