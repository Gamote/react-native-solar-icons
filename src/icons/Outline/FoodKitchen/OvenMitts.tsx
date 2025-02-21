import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgOvenMitts = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.48097 4.56453C9.04458 3.40843 8.13142 2.73659 7.22433 2.75023C6.00496 2.76856 4.78618 4.06644 4.81639 5.98744L4.81654 5.99695L4.78429 9.34779C4.78392 9.38646 4.78359 9.42466 4.78326 9.46241C4.77958 9.88733 4.77639 10.2555 4.72083 10.5918L13.2976 18.9773L19.554 12.8602C21.8153 10.6492 21.8153 7.07159 19.554 4.86057C17.2832 2.64033 13.5946 2.64033 11.3238 4.86057L9.89629 6.25629C9.60012 6.54587 9.12528 6.54052 8.8357 6.24435C8.54612 5.94818 8.55147 5.47334 8.84764 5.18376L9.48097 4.56453ZM10.6255 3.46692C9.93458 2.16287 8.69904 1.22789 7.20178 1.2504C4.88003 1.2853 3.28246 3.56209 3.31643 6.00118L3.28436 9.33336C3.27652 10.1482 3.26263 10.3582 3.19279 10.5337C3.16627 10.6004 3.11205 10.6968 2.96862 10.8735C2.82216 11.054 2.6191 11.2753 2.31716 11.6035C1.72229 12.2503 1.25 12.9035 1.25 13.7454C1.25 14.3894 1.52567 14.9188 1.91343 15.4157C2.28112 15.8869 2.81601 16.4098 3.45707 17.0366L7.10017 20.5985C7.74162 21.2257 8.27633 21.7486 8.75776 22.1077C9.26635 22.4871 9.79971 22.75 10.4426 22.75C11.0855 22.75 11.6188 22.4871 12.1274 22.1077C12.6089 21.7486 13.1436 21.2257 13.785 20.5985L20.6026 13.9328C23.4658 11.1333 23.4658 6.58745 20.6026 3.78804C17.8629 1.10934 13.4953 1.0023 10.6255 3.46692ZM12.2234 20.0248L3.99674 11.9817C3.84016 12.1635 3.65229 12.3677 3.43686 12.6019L3.42117 12.619C2.85715 13.2322 2.75 13.5144 2.75 13.7454C2.75 13.9191 2.8108 14.1274 3.09598 14.4929C3.39409 14.8749 3.85492 15.3277 4.54313 16.0006L8.1119 19.4899C8.79988 20.1626 9.2633 20.6134 9.65466 20.9054C10.0281 21.1839 10.2493 21.25 10.4426 21.25C10.6359 21.25 10.8571 21.1839 11.2305 20.9054C11.5074 20.6988 11.8204 20.4127 12.2234 20.0248Z"
      fill="black"
    />
  </Svg>
);
export default SvgOvenMitts;
