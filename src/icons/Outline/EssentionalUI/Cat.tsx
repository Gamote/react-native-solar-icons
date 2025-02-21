import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCat = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0195 14.9374C11.7283 14.9374 11.4306 14.9818 11.1783 15.0796C11.0545 15.1275 10.9031 15.2031 10.7698 15.3252C10.6359 15.4479 10.463 15.6749 10.463 15.9999C10.463 16.3249 10.6359 16.5519 10.7698 16.6745C10.9031 16.7967 11.0545 16.8722 11.1783 16.9202C11.4306 17.018 11.7283 17.0624 12.0195 17.0624C12.3107 17.0624 12.6084 17.018 12.8607 16.9202C12.9845 16.8722 13.1359 16.7967 13.2692 16.6745C13.4031 16.5519 13.576 16.3249 13.576 15.9999C13.576 15.6749 13.4031 15.4479 13.2692 15.3252C13.1359 15.2031 12.9845 15.1275 12.8607 15.0796C12.6084 14.9818 12.3107 14.9374 12.0195 14.9374Z"
      fill={props.primaryColor}
    />
    <Path
      d="M14.0364 12.6464C14.2014 12.38 14.5273 12.0625 15.0161 12.0625C15.505 12.0625 15.8309 12.38 15.9959 12.6464C16.168 12.9243 16.25 13.2612 16.25 13.5938C16.25 13.9263 16.168 14.2632 15.9959 14.5411C15.8309 14.8075 15.505 15.125 15.0161 15.125C14.5273 15.125 14.2014 14.8075 14.0364 14.5411C13.8642 14.2632 13.7823 13.9263 13.7823 13.5938C13.7823 13.2612 13.8642 12.9243 14.0364 12.6464Z"
      fill={props.primaryColor}
    />
    <Path
      d="M9.01622 12.0625C8.52738 12.0625 8.20149 12.38 8.03646 12.6464C7.86433 12.9243 7.78235 13.2612 7.78235 13.5938C7.78235 13.9263 7.86433 14.2632 8.03646 14.5411C8.20149 14.8075 8.52738 15.125 9.01622 15.125C9.50506 15.125 9.83095 14.8075 9.99598 14.5411C10.1681 14.2632 10.2501 13.9263 10.2501 13.5938C10.2501 13.2612 10.1681 12.9243 9.99598 12.6464C9.83095 12.38 9.50506 12.0625 9.01622 12.0625Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.09473 4.25C5.48136 4.25 4.7745 4.42871 4.2087 4.91616C3.62213 5.4215 3.26992 6.18781 3.26992 7.1875V9.0625L3.26993 9.06545C3.27108 9.35941 3.32098 9.94757 3.48868 10.4392C3.54353 10.6001 3.63117 10.8134 3.77752 11.0058C3.49352 11.5688 3.35891 12.1495 3.29774 12.7095C3.24668 13.1771 3.24599 13.6679 3.25412 14.1211C2.59308 14.3507 1.90865 14.6349 1.59307 14.8387C1.24512 15.0634 1.14522 15.5277 1.36994 15.8756C1.59466 16.2236 2.05891 16.3235 2.40686 16.0988C2.52328 16.0236 2.86674 15.8664 3.31855 15.6939C3.38742 16.173 3.52703 16.6095 3.72198 17.0063C3.56609 17.1035 3.42835 17.1935 3.31877 17.2652C3.27682 17.2926 3.239 17.3173 3.20587 17.3387C2.85791 17.5634 2.75801 18.0277 2.98273 18.3756C3.20745 18.7236 3.6717 18.8235 4.01965 18.5988C4.06078 18.5722 4.10461 18.5436 4.15086 18.5134C4.28203 18.4278 4.43275 18.3294 4.59689 18.2288C5.18641 18.8313 5.91853 19.2964 6.67904 19.6462C8.45986 20.4654 10.5689 20.75 12 20.75C13.431 20.75 15.5401 20.4654 17.3209 19.6462C18.0814 19.2964 18.8135 18.8313 19.403 18.2288C19.5671 18.3294 19.7178 18.4278 19.849 18.5134C19.8953 18.5436 19.9391 18.5722 19.9802 18.5988C20.3282 18.8235 20.7924 18.7236 21.0171 18.3756C21.2419 18.0277 21.1419 17.5634 20.794 17.3387C20.7609 17.3173 20.723 17.2926 20.6811 17.2652C20.5715 17.1935 20.4338 17.1035 20.2779 17.0063C20.4729 16.6095 20.6125 16.173 20.6814 15.6938C21.1334 15.8663 21.477 16.0236 21.5934 16.0988C21.9414 16.3235 22.4057 16.2236 22.6304 15.8756C22.8551 15.5277 22.7552 15.0634 22.4072 14.8387C22.0916 14.6349 21.407 14.3506 20.7458 14.121C20.754 13.6678 20.7533 13.177 20.7022 12.7095C20.641 12.1495 20.5064 11.5688 20.2224 11.0058C20.3688 10.8134 20.4564 10.6001 20.5113 10.4392C20.679 9.94758 20.7289 9.35941 20.73 9.06545L20.73 9.0625V7.18761C20.73 6.18792 20.3778 5.42162 19.7913 4.91628C19.2255 4.42882 18.5186 4.25011 17.9052 4.25011C17.4968 4.25011 17.0742 4.40685 16.7336 4.56076C16.3725 4.72392 15.9951 4.9359 15.6557 5.13136C15.5827 5.17339 15.5118 5.21444 15.4429 5.25432L15.4409 5.25548C15.1769 5.4084 14.9426 5.5441 14.7338 5.65167C14.6041 5.7185 14.5033 5.7643 14.4284 5.79206C14.3968 5.80377 14.3766 5.80966 14.3662 5.81242C14.1127 5.81102 13.9512 5.79033 13.718 5.76044C13.668 5.75403 13.6146 5.74719 13.5563 5.74003C13.2096 5.69743 12.7721 5.65636 12 5.65636C11.2279 5.65636 10.7904 5.69743 10.4437 5.74003C10.3854 5.74719 10.332 5.75403 10.282 5.76044C10.0488 5.79033 9.88726 5.81102 9.63376 5.81242C9.6234 5.80966 9.6032 5.80376 9.57161 5.79206C9.49665 5.7643 9.39592 5.71849 9.26621 5.65166C9.05743 5.54408 8.82319 5.40842 8.55914 5.25548C8.48963 5.21523 8.41806 5.17377 8.34434 5.13132C8.0049 4.93584 7.62751 4.72384 7.2664 4.56067C6.92574 4.40675 6.50317 4.25 6.09473 4.25ZM6.16179 17.6138C6.49583 17.8657 6.88068 18.0879 7.30591 18.2835C8.83682 18.9877 10.7178 19.25 12 19.25C13.2821 19.25 15.1631 18.9877 16.694 18.2835C17.1192 18.0879 17.5041 17.8657 17.8381 17.6138C17.4857 17.5524 17.2177 17.245 17.2177 16.875C17.2177 16.4608 17.5535 16.125 17.9677 16.125C18.295 16.125 18.6293 16.2068 18.9398 16.3204C19.0984 15.9885 19.1957 15.625 19.2225 15.2271C18.9248 15.1544 18.7192 15.125 18.6133 15.125C18.199 15.125 17.8633 14.7892 17.8633 14.375C17.8633 13.9608 18.199 13.625 18.6133 13.625C18.808 13.625 19.0283 13.6542 19.2503 13.6974C19.2504 13.4213 19.2414 13.1502 19.2111 12.8724C19.1406 12.227 18.9578 11.6541 18.5268 11.1447C18.3726 10.9625 18.1808 10.7813 17.9401 10.6045C17.6062 10.3594 17.5343 9.88999 17.7794 9.55611C18.0246 9.22224 18.494 9.15031 18.8279 9.39546C18.947 9.48292 19.0595 9.57282 19.1658 9.66506C19.2098 9.43686 19.2294 9.19817 19.23 9.06087V7.18761C19.23 6.56231 19.0236 6.23486 18.8122 6.0527C18.58 5.85266 18.2495 5.75011 17.9052 5.75011C17.8349 5.75011 17.6589 5.78868 17.3512 5.92771C17.0639 6.0575 16.743 6.23612 16.4042 6.43125C16.3405 6.4679 16.2758 6.50544 16.2104 6.54328C15.9427 6.69843 15.6659 6.85883 15.4208 6.98509C15.2662 7.06473 15.1051 7.14099 14.9494 7.19867C14.8056 7.25192 14.6068 7.3125 14.394 7.3125C14.0221 7.3125 13.7616 7.27877 13.5114 7.2464C13.4653 7.24043 13.4194 7.23449 13.3734 7.22883C13.0847 7.19336 12.7083 7.15636 12 7.15636C11.2917 7.15636 10.9153 7.19336 10.6266 7.22883C10.5805 7.23449 10.5347 7.24042 10.4886 7.24639C10.2385 7.27877 9.97783 7.3125 9.60598 7.3125C9.39314 7.3125 9.19433 7.25191 9.05057 7.19866C8.89485 7.14098 8.73374 7.06471 8.57916 6.98506C8.33411 6.8588 8.0573 6.69839 7.78956 6.54325C7.72423 6.50539 7.65942 6.46784 7.59577 6.43118C7.2569 6.23603 6.93602 6.05741 6.64876 5.92761C6.34103 5.78856 6.16509 5.75 6.09473 5.75C5.7505 5.75 5.41995 5.85254 5.18775 6.05259C4.97631 6.23475 4.76992 6.56219 4.76992 7.1875V9.06088C4.77058 9.19819 4.79013 9.43686 4.83413 9.66506C4.94041 9.57281 5.05297 9.48292 5.17208 9.39546C5.50595 9.15031 5.97535 9.22224 6.2205 9.55612C6.46565 9.88999 6.39372 10.3594 6.05985 10.6045C5.81913 10.7813 5.62735 10.9625 5.47318 11.1447C5.04211 11.6541 4.85937 12.227 4.78888 12.8724C4.75853 13.1502 4.74954 13.4213 4.74962 13.6975C4.9718 13.6543 5.19218 13.625 5.38707 13.625C5.80129 13.625 6.13707 13.9608 6.13707 14.375C6.13707 14.7892 5.80129 15.125 5.38707 15.125C5.28109 15.125 5.07536 15.1544 4.77746 15.2271C4.80422 15.625 4.90156 15.9885 5.06015 16.3203C5.37056 16.2068 5.70492 16.125 6.03212 16.125C6.44633 16.125 6.78212 16.4608 6.78212 16.875C6.78212 17.245 6.5142 17.5524 6.16179 17.6138Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgCat;
