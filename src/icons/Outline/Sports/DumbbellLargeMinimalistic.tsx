import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDumbbellLargeMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.6239 2.75573C13.5585 2.74809 13.4924 2.74809 13.4269 2.75573C13.3458 2.76521 13.2249 2.80265 12.984 2.99382C12.7306 3.19484 12.4266 3.49717 11.9619 3.96189C11.4972 4.42662 11.1948 4.73059 10.9938 4.98395C10.8026 5.2249 10.7652 5.34583 10.7557 5.42695C10.7481 5.49238 10.7481 5.55848 10.7557 5.62391C10.7652 5.70503 10.8026 5.82597 10.9938 6.06691C11.1948 6.32027 11.4972 6.62425 11.9619 7.08897L16.911 12.0381C17.3758 12.5028 17.6797 12.8052 17.9331 13.0062C18.174 13.1974 18.295 13.2348 18.3761 13.2443C18.4415 13.2519 18.5076 13.2519 18.5731 13.2443C18.6542 13.2348 18.7751 13.1974 19.016 13.0062C19.2694 12.8052 19.5734 12.5028 20.0381 12.0381C20.5028 11.5734 20.8052 11.2694 21.0062 11.016C21.1974 10.7751 21.2348 10.6542 21.2443 10.5731C21.2519 10.5076 21.2519 10.4415 21.2443 10.3761C21.2348 10.295 21.1974 10.174 21.0062 9.93309C20.8052 9.67973 20.5028 9.37576 20.0381 8.91103L15.089 3.96189C14.6242 3.49717 14.3203 3.19484 14.0669 2.99382C13.826 2.80265 13.705 2.76521 13.6239 2.75573ZM13.2529 1.26586C13.434 1.24471 13.6169 1.24471 13.7979 1.26586C14.2689 1.32087 14.6501 1.54171 14.9992 1.81876C15.3284 2.07989 15.6932 2.44477 16.1198 2.87143L21.1286 7.88021C21.5552 8.30682 21.9201 8.67166 22.1812 9.00077C22.4583 9.34994 22.6791 9.7311 22.7341 10.2021C22.7553 10.3831 22.7553 10.566 22.7341 10.7471C22.6791 11.218 22.4583 11.5992 22.1812 11.9484C21.9201 12.2775 21.5552 12.6423 21.1286 13.069L21.069 13.1286C20.6423 13.5552 20.2775 13.9201 19.9484 14.1812C19.5992 14.4583 19.218 14.6791 18.7471 14.7341C18.566 14.7553 18.3831 14.7553 18.2021 14.7341C17.7311 14.6791 17.3499 14.4583 17.0008 14.1812C16.6716 13.9201 16.3068 13.5552 15.8802 13.1286L15.2688 12.5172L12.5172 15.2688L13.1286 15.8802C13.5552 16.3068 13.9201 16.6716 14.1812 17.0008C14.4583 17.3499 14.6791 17.7311 14.7341 18.2021C14.7553 18.3831 14.7553 18.566 14.7341 18.7471C14.6791 19.218 14.4583 19.5992 14.1812 19.9484C13.9201 20.2775 13.5552 20.6424 13.1285 21.069L13.069 21.1285C12.6424 21.5552 12.2775 21.9201 11.9484 22.1812C11.5992 22.4583 11.218 22.6791 10.7471 22.7341C10.566 22.7553 10.3831 22.7553 10.2021 22.7341C9.7311 22.6791 9.34994 22.4583 9.00077 22.1812C8.67164 21.9201 8.30679 21.5552 7.88018 21.1286L2.87144 16.1198C2.44478 15.6932 2.0799 15.3284 1.81876 14.9992C1.54171 14.6501 1.32087 14.2689 1.26586 13.7979C1.24471 13.6169 1.24471 13.434 1.26586 13.2529C1.32087 12.782 1.54171 12.4008 1.81876 12.0516C2.07989 11.7225 2.44477 11.3577 2.87142 10.931L2.93105 10.8714C3.35766 10.4448 3.72251 10.0799 4.05163 9.81876C4.4008 9.54171 4.78196 9.32087 5.25294 9.26586C5.43398 9.24471 5.61688 9.24471 5.79793 9.26586C6.2689 9.32087 6.65006 9.54171 6.99923 9.81876C7.32835 10.0799 7.6932 10.4448 8.11981 10.8714L8.35253 11.1041L11.1041 8.35253L10.8714 8.11982C10.4448 7.6932 10.0799 7.32835 9.81876 6.99923C9.54171 6.65006 9.32087 6.2689 9.26586 5.79793C9.24471 5.61688 9.24471 5.43398 9.26586 5.25294C9.32087 4.78196 9.54171 4.4008 9.81876 4.05163C10.0799 3.72251 10.4448 3.35767 10.8714 2.93105L10.931 2.87142C11.3577 2.44477 11.7225 2.07989 12.0516 1.81876C12.4008 1.54171 12.782 1.32087 13.2529 1.26586ZM12.1648 9.41319L9.41319 12.1648L11.4565 14.2082L14.2082 11.4565L12.1648 9.41319ZM17.4885 1.96796C17.7814 1.67507 18.2562 1.67507 18.5491 1.96796L21.6531 5.07197C21.946 5.36487 21.946 5.83974 21.6531 6.13263C21.3602 6.42553 20.8854 6.42553 20.5925 6.13263L17.4885 3.02862C17.1956 2.73573 17.1956 2.26085 17.4885 1.96796ZM5.62391 10.7557C5.55848 10.7481 5.49238 10.7481 5.42695 10.7557C5.34583 10.7652 5.2249 10.8026 4.98395 10.9938C4.73059 11.1948 4.42662 11.4972 3.96189 11.9619C3.49717 12.4266 3.19484 12.7306 2.99382 12.984C2.80265 13.2249 2.76521 13.3458 2.75573 13.4269C2.74809 13.4924 2.74809 13.5585 2.75573 13.6239C2.76521 13.705 2.80265 13.826 2.99382 14.0669C3.19484 14.3203 3.49717 14.6242 3.9619 15.089L8.91103 20.0381C9.37576 20.5028 9.67973 20.8052 9.93309 21.0062C10.174 21.1974 10.295 21.2348 10.3761 21.2443C10.4415 21.2519 10.5076 21.2519 10.5731 21.2443C10.6542 21.2348 10.7751 21.1974 11.016 21.0062C11.2694 20.8052 11.5734 20.5028 12.0381 20.0381C12.5028 19.5734 12.8052 19.2694 13.0062 19.016C13.1974 18.7751 13.2348 18.6542 13.2443 18.5731C13.2519 18.5076 13.2519 18.4415 13.2443 18.3761C13.2348 18.295 13.1974 18.174 13.0062 17.9331C12.8052 17.6797 12.5028 17.3758 12.0381 16.911L7.08897 11.9619C6.62424 11.4972 6.32027 11.1948 6.06691 10.9938C5.82597 10.8026 5.70503 10.7652 5.62391 10.7557ZM1.96723 17.4879C2.26012 17.195 2.735 17.195 3.02789 17.4879L6.1319 20.5919C6.42479 20.8848 6.42479 21.3596 6.1319 21.6525C5.83901 21.9454 5.36413 21.9454 5.07124 21.6525L1.96723 18.5485C1.67434 18.2556 1.67434 17.7808 1.96723 17.4879Z"
      fill="black"
    />
  </Svg>
);
export default SvgDumbbellLargeMinimalistic;
