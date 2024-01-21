import { useState } from "react";
import Center_SingleItem from "../../layouts/Center_SingleItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Auth() {
  return (
    <Center_SingleItem>
      <SignIn />
    </Center_SingleItem>
  );
}

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="border border-slate-300 p-8">
      <h1 className="text-center text-4xl font-bold">Sign In</h1>
      <p className="mt-2 text-center text-sm text-slate-400">Create account to access more features !!</p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-4"
      >
        <div className="relative">
          <label
            className="block text-slate-400 text-sm"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="w-full"
          />
        </div>
        <div className="relative mt-3">
          <label
            className="block text-slate-400 text-sm"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type={isShow ? "text" : "password"}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full"
          />
          <FontAwesomeIcon
            icon={isShow ? faEyeSlash : faEye}
            onClick={() => setIsShow(!isShow)}
            className="absolute top-1/2 right-3 cursor-pointer"
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="mt-3 text-center"
            onClick={() => alert("function not yet implemented")}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Auth;
