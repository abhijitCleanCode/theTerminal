import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Loader } from "./index.js";
// import authService from "../appwrite/auth.services.js";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { login } from '../store/authSlice.js';
import { logo } from '../assets/index.js';

function Signup() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    console.log("User register successfully");
  }

  return !loading ? (
    <div className="flex items-center justify-center">
      <div className={`mx-auto w-full max-w-2xl rounded-[30px] p-10 card-neumorphism`}>
        <div className="mb-2 flex gap-2 justify-center items-center">
          <img src={logo} className="w-9 h-9 object-contain" />
          <p className='text-2xl blue-text-gradient font-bold cursor-pointer flex'>Spectacles</p>
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-300 uppercase tracking-wider">Join Our Community</h2>
        <p className="mt-2 text-center text-base text-[#DC7364]">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium transition-all duration-200 hover:underline text-[#FDB05C]"
          >
            Sign In
          </Link>
        </p>

        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form method="post" onSubmit={handleSubmit(create)} className='mt-12 flex flex-col gap-8'>
          <div className="space-y-5">
            <Input
              label="Your Name"
              placeholder="What's your good name"
              {
              ...register("name", {
                required: true
              })
              }
            />
            <Input
              label="Your Email"
              placeholder="What's your web address"
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
            <Button type='submit' className='w-full'>Sign up</Button>
          </div>
        </form>

      </div>

    </div>
  ) 
  : (
    <Loader />
  )
}

export default Signup