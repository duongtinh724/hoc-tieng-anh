import type { ButtonHTMLAttributes } from "react";

interface PillProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  done?: boolean;
}

export function Pill({
  active = false,
  done = false,
  className = "",
  ...props
}: PillProps) {
  const classes = [
    "pill",
    active ? "active" : "",
    done && !active ? "done" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <button type="button" className={classes} {...props} />;
}
