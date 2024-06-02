import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Button } from "./index";

const DropDown = ({ menuButtonText, itemArray }) => {
    const navigate = useNavigate();

    return (
        <Menu>
            <MenuButton className="bg-black/60 py-2 px-4 rounded-[30px] text-gray-300">{menuButtonText}</MenuButton>

            <MenuItems anchor="bottom" className="bg-[#070d2b] rounded-[15px] flex flex-col justify-center items-center p-2 m-4">
                {
                    itemArray.map((value) => (
                        <MenuItem className="border-b-1 border-gray-300">
                            <Button
                                onClick={() => navigate(value.slug)}
                                bgColor=""
                                textColor="text-gray-300"
                            >
                                {value.name}
                            </Button>
                        </MenuItem>
                    ))
                }
            </MenuItems>
        </Menu>
    )
}

export default DropDown