import quotes from "./quotes.json"

function App() {
  document.title = "Quote Machine - Surya Deep Koduri"
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-emerald-100">
        <div className="border p-3 rounded bg-white shadow-md m-3 max-w-xl">
          <h1 className="text-5xl font-semibold font-serif leading-normal">{quotes[0].quote}</h1>
          <p className="font-medium text-2xl text-slate-800 mt-4 text-right">- {quotes[0].author}</p>
        </div>
      </div>
    </>
  );
}

export default App;
