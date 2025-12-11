import { Link } from "react-router-dom";

export function Document(): React.JSX.Element {
  return (
    <main className="flex-1 flex items-center justify-center text-rotion-400">
      Document
      <Link to="/">Access blank page</Link>
    </main>
  );
}
