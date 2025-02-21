import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloudSnowfall = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.4762 3.75C9.7261 3.75 7.5119 5.95083 7.5119 8.64706C7.5119 9.10922 7.5766 9.55551 7.69729 9.97813C8.19449 10.1216 8.65991 10.3389 9.08045 10.6171C9.42592 10.8456 9.52072 11.3109 9.29219 11.6564C9.06366 12.0019 8.59835 12.0967 8.25288 11.8681C7.87207 11.6162 7.43917 11.4355 6.9733 11.3451C6.75147 11.3021 6.52165 11.2794 6.28571 11.2794C4.3246 11.2794 2.75 12.8482 2.75 14.7647C2.75 16.6812 4.3246 18.25 6.28571 18.25C6.69993 18.25 7.03571 18.5858 7.03571 19C7.03571 19.4142 6.69993 19.75 6.28571 19.75C3.51296 19.75 1.25 17.5264 1.25 14.7647C1.25 12.0605 3.41987 9.87207 6.11351 9.78228C6.04673 9.41355 6.0119 9.03413 6.0119 8.64706C6.0119 5.10572 8.91446 2.25 12.4762 2.25C15.6343 2.25 18.2724 4.49369 18.8314 7.47127C21.1313 8.44751 22.75 10.7093 22.75 13.3529C22.75 16.4269 20.5623 18.9843 17.6568 19.6057C17.2518 19.6923 16.8532 19.4341 16.7666 19.0291C16.68 18.624 16.9381 18.2254 17.3432 18.1388C19.5829 17.6598 21.25 15.693 21.25 13.3529C21.25 11.2162 19.8607 9.39087 17.9124 8.72463C17.4038 8.55072 16.8568 8.45588 16.2857 8.45588C15.7031 8.45588 15.1455 8.55458 14.6283 8.73526C14.2372 8.87185 13.8095 8.66557 13.6729 8.27453C13.5363 7.88348 13.7426 7.45575 14.1336 7.31916C14.8079 7.08364 15.5326 6.95588 16.2857 6.95588C16.5812 6.95588 16.8723 6.97555 17.1577 7.01367C16.477 5.11631 14.6422 3.75 12.4762 3.75ZM12.001 14.25C12.4152 14.25 12.751 14.5858 12.751 15V17.1633L14.624 16.0819C14.9827 15.8748 15.4414 15.9977 15.6485 16.3564C15.8556 16.7152 15.7327 17.1739 15.374 17.381L13.501 18.4624L15.3766 19.5453C15.7354 19.7524 15.8583 20.2111 15.6512 20.5698C15.4441 20.9285 14.9854 21.0514 14.6266 20.8443L12.751 19.7614V22C12.751 22.4142 12.4152 22.75 12.001 22.75C11.5868 22.75 11.251 22.4142 11.251 22V19.7614L9.37531 20.8443C9.01659 21.0514 8.5579 20.9285 8.35079 20.5698C8.14368 20.2111 8.26659 19.7524 8.62531 19.5453L10.501 18.4624L8.62793 17.381C8.26921 17.1739 8.1463 16.7152 8.35341 16.3564C8.56052 15.9977 9.01921 15.8748 9.37793 16.0819L11.251 17.1633V15C11.251 14.5858 11.5868 14.25 12.001 14.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.4762 3.75C9.7261 3.75 7.5119 5.95083 7.5119 8.64706C7.5119 9.10922 7.5766 9.55551 7.69729 9.97813C8.19449 10.1216 8.65991 10.3389 9.08045 10.6171C9.42592 10.8456 9.52072 11.3109 9.29219 11.6564C9.06366 12.0019 8.59835 12.0967 8.25288 11.8681C7.87207 11.6162 7.43917 11.4355 6.9733 11.3451C6.75147 11.3021 6.52165 11.2794 6.28571 11.2794C4.3246 11.2794 2.75 12.8482 2.75 14.7647C2.75 16.6812 4.3246 18.25 6.28571 18.25C6.69993 18.25 7.03571 18.5858 7.03571 19C7.03571 19.4142 6.69993 19.75 6.28571 19.75C3.51296 19.75 1.25 17.5264 1.25 14.7647C1.25 12.0605 3.41987 9.87207 6.11351 9.78228C6.04673 9.41355 6.0119 9.03413 6.0119 8.64706C6.0119 5.10572 8.91446 2.25 12.4762 2.25C15.6343 2.25 18.2724 4.49369 18.8314 7.47127C21.1313 8.44751 22.75 10.7093 22.75 13.3529C22.75 16.4269 20.5623 18.9843 17.6568 19.6057C17.2518 19.6923 16.8532 19.4341 16.7666 19.0291C16.68 18.624 16.9381 18.2254 17.3432 18.1388C19.5829 17.6598 21.25 15.693 21.25 13.3529C21.25 11.2162 19.8607 9.39087 17.9124 8.72463C17.4038 8.55072 16.8568 8.45588 16.2857 8.45588C15.7031 8.45588 15.1455 8.55458 14.6283 8.73526C14.2372 8.87185 13.8095 8.66557 13.6729 8.27453C13.5363 7.88348 13.7426 7.45575 14.1336 7.31916C14.8079 7.08364 15.5326 6.95588 16.2857 6.95588C16.5812 6.95588 16.8723 6.97555 17.1577 7.01367C16.477 5.11631 14.6422 3.75 12.4762 3.75Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgCloudSnowfall;
