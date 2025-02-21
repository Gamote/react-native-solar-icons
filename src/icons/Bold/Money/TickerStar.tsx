import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTickerStar = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.9963 4H14.0037C17.7819 4 19.671 4 20.8448 5.17157C21.7234 6.04858 21.9443 7.32572 21.9998 9.49444C22.007 9.77248 21.7788 9.99467 21.5092 10.0652C20.6493 10.2901 20.0148 11.0711 20.0148 12C20.0148 12.9289 20.6493 13.7099 21.5092 13.9348C21.7788 14.0053 22.007 14.2275 21.9998 14.5056C21.9443 16.6743 21.7234 17.9514 20.8448 18.8284C19.671 20 17.7819 20 14.0037 20H9.9963C6.21809 20 4.32899 20 3.15525 18.8284C2.27661 17.9514 2.0557 16.6743 2.00016 14.5056C1.99304 14.2275 2.22121 14.0053 2.49076 13.9348C3.35074 13.7099 3.98521 12.9289 3.98521 12C3.98521 11.0711 3.35074 10.2901 2.49076 10.0652C2.22121 9.99467 1.99304 9.77248 2.00016 9.49444C2.0557 7.32572 2.27661 6.04858 3.15525 5.17157C4.32899 4 6.21809 4 9.9963 4ZM12.9541 10.1989L12.8556 10.0225C12.4749 9.34084 12.2846 9 12 9C11.7154 9 11.5251 9.34084 11.1444 10.0225L11.0459 10.1989C10.9377 10.3926 10.8836 10.4894 10.7993 10.5533C10.7149 10.6172 10.6099 10.641 10.3998 10.6884L10.2086 10.7316C9.46928 10.8986 9.09965 10.982 9.01171 11.2643C8.92377 11.5466 9.17576 11.8407 9.67975 12.429L9.81013 12.5812C9.95335 12.7483 10.025 12.8319 10.0572 12.9353C10.0894 13.0387 10.0786 13.1502 10.0569 13.3733L10.0372 13.5763C9.961 14.3612 9.9229 14.7536 10.1531 14.9281C10.3834 15.1025 10.7295 14.9435 11.4216 14.6254L11.6007 14.5431C11.7974 14.4527 11.8958 14.4075 12 14.4075C12.1042 14.4075 12.2026 14.4527 12.3993 14.5431L12.5784 14.6254C13.2705 14.9435 13.6166 15.1025 13.8469 14.9281C14.0771 14.7536 14.039 14.3612 13.9628 13.5763L13.9431 13.3733C13.9214 13.1502 13.9106 13.0387 13.9428 12.9353C13.975 12.8319 14.0466 12.7483 14.1899 12.5812L14.3203 12.429C14.8242 11.8407 15.0762 11.5466 14.9883 11.2643C14.9003 10.982 14.5307 10.8986 13.7914 10.7316L13.6002 10.6884C13.3901 10.641 13.2851 10.6172 13.2007 10.5533C13.1164 10.4894 13.0623 10.3926 12.9541 10.1989Z"
      fill="black"
    />
  </Svg>
);
export default SvgTickerStar;
