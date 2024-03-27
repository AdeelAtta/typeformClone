import Language from "./components/language";
import Form from './components/form'

function App() {
  return (
    <div className="w-full h-[100vh] flex overflow-hidden">
      <section className="hidden w-full lg:flex-[0.82] lg:flex flex-col items-center justify-center bg-[#191919] ">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white text-center mb-9 break-words">
            Sign up <br /> and come on in
          </h1>
          <div className="">
            <img src="./product.webp" alt="product" />
          </div>
        </div>
        <p className="text-white text-sm text-center font-normal justify-self-center absolute bottom-12">
          © Typeform
        </p>
      </section>
      <section className="bg-white w-full lg:flex-1  min-h-[90vh] ">
        <div className="bg-white w-full h-full rounded-tl-2xl rounded-bl-2xl -ml-4 overflow-scroll">
          <div className="text-sm flex items-center justify-between p-2">
            <div>
              <Language />
            </div>
            <div className="flex items-center justify-center gap-2 text-xs">
              <span>Already have and account? </span>
              <button className="px-4 py-1 text-xs rounded-md border border-black-500">
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
