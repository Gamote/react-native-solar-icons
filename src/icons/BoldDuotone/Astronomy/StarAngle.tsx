import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStarAngle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G opacity={0.5}>
      <Path
        d="M10.9176 6.57455C10.7621 5.90615 10.6304 5.34001 10.4875 4.89551L17.1212 6.81979C17.1651 6.83251 17.279 6.88283 17.4367 7.296C17.5907 7.69979 17.73 8.29348 17.9304 9.15471L18.0504 9.67058C18.0769 9.78533 18.1022 9.89478 18.1293 9.99855L12.1172 8.33344L11.8136 8.16052C11.3841 7.9159 11.3051 7.85903 11.2496 7.78149C11.1877 7.69513 11.1504 7.57501 11.0286 7.05162L10.9176 6.57455Z"
        fill="black"
      />
      <Path
        d="M14.3426 9.98745L19.3504 11.3744L19.654 11.5473C20.3606 11.9498 20.8368 12.2227 21.147 12.4714C21.4441 12.7094 21.4952 12.8515 21.4997 12.9725C21.5043 13.0998 21.4579 13.2596 21.1723 13.546C20.8785 13.8407 20.4209 14.1823 19.7488 14.6817L19.3498 14.9781C19.1612 15.1179 18.9905 15.2444 18.8468 15.386L12.0421 13.4121L12.4008 13.1456C13.0314 12.6771 13.5501 12.2917 13.9028 11.938C14.27 11.5697 14.5409 11.1546 14.5214 10.6217C14.5126 10.3825 14.4474 10.1737 14.3426 9.98745Z"
        fill="black"
      />
      <Path
        d="M11.3743 14.2596L18.3867 16.2937C18.3575 16.4351 18.3343 16.587 18.3092 16.7512L18.2282 17.2778C18.151 17.7786 18.0372 18.2246 17.9163 18.6025C17.7033 19.2683 17.6487 19.3608 17.4887 19.4527C17.4199 19.4922 17.3551 19.5095 17.2195 19.4942C17.0535 19.4755 16.8408 19.4156 16.4777 19.3103L10.6832 17.6294C10.7527 17.4828 10.8078 17.326 10.8545 17.1663C10.9996 16.6694 11.1041 15.9909 11.233 15.1542L11.3081 14.666C11.3349 14.4924 11.356 14.3612 11.3743 14.2596Z"
        fill="black"
      />
    </G>
    <Path
      d="M7.4055 6.07272C7.97799 5.434 8.36998 4.99864 8.68628 4.73536C9.00659 4.46874 9.1112 4.49617 9.14363 4.50557C9.18748 4.51829 9.30143 4.56862 9.45908 4.98179C9.61316 5.38557 9.75246 5.97927 9.95283 6.84049L10.0728 7.35637C10.166 7.7593 10.2435 8.09406 10.4367 8.3638C10.6359 8.6418 10.9251 8.80592 11.2548 8.99306L11.3187 9.02938L11.6764 9.23309C12.383 9.63554 12.8592 9.90851 13.1695 10.1571C13.4665 10.3952 13.5176 10.5373 13.5221 10.6583C13.5268 10.7856 13.4803 10.9454 13.1948 11.2318C12.9009 11.5265 12.4433 11.8681 11.7713 12.3675L11.3723 12.6639C11.0547 12.8992 10.7878 13.097 10.6157 13.3922C10.4473 13.6808 10.3956 14.0187 10.3316 14.4371L10.2506 14.9635C10.1144 15.8478 10.019 16.4601 9.89465 16.8858C9.82467 17.1254 9.75808 17.2591 9.70188 17.3354C9.59352 17.2951 9.44918 17.2363 9.27882 17.1547C8.87365 16.9607 8.32471 16.6391 7.76249 16.1334L7.44998 15.8523L7.43626 15.84C7.27638 15.6961 7.13423 15.5683 7.00554 15.4707C6.86636 15.3652 6.71622 15.2738 6.53248 15.2205C6.20763 15.1263 5.87317 15.189 5.51253 15.2567L5.43465 15.2713L5.03418 15.3456C4.24147 15.4926 3.71013 15.5895 3.32897 15.5966C2.96293 15.6034 2.88598 15.5245 2.84482 15.4671C2.78731 15.3868 2.73367 15.2313 2.82299 14.7933C2.91191 14.3572 3.11201 13.7757 3.40245 12.9362L3.57459 12.4389C3.71334 12.0391 3.8243 11.7194 3.81192 11.3819C3.79946 11.0421 3.66391 10.7358 3.49658 10.3576L3.28893 9.88721C2.93825 9.09255 2.69768 8.54458 2.57794 8.12555C2.45942 7.71083 2.49628 7.5428 2.55589 7.44061C2.60536 7.35582 2.69495 7.26553 3.05581 7.22096C3.43555 7.17406 3.97074 7.19516 4.77002 7.22917L5.17385 7.24635L5.25006 7.24969C5.6169 7.26601 5.95277 7.28095 6.26458 7.14318C6.56789 7.00915 6.79724 6.75244 7.06038 6.4579L7.11519 6.39662L7.4055 6.07272Z"
      fill="black"
    />
  </Svg>
);
export default SvgStarAngle;
