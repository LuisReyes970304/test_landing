import Counter from "@/components/counter";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full h-full flex-col items-center bg-white  overflow-y-auto scrollbar-none">
        <header className="flex fixed w-full bg-blue-500 items-center justify-between pl-2.5 pr-2.5 h-15 z-1000">
          <h1 className="text-2xl font-bold">CallBook</h1>
          <Link href={"/login"} className="text-2xl font-bold">
            login
          </Link>
        </header>
{/* HERO SECTION */}
        <section className="flex w-full flex-col h-[800px] bg-blue-400/55">
          <header className="w-full max-w-[1840px] mx-auto mt-20 h-10 flex justify-center items-center p-10 bg-blue-400/55 rounded"> 
            heroSection
          </header>
          <div className="flex flex-1 flex-col justify-center items-center w-full">
            <Counter/>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="flex w-full flex-col h-[800px] bg-blue-200">
          <header className="w-full max-w-[1840px] mx-auto mt-10 h-10 flex justify-center items-center p-10 bg-blue-400/55 rounded"> 
            About
          </header>
          {/* Changed h-full to flex-1 to automatically fit the remaining space cleanly */}
          <div className="flex flex-1 flex-col justify-center items-center w-full bg-blue-200">
            <p className="text-xl font-semibold text-zinc-800">ABOUT CONTENT</p>
          </div>
      </section>


        {/* CONTACT SECTION */}
        <section className="flex w-full h-[800px] bg-blue-100">
          <header className="w-full m-10 h-10 flex justify-center items-center p-10 bg-blue-400/55 rounded"> 
            Contact
          </header>
        </section>

      </main>
    </div>
  );
}
