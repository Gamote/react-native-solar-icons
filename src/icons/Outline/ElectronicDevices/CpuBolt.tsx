import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCpuBolt = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 1.25C9.41421 1.25 9.75 1.58579 9.75 2V3.26272C10.216 3.25376 10.7154 3.25111 11.25 3.25032V2C11.25 1.58579 11.5858 1.25 12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3.25032C13.2846 3.25111 13.784 3.25376 14.25 3.26272V2C14.25 1.58579 14.5858 1.25 15 1.25C15.4142 1.25 15.75 1.58579 15.75 2V3.32709C16.0099 3.34691 16.2561 3.37182 16.489 3.40313C17.6614 3.56076 18.6104 3.89288 19.3588 4.64124C20.1071 5.38961 20.4392 6.33855 20.5969 7.51098C20.6282 7.7439 20.6531 7.99006 20.6729 8.25H22C22.4142 8.25 22.75 8.58579 22.75 9C22.75 9.41421 22.4142 9.75 22 9.75H20.7373C20.7462 10.216 20.7489 10.7154 20.7497 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20.7497C20.7489 13.2846 20.7462 13.784 20.7373 14.25H22C22.4142 14.25 22.75 14.5858 22.75 15C22.75 15.4142 22.4142 15.75 22 15.75H20.6729C20.6531 16.0099 20.6282 16.2561 20.5969 16.489C20.4392 17.6614 20.1071 18.6104 19.3588 19.3588C18.6104 20.1071 17.6614 20.4392 16.489 20.5969C16.2561 20.6282 16.0099 20.6531 15.75 20.6729V22C15.75 22.4142 15.4142 22.75 15 22.75C14.5858 22.75 14.25 22.4142 14.25 22V20.7373C13.784 20.7462 13.2846 20.7489 12.75 20.7497V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20.7497C10.7154 20.7489 10.216 20.7462 9.75 20.7373V22C9.75 22.4142 9.41421 22.75 9 22.75C8.58579 22.75 8.25 22.4142 8.25 22V20.6729C7.99006 20.6531 7.7439 20.6282 7.51098 20.5969C6.33855 20.4392 5.38961 20.1071 4.64124 19.3588C3.89288 18.6104 3.56076 17.6614 3.40313 16.489C3.37182 16.2561 3.34691 16.0099 3.32709 15.75H2C1.58579 15.75 1.25 15.4142 1.25 15C1.25 14.5858 1.58579 14.25 2 14.25H3.26272C3.25376 13.784 3.25111 13.2846 3.25032 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3.25032C3.25111 10.7154 3.25376 10.216 3.26272 9.75H2C1.58579 9.75 1.25 9.41421 1.25 9C1.25 8.58579 1.58579 8.25 2 8.25H3.32709C3.34691 7.99006 3.37182 7.7439 3.40313 7.51098C3.56076 6.33855 3.89288 5.38961 4.64124 4.64124C5.38961 3.89288 6.33855 3.56076 7.51098 3.40313C7.7439 3.37182 7.99006 3.34691 8.25 3.32709V2C8.25 1.58579 8.58579 1.25 9 1.25ZM7.71085 4.88976C6.70476 5.02502 6.12511 5.27869 5.7019 5.7019C5.27869 6.12511 5.02502 6.70476 4.88976 7.71085C4.75159 8.73851 4.75 10.0932 4.75 12C4.75 13.9068 4.75159 15.2615 4.88976 16.2892C5.02502 17.2952 5.27869 17.8749 5.7019 18.2981C6.12511 18.7213 6.70476 18.975 7.71085 19.1102C8.73851 19.2484 10.0932 19.25 12 19.25C13.9068 19.25 15.2615 19.2484 16.2892 19.1102C17.2952 18.975 17.8749 18.7213 18.2981 18.2981C18.7213 17.8749 18.975 17.2952 19.1102 16.2892C19.2484 15.2615 19.25 13.9068 19.25 12C19.25 10.0932 19.2484 8.73851 19.1102 7.71085C18.975 6.70476 18.7213 6.12511 18.2981 5.7019C17.8749 5.27869 17.2952 5.02502 16.2892 4.88976C15.2615 4.75159 13.9068 4.75 12 4.75C10.0932 4.75 8.73851 4.75159 7.71085 4.88976ZM9.95063 6.25H14.0494C14.7142 6.24996 15.2871 6.24993 15.7458 6.31161C16.2375 6.3777 16.7087 6.52676 17.091 6.90901C17.4732 7.29126 17.6223 7.76252 17.6884 8.25416C17.7501 8.7129 17.75 9.28577 17.75 9.95063V14.0494C17.75 14.7142 17.7501 15.2871 17.6884 15.7458C17.6223 16.2375 17.4732 16.7087 17.091 17.091C16.7087 17.4732 16.2375 17.6223 15.7458 17.6884C15.2871 17.7501 14.7142 17.75 14.0494 17.75H9.95063C9.28577 17.75 8.7129 17.7501 8.25416 17.6884C7.76252 17.6223 7.29126 17.4732 6.90901 17.091C6.52676 16.7087 6.3777 16.2375 6.31161 15.7458C6.24993 15.2871 6.24996 14.7142 6.25 14.0494V9.95063C6.24996 9.28577 6.24993 8.7129 6.31161 8.25416C6.3777 7.76252 6.52676 7.29126 6.90901 6.90901C7.29126 6.52676 7.76252 6.3777 8.25416 6.31161C8.7129 6.24993 9.28577 6.24996 9.95063 6.25ZM8.45403 7.79823C8.12872 7.84197 8.02676 7.91258 7.96967 7.96967C7.91258 8.02676 7.84197 8.12872 7.79823 8.45403C7.75159 8.80091 7.75 9.27169 7.75 10V14C7.75 14.7283 7.75159 15.1991 7.79823 15.546C7.84197 15.8713 7.91258 15.9732 7.96967 16.0303C8.02676 16.0874 8.12872 16.158 8.45403 16.2018C8.80091 16.2484 9.27169 16.25 10 16.25H14C14.7283 16.25 15.1991 16.2484 15.546 16.2018C15.8713 16.158 15.9732 16.0874 16.0303 16.0303C16.0874 15.9732 16.158 15.8713 16.2018 15.546C16.2484 15.1991 16.25 14.7283 16.25 14V10C16.25 9.27169 16.2484 8.80091 16.2018 8.45403C16.158 8.12872 16.0874 8.02676 16.0303 7.96967C15.9732 7.91258 15.8713 7.84197 15.546 7.79823C15.1991 7.75159 14.7283 7.75 14 7.75H10C9.27169 7.75 8.80091 7.75159 8.45403 7.79823ZM12.8645 9.3897C13.2016 9.63046 13.2796 10.0989 13.0389 10.4359L12.4574 11.25H13C13.2809 11.25 13.5383 11.407 13.6669 11.6568C13.7954 11.9066 13.7736 12.2073 13.6103 12.4359L12.1817 14.4359C11.941 14.773 11.4726 14.8511 11.1355 14.6103C10.7984 14.3695 10.7204 13.9011 10.9611 13.5641L11.5426 12.75H11C10.7191 12.75 10.4617 12.593 10.3331 12.3432C10.2046 12.0934 10.2264 11.7927 10.3897 11.5641L11.8183 9.56407C12.059 9.22701 12.5274 9.14894 12.8645 9.3897Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgCpuBolt;
