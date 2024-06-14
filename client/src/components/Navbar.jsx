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
      active: true,
      bgColor: ""
    },
    {
      name: "Features",
      slug: "/features",
      active: true,
      bgColor: ""
    },
    {
      name: "Get to Know",
      slug: "/all-posts",
      active: true,
      bgColor: ""
    },
    {
      name: "Connect",
      slug: "/connect",
      active: true,
      bgColor: ""
    },
  ]

  const personalize = [
    {
      name: "Login",
      slug: "/api/v1/users/login",
      active: !authStatus,
      bgColor: "bg-[#3395FF]"
    },
    {
      name: "Signup",
      slug: "/api/v1/users/signup",
      active: !authStatus,
      bgColor: "",
      className: "border-2 border-[#3395FF]"
    },
  ]

  return (
    <nav className='py-3 font-poppins h-full w-full bg-[#0B1531]'>
      <Container>
        <div className='w-full flex justify-between items-center mx-auto'>
          <Link to="/" className="flex gap-2 justify-center items-center">
            {/* <img src={logo} className="w-9 h-9 object-contain" /> */}
            <p className='text-2xl blue-text-gradient font-bold cursor-pointer'>Spectacles</p>
          </Link>

          <ul className='list-none hidden md:flex justify-center items-center gap-10'>
            {
              navItems.map((value) =>
                value.active ? (
                  <li key={value.name} className="font-mono font-semibold cursor-pointer text-gray-300">
                    <Link
                      to={value.slug}
                      className=""
                    >
                      {value.name}
                    </Link>
                  </li>
                ) : null
              )
            }
          </ul>

          <ul className="list-none hidden md:flex justify-center items-center gap-4">
            {
              personalize.map((value) =>
                value.active ? (
                  <li key={value.name} className="font-mono font-semibold cursor-pointer">
                    <Button
                      onClick={() => navigate(value.slug)}
                      bgColor={value.bgColor}
                      textColor="text-gray-300"
                      className={value.className}
                    >
                      {value.name}
                    </Button>
                  </li>
                ) : null
              )
            }
          </ul>

          {
            authStatus && (
              <li>
                <Button>Log out</Button>
              </li>
            )
          }

          {/* Mobile menu */}
          <div className="md:hidden flex flex-1 justify-end items-center z-50">
            <div className="card-neumorphism p-2">
              <img src={toggle ? open : close} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle(!toggle)} />
            </div>

            <div className={`${!toggle ? "hidden" : "flex"} p-6 card-neumorphism absolute top-20 right-0 mx-4 min-y-2 min-w-[140px] rounded-[30px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20`}>
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {
                  navItems.map((value) =>
                    value.active ? (
                      <li key={value.name} className="font-mono font-semibold cursor-pointer text-lg">
                        <Button
                          onClick={() => navigate(value.slug)}
                          bgColor=""
                          textColor="text-gray-300"
                        >
                          {value.name}
                        </Button>
                      </li>
                    ) : null
                  )
                }

                {
                  personalize.map((value) =>
                    value.active ? (
                      <li key={value.name} className="font-mono font-semibold cursor-pointer">
                        <Button
                          onClick={() => navigate(value.slug)}
                          bgColor={value.bgColor}
                          textColor="text-gray-300"
                          className={value.className}
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