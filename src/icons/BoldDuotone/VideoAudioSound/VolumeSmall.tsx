import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVolumeSmall = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3.00312 11.7155C3.0421 9.87326 3.06159 8.95215 3.70045 8.16363C3.81705 8.0197 3.98814 7.8487 4.13153 7.73274C4.91718 7.09741 5.95444 7.09741 8.02898 7.09741C8.77016 7.09741 9.14074 7.09741 9.49401 7.00452C9.56741 6.98522 9.64004 6.96296 9.71173 6.93781C10.0567 6.81674 10.3661 6.60837 10.985 6.19161C13.4265 4.54738 14.6473 3.72527 15.672 4.08241C15.8684 4.15088 16.0586 4.24972 16.2284 4.37162C17.1142 5.00744 17.1815 6.48675 17.3161 9.44537C17.3659 10.5409 17.3999 11.4785 17.3999 12C17.3999 12.5215 17.3659 13.4591 17.3161 14.5546C17.1815 17.5132 17.1142 18.9926 16.2284 19.6284C16.0586 19.7503 15.8684 19.8491 15.672 19.9176C14.6473 20.2747 13.4265 19.4526 10.985 17.8084C10.3661 17.3916 10.0567 17.1833 9.71173 17.0622C9.64004 17.037 9.56741 17.0148 9.49401 16.9955C9.14074 16.9026 8.77016 16.9026 8.02898 16.9026C5.95444 16.9026 4.91718 16.9026 4.13153 16.2673C3.98814 16.1513 3.81705 15.9803 3.70045 15.8364C3.06159 15.0478 3.0421 14.1267 3.00312 12.2845C3.00107 12.1878 3 12.0928 3 12C3 11.9072 3.00107 11.8122 3.00312 11.7155Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.4505 8.41592C19.7981 8.21868 20.2365 8.34659 20.4296 8.70163L19.8002 9.05876C20.4296 8.70163 20.4296 8.70163 20.4296 8.70163L20.4303 8.70291L20.431 8.70428L20.4326 8.70727L20.4363 8.71425L20.4456 8.73224C20.4525 8.74604 20.4611 8.76345 20.4709 8.78454C20.4906 8.82672 20.5155 8.88359 20.5437 8.95571C20.6002 9.1 20.6699 9.30487 20.7376 9.57473C20.8733 10.1149 21.0002 10.9118 21.0002 12.0003C21.0002 13.0888 20.8733 13.8857 20.7376 14.4259C20.6699 14.6958 20.6002 14.9006 20.5437 15.0449C20.5155 15.117 20.4906 15.1739 20.4709 15.2161C20.4611 15.2372 20.4525 15.2546 20.4456 15.2684L20.4363 15.2864L20.4326 15.2934L20.431 15.2963L20.4303 15.2977C20.4303 15.2977 20.4296 15.299 19.8002 14.9419L20.4296 15.299C20.2365 15.654 19.7981 15.782 19.4505 15.5847C19.1059 15.3891 18.9798 14.9474 19.166 14.5938L19.1708 14.5838C19.1774 14.5696 19.1899 14.5415 19.2067 14.4987C19.2402 14.4132 19.2905 14.2687 19.3428 14.0606C19.4472 13.6448 19.5602 12.9709 19.5602 12.0003C19.5602 11.0297 19.4472 10.3558 19.3428 9.94003C19.2905 9.73189 19.2402 9.58745 19.2067 9.50194C19.1899 9.45915 19.1774 9.43099 19.1708 9.41687L19.166 9.40684C18.9798 9.05328 19.1059 8.61149 19.4505 8.41592Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgVolumeSmall;
