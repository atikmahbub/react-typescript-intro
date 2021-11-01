import React from "react";

type VerticalType = "top" | "center" | "bottom";
type HorizontalType = "right" | "left" | "center";

type ToastType = {
  position:
    | Exclude<`${VerticalType}-${HorizontalType}`, "center-center"> //* no one can set center-center as a props , we can pass center only so union 'center' & excluding center-center from props by Exclude Keyword
    | "center";
};

const Toast = ({ position }: ToastType) => {
  return <div>type - {position}</div>;
};

export default Toast;
