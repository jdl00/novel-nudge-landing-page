import { Headline } from "./components/ui/headline";
import { Navbar } from "./components/ui/navbar";
import { About } from "./components/ui/about";

export default function Home() {
  return (
    <div className="flex flex-col  min-w-screen text-slate-300 bg-slate-950">
      <div className="top-2">
        <Navbar />
      </div>
      <div className="flex-1">
        <div className="h-screen w-full mx-auto content-center bg-gradient-to-b from-slate-950 to-gray-950">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 px-8 py-12">
            <div className="content-center justify-center text-center">
              <Headline />
            </div>
            <div className="hidden sm:block outline-double content-center justify-center text-center  text-gray-800">
              hello
            </div>
          </div>
        </div>
        <div className="h-screen w-full bg-gray-950">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 px-8 py-12">
            <div className="content-center justify-center text-center bg-gray-950">
              <About />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
