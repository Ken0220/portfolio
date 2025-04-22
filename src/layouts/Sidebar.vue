<template>
  <aside
    class="sidebar w-full lg:max-w-3/12 flex flex-col lg:sticky top-5 h-full items-center p-5 sm:p-10 mb-4 bg-[rgb(32,32,34)] border border-[rgb(56,56,56)] rounded-2xl shadow-xl"
  >
    <div class="sidebar-info flex flex-col justify-center items-center">
      <figure
        class="avatar-box size-[150px] bg-gradient-to-b from-[rgb(63,63,64)] to-[rgb(48,48,48)] flex justify-center items-center rounded-2xl"
      >
        <img
          src="https://i.postimg.cc/JzBWVhW4/my-avatar.png"
          alt="avatar"
          width="140"
        />
      </figure>

      <div class="info-content text-center whitespace-nowrap">
        <h1 class="name text-3xl py-5 font-semibold" title="Richard Hanrick">
          Richard Hanrick
        </h1>
        <p
          class="text-sm title bg-[rgba(43,43,44,0.75)] inline px-3 py-1 rounded-xl"
        >
          Web Developer
        </p>
      </div>

      <button class="info-more-btn hidden" data-sidebar-btn>
        <span>Show Contacts</span>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
    </div>

    <div class="sidebar-info-more">
      <div
        class="separator w-full bg-[rgb(56,56,56)] h-[1px] rounded-full my-10"
      ></div>

      <ul class="contacts-list lg:grid-cols-1 grid-cols-1 grid sm:grid-cols-2 justify-items-start gap-5 w-full">
        <li class="contact-item flex justify-center gap-5">
          <div
            class="icon-box justify-center items-center relative rounded-xl size-12 border-gradient-onyx shadow-custom1 flex max-[380px]:hidden"
          >
            <ion-icon name="mail-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p
              class="contact-title uppercase text-sm text-[rgba(214,214,214,0.7)]"
            >
              Email
            </p>

            <a href="mailto:richard@example.com" class="contact-link lg:text-sm text-base xl:text-base"
              >richardexample.com</a
            >
          </div>
        </li>

        <li class="contact-item flex justify-center gap-5">
          <div
            class="icon-box flex max-[380px]:hidden justify-center items-center relative rounded-xl size-12 border-gradient-onyx shadow-custom1"
          >
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p
              class="contact-title uppercase text-sm text-[rgba(214,214,214,0.7)]"
            >
              Phone
            </p>

            <a href="tel:+12133522795" class="contact-link lg:text-sm text-base xl:text-base"
              >+1 (213) 352-2795</a
            >
          </div>
        </li>

        <li class="contact-item flex justify-center gap-5">
          <div
            class="icon-box flex max-[380px]:hidden justify-center items-center relative rounded-xl size-12 border-gradient-onyx shadow-custom1"
          >
            <ion-icon name="calendar-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p
              class="contact-title uppercase text-sm text-[rgba(214,214,214,0.7)]"
            >
              Birthday
            </p>

            <time datetime="1982-06-23" class="lg:text-sm text-base xl:text-base">June 23, 1982</time>
          </div>
        </li>

        <li class="contact-item flex justify-center gap-5">
          <div
            class="icon-box flex max-[380px]:hidden justify-center items-center relative rounded-xl size-12 border-gradient-onyx shadow-custom1"
          >
            <ion-icon name="location-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p
              class="contact-title uppercase text-sm text-[rgba(214,214,214,0.7)]"
            >
              Location
            </p>

            <address class="lg:text-sm text-base xl:text-base">Sacramento, California, USA</address>
          </div>
        </li>
      </ul>

      <div
        class="separator w-full bg-[rgb(56,56,56)] h-[1px] rounded-full my-10"
      ></div>

      <ul class="social-list flex w-full items-center justify-evenly">
        <li class="social-item group">
          <a href="#" class="social-link"
            ><ion-icon
              class="size-8 group-hover:text-[rgb(255,219,112)]"
              name="logo-facebook"
            ></ion-icon
          ></a>
        </li>
        <li class="social-item group">
          <a href="#" class="social-link"
            ><ion-icon
              class="size-8 group-hover:text-[rgb(255,219,112)]"
              name="logo-twitter"
            ></ion-icon
          ></a>
        </li>
        <li class="social-item group">
          <a href="#" class="social-link"
            ><ion-icon
              class="size-8 group-hover:text-[rgb(255,219,112)]"
              name="logo-instagram"
            ></ion-icon
          ></a>
        </li>
      </ul>
    </div>
  </aside>
</template>
