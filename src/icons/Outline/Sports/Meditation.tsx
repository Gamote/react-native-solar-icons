import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMeditation = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.75C11.0335 2.75 10.25 3.5335 10.25 4.5C10.25 5.4665 11.0335 6.25 12 6.25C12.9665 6.25 13.75 5.4665 13.75 4.5C13.75 3.5335 12.9665 2.75 12 2.75ZM8.74998 4.5C8.74998 2.70507 10.2051 1.25 12 1.25C13.7949 1.25 15.25 2.70507 15.25 4.5C15.25 6.29493 13.7949 7.75 12 7.75C10.2051 7.75 8.74998 6.29493 8.74998 4.5ZM12.8687 9.82208C12.2981 9.72597 11.7019 9.72597 11.1312 9.82208C8.62354 10.2445 6.74998 12.4461 6.74998 15.0196C6.74998 15.5842 6.4343 16.1049 5.9271 16.3612L3.33822 17.6694C2.96853 17.8562 2.51739 17.7079 2.33058 17.3382C2.14378 16.9685 2.29204 16.5174 2.66173 16.3306L5.24923 15.0231C5.24961 15.0224 5.24998 15.0213 5.24998 15.0196C5.24998 11.7143 7.65181 8.88701 10.8821 8.34292C11.6176 8.21903 12.3823 8.21903 13.1179 8.34292C16.3481 8.88701 18.75 11.7143 18.75 15.0196C18.75 15.0213 18.7503 15.0224 18.7507 15.0231L21.3382 16.3306C21.7079 16.5174 21.8562 16.9685 21.6694 17.3382C21.4826 17.7079 21.0314 17.8562 20.6617 17.6694L18.0729 16.3612C17.5657 16.1049 17.25 15.5842 17.25 15.0196C17.25 12.4461 15.3764 10.2445 12.8687 9.82208ZM9.94998 15.4C10.2813 15.6485 10.3485 16.1186 10.1 16.45L9.05364 17.8451C9.02634 17.8815 9.00489 17.9101 8.98272 17.9381C8.62101 18.3954 8.12336 18.7258 7.56161 18.8817C7.52719 18.8913 7.49247 18.9 7.44836 18.911L7.4409 18.9129L5.95611 19.284C5.24726 19.4613 4.74998 20.0982 4.74998 20.8288C4.74998 21.0614 4.93854 21.25 5.17114 21.25H6.72725C7.34367 21.25 7.59228 21.2488 7.82943 21.2209C8.40761 21.153 8.96566 20.967 9.46899 20.6744C9.67542 20.5544 9.87504 20.4062 10.3682 20.0364L10.55 19.9L12.55 18.4C12.8813 18.1515 13.3515 18.2186 13.6 18.55C13.8485 18.8814 13.7814 19.3515 13.45 19.6L12.5453 20.2785L13.803 20.7501C14.4297 20.9851 14.6825 21.0784 14.9395 21.1385C15.078 21.1709 15.2181 21.1963 15.3591 21.2146C15.6208 21.2486 15.8903 21.25 16.5596 21.25H18.8288C19.0614 21.25 19.25 21.0614 19.25 20.8288C19.25 20.0982 18.7527 19.4613 18.0438 19.284L16.5512 18.9109C16.5073 18.8999 16.4727 18.8913 16.4383 18.8817C15.8766 18.7258 15.3789 18.3954 15.0172 17.9381C14.9951 17.9102 14.9735 17.8814 14.9463 17.8451L14.9417 17.839L13.9 16.45C13.6515 16.1186 13.7186 15.6485 14.05 15.4C14.3813 15.1515 14.8515 15.2186 15.1 15.55L16.1417 16.939C16.1757 16.9843 16.185 16.9966 16.1936 17.0075C16.358 17.2153 16.5842 17.3655 16.8396 17.4364C16.853 17.4401 16.8677 17.4439 16.9229 17.4576L18.4076 17.8288C19.7843 18.173 20.75 19.4099 20.75 20.8288C20.75 21.8899 19.8898 22.75 18.8288 22.75L16.5079 22.75C15.9061 22.75 15.5352 22.7501 15.1659 22.7021C14.975 22.6773 14.7855 22.6429 14.5981 22.5991C14.2355 22.5144 13.8882 22.3841 13.3248 22.1728L11.1213 21.3465C10.7408 21.6316 10.4897 21.8161 10.2228 21.9713C9.54179 22.3671 8.78678 22.6187 8.00453 22.7107C7.66962 22.7501 7.32892 22.75 6.77543 22.75H5.17114C4.11011 22.75 3.24998 21.8899 3.24998 20.8288C3.24998 19.4099 4.2157 18.173 5.59231 17.8288L7.07709 17.4576C7.13218 17.4439 7.14701 17.4401 7.16038 17.4364C7.41572 17.3655 7.64193 17.2153 7.80634 17.0075C7.81496 16.9966 7.82417 16.9844 7.85825 16.939L8.89998 15.55C9.14851 15.2186 9.61861 15.1515 9.94998 15.4Z"
      fill="black"
    />
  </Svg>
);
export default SvgMeditation;
