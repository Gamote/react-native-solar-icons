import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRocket = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.4058 1.25004C17.4521 1.25007 17.4991 1.25009 17.5467 1.25009L18.1672 1.25009C19.0387 1.25006 19.7674 1.25004 20.3463 1.32763C20.958 1.40962 21.5136 1.59037 21.9607 2.03612C22.4081 2.48218 22.5898 3.03701 22.6722 3.64789C22.7501 4.22551 22.75 4.95241 22.75 5.82101V6.44002C22.75 6.4877 22.75 6.53475 22.75 6.58119C22.7506 7.63124 22.751 8.36819 22.4708 9.04242C22.1908 9.71642 21.6682 10.2369 20.9231 10.9791C20.8901 11.0119 20.8568 11.0451 20.8229 11.0788L18.1532 13.7406L18.2462 13.8843C18.6399 14.4923 18.9588 14.9848 19.189 15.4095C19.4275 15.8494 19.5969 16.262 19.6648 16.7185C19.7739 17.4523 19.6753 18.2066 19.386 18.8996C19.2787 19.1566 19.0931 19.4259 18.9028 19.6714C18.7033 19.9286 18.4595 20.2088 18.1976 20.4941C17.6764 21.0621 17.0506 21.686 16.4952 22.2397L16.4041 22.3305C15.6842 23.0483 14.4363 22.8156 14.0523 21.8525C13.8247 21.2814 13.7326 21.0538 13.6173 20.8435C13.5104 20.6486 13.3877 20.4627 13.2505 20.2876C13.1044 20.1012 12.9337 19.9287 12.5104 19.5066L12.0056 19.064C11.9985 19.0578 11.9916 19.0515 11.9847 19.0451C11.8913 19.0572 11.7964 19.0634 11.6999 19.0634C11.0684 19.0634 10.5474 18.7998 10.0563 18.4262C9.59176 18.0729 9.07638 17.559 8.4602 16.9446L7.01359 15.5024C6.39744 14.8881 5.88201 14.3743 5.52754 13.911C5.15288 13.4215 4.88759 12.901 4.88759 12.2693C4.88759 12.1547 4.89639 12.0425 4.91348 11.9325L4.08305 11.1046C4.03463 11.0563 4.01525 11.037 3.99611 11.0185C3.62245 10.6559 3.18281 10.3675 2.70065 10.1689C2.67596 10.1587 2.65048 10.1486 2.58685 10.1234L2.20821 9.97334C1.19466 9.57173 0.921824 8.26365 1.69561 7.4922L1.70267 7.48516C2.2581 6.93141 2.88384 6.30756 3.45348 5.78791C3.7397 5.5268 4.02071 5.28373 4.27863 5.08494C4.52494 4.89509 4.79474 4.71029 5.05198 4.60356C5.7462 4.31552 6.50161 4.21738 7.23629 4.32595C7.69318 4.39347 8.1064 4.56205 8.54751 4.79974C8.97339 5.02923 9.46728 5.34711 10.0772 5.73965L10.2248 5.8347L12.8971 3.17043C12.9308 3.13686 12.964 3.10371 12.9968 3.071C13.7416 2.32769 14.2634 1.80689 14.9388 1.52798C15.614 1.24915 16.3519 1.24952 17.4058 1.25004ZM9.13753 6.91875C8.57753 6.55864 8.17443 6.30262 7.83596 6.12024C7.47689 5.92675 7.2364 5.84226 7.01699 5.80984C6.55885 5.74213 6.0775 5.80205 5.62683 5.98904C5.55951 6.01697 5.41777 6.10078 5.19434 6.27299C4.98252 6.43625 4.73557 6.6487 4.4644 6.89608C3.92166 7.39119 3.31773 7.9931 2.75467 8.55446C2.75149 8.55763 2.75047 8.55938 2.75038 8.55953C2.75029 8.5597 2.75038 8.55952 2.75038 8.55953C2.75028 8.55988 2.74957 8.56283 2.75051 8.56737C2.75145 8.57191 2.75315 8.5744 2.75361 8.57497C2.75389 8.57517 2.75633 8.57707 2.76078 8.57883L3.1445 8.73088C3.20154 8.75348 3.23686 8.76748 3.27206 8.78198C3.93001 9.05306 4.53026 9.44669 5.04066 9.94193C5.06797 9.96843 5.09487 9.99525 5.13829 10.0385L5.61604 10.5149C5.68144 10.4336 5.74972 10.353 5.82022 10.2725C6.14199 9.90528 6.5554 9.49312 7.03396 9.016L9.13753 6.91875ZM13.4546 18.3396L13.5354 18.4104L13.587 18.4619C13.9776 18.8513 14.2197 19.0926 14.4311 19.3624C14.6186 19.6016 14.7863 19.8557 14.9324 20.1222C15.0921 20.4133 15.2158 20.7203 15.4089 21.2047L15.4291 21.1845C15.9921 20.6231 16.5959 20.021 17.0925 19.4799C17.3406 19.2096 17.5536 18.9634 17.7174 18.7522C17.8901 18.5294 17.974 18.3884 18.0017 18.3218C18.189 17.8733 18.2488 17.3946 18.1811 16.9391C18.1487 16.7214 18.0643 16.4822 17.8703 16.1244C17.6871 15.7863 17.4297 15.3835 17.0672 14.8233L14.9586 16.9256C14.4687 17.414 14.0467 17.8348 13.6708 18.1594C13.5991 18.2214 13.5271 18.2816 13.4546 18.3396ZM17.5467 2.75009C16.2948 2.75009 15.8773 2.7633 15.5114 2.9144C15.1457 3.06541 14.8414 3.35009 13.9562 4.23268L8.10934 10.062C7.61089 10.5589 7.23304 10.9362 6.94838 11.2611C6.66238 11.5874 6.51638 11.8109 6.4454 11.9874C6.40401 12.0903 6.38759 12.1792 6.38759 12.2693C6.38759 12.4398 6.446 12.643 6.71875 12.9994C7.00467 13.3731 7.4469 13.8162 8.10933 14.4767L8.26648 14.6333L9.79697 13.1074C10.0903 12.815 10.5652 12.8157 10.8576 13.109C11.1501 13.4024 11.1494 13.8772 10.856 14.1697L9.32873 15.6924L9.48269 15.8459C10.1451 16.5063 10.5896 16.9473 10.9644 17.2324C11.3219 17.5043 11.5268 17.5634 11.6999 17.5634C11.7847 17.5634 11.8672 17.5491 11.9596 17.5151C12.135 17.4505 12.3586 17.3107 12.6904 17.0241C13.021 16.7387 13.4057 16.3557 13.917 15.8459L19.7639 10.0166C20.6494 9.13374 20.9345 8.83068 21.0856 8.46692C21.2367 8.10341 21.25 7.68861 21.25 6.44002V5.87287C21.25 4.93878 21.2484 4.31389 21.1856 3.84835C21.1258 3.40463 21.0231 3.21946 20.9016 3.09837C20.7798 2.97697 20.5932 2.87414 20.1471 2.81434C19.6796 2.75167 19.0523 2.75009 18.1156 2.75009H17.5467ZM16.6637 7.32353C16.198 6.85916 15.4419 6.85916 14.9761 7.32353C14.5116 7.78666 14.5116 8.53661 14.9761 8.99974C15.4419 9.46412 16.198 9.46412 16.6637 8.99974C17.1283 8.53661 17.1283 7.78666 16.6637 7.32353ZM13.917 6.26128C14.9682 5.21324 16.6716 5.21324 17.7228 6.26128C18.7752 7.31056 18.7752 9.01271 17.7228 10.062C16.6716 11.11 14.9682 11.11 13.917 10.062C12.8646 9.01271 12.8646 7.31056 13.917 6.26128Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgRocket;
