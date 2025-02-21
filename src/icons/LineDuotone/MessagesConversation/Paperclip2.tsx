import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPaperclip2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8.10696 17.4174L15.4868 10.3512C15.9349 9.92215 16.1589 9.70764 16.276 9.47485C16.4857 9.0579 16.4857 8.5722 16.276 8.15525C16.1589 7.92246 15.9349 7.70794 15.4868 7.27892M3.50793 10.1464L9.49736 4.41148C10.5417 3.4115 11.0639 2.9115 11.6072 2.6112C13.0813 1.79627 14.8976 1.79627 16.3717 2.6112C16.9149 2.9115 17.4371 3.4115 18.4815 4.41148"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M18.4815 13.0144L17.9628 12.4727L18.4815 13.0144ZM11.0482 20.1318L10.5295 19.5901L10.5295 19.5901L11.0482 20.1318ZM4.95178 14.2945L4.43308 13.7528L4.95178 14.2945ZM12.2781 7.27954L11.7594 6.73783L11.7594 6.73783L12.2781 7.27954ZM14.5715 6.5239L14.2575 7.20498L14.2575 7.20499L14.5715 6.5239ZM13.1934 6.5239L12.8793 5.84282L12.8793 5.84282L13.1934 6.5239ZM4.95178 20.1318L4.43308 20.6735L4.95178 20.1318ZM3.11183 17.9421L3.82747 17.7176L3.82747 17.7176L3.11183 17.9421ZM3.11183 16.4842L2.3962 16.2598L2.3962 16.2598L3.11183 16.4842ZM8.76124 21.8935L8.96849 22.6143L8.96849 22.6143L8.76124 21.8935ZM7.2387 21.8935L7.44595 21.1727L7.44595 21.1727L7.2387 21.8935ZM19.0002 3.87039C18.701 3.58393 18.2262 3.59423 17.9398 3.89342C17.6533 4.1926 17.6636 4.66736 17.9628 4.95383L19.0002 3.87039ZM20.3617 6.43223L21.0039 6.04496L21.0039 6.04495L20.3617 6.43223ZM20.3617 10.9943L21.0039 11.3816L21.0039 11.3816L20.3617 10.9943ZM17.9628 12.4727L10.5295 19.5901L11.5669 20.6735L19.0002 13.5561L17.9628 12.4727ZM5.47047 14.8362L12.7968 7.82126L11.7594 6.73783L4.43308 13.7528L5.47047 14.8362ZM16.0055 6.73783C15.6012 6.35079 15.2712 6.02064 14.8856 5.84282L14.2575 7.20499C14.3581 7.25138 14.4761 7.35025 14.9681 7.82126L16.0055 6.73783ZM12.7968 7.82126C13.2887 7.35025 13.4068 7.25138 13.5074 7.20498L12.8793 5.84282C12.4937 6.02064 12.1637 6.35079 11.7594 6.73783L12.7968 7.82126ZM14.8856 5.84282C14.2508 5.55014 13.5141 5.55014 12.8793 5.84282L13.5074 7.20498C13.7436 7.09608 14.0213 7.09608 14.2575 7.20498L14.8856 5.84282ZM5.47047 19.5901C4.91163 19.055 4.52727 18.6861 4.2548 18.3764C3.98794 18.0731 3.87862 17.8808 3.82747 17.7176L2.3962 18.1665C2.53687 18.615 2.79815 18.9916 3.12862 19.3672C3.45347 19.7364 3.89317 20.1566 4.43308 20.6735L5.47047 19.5901ZM4.43308 13.7528C3.89317 14.2698 3.45347 14.6899 3.12862 15.0591C2.79815 15.4347 2.53687 15.8113 2.3962 16.2598L3.82747 16.7087C3.87862 16.5456 3.98794 16.3533 4.2548 16.0499C4.52727 15.7402 4.91163 15.3713 5.47047 14.8362L4.43308 13.7528ZM3.82747 17.7176C3.72418 17.3883 3.72418 17.038 3.82747 16.7087L2.3962 16.2598C2.20127 16.8814 2.20127 17.5449 2.3962 18.1665L3.82747 17.7176ZM10.5295 19.5901C9.97082 20.125 9.58528 20.4933 9.26135 20.7545C8.94539 21.0094 8.7384 21.1197 8.55399 21.1727L8.96849 22.6143C9.42288 22.4837 9.80998 22.2392 10.2031 21.9221C10.5882 21.6114 11.0268 21.1907 11.5669 20.6735L10.5295 19.5901ZM4.43308 20.6735C4.97318 21.1907 5.41171 21.6114 5.79685 21.9221C6.18996 22.2392 6.57706 22.4837 7.03145 22.6143L7.44595 21.1727C7.26154 21.1197 7.05455 21.0094 6.73859 20.7545C6.41466 20.4933 6.02912 20.125 5.47047 19.5901L4.43308 20.6735ZM8.55399 21.1727C8.19285 21.2766 7.80709 21.2766 7.44595 21.1727L7.03145 22.6143C7.66344 22.796 8.3365 22.7961 8.96849 22.6143L8.55399 21.1727ZM17.9628 4.95383C19.0429 5.98805 19.4703 6.40647 19.7194 6.81951L21.0039 6.04495C20.6257 5.41771 20.0088 4.83615 19.0002 3.87039L17.9628 4.95383ZM19.0002 13.5561C20.0088 12.5904 20.6257 12.0088 21.0039 11.3816L19.7194 10.607C19.4703 11.0201 19.0429 11.4385 17.9628 12.4727L19.0002 13.5561ZM19.7194 6.81951C20.4269 7.99281 20.4269 9.43372 19.7194 10.607L21.0039 11.3816C21.9987 9.73185 21.9987 7.69467 21.0039 6.04496L19.7194 6.81951Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgPaperclip2;
