import { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-100">
      <header className="border-b border-b-neutral-200 p-5 text-center bg-neutral-50">
        <h1 className="text-2xl uppercase font-black text-neutral-600 tracking-widest">
          Wordle
        </h1>
      </header>
      <main className="flex-1 flex items-center justify-center">
        {children}
      </main>
    </div>
  );
}
