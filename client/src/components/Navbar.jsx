import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { open, close, logo } from "../assets";
import Container from "./container/Container";
import { Button } from "./index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: true,
    },
    {
      name: "Login",
      slug: "/api/v1/users/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/api/v1/users/signup",
      active: !authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <nav className='py-3 font-poppins h-full w-full bg-[#0B1531] border-b-2 border-gray-500'>
        <Container>
          <div className='w-full flex justify-between items-center mx-auto'>
            <Link to="/" className="flex gap-2 justify-center items-center">
              <img src={logo} className="w-9 h-9 object-contain" />
              <p className='text-xl text-cyan-500 font-bold cursor-pointer flex'>Spectacles</p>
            </Link>

            <ul className='list-none hidden md:flex gap-10'>
              {
                navItems.map((value) =>
                  value.active ? (
                    <li key={value.name} className="font-mono font-semibold cursor-pointer text-lg">
                      <Button 
                        onClick={() => navigate(value.slug)}
                        bgColor=""
                        textColor="text-[#C68DCB]"
                      >
                        {value.name}
                      </Button>
                    </li>
                  ) : null
                )
              }

              {
                authStatus && (
                  <li>
                    <Button>Log out</Button>
                  </li>
                )
              }

            </ul>
            <div className="md:hidden flex flex-1 justify-end items-center z-50">
              <img src={toggle ? open : close} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle(!toggle)} />

              <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-[#fafafa] absolute top-20 right-0 mx-4 min-y-2 min-w-[140px] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20`}>
                <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                  {
                    navItems.map((value) =>
                      value.active ? (
                        <li key={value.name} className="font-mono font-semibold cursor-pointer text-lg">
                          <Button
                            onClick={() => navigate(value.slug)}
                            className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                          >
                            {value.name}
                          </Button>
                        </li>
                      ) : null
                    )
                  }

                  {
                    authStatus && (
                      <li>
                        <Button>Log out</Button>
                      </li>
                    )
                  }
                </ul>
              </div>
            </div>
          </div>
        </Container>

    </nav>
  )
}

export default Navbar