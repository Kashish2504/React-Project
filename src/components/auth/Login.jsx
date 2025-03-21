import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is",email);
    console.log("Password is",password)
    setEmail("")
    setPassword("")
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="border-rounded- flex flex-col items-center justify-center"
        >
          <input
          value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className=" outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter Password"
          />
          <button className="text-white mt-5 outline-none border-none bg-emerald-600 text-xl py-4 px-5 rounded-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
