import { Navbar } from "./components/ui/navbar";

export default function Home() {
  return (
    <div className="flex flex-col  min-w-screen text-slate-300 bg-slate-950">
      <div className="top-2">
        <Navbar />
      </div>
      <div className="flex-1">
        <div className="h-screen w-full">
          {/* Content for the first page */}
        </div>
        <div className="h-screen w-full bg-indigo-950">
          hello world
          {/* Content for the second page */}
        </div>
      </div>
    </div>
  );
}
