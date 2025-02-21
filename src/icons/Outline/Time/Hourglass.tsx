import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHourglass = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9376 1.25H12.0624C14.0761 1.24998 15.6654 1.24997 16.823 1.40259C17.9607 1.5526 18.983 1.88319 19.4685 2.82586C19.5385 2.96167 19.5975 3.10281 19.6451 3.24795C19.9763 4.25892 19.4861 5.21387 18.7879 6.11769C18.0778 7.03683 16.9536 8.1501 15.5303 9.55956L13.0659 12L15.5303 14.4404C16.9536 15.8499 18.0778 16.9632 18.7879 17.8823C19.4861 18.7861 19.9763 19.7411 19.6451 20.752C19.5975 20.8972 19.5385 21.0383 19.4685 21.1741C18.983 22.1168 17.9607 22.4474 16.823 22.5974C15.6654 22.75 14.0761 22.75 12.0624 22.75H11.9376C9.92387 22.75 8.3346 22.75 7.17703 22.5974C6.03928 22.4474 5.017 22.1168 4.53149 21.1741C4.46154 21.0383 4.4025 20.8972 4.35494 20.752C4.02368 19.7411 4.5139 18.7861 5.21211 17.8823C5.92217 16.9632 7.04639 15.8499 8.46972 14.4404L10.9341 12L8.46972 9.55957C7.0464 8.15011 5.92217 7.03684 5.21211 6.11769C4.5139 5.21387 4.02368 4.25893 4.35494 3.24795C4.4025 3.10281 4.46154 2.96167 4.53149 2.82586C5.017 1.88319 6.03928 1.5526 7.17703 1.40259C8.3346 1.24997 9.92386 1.24998 11.9376 1.25ZM12 10.9445L14.43 8.53815C15.9079 7.0746 16.9594 6.03105 17.6008 5.20068C18.2616 4.34534 18.2975 3.95253 18.2196 3.71502C18.1969 3.64553 18.1686 3.57787 18.135 3.51267C18.0183 3.28608 17.7062 3.03203 16.6269 2.88972C15.5793 2.7516 14.0897 2.75 12 2.75C9.91031 2.75 8.42068 2.7516 7.37311 2.88972C6.2938 3.03203 5.98172 3.28608 5.86502 3.51267C5.83144 3.57787 5.80314 3.64553 5.78037 3.71502C5.70255 3.95253 5.73841 4.34534 6.39916 5.20068C7.04064 6.03105 8.09211 7.0746 9.57004 8.53815L12 10.9445ZM12 13.0555L9.57004 15.4618C8.09211 16.9254 7.04064 17.969 6.39916 18.7993C5.73841 19.6547 5.70255 20.0475 5.78037 20.285C5.80314 20.3545 5.83144 20.4221 5.86502 20.4873C5.98172 20.7139 6.2938 20.968 7.37311 21.1103C8.42068 21.2484 9.91031 21.25 12 21.25C14.0897 21.25 15.5793 21.2484 16.6269 21.1103C17.7062 20.968 18.0183 20.7139 18.135 20.4873C18.1686 20.4221 18.1969 20.3545 18.2196 20.285C18.2975 20.0475 18.2616 19.6547 17.6008 18.7993C16.9594 17.969 15.9079 16.9254 14.43 15.4618L12 13.0555Z"
      fill="black"
    />
  </Svg>
);
export default SvgHourglass;
