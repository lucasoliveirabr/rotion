import { Router } from "../lib/electron-router-dom";
import { Route } from "react-router-dom";
import { Blank } from "@renderer/pages/blank";
import { Document } from "@renderer/pages/document";
import { Default } from "@renderer/pages/layouts/default";

export function Routes(): React.JSX.Element {
  return (
    <Router
      main={
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Blank />} />
          <Route path="/document" element={<Document />} />
        </Route>
      }
    />
  );
}
