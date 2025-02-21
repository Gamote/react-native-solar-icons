import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWallpaper = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M15.72 7.349a1.86 1.86 0 1 1-3.72 0 1.86 1.86 0 0 1 3.72 0M22 7.754c0-.374 0-.642-.037-.878a3.02 3.02 0 0 0-1.315-2.047c-.078-.052-.177.016-.164.109.1.744.117 1.627.12 2.59v8.943000000000001c-.003.964-.02 1.847-.12 2.591-.013.093.086.16.164.109a3.02 3.02 0 0 0 1.315-2.047c.037-.236.037-.504.037-.878V7.754M3.395 7.814l.002-.465c.004-.894.025-1.714.12-2.411.012-.093-.087-.16-.165-.109a3.02 3.02 0 0 0-1.315 2.047C2 7.112 2 7.38 2 7.754v8.492c0 .374 0 .642.037.878a3.02 3.02 0 0 0 1.315 2.047c.078.052.177-.016.164-.109-.094-.697-.115-1.517-.12-2.41V7.813"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M16.085 2.108C15.28 2 14.253 2 12.981 2H11.02c-1.272 0-2.298 0-3.104.108-.838.113-1.543.354-2.103.914s-.8 1.265-.913 2.102c-.108.806-.108 1.832-.108 3.104v7.544c0 1.272 0 2.298.108 3.104.113.837.354 1.542.913 2.102.56.56 1.265.801 2.103.914C8.72 22 9.747 22 11.019 22h1.962c1.272 0 2.298 0 3.104-.108.838-.113 1.543-.354 2.103-.914s.8-1.265.913-2.102c.108-.806.108-1.832.108-3.104V8.228c0-1.272 0-2.298-.108-3.104-.113-.837-.354-1.542-.913-2.102-.56-.56-1.265-.801-2.103-.914m.723 14.522.987 1.04c.018-.536.019-1.175.019-1.95V8.28c0-1.336-.002-2.267-.096-2.97-.092-.683-.26-1.044-.517-1.302-.258-.257-.619-.425-1.302-.517-.702-.094-1.633-.096-2.969-.096h-1.86c-1.335 0-2.267.002-2.97.096-.682.092-1.043.26-1.3.517-.258.258-.426.62-.518 1.302-.094.703-.096 1.634-.096 2.97v4.624l.003-.003c.917-.941 2.336-.876 3.184.118l2.94 3.448c.236.276.545.289.783.093l.204-.169c1.076-.886 2.552-.77 3.508.24"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgWallpaper;
