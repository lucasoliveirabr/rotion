import { Router } from "../lib/electron-router-dom";
import { Route } from "react-router-dom";
import { Blank } from "@renderer/pages/blank";
import { Document } from "@renderer/pages/document";

export function Routes(): React.JSX.Element {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Blank />} />
          <Route path="/document" element={<Document />} />
        </>
      }
    />
  );
}
