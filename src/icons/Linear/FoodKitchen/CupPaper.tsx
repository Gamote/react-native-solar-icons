import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCupPaper = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20.1728 5.86056L20.8843 5.62316L20.8843 5.62316L20.1728 5.86056ZM20.2087 5.96791L19.4972 6.20531L19.4972 6.20531L20.2087 5.96791ZM3.79133 5.96791L4.50277 6.20531L4.50277 6.20531L3.79133 5.96791ZM3.82715 5.86056L3.11572 5.62316L3.11572 5.62316L3.82715 5.86056ZM6.99921 18.5795L6.25712 18.6881L6.99921 18.5795ZM17.0008 18.5794L17.7429 18.6881L17.7429 18.6881L17.0008 18.5794ZM3.48157 7.76195L4.16132 7.44501L4.16132 7.44501L3.48157 7.76195ZM3.70016 8.06533L4.21596 7.52086L4.21596 7.52086L3.70016 8.06533ZM20.5184 7.76195L21.1982 8.0789L21.1982 8.07889L20.5184 7.76195ZM20.2998 8.06533L19.784 7.52085L19.784 7.52086L20.2998 8.06533ZM18.2942 2.44432L18.687 1.8054L18.687 1.8054L18.2942 2.44432ZM18.65 2.70069L18.1683 3.27551L18.1683 3.27551L18.65 2.70069ZM7.92073 21.5132L7.43032 22.0806L7.43032 22.0806L7.92073 21.5132ZM5.70579 2.44432L5.313 1.8054L5.313 1.8054L5.70579 2.44432ZM5.34998 2.70069L5.83172 3.27551L5.83172 3.27551L5.34998 2.70069ZM9.18521 2.75H14.8148V1.25H9.18521V2.75ZM19.4614 6.09796L19.4972 6.20531L20.9201 5.73052L20.8843 5.62316L19.4614 6.09796ZM4.50277 6.20531L4.53859 6.09796L3.11572 5.62316L3.0799 5.73051L4.50277 6.20531ZM10.957 22.75H13.043V21.25H10.957V22.75ZM18.5 7.58937H5.5V9.08937H18.5V7.58937ZM4.75791 8.44801L6.25712 18.6881L7.7413 18.4708L6.24209 8.23072L4.75791 8.44801ZM17.7429 18.6881L19.2421 8.44801L17.7579 8.23072L16.2587 18.4708L17.7429 18.6881ZM13.043 22.75C13.8478 22.75 14.5216 22.7514 15.062 22.6833C15.6233 22.6125 16.1336 22.4575 16.5697 22.0806L15.5889 20.9457C15.4616 21.0557 15.2782 21.1441 14.8743 21.195C14.4495 21.2486 13.8868 21.25 13.043 21.25V22.75ZM16.2587 18.4708C16.1365 19.3057 16.0536 19.8623 15.939 20.2749C15.8301 20.6671 15.7161 20.8358 15.5889 20.9457L16.5697 22.0806C17.0058 21.7038 17.233 21.2212 17.3844 20.6761C17.5301 20.1513 17.6263 19.4844 17.7429 18.6881L16.2587 18.4708ZM3.0799 5.73051C2.92657 6.19001 2.78906 6.59809 2.71927 6.93604C2.64769 7.28264 2.61739 7.68331 2.80183 8.07889L4.16132 7.44501C4.17737 7.47945 4.14257 7.46074 4.18827 7.23942C4.23577 7.00945 4.33734 6.70108 4.50277 6.20531L3.0799 5.73051ZM5.5 7.58937C4.97736 7.58937 4.6527 7.58811 4.41952 7.56036C4.19511 7.53366 4.18837 7.49472 4.21596 7.52086L3.18436 8.6098C3.50122 8.90997 3.89088 9.00805 4.24231 9.04986C4.58497 9.09063 5.01559 9.08937 5.5 9.08937V7.58937ZM2.80183 8.07889C2.89482 8.27834 3.0246 8.45845 3.18436 8.6098L4.21596 7.52086C4.19314 7.49924 4.1746 7.47351 4.16132 7.44501L2.80183 8.07889ZM19.4972 6.20531C19.6627 6.70108 19.7642 7.00945 19.8117 7.23942C19.8574 7.46074 19.8226 7.47946 19.8387 7.44501L21.1982 8.07889C21.3826 7.68331 21.3523 7.28264 21.2807 6.93604C21.2109 6.5981 21.0734 6.19001 20.9201 5.73051L19.4972 6.20531ZM18.5 9.08937C18.9844 9.08937 19.415 9.09063 19.7577 9.04986C20.1091 9.00805 20.4988 8.90997 20.8156 8.6098L19.784 7.52086C19.8116 7.49472 19.8049 7.53366 19.5805 7.56036C19.3473 7.58811 19.0226 7.58937 18.5 7.58937V9.08937ZM19.8387 7.44501C19.8254 7.47351 19.8069 7.49924 19.784 7.52085L20.8156 8.6098C20.9754 8.45845 21.1052 8.27833 21.1982 8.0789L19.8387 7.44501ZM14.8148 2.75C15.7488 2.75 16.3938 2.75089 16.8973 2.80174C17.3849 2.851 17.6719 2.9421 17.9014 3.08324L18.687 1.8054C18.1938 1.50222 17.66 1.37116 17.048 1.30934C16.4519 1.24911 15.7185 1.25 14.8148 1.25V2.75ZM20.8843 5.62316C20.5982 4.76589 20.3669 4.06998 20.1211 3.52355C19.8688 2.96264 19.5755 2.4977 19.1318 2.12586L18.1683 3.27551C18.3748 3.44861 18.5521 3.69197 18.7532 4.13895C18.9608 4.6004 19.1658 5.21196 19.4614 6.09796L20.8843 5.62316ZM17.9014 3.08324C17.995 3.14073 18.0841 3.205 18.1683 3.27551L19.1318 2.12586C18.9915 2.00833 18.8429 1.90122 18.687 1.8054L17.9014 3.08324ZM10.957 21.25C10.1132 21.25 9.55049 21.2486 9.12569 21.195C8.72181 21.1441 8.53836 21.0557 8.41115 20.9457L7.43032 22.0806C7.86638 22.4575 8.37675 22.6125 8.93802 22.6833C9.47837 22.7514 10.1522 22.75 10.957 22.75V21.25ZM6.25712 18.6881C6.37371 19.4844 6.46994 20.1513 6.61564 20.6761C6.76698 21.2212 6.99425 21.7038 7.43032 22.0806L8.41115 20.9457C8.28394 20.8358 8.16987 20.6671 8.06097 20.2749C7.94643 19.8623 7.86354 19.3057 7.7413 18.4708L6.25712 18.6881ZM9.18521 1.25C8.28146 1.25 7.54813 1.24911 6.95198 1.30934C6.34004 1.37116 5.80617 1.50222 5.313 1.8054L6.09857 3.08324C6.32815 2.9421 6.6151 2.851 7.10274 2.80174C7.60617 2.75089 8.25118 2.75 9.18521 2.75V1.25ZM4.53859 6.09796C4.83424 5.21195 5.03925 4.60039 5.24684 4.13895C5.44793 3.69197 5.62517 3.44861 5.83172 3.27551L4.86824 2.12586C4.42454 2.4977 4.13123 2.96264 3.8789 3.52354C3.63307 4.06997 3.40179 4.76588 3.11572 5.62316L4.53859 6.09796ZM5.313 1.8054C5.15713 1.90122 5.00848 2.00833 4.86824 2.12586L5.83172 3.27551C5.91586 3.205 6.00505 3.14073 6.09857 3.08324L5.313 1.8054Z"
      fill="black"
    />
    <Path
      d="M6.5 12H17.5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path d="M7 17H17" stroke="black" strokeWidth={1.5} strokeLinecap="round" />
  </Svg>
);
export default SvgCupPaper;
