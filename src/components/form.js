import React, { useState, useMemo, useEffect } from "react";
import { MdError } from "react-icons/md";

const Form = () => {
  const [isOptions, setIsOptions] = useState(false);

  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    if(e.target.type === `checkbox`){
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
    }else{
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value}));
    console.log(formData)
  }

  useEffect(()=>{

    if(formData.isAgree){
      setFormData((prev) => (
        { ...prev, [`data`]: 'yes',
        [`activity`]: 'yes',
        [`tips`]: 'yes'
        }));
    }

  },[formData.isAgree])


  const isValidEmail = useMemo(() => {
    if (formData?.email?.length < 1) {
      return "This field cannot be left blank";
    } else if (formData?.email?.length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(emailRegex.test(formData.email)){
        return false
      }else {
        return "Enter a valid email address"
      }
    }else{
      return false;
    }
  }, [formData?.email]);

  const isValidPassword = useMemo(()=>{
    
    const numberRegex = /\d/;
    const charRegex = /\S/;
    const specialRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    if((formData?.password?.length < 8 && formData?.password?.length > 0) || (formData?.password?.length > 0 && ( !numberRegex.test(formData?.password) || !charRegex.test(formData.password) || !specialRegex.test(formData.password)))){
      return "Use 8 or more characters with a mix of letters, numbers and symbols";
    }else{
      return false;
    }

  },[formData?.password])

  return (
    <div className="ml-auto mr-auto flex flex-col items-center justify-center gap-6 max-w-[75%] h-auto min-h-[90vh]">
      <div className="flex items-center justify-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="22"
          fill="none"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="108"
            height="24"
            fill="none"
            className="sc-da9128ae-1 bOQHzD"
          >
            <path
              fill="currentColor"
              d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z"
            ></path>
          </svg>
        </span>
      </div>
      <p className="text-2xl font-thin text-center text-[#5e5e5e]">
        Get better data with conversational forms, surveys, quizzes & more.
      </p>
      <form className="flex flex-col">
        <div className="rounded border-black border">
          <input
            type="email"
            id="Email"
            name="email"
            onChange={handleInputChange}
            value={formData.email ?? ""}
            placeholder="Email"
            className="w-full rounded p-2 min-w-[260px]"
          />
        </div>
        {!!isValidEmail && (
          <p className="text-red-400 text-xs py-2 flex items-center justify-start">
            <MdError className="text-sm mr-1" />
            {`${isValidEmail}`}
          </p>
        )}
        <div className="relative rounded border-black border mt-2">
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInputChange}
            value={formData.password ?? ""}
            placeholder="Password"
            className="w-full rounded p-2 min-w-[260px]"
          />
          <span className=" absolute top-[50%] translate-y-[-50%] right-[4%]   text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                stroke="#5E6E78"
                strokeOpacity=".37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </span>
        </div>
        {!!isValidPassword && <p className="text-red-400 text-xs py-2 flex items-start justify-start max-w-[250px]">
          <MdError className="text-lg mr-1" />
          {isValidPassword}
        </p>}
        <div className="flex items-start justify-center gap-4 max-w-[260px] mt-4">
          <input className="scale-[1.7] mt-2" type="checkbox" name="isAgree" checked={formData?.isAgree} onChange={handleInputChange} />
          <p className="text-sm font-thin text-[#5e5e5e]">
            I agree to Typeforms <span>Terms of Service</span>,
            <span>Privacy Policy</span> and{" "}
            <span>Data Processing Agreement</span>.
          </p>
        </div>
        <div className="ml-7 text-sm mt-4 cursor-pointer">
          <p
            className="w-full flex justify-between items-center mb-4"
            onClick={() => setIsOptions(!isOptions)}
          >
            See options
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={` h-4 w-4 ${isOptions ? "rotate-180" : "rotate-0"} `}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </p>
          <div
            className={`transition-all duration-300 ${
              isOptions ? " h-80 " : " h-0 "
            } overflow-hidden flex flex-col items-start justify-center gap-1 max-w-[240px]`}
          >
            <div className=" flex flex-col text-sm gap-2">
              Get useful tips, inspiration, and offers via e-communication.
              <div className="flex items-center justify-start gap-4 mb-3">
                <label className="flex items-center justify-center gap-2">
                  <input
                    type="radio"
                    name="tips"
                    id="tipsyes"
                    value={'yes'}
                    onChange={handleRadioChange}
                    checked={formData?.tips === `yes`}
                    className="size-5 border-gray-300 text-black-500"
                  />{" "}
                  Yes
                </label>
                <label className="flex items-center justify-center gap-2">
                  <input
                    type="radio"
                    name="tips"
                    id="tipsno"
                    value={'no'}
                    onChange={handleRadioChange}
                    checked={formData?.tips === `no`}
                    className="size-5 border-gray-300 text-black-500"
                  />{" "}
                  No
                </label>
              </div>
            </div>

            <div className="flex flex-col text-sm gap-2">
              Tailor Typeform to my needs based on my activity.See Privacy
              Policy
              <div className="flex items-center justify-start gap-4 mb-3">
                <label className="flex items-center justify-center gap-2">
                  <input
                    type="radio"
                    name="activity"
                    id="activityyes"
                    value={'yes'}
                    onChange={handleRadioChange}
                    checked={formData?.activity === `yes`}
                    className="size-5 border-gray-300 text-black-500"
                  />{" "}
                  Yes
                </label>
                <label className="flex items-center justify-center gap-2">
                  <input
                    type="radio"
                    name="activity"
                    id="activityno"
                    value={'no'}
                    onChange={handleRadioChange}
                    checked={formData?.activity === `no`}
                    className="size-5 border-gray-300 text-black-500"
                  />{" "}
                  No
                </label>
              </div>
            </div>

            <div className="flex flex-col text-sm gap-2">
              Enrich my data with select third parties for more relevant
              content.See Privacy Policy{" "}
              <div className="flex items-center justify-start gap-4 mb-3">
                <label className="flex items-center justify-center gap-2">
                  <input
                    type="radio"
                    name="data"
                    id="datayes"
                    value={'yes'}
                    onChange={handleRadioChange}
                    checked={formData?.data === `yes`}
                    className="size-5 border-gray-300 text-black-500"
                  />{" "}
                  Yes
                </label>
                <label className="flex items-center justify-center gap-2">
                  <input
                    type="radio"
                    name="data"
                    id="datano"
                    value={'no'}
                    onChange={handleRadioChange}
                    checked={formData?.data === `no`}
                    className="size-5 border-gray-300 text-black-500"
                  />{" "}
                  No
                </label>
              </div>
            </div>

            <div className="flex flex-col text-sm gap-2">
              You can update your preferences in your Profile at any time
            </div>
          </div>
        </div>
        <button className="text-white bg-[#191919] p-2 w-[80%] ml-auto mr-auto rounded">
          Create my free account
        </button>
      </form>
    </div>
  );
};

export default Form;
