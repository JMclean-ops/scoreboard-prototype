

import * as React from "react";

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  children: React.ReactNode;
}

export function Tabs({ defaultValue, children, ...props }: TabsProps) {
  return <div {...props}>{children}</div>;
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-4 border-b mb-4">{children}</div>;
}

export function TabsTrigger({ value, children }: { value: string; children: React.ReactNode }) {
  return <button className="px-4 py-2 border-b-2 border-transparent hover:border-black">{children}</button>;
}
