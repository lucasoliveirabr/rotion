import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Outlet } from "react-router";

export function Default(): React.JSX.Element {
  return (
    <div className="flex h-screen w-screen text-rotion-100">
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
