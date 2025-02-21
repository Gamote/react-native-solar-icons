import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPip2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.9548 2.25H13.0452C14.8818 2.24999 16.3214 2.24999 17.4635 2.37373C18.6291 2.50001 19.5734 2.76232 20.3798 3.34815C20.8679 3.70281 21.2972 4.13209 21.6518 4.62024C22.2377 5.42656 22.5 6.37094 22.6263 7.53648C22.75 8.67861 22.75 10.1182 22.75 11.9547V12.0453C22.75 13.8818 22.75 15.3214 22.6263 16.4635C22.5 17.6291 22.2377 18.5734 21.6518 19.3798C21.2972 19.8679 20.8679 20.2972 20.3798 20.6518C19.5734 21.2377 18.6291 21.5 17.4635 21.6263C16.3214 21.75 14.8818 21.75 13.0453 21.75H10.9547C9.1182 21.75 7.67861 21.75 6.53648 21.6263C5.37094 21.5 4.42656 21.2377 3.62024 20.6518C3.13209 20.2972 2.70281 19.8679 2.34815 19.3798C1.76232 18.5734 1.50001 17.6291 1.37373 16.4635C1.24999 15.3214 1.24999 13.8818 1.25 12.0452V11.9548C1.24999 10.1182 1.24999 8.67861 1.37373 7.53648C1.50001 6.37094 1.76232 5.42656 2.34815 4.62024C2.70281 4.13209 3.13209 3.70281 3.62024 3.34815C4.42656 2.76232 5.37094 2.50001 6.53648 2.37373C7.67861 2.24999 9.11821 2.24999 10.9548 2.25ZM6.69805 3.865C5.66013 3.97745 5.00992 4.19259 4.50191 4.56168C4.14111 4.82382 3.82382 5.14111 3.56168 5.50191C3.19259 6.00992 2.97745 6.66013 2.865 7.69805C2.75103 8.74999 2.75 10.1084 2.75 12C2.75 13.8916 2.75103 15.25 2.865 16.302C2.97745 17.3399 3.19259 17.9901 3.56168 18.4981C3.82382 18.8589 4.14111 19.1762 4.50191 19.4383C5.00992 19.8074 5.66013 20.0225 6.69805 20.135C7.74999 20.249 9.10843 20.25 11 20.25H13C14.8916 20.25 16.25 20.249 17.302 20.135C18.3399 20.0225 18.9901 19.8074 19.4981 19.4383C19.8589 19.1762 20.1762 18.8589 20.4383 18.4981C20.8074 17.9901 21.0225 17.3399 21.135 16.302C21.249 15.25 21.25 13.8916 21.25 12C21.25 10.1084 21.249 8.74999 21.135 7.69805C21.0225 6.66013 20.8074 6.00992 20.4383 5.50191C20.1762 5.14111 19.8589 4.82382 19.4981 4.56168C18.9901 4.19259 18.3399 3.97745 17.302 3.865C16.25 3.75103 14.8916 3.75 13 3.75H11C9.10843 3.75 7.74999 3.75103 6.69805 3.865ZM13.9747 10.25H15.0253C15.4697 10.25 15.8408 10.25 16.1454 10.2708C16.4625 10.2924 16.762 10.339 17.0524 10.4593C17.7262 10.7384 18.2616 11.2738 18.5407 11.9476C18.661 12.238 18.7076 12.5375 18.7292 12.8546C18.75 13.1592 18.75 13.5303 18.75 13.9747V14.0253C18.75 14.4697 18.75 14.8408 18.7292 15.1454C18.7076 15.4625 18.661 15.762 18.5407 16.0524C18.2616 16.7262 17.7262 17.2616 17.0524 17.5407C16.762 17.661 16.4625 17.7076 16.1454 17.7292C15.8408 17.75 15.4697 17.75 15.0253 17.75H13.9747C13.5303 17.75 13.1592 17.75 12.8546 17.7292C12.5375 17.7076 12.238 17.661 11.9476 17.5407C11.2738 17.2616 10.7384 16.7262 10.4593 16.0524C10.339 15.762 10.2924 15.4625 10.2708 15.1454C10.25 14.8408 10.25 14.4697 10.25 14.0253V13.9747C10.25 13.5303 10.25 13.1592 10.2708 12.8546C10.2924 12.5375 10.339 12.238 10.4593 11.9476C10.7384 11.2738 11.2738 10.7384 11.9476 10.4593C12.238 10.339 12.5375 10.2924 12.8546 10.2708C13.1592 10.25 13.5303 10.25 13.9747 10.25ZM12.9567 11.7673C12.716 11.7837 12.5988 11.8132 12.5216 11.8451C12.2154 11.972 11.972 12.2154 11.8451 12.5216C11.8132 12.5988 11.7837 12.716 11.7673 12.9567C11.7504 13.2042 11.75 13.5238 11.75 14C11.75 14.4762 11.7504 14.7958 11.7673 15.0433C11.7837 15.284 11.8132 15.4012 11.8451 15.4784C11.972 15.7846 12.2154 16.028 12.5216 16.1549C12.5988 16.1868 12.716 16.2163 12.9567 16.2327C13.2042 16.2496 13.5238 16.25 14 16.25H15C15.4762 16.25 15.7958 16.2496 16.0433 16.2327C16.284 16.2163 16.4012 16.1868 16.4784 16.1549C16.7846 16.028 17.028 15.7846 17.1549 15.4784C17.1868 15.4012 17.2163 15.284 17.2327 15.0433C17.2496 14.7958 17.25 14.4762 17.25 14C17.25 13.5238 17.2496 13.2042 17.2327 12.9567C17.2163 12.716 17.1868 12.5988 17.1549 12.5216C17.028 12.2154 16.7846 11.972 16.4784 11.8451C16.4012 11.8132 16.284 11.7837 16.0433 11.7673C15.7958 11.7504 15.4762 11.75 15 11.75H14C13.5238 11.75 13.2042 11.7504 12.9567 11.7673Z"
      fill="black"
    />
  </Svg>
);
export default SvgPip2;
