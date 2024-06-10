import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Loader } from "./index.js";
import { logo } from '../assets/index.js';

function Login() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (data) => {
    console.log("User login successful");
  }

  return !loading ? (
    <div className='flex items-center justify-center w-full'>
      <div className={`mx-auto w-full max-w-2xl rounded-[30px] p-10 card-neumorphism`}>
        <div className="mb-2 flex gap-2 justify-center items-center">
          <img src={logo} className="w-9 h-9 object-contain" />
          <p className='text-2xl blue-text-gradient font-bold cursor-pointer'>Spectacles</p>
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-300 uppercase tracking-wider">We'r happy to have you on board</h2>
        <p className="mt-2 text-center text-base text-red-400">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/api/v1/users/signup"
            className="font-medium text-primary transition-all duration-200 text-[#FDB05C] hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}

        <form method='post' onSubmit={handleSubmit(login)}>
          <div className="space-y-5">

            <div>
              <Input
                label="Your Email"
                placeholder="What's your web address"
                type="email"
                {
                ...register("email", {
                  required: {
                    value: true,
                    message: "Email is required"
                  },
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Please enter a valid email address"
                  }
                })
                }
              />
              <p className='text-center text-red-400'>{errors.email?.message}</p>
            </div>

            <div>
              <Input
                label="Your Password"
                placeholder="Enter your password"
                type="password"
                {
                ...register("password", {
                  required: {
                    value: true,
                    message: "Password is required"
                  }
                })
                }
              />
              <p className='text-center text-red-400'>{errors.password?.message}</p>
            </div>
            <Button type='submit' className='w-full'>Login</Button>
          </div>
        </form>

      </div>
    </div>
  ) : (
    <Loader />
  )
}

export default Login

// When form is submitted, handleSubmit event is fired
// handleSubmit is method which takes method as input which specify how form is handle