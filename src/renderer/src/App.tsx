import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export function App(): React.JSX.Element {
  return (
    <div className="flex h-screen w-screen text-rotion-100">
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header />

        <main className="flex-1 flex items-center justify-center text-rotion-400">
          Select or create a document
        </main>
      </div>
    </div>
  );
}
