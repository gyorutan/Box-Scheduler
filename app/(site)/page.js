import AuthForm from "./components/AuthForm";
import Image from "next/image";

export default function Auth() {
  return (
    <div
      className="
      flex 
      h-screen 
      flex-col 
      justify-center 
      py-12 
      sm:px-6 
      lg:px-8 
      "
    >
      <div className="mb-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            height="50"
            width="50"
            className="mx-auto w-auto"
            src="/images/logo3.png"
            alt="Logo"
          />
          <h2
            className="
          mt-6 
          text-center 
          text-3xl 
          font-bold 
          tracking-tight 
            text-[#1e2f58]
          "
          >
            Box Scheduler
          </h2>
        </div>
        <AuthForm />
      </div>
    </div>
  );
}
