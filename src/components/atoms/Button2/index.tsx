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
function Button({
  buttonType,
  size,
  backgroundColor,
  label,
  ...props
}: ButtonProps) {
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
}

Button.defaultProps = {
  buttonType: "primary",
  backgroundColor: undefined,
  size: "md",
  onClick: undefined,
};

export default Button;
