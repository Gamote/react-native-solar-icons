import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRunning = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={18.5} cy={4.5} r={2.5} stroke="black" strokeWidth={1.5} />
    <Path
      d="M9 17L7.99923 18.2009C7.262 19.0856 6.89338 19.5279 6.38945 19.764C5.88552 20 5.30973 20 4.15813 20H3"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M5.80619 9.47281C6.16633 9.26818 6.2924 8.81035 6.08777 8.45021C5.88315 8.09007 5.42531 7.964 5.06517 8.16863L5.80619 9.47281ZM3.62949 8.98435C3.26935 9.18898 3.14328 9.64681 3.34791 10.007C3.55253 10.3671 4.01037 10.4932 4.37051 10.2885L3.62949 8.98435ZM15.7502 10.1255L15.1262 10.5415L15.1262 10.5415L15.7502 10.1255ZM15.8125 10.2189L16.4366 9.8029L16.4366 9.8029L15.8125 10.2189ZM10.9688 6.65377L11.0462 5.90778L11.0462 5.90778L10.9688 6.65377ZM10.7398 6.63638L10.7065 7.38565L10.7065 7.38565L10.7398 6.63638ZM10.1548 6.67368L10.0522 5.93073L10.0522 5.93073L10.1548 6.67368ZM21 12.7501C21.4142 12.7501 21.75 12.4143 21.75 12.0001C21.75 11.5859 21.4142 11.2501 21 11.2501V12.7501ZM8.73808 6.27298C8.34994 6.41764 8.15257 6.84955 8.29722 7.23768C8.44188 7.62582 8.87379 7.82319 9.26192 7.67854L8.73808 6.27298ZM5.06517 8.16863L3.62949 8.98435L4.37051 10.2885L5.80619 9.47281L5.06517 8.16863ZM15.1262 10.5415L15.1885 10.635L16.4366 9.8029L16.3742 9.70943L15.1262 10.5415ZM11.0462 5.90778C10.9438 5.89715 10.853 5.89066 10.773 5.88712L10.7065 7.38565C10.7559 7.38783 10.8172 7.39207 10.8914 7.39977L11.0462 5.90778ZM19.1407 12.7501H21V11.2501H19.1407V12.7501ZM10.773 5.88712C10.5099 5.87546 10.2617 5.9018 10.0522 5.93073L10.2574 7.41663C10.4355 7.39204 10.5786 7.37998 10.7065 7.38565L10.773 5.88712ZM15.1885 10.635C16.0695 11.9564 17.5525 12.7501 19.1407 12.7501V11.2501C18.0541 11.2501 17.0393 10.707 16.4366 9.8029L15.1885 10.635ZM16.3742 9.70943C15.1968 7.94332 13.4289 6.15509 11.0462 5.90778L10.8914 7.39977C12.5939 7.57648 14.0254 8.89036 15.1262 10.5415L16.3742 9.70943ZM9.26192 7.67854C9.62279 7.54404 9.94386 7.45992 10.2574 7.41663L10.0522 5.93073C9.61073 5.99169 9.18212 6.10749 8.73808 6.27298L9.26192 7.67854Z"
      fill="black"
    />
    <Path
      d="M14.0001 8.5L11.7793 11.2756C10.9429 12.321 10.5246 12.8438 10.4579 13.413C10.4204 13.733 10.4608 14.0573 10.5756 14.3584C10.7798 14.8939 11.3134 15.2981 12.3807 16.1066C13.1936 16.7225 13.6 17.0304 13.8755 17.4329C14.0326 17.6625 14.157 17.9129 14.2452 18.1767C14.3997 18.6394 14.3997 19.1493 14.3997 20.1692V21.9998"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgRunning;
