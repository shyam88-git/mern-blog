import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen  mt-20">
      <div className="flex p-3 max-w-3xl gap-12 mx-auto flex-col md:flex-row md:items-center">
        {/* Left side */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Shyam's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            perferendis.
          </p>
        </div>
        {/* right side  */}
        <div className=" flex-1">
          <form className="flex  flex-col gap-4">
            <div>
              <Label value="User name" />
              <TextInput type="text" placeholder="user name" id="email" />
            </div>

            <div>
              <Label value="Your Email" />
              <TextInput type="text" placeholder="email" id="email" />
            </div>

            <div>
              <Label value="Password" />
              <TextInput type="text" placeholder="Password" id="email" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex mt-5 justify-center text-sm gap-3">
            <span>Have an Account?</span>
            <Link to="/login" className="text-blue-500">
              SignIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
