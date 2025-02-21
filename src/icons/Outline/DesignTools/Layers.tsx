import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLayers = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4.75C10.9396 4.75 10.0907 5.07796 8.06584 5.88789L5.25737 7.01128C4.24694 7.41545 3.54677 7.69659 3.09295 7.93451C3.0486 7.95776 3.00863 7.97959 2.97267 8C3.00863 8.02041 3.0486 8.04224 3.09295 8.06549C3.54677 8.30341 4.24694 8.58455 5.25737 8.98872L8.06584 10.1121C10.0907 10.922 10.9396 11.25 12 11.25C13.0604 11.25 13.9093 10.922 15.9342 10.1121L18.7426 8.98872C19.7531 8.58455 20.4532 8.30341 20.9071 8.06549C20.9514 8.04224 20.9914 8.02041 21.0273 8C20.9914 7.97959 20.9514 7.95776 20.9071 7.93451C20.4532 7.69659 19.7531 7.41545 18.7426 7.01128L15.9342 5.88789C13.9093 5.07796 13.0604 4.75 12 4.75ZM7.62442 4.4489C9.50121 3.69796 10.6208 3.25 12 3.25C13.3792 3.25 14.4988 3.69796 16.3756 4.4489C16.4138 4.4642 16.4524 4.47962 16.4912 4.49517L19.3451 5.6367C20.2996 6.01851 21.0728 6.32776 21.6035 6.60601C21.8721 6.74683 22.1323 6.90648 22.333 7.09894C22.5392 7.29668 22.75 7.59658 22.75 8C22.75 8.40342 22.5392 8.70332 22.333 8.90106C22.1323 9.09352 21.8721 9.25317 21.6035 9.39399C21.2519 9.57835 20.7938 9.77632 20.247 10C20.7938 10.2237 21.2519 10.4216 21.6035 10.606C21.8721 10.7468 22.1323 10.9065 22.333 11.0989C22.5392 11.2967 22.75 11.5966 22.75 12C22.75 12.4034 22.5392 12.7033 22.333 12.9011C22.1323 13.0935 21.8721 13.2532 21.6035 13.394C21.2519 13.5784 20.7938 13.7763 20.247 14C20.7938 14.2237 21.2519 14.4216 21.6035 14.606C21.8721 14.7468 22.1323 14.9065 22.333 15.0989C22.5392 15.2967 22.75 15.5966 22.75 16C22.75 16.4034 22.5392 16.7033 22.333 16.9011C22.1323 17.0935 21.8721 17.2532 21.6035 17.394C21.0728 17.6722 20.2997 17.9815 19.3451 18.3633L16.4912 19.5048C16.4524 19.5204 16.4138 19.5358 16.3756 19.5511C14.4988 20.302 13.3792 20.75 12 20.75C10.6208 20.75 9.50121 20.302 7.62443 19.5511C7.58619 19.5358 7.54763 19.5204 7.50875 19.5048L4.6549 18.3633C3.70034 17.9815 2.9272 17.6722 2.39647 17.394C2.12786 17.2532 1.86765 17.0935 1.66701 16.9011C1.46085 16.7033 1.25 16.4034 1.25 16C1.25 15.5966 1.46085 15.2967 1.66701 15.0989C1.86765 14.9065 2.12786 14.7468 2.39647 14.606C2.74813 14.4216 3.20621 14.2237 3.75299 14C3.20621 13.7763 2.74813 13.5784 2.39647 13.394C2.12786 13.2532 1.86765 13.0935 1.66701 12.9011C1.46085 12.7033 1.25 12.4034 1.25 12C1.25 11.5966 1.46085 11.2967 1.66701 11.0989C1.86765 10.9065 2.12786 10.7468 2.39647 10.606C2.74813 10.4216 3.20621 10.2237 3.75299 10C3.20621 9.77632 2.74813 9.57835 2.39647 9.39399C2.12786 9.25317 1.86765 9.09352 1.66701 8.90106C1.46085 8.70332 1.25 8.40342 1.25 8C1.25 7.59658 1.46085 7.29668 1.66701 7.09894C1.86765 6.90648 2.12786 6.74683 2.39647 6.60601C2.92721 6.32776 3.70037 6.01851 4.65496 5.63669L7.50875 4.49517C7.54763 4.47962 7.58618 4.4642 7.62442 4.4489ZM5.76613 10.8078L5.25737 11.0113C4.24694 11.4154 3.54677 11.6966 3.09295 11.9345C3.0486 11.9578 3.00863 11.9796 2.97268 12C3.00863 12.0204 3.0486 12.0422 3.09295 12.0655C3.54677 12.3034 4.24694 12.5845 5.25737 12.9887L8.06584 14.1121C10.0907 14.922 10.9396 15.25 12 15.25C13.0604 15.25 13.9093 14.922 15.9342 14.1121L18.7426 12.9887C19.7531 12.5845 20.4532 12.3034 20.9071 12.0655C20.9514 12.0422 20.9914 12.0204 21.0273 12C20.9914 11.9796 20.9514 11.9578 20.9071 11.9345C20.4532 11.6966 19.7531 11.4154 18.7426 11.0113L18.2339 10.8078L16.4912 11.5048C16.4524 11.5204 16.4138 11.5358 16.3756 11.5511C14.4988 12.302 13.3792 12.75 12 12.75C10.6208 12.75 9.50121 12.302 7.62443 11.5511C7.58619 11.5358 7.54763 11.5204 7.50875 11.5048L5.76613 10.8078ZM5.76613 14.8078L5.25737 15.0113C4.24694 15.4154 3.54678 15.6966 3.09295 15.9345C3.0486 15.9578 3.00863 15.9796 2.97268 16C3.00863 16.0204 3.0486 16.0422 3.09295 16.0655C3.54677 16.3034 4.24694 16.5845 5.25737 16.9887L8.06584 18.1121C10.0907 18.922 10.9396 19.25 12 19.25C13.0604 19.25 13.9093 18.922 15.9342 18.1121L18.7426 16.9887C19.7531 16.5845 20.4532 16.3034 20.9071 16.0655C20.9514 16.0422 20.9914 16.0204 21.0273 16C20.9914 15.9796 20.9514 15.9578 20.9071 15.9345C20.4532 15.6966 19.7531 15.4154 18.7426 15.0113L18.2339 14.8078L16.4912 15.5048C16.4524 15.5204 16.4138 15.5358 16.3756 15.5511C14.4988 16.302 13.3792 16.75 12 16.75C10.6208 16.75 9.50121 16.302 7.62443 15.5511C7.58619 15.5358 7.54763 15.5204 7.50875 15.5048L5.76613 14.8078Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgLayers;
