import * as Collapsible from "@radix-ui/react-collapsible";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Outlet } from "react-router";
import { useState } from "react";

export function Default(): React.JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  return (
    <Collapsible.Root
      defaultOpen
      onOpenChange={setIsSidebarOpen}
      className="flex h-screen w-screen text-rotion-100"
    >
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header isSidebarOpen={isSidebarOpen} />
        <Outlet />
      </div>
    </Collapsible.Root>
  );
}
