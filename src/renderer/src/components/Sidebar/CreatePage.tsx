import { PlusIcon } from "@phosphor-icons/react";

export function CreatePage(): React.JSX.Element {
  return (
    <button className="flex w-60 px-5 items-center text-sm gap-2 absolute bottom-0 left-0 right-0 py-4 border-t border-rotion-600 hover:bg-rotion-700 disabled:opacity-60">
      <PlusIcon className="h-4 w-4" />
      Create new page
    </button>
  );
}
