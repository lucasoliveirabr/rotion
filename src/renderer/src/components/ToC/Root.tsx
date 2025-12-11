import { ReactNode } from "react";

interface ToCRootProps {
  children: ReactNode;
}

export function ToCRoot(props: ToCRootProps): React.JSX.Element {
  return <div className="flex flex-col text-sm text-rotion-100 gap-2 mt-2" {...props} />;
}
