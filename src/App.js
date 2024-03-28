import Language from "./components/language";
import Form from "./components/form";

function App() {
  return (
    <div className="w-full h-[100vh] flex overflow-hidden">
      <section className="hidden w-full lg:flex-[0.82] lg:flex flex-col items-center justify-center bg-[#191919] ">
        <div className="w-full h-full flex flex-col items-center justify-center ">
          <h1 className="text-4xl/tight text-white text-center mb-9 break-words max-w-[366px]">
            Sign up <br /> and come on in
          </h1>
          <div className="">
            <picture>
              <img
                src="./product-sample.webp"
                alt="Flowers"
                className="max-w-[366px]"
              />
            </picture>
          </div>
        </div>
        <p className="text-white text-sm text-center font-normal justify-self-center absolute bottom-12">
          © Typeform
        </p>
      </section>
      <section className="bg-white w-full lg:flex-1 rounded-tl-2xl rounded-bl-2xl min-h-[90vh] -ml-4 ">
        <div className="bg-white w-full h-full rounded-tl-2xl rounded-bl-2xl  overflow-y-auto ">
          <div className="text-sm flex items-center justify-between py-2 px-6">
          
              <Language />
            
            <div className="flex items-center justify-center gap-2 text-sm font-normal">
              <span>Already have and account? </span>
              <button className="px-3 py-1 text-xs rounded-md border border-[#5e5e5e]">
                Log in
              </button>{" "}
            </div>
          </div>
          <Form />
        </div>
      </section>
    </div>
  );
}

export default App;
