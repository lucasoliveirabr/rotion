import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Routes } from "../routes";

export function App(): React.JSX.Element {
  return (
    <div className="flex h-screen w-screen text-rotion-100">
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header />
        <Routes />
      </div>
    </div>
  );
}
