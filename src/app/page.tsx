import SummaryInfo, { type category } from "@/components/SummaryInfo";
import Data from "../../public/data.json";
import Link from "next/link";

interface Result {
  category: category;
  score: number;
  icon: string;
}

export default function Home() {
  const results = Data as Result[];
  const RESULTS_LENGTH = results.length;
  let total: number = 0;
  for (let i = 0; i < RESULTS_LENGTH; i++) {
    // sort icon url path
    const urlParts = results[i].icon.split("/");
    const iconUrl = `/images/${urlParts[urlParts.length - 1]}`;
    results[i].icon = iconUrl;

    // calculate average
    total += results[i].score;
  }

  const avg: number =
    RESULTS_LENGTH === 0 ? 0 : Math.round(total / RESULTS_LENGTH);
  return (
    <main>
      <div className="h-screen w-screen grid place-items-center">
        <section className="grid sm:grid-cols-2 sm:rounded-3xl gap-8 sm:gap-0 max-w-screen-sm sm:mx-auto shadow-gray-400 shadow-2xl">
          <h1 className="sr-only">Results Summary</h1>
          <section className="bg-gradient-to-b from-blue-500 to-blue-700 text-white rounded-b-3xl sm:rounded-3xl grid gap-4 px-12 py-10 justify-center items-center text-center">
            <h2 className="capitalize font-bold text-2xl text-gray-100">
              your result
            </h2>
            <div className="mask aspect-square rounded-full grid justify-center items-center bg-blue-700 text-center w-56 p-2 mx-auto">
              <div className="grid gap-4">
                <span className="text-8xl font-extrabold mt-4">{avg}</span>
                <span>of 100</span>
              </div>
            </div>
            <div className="grid gap-2">
              <span className="capitalize font-bold text-3xl">Great</span>
              <p className="text-gray-200">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
          </section>
          <section className="grid gap-4 py-10 px-8">
            <h2 className="font-extrabold text-2xl">Summary</h2>
            <div className="grid gap-4">
              {results.map((result) => (
                <SummaryInfo
                  key={result.category}
                  category={result.category}
                  score={result.score}
                  icon={result.icon}
                />
              ))}
            </div>
            <Link
              className="p-2 rounded-full bg-slate-700 text-white text-center cursor-pointer transition-colors active:bg-blue-800 mt-4"
              href={"/"}
            >
              Continue
            </Link>
          </section>
        </section>
      </div>
    </main>
  );
}
