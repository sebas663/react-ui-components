import React from "react";
import { Classnames } from "utils";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  buttonType?: "primary" | "secondary" | "success";
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "sm" | "md" | "lg";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  buttonType = "primary",
  size = "md",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  console.log(size);
  return (
    <button
      type="button"
      className={Classnames("btn", `btn-${buttonType}`, {
        [`btn-${size}`]: size,
      })}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
