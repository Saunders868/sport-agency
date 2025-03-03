import React from "react";
import cx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return <div className={cx("container", className)}>{children}</div>;
};

export default Container;
