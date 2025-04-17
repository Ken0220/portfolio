<template>
    <nav class="navbar w-full md:flex md:justify-end md:items-center ">
                <ul class="navbar-list flex bg-[rgb(32,32,34)] md:justify-end justify-evenly items-center md:bg-[rgba(43,43,44,0.75) p-5 gap-5 md:gap-10 rounded-tl-2xl md:rounded-tl-none rounded-tr-2xl  md:rounded-bl-2xl border-[1px] border-[rgb(56,56,56)] font-bold flex-wrap">
                    <li class="navbar-item"><RouterLink active-class="text-[rgb(255,219,112)]" class="hover:text-[rgba(214,214,214,0.7)] transition-all duration-300" to="/about">About</RouterLink></li>
                    <li class="navbar-item"><RouterLink active-class="text-[rgb(255,219,112)]" class="hover:text-[rgba(214,214,214,0.7)] transition-all duration-300"   to="/resume">Resume</RouterLink></li>
                    <li class="navbar-item"><RouterLink active-class="text-[rgb(255,219,112)]" class="hover:text-[rgba(214,214,214,0.7)] transition-all duration-300"   to="/portfolio">Portfolio</RouterLink></li>
                    <li class="navbar-item"><RouterLink active-class="text-[rgb(255,219,112)]" class="hover:text-[rgba(214,214,214,0.7)] transition-all duration-300"   to="/blog">Blog</RouterLink></li>
                    <li class="navbar-item"><RouterLink active-class="text-[rgb(255,219,112)]" class="hover:text-[rgba(214,214,214,0.7)] transition-all duration-300"   to="/contact">Contact</RouterLink></li>
                </ul>
            </nav>
</template>