import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPhone = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.73262 2.043C6.94995 0.832583 8.95433 1.04804 9.97364 2.40962L11.2346 4.09402C12.064 5.20191 11.9908 6.75032 11.0063 7.72923L10.7676 7.96665C10.7571 7.99694 10.7318 8.09215 10.7599 8.2731C10.8231 8.6806 11.1634 9.545 12.5919 10.9654C14.0199 12.3853 14.8905 12.7253 15.3037 12.7887C15.491 12.8174 15.589 12.7906 15.6193 12.78L16.0273 12.3743C16.9025 11.5041 18.2474 11.3414 19.331 11.9305L21.2415 12.9691C22.8775 13.8584 23.2908 16.0821 21.9505 17.4148L20.5299 18.8273C20.0824 19.2723 19.4805 19.6434 18.7459 19.7119C16.9369 19.8806 12.7186 19.6654 8.28653 15.2584C4.14862 11.144 3.35456 7.556 3.25409 5.78817L4.00288 5.74562L3.25409 5.78817C3.20328 4.89426 3.6257 4.13796 4.16302 3.60369L5.73262 2.043ZM8.77285 3.30856C8.26622 2.63182 7.32194 2.57801 6.79026 3.10668L5.22066 4.66737C4.89074 4.99542 4.732 5.35695 4.75167 5.70307C4.8315 7.10766 5.47279 10.3453 9.34417 14.1947C13.4056 18.2331 17.1568 18.3536 18.6067 18.2184C18.9029 18.1908 19.1975 18.0369 19.4723 17.7636L20.8928 16.3511C21.4703 15.777 21.3429 14.7315 20.5251 14.2869L18.6146 13.2484C18.0871 12.9616 17.469 13.0562 17.085 13.438L16.6295 13.8909L16.1007 13.359C16.6295 13.8909 16.6288 13.8916 16.6281 13.8923L16.6266 13.8937L16.6236 13.8967L16.6171 13.903L16.6024 13.9166C16.5919 13.9262 16.5799 13.9367 16.5663 13.948C16.5392 13.9705 16.5057 13.9959 16.4658 14.0227C16.3857 14.0763 16.28 14.1347 16.1472 14.1841C15.8763 14.285 15.5192 14.3392 15.0763 14.2713C14.2095 14.1384 13.0613 13.5474 11.5343 12.0291C10.0078 10.5113 9.41188 9.36834 9.27764 8.50306C9.209 8.06061 9.26375 7.70331 9.36588 7.43225C9.41593 7.29941 9.47491 7.19378 9.52904 7.11389C9.55604 7.07405 9.58173 7.04074 9.6044 7.01368C9.61574 7.00015 9.62633 6.98817 9.63598 6.9777L9.64971 6.96312L9.656 6.95666L9.65899 6.95363L9.66045 6.95217C9.66116 6.95146 9.66188 6.95075 10.1907 7.48258L9.66188 6.95075L9.94869 6.66556C10.3773 6.23939 10.4373 5.53194 10.0338 4.99297L8.77285 3.30856Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgPhone;
