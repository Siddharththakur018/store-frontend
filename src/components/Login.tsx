import { useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value: string) => {
    if (value.length < 8 || value.length > 16) {
      setPasswordError("Password must be between 8 and 16 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);
    if (!emailError && !passwordError) {
      console.log("Form submitted:", { email, password });
    }
  };

  return (
    <div className="p-3 flex justify-center items-center flex-col">
      <h2 className="text-gray-400 text-4xl font-bold mb-4">Join us today</h2>
      <p className="text-gray-400 text-lg font-bold mb-8">
        Enter your email and password to register
      </p>
      <form onSubmit={handleSubmit} className="mt-3 w-3/4 mb-6">
        <div>
          <label className="text-black">Your Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            className={`shadow-xs h-10 border text-black rounded-md px-2 py-1 w-full mt-2 focus:ring-0 outline-none ${
              emailError ? "border-red-500" : "border-black"
            }`}
            placeholder="name@gmail.com"
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>
        <div className="mt-4 relative">
          <label className="text-black">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
            className={`shadow-xs h-10 border text-black rounded-md px-2 py-1 w-full mt-2 focus:ring-0 outline-none pr-10 ${
              passwordError ? "border-red-500" : "border-black"
            }`}
            placeholder="********"
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-11 cursor-pointer text-black"
          >
            {showPassword ? <BsEye /> : <BsEyeSlash />}
          </div>
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
        </div>
        <button
          type="submit"
          className="mt-6 w-full cursor-pointer bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
        >
          Login
        </button>
      </form>

      <div className="text-black flex items-center w-full gap-2 my-4">
        <hr className="w-full border-t border-gray-400" />
        <span className="text-gray-500 text-2xl">or</span>
        <hr className="w-full border-t border-gray-400" />
      </div>

      <div className="w-full justify-center flex items-center">
        <button className="text-black flex justify-around p-3 gap-4 rounded-md shadow-md items-center cursor-pointer">Sign in With Google <FcGoogle className="h-6 w-6"/></button>
      </div>
      <div className="underline text-blue-500 mt-4 cursor-pointer">
        Register Now
      </div>
    </div>
  );
};

export default Login;
