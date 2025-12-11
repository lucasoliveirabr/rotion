import { MagnifyingGlassIcon } from "@phosphor-icons/react";

export function Search(): React.JSX.Element {
  return (
    <button className="flex mx-5 items-center gap-2 text-rotion-100 text-sm hover:text-rotion-50">
      <MagnifyingGlassIcon className="w-5 h-5" />
      Busca rápida
    </button>
  );
}
