import cx from "clsx";
import React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={cx("sm:py-32 py-24", className)}>{children}</section>
  );
};

export default Section;
