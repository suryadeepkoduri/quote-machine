import { useState,useEffect } from "react";
import quotes from "./quotes.json"
import { TextGenerateEffect } from "./components/ui/text-generate-effect";

function App() {
  document.title = "Quote Machine - Surya Deep Koduri";
  const [randomQuote, setRandomQuote] = useState({quote:""});

  useEffect(getRandomQuote, []);

  function getRandomQuote() {
    const quoteNumber = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[quoteNumber]);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-400">
      <div className="border p-6 rounded-lg bg-black shadow-2xl m-3 max-w-4xl text-center">
        <TextGenerateEffect key={randomQuote.quote} duration={2} filter={false} words={randomQuote.quote}  className="ntr-regular"/>
        <p className="font-medium text-2xl text-white mt-4 text-right ntr-regular">
          - {randomQuote.movie}
        </p>
        <button
          onClick={getRandomQuote}
          className="mt-6 px-6 py-2 bg-gray-500 text-white rounded shadow-lg hover:bg-gray-600 transition duration-300 float-start"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;