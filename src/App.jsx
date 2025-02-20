import { useEffect } from "react";
import quotes from "./quotes.json";
import { useState } from "react";

function App() {
  document.title = "Quote Machine - Surya Deep Koduri";
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(getRandomQuote, []);

  function getRandomQuote() {
    const quoteNumber = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[quoteNumber]);
  }
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-linear-to-r from-red-400 to-blue-400">
        <div className="border p-3 rounded bg-white shadow-md m-3 max-w-4xl">
          <h1 className="text-5xl leading-normal ntr-regular">{randomQuote.quote}</h1>
          <p className="font-medium text-2xl text-slate-800 mt-4 text-right ntr-regular">
            - {randomQuote.movie}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
