import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Loader } from "./index.js";
import { logo } from '../assets/index.js';

function Login() {
  const [ loading, setLoading ] = useState(false)
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

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
        <p className="mt-2 text-center text-base text-[#DC7364]">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 text-[#FDB05C] hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}

        <form method='post' onSubmit={handleSubmit(login)}>
          <div className="space-y-5">
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              {
              ...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address"
                }
              })
              }
            />
            <Input
              label="Password:"
              placeholder="Enter your password"
              type="password"
              {
              ...register("password", {
                required: true
              })
              }
            />
            <Button type='submit' className='w-full'>Sign in</Button>
          </div>
        </form>

      </div>
    </div>
  ) : (
    <Loader />
  )
}

export default Login