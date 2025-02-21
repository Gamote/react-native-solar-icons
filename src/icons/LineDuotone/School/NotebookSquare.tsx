import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgNotebookSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16.5568 6.0217L16.52 5.2726L16.52 5.2726L16.5568 6.0217ZM14.7 6.27079L14.4997 5.54804L14.4997 5.54804L14.7 6.27079ZM12.5219 7.27042L12.1463 6.62125L12.1463 6.62125L12.5219 7.27042ZM7.48717 6.06091L7.4324 6.80891L7.48717 6.06091ZM9 6.27079L8.82199 6.99936L8.82199 6.99936L9 6.27079ZM11.4646 7.29318L11.116 7.95725L11.116 7.95725L11.4646 7.29318ZM12.5074 15.7223L12.857 16.3858L12.857 16.3858L12.5074 15.7223ZM15 14.6852L14.822 13.9566L14.822 13.9566L15 14.6852ZM16.4901 14.477L16.5459 15.2249L16.5459 15.2249L16.4901 14.477ZM11.4926 15.7223L11.143 16.3858L11.143 16.3858L11.4926 15.7223ZM9 14.6852L9.17801 13.9566L9.17801 13.9566L9 14.6852ZM7.50991 14.477L7.45414 15.2249L7.45414 15.2249L7.50991 14.477ZM6.75 12.9108V7.49649H5.25V12.9108H6.75ZM18.75 12.9108V7.45154H17.25V12.9108H18.75ZM16.52 5.2726C15.8904 5.30352 15.1227 5.37534 14.4997 5.54804L14.9003 6.99353C15.3582 6.86663 15.9907 6.80041 16.5935 6.7708L16.52 5.2726ZM14.4997 5.54804C13.6675 5.77873 12.7018 6.29984 12.1463 6.62125L12.8975 7.91959C13.4487 7.6007 14.2696 7.16839 14.9003 6.99353L14.4997 5.54804ZM7.4324 6.80891C7.9319 6.84548 8.43898 6.90577 8.82199 6.99936L9.17801 5.54222C8.67286 5.41879 8.06744 5.35139 7.54194 5.31291L7.4324 6.80891ZM8.82199 6.99936C9.54804 7.17676 10.5035 7.63573 11.116 7.95725L11.8132 6.6291C11.1985 6.30646 10.0998 5.76744 9.17801 5.54222L8.82199 6.99936ZM12.857 16.3858C13.4666 16.0647 14.4402 15.594 15.178 15.4138L14.822 13.9566C13.8867 14.1851 12.7683 14.7371 12.1578 15.0588L12.857 16.3858ZM15.178 15.4138C15.5551 15.3216 16.0529 15.2617 16.5459 15.2249L16.4343 13.7291C15.9149 13.7678 15.3199 13.835 14.822 13.9566L15.178 15.4138ZM11.8422 15.0588C11.2317 14.7371 10.1133 14.1851 9.17801 13.9566L8.82199 15.4138C9.55979 15.594 10.5334 16.0647 11.143 16.3858L11.8422 15.0588ZM9.17801 13.9566C8.68009 13.835 8.08508 13.7678 7.56568 13.7291L7.45414 15.2249C7.94707 15.2617 8.44487 15.3216 8.82199 15.4138L9.17801 13.9566ZM17.25 12.9108C17.25 13.3157 16.9097 13.6936 16.4343 13.7291L16.5459 15.2249C17.7316 15.1365 18.75 14.1716 18.75 12.9108H17.25ZM18.75 7.45154C18.75 6.25695 17.7923 5.21011 16.52 5.2726L16.5935 6.7708C16.9314 6.7542 17.25 7.03391 17.25 7.45154H18.75ZM5.25 12.9108C5.25 14.1716 6.26836 15.1365 7.45414 15.2249L7.56568 13.7291C7.09031 13.6936 6.75 13.3157 6.75 12.9108H5.25ZM12.1578 15.0588C12.0598 15.1104 11.9402 15.1104 11.8422 15.0588L11.143 16.3858C11.6786 16.6681 12.3214 16.6681 12.857 16.3858L12.1578 15.0588ZM12.1463 6.62125C12.0434 6.68078 11.9157 6.6829 11.8132 6.6291L11.116 7.95725C11.6772 8.2518 12.3517 8.23541 12.8975 7.91959L12.1463 6.62125ZM6.75 7.49649C6.75 7.06974 7.08277 6.78331 7.4324 6.80891L7.54194 5.31291C6.248 5.21817 5.25 6.27527 5.25 7.49649H6.75Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12 7.58545V15.9998"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M2 9C2 5.22876 2 3.34315 3.17157 2.17157C4.34315 1 6.22876 1 10 1H14C17.7712 1 19.6569 1 20.8284 2.17157C22 3.34315 22 5.22876 22 9V13C22 16.7712 22 18.6569 20.8284 19.8284C19.6569 21 17.7712 21 14 21H10C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V9Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgNotebookSquare;
