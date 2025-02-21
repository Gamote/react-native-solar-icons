import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHashtagChat = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17.5433 21.6939L16.8979 21.3119L16.8979 21.3119L17.5433 21.6939ZM17.8144 21.236L18.4598 21.618L18.4598 21.618L17.8144 21.236ZM16.1856 21.236L15.5402 21.618L15.5402 21.618L16.1856 21.236ZM16.4567 21.6939L17.1021 21.3119L17.1021 21.3119L16.4567 21.6939ZM12.1903 18.9567L12.8832 18.6697L12.8832 18.6697L12.1903 18.9567ZM14.8948 20.4958L14.8819 21.2457L14.8819 21.2457L14.8948 20.4958ZM13.5433 20.3097L13.2563 21.0026L13.2563 21.0026L13.5433 20.3097ZM21.8097 18.9567L22.5026 19.2438L22.5026 19.2437L21.8097 18.9567ZM19.1052 20.4958L19.0923 19.7459L19.0923 19.7459L19.1052 20.4958ZM20.4567 20.3097L20.7437 21.0026L20.7437 21.0026L20.4567 20.3097ZM20.8062 12.3684L20.4144 13.0079L20.4144 13.0079L20.8062 12.3684ZM21.6316 13.1938L22.2711 12.8019L22.2711 12.8019L21.6316 13.1938ZM13.1938 12.3684L12.8019 11.7289L13.1938 12.3684ZM12.3684 13.1938L11.7289 12.8019L12.3684 13.1938ZM15.7014 20.605L16.0785 19.9566L16.0785 19.9566L15.7014 20.605ZM22.7322 18.0383C22.7534 17.6246 22.4352 17.2721 22.0215 17.251C21.6079 17.2298 21.2553 17.548 21.2342 17.9617L22.7322 18.0383ZM21.1715 14.1241C21.24 14.5326 21.6267 14.8082 22.0352 14.7397C22.4437 14.6712 22.7194 14.2844 22.6508 13.8759L21.1715 14.1241ZM18.1887 22.0759L18.4598 21.618L17.169 20.8539L16.8979 21.3119L18.1887 22.0759ZM15.5402 21.618L15.8112 22.0759L17.1021 21.3119L16.831 20.8539L15.5402 21.618ZM16.8979 21.3119C16.925 21.2661 16.9725 21.25 17 21.25C17.0275 21.25 17.075 21.2661 17.1021 21.3119L15.8112 22.0759C16.3432 22.9747 17.6567 22.9747 18.1887 22.0759L16.8979 21.3119ZM16.25 12.75H17.75V11.25H16.25V12.75ZM12.75 16.75V16.25H11.25V16.75H12.75ZM11.25 16.75C11.25 17.3222 11.2496 17.7889 11.2755 18.169C11.3019 18.5558 11.3581 18.9074 11.4974 19.2437L12.8832 18.6697C12.8322 18.5466 12.7932 18.3773 12.772 18.0669C12.7504 17.7497 12.75 17.3427 12.75 16.75H11.25ZM14.9077 19.7459C14.28 19.7351 14.0158 19.6937 13.8303 19.6168L13.2563 21.0026C13.7311 21.1993 14.2543 21.2348 14.8819 21.2457L14.9077 19.7459ZM11.4974 19.2437C11.8272 20.0401 12.4599 20.6728 13.2563 21.0026L13.8303 19.6168C13.4015 19.4392 13.0608 19.0985 12.8832 18.6697L11.4974 19.2437ZM19.1181 21.2457C19.7457 21.2348 20.2689 21.1993 20.7437 21.0026L20.1697 19.6168C19.9842 19.6937 19.72 19.7351 19.0923 19.7459L19.1181 21.2457ZM21.1168 18.6697C20.9392 19.0985 20.5985 19.4392 20.1697 19.6168L20.7437 21.0026C21.5401 20.6728 22.1728 20.0401 22.5026 19.2438L21.1168 18.6697ZM17.75 12.75C18.5829 12.75 19.1549 12.7508 19.5955 12.7927C20.0249 12.8335 20.2514 12.908 20.4144 13.0079L21.1981 11.7289C20.7599 11.4604 20.2767 11.3507 19.7374 11.2994C19.2094 11.2492 18.5538 11.25 17.75 11.25V12.75ZM20.4144 13.0079C20.6498 13.1522 20.8478 13.3502 20.9921 13.5856L22.2711 12.8019C22.0031 12.3646 21.6354 11.9969 21.1981 11.7289L20.4144 13.0079ZM16.25 11.25C15.4462 11.25 14.7906 11.2492 14.2626 11.2994C13.7233 11.3507 13.2401 11.4604 12.8019 11.7289L13.5856 13.0079C13.7486 12.908 13.9751 12.8335 14.4045 12.7927C14.8451 12.7508 15.4171 12.75 16.25 12.75V11.25ZM12.75 16.25C12.75 15.4171 12.7508 14.8451 12.7927 14.4045C12.8335 13.9751 12.908 13.7486 13.0079 13.5856L11.7289 12.8019C11.4604 13.2401 11.3507 13.7233 11.2994 14.2626C11.2492 14.7906 11.25 15.4462 11.25 16.25H12.75ZM12.8019 11.7289C12.3646 11.9969 11.9969 12.3646 11.7289 12.8019L13.0079 13.5856C13.1522 13.3502 13.3502 13.1522 13.5856 13.0079L12.8019 11.7289ZM16.831 20.8539C16.7331 20.6885 16.6337 20.519 16.5341 20.3823C16.4252 20.233 16.2843 20.0764 16.0785 19.9566L15.3243 21.2533C15.2873 21.2317 15.2834 21.213 15.3219 21.2658C15.3696 21.3313 15.4279 21.4282 15.5402 21.618L16.831 20.8539ZM14.8819 21.2457C15.1084 21.2496 15.2271 21.2524 15.3117 21.2617C15.3824 21.2696 15.3638 21.2762 15.3243 21.2533L16.0785 19.9566C15.8701 19.8355 15.6609 19.7912 15.4768 19.7708C15.3066 19.752 15.1064 19.7493 14.9077 19.7459L14.8819 21.2457ZM18.4598 21.618C18.5721 21.4282 18.6304 21.3313 18.6781 21.2658C18.7166 21.213 18.7127 21.2317 18.6757 21.2533L17.9215 19.9566C17.7156 20.0764 17.5748 20.233 17.4659 20.3823C17.3663 20.519 17.2669 20.6885 17.169 20.8539L18.4598 21.618ZM19.0923 19.7459C18.8936 19.7493 18.6934 19.752 18.5232 19.7708C18.3391 19.7912 18.1298 19.8355 17.9215 19.9566L18.6757 21.2533C18.6362 21.2762 18.6176 21.2696 18.6883 21.2617C18.7729 21.2524 18.8916 21.2496 19.1181 21.2457L19.0923 19.7459ZM21.2342 17.9617C21.2149 18.3397 21.1738 18.5321 21.1168 18.6697L22.5026 19.2437C22.6568 18.8716 22.7097 18.4785 22.7322 18.0383L21.2342 17.9617ZM22.6508 13.8759C22.5858 13.4883 22.4736 13.1324 22.2711 12.8019L20.9921 13.5856C21.0678 13.7091 21.1287 13.8691 21.1715 14.1241L22.6508 13.8759Z"
      fill="black"
    />
    <Path
      d="M10 3L5 21"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.9999 3L17.1943 9.5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22 9H4"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 16H9"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgHashtagChat;
