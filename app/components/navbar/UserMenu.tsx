"use client"

import React, {useState} from 'react'
import {AiOutlineMenu} from "react-icons/ai";
import Avatar from "@/app/components/Avatar";
import MenuItem from "@/app/components/navbar/MenuItem";
import useRegisterModal from '@/app/hooks/useRegisterModal';

const UserMenu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const registerModal = useRegisterModal()

    // const toggleOpen = useCallback(
    //     () => {
    //         callback
    //     },
    //     [input],
    // );
    // (() => {
    //     setIsOpen((value) => !value);
    // }, []);

    return (
        <div className="relative">

            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={() => {}}
                    className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">

                    AirBnb Your Home
                </div>

                <div className="p-4 md:py-1 md:px-2 border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                    <AiOutlineMenu/>
                    <div className="hidden md:block">
                        <Avatar src=""/>
                    </div>
                </div>
            </div>


    {isOpen && (
        <div
            className="
            absolute
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
          "
        >

            <MenuItem onClick={ () => {}} label='Login'/>
            <MenuItem onClick={ () => {}} label='Sign Up'/>
            <div className="flex flex-col cursor-pointer">

                <>
                <MenuItem onClick={() => {}} label='Login'/>
                <MenuItem onClick={registerModal.onOpen} label='Sign Up'/>

                </>
                {/*{currentUser ? (*/}
                {/*    <>*/}
                {/*        <MenuItem*/}
                {/*            label="My trips"*/}
                {/*            onClick={() => router.push('/trips')}*/}
                {/*        />*/}
                {/*        <MenuItem*/}
                {/*            label="My favorites"*/}
                {/*            onClick={() => router.push('/favorites')}*/}
                {/*        />*/}
                {/*        <MenuItem*/}
                {/*            label="My reservations"*/}
                {/*            onClick={() => router.push('/reservations')}*/}
                {/*        />*/}
                {/*        <MenuItem*/}
                {/*            label="My properties"*/}
                {/*            onClick={() => router.push('/properties')}*/}
                {/*        />*/}
                {/*        <MenuItem*/}
                {/*            label="Airbnb your home"*/}
                {/*            onClick={rentModal.onOpen}*/}
                {/*        />*/}
                {/*        <hr />*/}
                {/*        <MenuItem*/}
                {/*            label="Logout"*/}
                {/*            onClick={() => signOut()}*/}
                {/*        />*/}
                {/*    </>*/}
                {/*) : (*/}
                {/*    <>*/}
                {/*        <MenuItem*/}
                {/*            label="Login"*/}
                {/*            onClick={loginModal.onOpen}*/}
                {/*        />*/}
                {/*        <MenuItem*/}
                {/*            label="Sign up"*/}
                {/*            onClick={registerModal.onOpen}*/}
                {/*        />*/}
                {/*    </>*/}
                {/*)}*/}
            </div>
        </div>
    )}
</div>
    )
}
export default UserMenu
