import type { ReactNode } from "react";

interface CalloutProps {
  title: string;
  children: ReactNode;
}

export function Callout({ title, children }: CalloutProps) {
  return (
    <div className="callout">
      <strong>{title}</strong>
      {children}
    </div>
  );
}
