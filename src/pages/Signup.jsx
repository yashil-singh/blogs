import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import MainContainer from "../components/MainContainer";
import StyledButton from "../components/StyledButton";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <MainContainer>
      <div className="flex justify-center items-center h-full">
        <div className="bg-card border border-border w-full max-w-[500px] rounded-xl px-5 md:px-10 py-16">
          <h1 className="text-tprimary text-4xl font-bold">Signup</h1>
          <div className="my-5">
            <InputField
              label={"Full Name"}
              placeholder={"Enter your full name"}
              type={"text"}
            />
            <InputField
              label={"Username"}
              placeholder={"Enter your username"}
              type={"text"}
            />
            <InputField
              label={"Password"}
              placeholder={"Enter your password"}
              type={"password"}
              isPassword={true}
            />
          </div>
          <StyledButton>Signup</StyledButton>
          <div className="flex items-center my-5 gap-4">
            <hr className="h-px grow bg-border border-none m-0" />
            <span className="text-12 text-tsecondary px-md">OR</span>
            <hr className="h-px grow bg-border border-none m-0" />
          </div>
          <button className="flex w-full gap-2 font-semibold text-tprimary justify-center border border-border bg-background p-2 rounded-md hover:bg-background/50 mb-5">
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>
          <p className="text-center text-tprimary">
            Already a member?{" "}
            <Link to="/login" className="text-sky-400 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </MainContainer>
  );
};

export default Signup;
