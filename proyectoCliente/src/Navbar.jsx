import React from 'react'

function Navbar() {
    return (
        <div>
            <nav class="bg-gray-800">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="relative flex h-16 items-center justify-between">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="absolute -inset-0.5"></span>
                                <span class="sr-only">Open main menu</span>
                         
                                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
  
                                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex flex-shrink-0 items-center">
                                <img class="h-8 w-auto" src="data:image/png;base64,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" alt="Your Company"/>
                            </div>
                            <div class="hidden sm:ml-6 sm:block">
                                <div class="flex space-x-4">
                                    <a href="#" class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Dashboard</a>
                                    <a href="Register" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Register</a>
                                    <a href="Login" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Login</a>
                                    <a href="Support" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Support</a>
                                </div>
                            </div>
                        </div>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span class="absolute -inset-1.5"></span>
                                <span class="sr-only">View notifications</span>
                                {/* <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg> */}
                            </button>
                            <div class="relative ml-3">
                                <div>
                                    <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span class="absolute -inset-1.5"></span>
                                        <span class="sr-only">Open user menu</span>
                                        <img class="h-8 w-8 rounded-full" src="data:image/png;base64,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" alt=""/>
                                    </button>
                                </div>

                                {/* <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div class="sm:hidden" id="mobile-menu">
                    <div class="space-y-1 px-2 pb-3 pt-2">
                        <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                    </div>
                </div> */}
            </nav>

        </div>
    )
}

export default Navbar
