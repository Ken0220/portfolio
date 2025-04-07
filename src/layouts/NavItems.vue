<template>
    <nav class="navbar w-full flex justify-end items-center">
                <ul class="navbar-list flex justify-end items-center bg-[rgba(43,43,44,0.75)] p-5 gap-10 rounded-bl-2xl rounded-tr-2xl border-[1px] border-[rgb(56,56,56)] font-bold">
                    <li class="navbar-item"><RouterLink active-class="text-[rgb(255,219,112)]" class="hover:text-[rgba(214,214,214,0.7)] transition-all duration-300" to="/about">About</RouterLink></li>
                    <li class="navbar-item"><RouterLink active-class="text-[rgb(255,219,112)]" class="hover:text-[rgba(214,214,214,0.7)] transition-all duration-300"   to="/resume">Resume</RouterLink></li>
                    <li class="navbar-item"><RouterLink active-class="text-[rgb(255,219,112)]" class="hover:text-[rgba(214,214,214,0.7)] transition-all duration-300"   to="/portfolio">Portfolio</RouterLink></li>
                    <li class="navbar-item"><RouterLink active-class="text-[rgb(255,219,112)]" class="hover:text-[rgba(214,214,214,0.7)] transition-all duration-300"   to="/blog">Blog</RouterLink></li>
                    <li class="navbar-item"><RouterLink active-class="text-[rgb(255,219,112)]" class="hover:text-[rgba(214,214,214,0.7)] transition-all duration-300"   to="/contact">Contact</RouterLink></li>
                </ul>
            </nav>
</template>