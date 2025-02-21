import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFloorLamp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M13.7467 3.06157L10.1539 3.04312C10.5034 2.41709 11.1746 1.99606 11.9466 2.00003C12.7186 2.00399 13.3927 2.43193 13.7467 3.06157Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.7498 7.03413C13.7456 6.77819 14.5426 6.03618 14.8733 5.07484C15.0572 4.54026 14.5784 4.06577 14.0105 4.06286L9.89732 4.04173C9.32941 4.03881 8.85393 4.5084 9.04163 5.04489C9.38712 6.03236 10.2196 6.79507 11.2498 7.04404V13.407C11.1276 13.2895 10.9987 13.178 10.8634 13.073L10.8517 13.0639L6.96472 10.2856L6.88855 10.2285C7.26391 9.297 7.16361 8.23463 6.62892 7.39297C6.32414 6.91321 5.66094 6.99544 5.31133 7.44299L2.77924 10.6845C2.42963 11.132 2.50535 11.8018 3.03889 11.9888C4.04436 12.341 5.17814 12.142 6.00834 11.4433L6.07892 11.4962L9.95475 14.2666C10.7617 14.8983 11.2397 15.8694 11.2498 16.9033V21.25H8.99984C8.58563 21.25 8.24984 21.5858 8.24984 22C8.24984 22.4142 8.58563 22.75 8.99984 22.75H14.9998C15.4141 22.75 15.7498 22.4142 15.7498 22C15.7498 21.5858 15.4141 21.25 14.9998 21.25H12.7498V18.0159L12.75 18V16.9368C12.75 15.8902 13.2294 14.9051 14.0449 14.2666L17.9208 11.4962L18.0521 11.3978C18.8866 12.1332 20.0474 12.3485 21.0744 11.9888C21.6079 11.8018 21.6836 11.132 21.334 10.6845L18.8019 7.44299C18.4523 6.99544 17.7891 6.91321 17.4844 7.39297C16.9622 8.21487 16.8543 9.24722 17.1991 10.1627L17.035 10.2856L13.148 13.0639L13.1363 13.073C13.001 13.178 12.8721 13.2896 12.7498 13.407V7.03413Z"
      fill={props.primaryColor}
    />
    <Path
      d="M2.15682 9.85694L4.36852 7.02563C3.66061 6.91202 2.91429 7.17791 2.43904 7.7863C1.96379 8.39469 1.88194 9.18899 2.15682 9.85694Z"
      fill={props.primaryColor}
    />
    <Path
      d="M19.7448 7.02563L21.9565 9.85694C22.2313 9.18899 22.1495 8.39469 21.6742 7.7863C21.199 7.17791 20.4527 6.91202 19.7448 7.02563Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgFloorLamp;
