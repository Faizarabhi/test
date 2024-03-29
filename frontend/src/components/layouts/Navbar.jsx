import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
    return (

        <header aria-label="Site Header" class="shadow-sm">
            <div
                class="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4"
            >
                <div class="flex w-0 flex-1 ">
                    <button class="rounded-full bg-gray-100 p-2 text-gray-600" type="button">
                        <span class="sr-only">Account</span>
                        <svg
                            class="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewbox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            ></path>
                        </svg>
                    </button>
                </div>

                <div class="flex items-center gap-4">
                    <NavLink href="#">
                        <span class="">Logo</span>
                        <span class="h-10 w-20 rounded-lg bg-gray-200"></span>
                    </NavLink>

                    {/* <form class="mb-0 hidden lg:flex">
                        <div class="relative">
                            <input
                                class="h-10 rounded-lg border-gray-200 pe-10 text-sm placeholder-gray-300 focus:z-10"
                                placeholder="Search..."
                                type="text"
                            />

                            <button
                                type="submit"
                                class="absolute inset-y-0 end-0 rounded-r-lg p-2 text-gray-600"
                            >
                                <span class="sr-only">Submit Search</span>
                                <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clip-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        fill-rule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </form> */}
                </div>

                <div class="flex w-0 flex-1 justify-end lg:hidden">
                    <button class="rounded-full bg-gray-100 p-2 text-gray-500" type="button">
                        <span class="sr-only">Menu</span>
                        <svg
                            class="h-5 w-5"
                            fill="currentColor"
                            viewbox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                clip-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                fill-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>

                <nav
                    aria-label="Site Nav"
                    class="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"
                >
                    <NavLink class="text-gray-900" href="">Jobs</NavLink>
                    <NavLink class="text-gray-900" href="">Companies</NavLink>
                    <NavLink class="text-gray-900" href="">About us</NavLink>
                    <NavLink class="text-gray-900" href="">Contact</NavLink>
                </nav>

                <div class="hidden items-center gap-4 lg:flex">
                    <a
                        href="#"
                        class="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-600"
                    >Sign in

                    </a>

                    <a
                        href="#"
                        class="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
                    >
                        Create account
                    </a>
                </div>
            </div>

            <div class="border-t border-gray-100 lg:hidden">
                <nav
                    class="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium"
                >
                    <a class="shrink-0 px-4 text-gray-900" href="">About</a>
                    <a class="shrink-0 px-4 text-gray-900" href="">Blog</a>
                    <a class="shrink-0 px-4 text-gray-900" href="">Projects</a>
                    <a class="shrink-0 px-4 text-gray-900" href="">Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar