import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDiploma = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.94513 1.25H16.0549C17.4225 1.24998 18.5248 1.24996 19.3918 1.36652C20.2919 1.48754 21.0497 1.74643 21.6517 2.34835C22.2536 2.95027 22.5125 3.70814 22.6335 4.60825C22.75 5.47522 22.75 6.57754 22.75 7.94513V12.0549C22.75 13.4225 22.75 14.5248 22.6335 15.3918C22.5125 16.2919 22.2536 17.0497 21.6517 17.6516C21.1537 18.1496 20.5469 18.4146 19.8361 18.5593C19.4739 18.6331 19.0724 18.6779 18.6302 18.7053C18.6324 18.7104 18.6347 18.7155 18.6369 18.7207C18.9098 19.361 18.6769 20.1059 18.057 20.4572C17.8707 20.5629 17.6702 20.6009 17.5301 20.6227C17.3836 20.6454 17.2006 20.6633 16.9974 20.6832L16.9776 20.6851C16.8468 20.6979 16.7726 20.7053 16.7175 20.7132C16.6924 20.7168 16.6791 20.7194 16.6739 20.7206C16.6583 20.7267 16.6477 20.7343 16.6409 20.7408C16.6358 20.7457 16.6321 20.7506 16.6294 20.7557C16.6282 20.7613 16.6265 20.7704 16.6244 20.7839C16.6166 20.8342 16.6091 20.903 16.5957 21.0292L16.5935 21.0498C16.5729 21.2432 16.554 21.421 16.5298 21.5641C16.5066 21.702 16.4648 21.9054 16.3486 22.0938C15.9743 22.7006 15.2273 22.8883 14.6126 22.6475C14.4208 22.5723 14.2668 22.4498 14.1557 22.3543C14.0419 22.2565 13.9078 22.1279 13.7577 21.984L12 20.2989L10.2424 21.984C10.0922 22.1279 9.95813 22.2565 9.84431 22.3543C9.73321 22.4498 9.57925 22.5723 9.38737 22.6475C8.77269 22.8883 8.02567 22.7006 7.6514 22.0938C7.53523 21.9054 7.49345 21.702 7.47018 21.5641C7.44605 21.421 7.42711 21.2431 7.40651 21.0497L7.40432 21.0292C7.39088 20.903 7.38336 20.8342 7.37555 20.7839C7.37346 20.7704 7.37178 20.7613 7.37065 20.7557C7.36789 20.7506 7.36415 20.7457 7.35908 20.7408C7.35227 20.7343 7.34174 20.7267 7.32614 20.7206C7.32086 20.7194 7.30762 20.7168 7.28255 20.7132C7.22741 20.7053 7.15319 20.6979 7.02244 20.6851L7.00262 20.6832C6.79938 20.6633 6.61637 20.6454 6.46992 20.6227C6.32977 20.6009 6.12935 20.5629 5.94298 20.4572C5.32307 20.1059 5.09019 19.361 5.36311 18.7207C5.36532 18.7155 5.36757 18.7104 5.36985 18.7052C4.97118 18.6805 4.60714 18.6418 4.27635 18.5811C3.51836 18.4418 2.87328 18.1766 2.34835 17.6517C1.74643 17.0497 1.48754 16.2919 1.36652 15.3918C1.24996 14.5248 1.24998 13.4225 1.25 12.0549V7.94513C1.24998 6.57754 1.24996 5.47522 1.36652 4.60825C1.48754 3.70814 1.74643 2.95027 2.34835 2.34835C2.95027 1.74643 3.70814 1.48754 4.60825 1.36652C5.47522 1.24996 6.57754 1.24998 7.94513 1.25ZM6.7329 17.2462L7.5487 16.4641L8.25788 15.7549C8.38413 13.7981 10.0113 12.25 12 12.25C13.9887 12.25 15.6159 13.7981 15.7421 15.7549L16.4513 16.4641L17.3122 17.2894L17.3117 17.2458C18.2984 17.2353 19.0017 17.1984 19.5368 17.0895C20.0513 16.9847 20.359 16.8229 20.591 16.591C20.8678 16.3142 21.0482 15.9257 21.1469 15.1919C21.2484 14.4365 21.25 13.4354 21.25 12V8C21.25 6.56458 21.2484 5.56347 21.1469 4.80812C21.0482 4.07435 20.8678 3.68577 20.591 3.40901C20.3142 3.13225 19.9257 2.9518 19.1919 2.85315C18.4365 2.75159 17.4354 2.75 16 2.75H8C6.56458 2.75 5.56347 2.75159 4.80812 2.85315C4.07435 2.9518 3.68577 3.13225 3.40901 3.40901C3.13225 3.68577 2.9518 4.07435 2.85315 4.80812C2.75159 5.56347 2.75 6.56459 2.75 8V12C2.75 13.4354 2.75159 14.4365 2.85315 15.1919C2.9518 15.9257 3.13225 16.3142 3.40901 16.591C3.65246 16.8344 3.98054 17.0016 4.54735 17.1057C5.08573 17.2046 5.78062 17.2368 6.7329 17.2462ZM15.4159 17.5495C15.0094 18.4444 14.2614 19.1513 13.3384 19.5041L14.7819 20.888C14.9099 21.0107 15.0009 21.0977 15.0719 21.1622C15.081 21.0864 15.0912 20.9919 15.1041 20.8702C15.1059 20.8537 15.1076 20.8368 15.1094 20.8197C15.1285 20.636 15.1511 20.4185 15.2269 20.2221C15.3949 19.7871 15.7449 19.4585 16.1765 19.3054C16.3708 19.2364 16.5859 19.2158 16.7795 19.1973C16.7969 19.1956 16.8143 19.1939 16.8314 19.1922C16.9388 19.1817 17.0267 19.1731 17.1 19.1652C17.043 19.1094 16.973 19.0423 16.8857 18.9586L15.4159 17.5495ZM12.0301 18.2498L12 18.2209L11.9699 18.2498C10.7411 18.2337 9.75 17.2326 9.75 16C9.75 14.7574 10.7574 13.75 12 13.75C13.2426 13.75 14.25 14.7574 14.25 16C14.25 17.2326 13.2589 18.2337 12.0301 18.2498ZM10.6616 19.5041L9.21809 20.888C9.09009 21.0107 8.99913 21.0977 8.92814 21.1622C8.91902 21.0864 8.90885 20.9919 8.89588 20.8702C8.89412 20.8537 8.89237 20.8368 8.89059 20.8197C8.87152 20.636 8.84895 20.4185 8.7731 20.2221C8.60513 19.7871 8.25507 19.4585 7.82352 19.3054C7.62918 19.2364 7.41411 19.2158 7.22052 19.1973C7.20304 19.1956 7.18573 19.1939 7.16863 19.1922C7.0612 19.1817 6.97333 19.1731 6.90005 19.1652C6.95701 19.1094 7.02695 19.0423 7.11427 18.9586L8.58407 17.5495C8.99065 18.4444 9.73856 19.1513 10.6616 19.5041ZM8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H9C8.58579 6.75 8.25 6.41421 8.25 6ZM6.25 9.5C6.25 9.08579 6.58579 8.75 7 8.75H17C17.4142 8.75 17.75 9.08579 17.75 9.5C17.75 9.91421 17.4142 10.25 17 10.25H7C6.58579 10.25 6.25 9.91421 6.25 9.5Z"
      fill="black"
    />
  </Svg>
);
export default SvgDiploma;
