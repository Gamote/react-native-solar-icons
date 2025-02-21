import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgInboxArchive = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62178 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 9.62178 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62178 2.75 7.91356 2.75159 6.61358 2.92637ZM6.5 6.75C6.08579 6.75 5.75 7.08579 5.75 7.5V8.37803C5.98458 8.29512 6.23702 8.25 6.5 8.25H17.5C17.763 8.25 18.0154 8.29512 18.25 8.37803V7.5C18.25 7.08579 17.9142 6.75 17.5 6.75H6.5ZM19.75 7.5C19.75 6.25736 18.7426 5.25 17.5 5.25H6.5C5.25736 5.25 4.25 6.25736 4.25 7.5V14.25H4C3.58579 14.25 3.25 14.5858 3.25 15C3.25 15.4142 3.58579 15.75 4 15.75H6.30147C7.17044 15.75 7.39887 15.7629 7.59386 15.8423C7.6145 15.8507 7.63491 15.8597 7.65508 15.8692C7.84554 15.9589 8.00971 16.1183 8.59805 16.7578L8.63351 16.7963C8.65912 16.8242 8.68439 16.8517 8.70937 16.8789C9.14654 17.3549 9.49191 17.731 9.94463 17.9581C10.0289 18.0004 10.1153 18.0383 10.2035 18.0717C10.6771 18.2511 11.1877 18.2506 11.834 18.2501C11.871 18.25 11.9083 18.25 11.9462 18.25C11.9819 18.25 12.0171 18.25 12.052 18.2501C12.6634 18.2506 13.1464 18.251 13.5987 18.089C13.683 18.0588 13.7658 18.0245 13.8467 17.9863C14.2811 17.781 14.6223 17.4392 15.0543 17.0065C15.0789 16.9818 15.1038 16.9568 15.1291 16.9316L15.3588 16.7019C15.9801 16.0806 16.1524 15.927 16.3501 15.8451C16.5477 15.7633 16.7782 15.75 17.6569 15.75H20C20.4142 15.75 20.75 15.4142 20.75 15C20.75 14.5858 20.4142 14.25 20 14.25H19.75V7.5ZM18.25 10.5C18.25 10.0858 17.9142 9.75 17.5 9.75H6.5C6.08579 9.75 5.75 10.0858 5.75 10.5V11.378C5.98458 11.2951 6.23702 11.25 6.5 11.25H17.5C17.763 11.25 18.0154 11.2951 18.25 11.378V10.5ZM18.25 13.5C18.25 13.0858 17.9142 12.75 17.5 12.75H6.5C6.08579 12.75 5.75 13.0858 5.75 13.5V14.25H6.30147C6.34188 14.25 6.3818 14.25 6.42125 14.2499C7.11178 14.2493 7.65785 14.2488 8.15966 14.4531C8.20508 14.4716 8.24999 14.4913 8.29435 14.5122C8.78452 14.7432 9.15386 15.1454 9.62091 15.654C9.64759 15.6831 9.67459 15.7125 9.70195 15.7422L9.73741 15.7807C10.2877 16.3789 10.4413 16.5291 10.6172 16.6173C10.6555 16.6365 10.6948 16.6538 10.7348 16.6689C10.9189 16.7387 11.1333 16.75 11.9462 16.75C12.7143 16.75 12.9171 16.7398 13.093 16.6768C13.1313 16.6631 13.1689 16.6475 13.2057 16.6301C13.3746 16.5503 13.5252 16.4141 14.0684 15.8709L14.2981 15.6412C14.3269 15.6124 14.3554 15.5839 14.3835 15.5557C14.877 15.0613 15.2676 14.6699 15.776 14.4593C16.2845 14.2487 16.8374 14.2493 17.536 14.2499C17.5758 14.25 17.6161 14.25 17.6569 14.25H18.25V13.5Z"
      fill="black"
    />
  </Svg>
);
export default SvgInboxArchive;
