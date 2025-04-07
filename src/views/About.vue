<script setup lang="ts">
import Card from "@/components/Card.vue";
import Testimonials from "@/components/Testimonials.vue";
import Clients from "@/components/Clients.vue"
</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2
        class="h2 article-title text-3xl font-bold pb-10 relative before:content-[''] before:absolute before:size-10 before:w-10 before:h-1 before:bottom-5 before:rounded-2xl before:bg-gradient-to-r before:from-[rgb(255,219,112))] before:to-[rgb(255,187,92)]"
      >
        About me
      </h2>
    </header>

    <section
      class="about-text font-light text-[rgb(214,214,214)] py-5 text-justify"
    >
      <p>
        I'm Creative Director and UI/UX Designer from Sydney, Australia, working
        in web development and print media. I enjoy turning complex problems
        into simple, beautiful and intuitive designs.
      </p>
      <br />
      <p>
        My job is to build your website so that it is functional and
        user-friendly but at the same time attractive. Moreover, I add personal
        touch to your product and make sure that is eye-catching and easy to
        use. My aim is to bring across your message and identity in the most
        creative way. I created web design for many famous brand companies.
      </p>
    </section>

    <section class="service">
      <h3 class="h3 service-title text-3xl font-bold py-5">What I'm doing</h3>

      <ul class="service-list grid grid-cols-2 gap-5">
        <Card icon-src="https://i.postimg.cc/4389jZkP/icon-design.png">
            <template v-slot:description>The most modern and high-quality design made at a professional level.</template>
          <template v-slot:title> Web Design </template>
        </Card>
        <Card icon-src="https://i.postimg.cc/ZqgqrqzG/icon-dev.png">
            <template v-slot:description>High-quality development of sites at the professional level.</template>
          <template v-slot:title> Web development </template>
        </Card>
        <Card icon-src="https://i.postimg.cc/xjLdzYxZ/icon-app.png">
            <template v-slot:description>Professional development of applications for iOS and Android.</template>
          <template v-slot:title>Mobile apps</template>
        </Card>
        <Card icon-src="https://i.postimg.cc/0NL8zHpx/icon-photo.png">
            <template v-slot:description>I make high-quality photos of any category at a professional level.</template>
          <template v-slot:title>Photography</template>
        </Card>
      </ul>
    </section>

    <section class="testimonials">
      <h3 class="h3 testimonials-title text-3xl font-bold py-5">Testimonials</h3>
      <ul class="testimonials-list has-scrollbar flex gap-10 overflow-x-scroll p-10" >
        <Testimonials icon-src="https://i.postimg.cc/zGDHfn3G/avatar-1.png">
          <template v-slot:personName>Daniel Lewis</template>
          <template v-slot:text>Richard was hired to create a corporate identity. It's modern, clean and with a beautiful design that got a lot of praises from colleagues and visitors. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.</template>
        </Testimonials>
        <Testimonials icon-src="https://i.postimg.cc/DwY0yHtx/avatar-2.png">
          <template v-slot:personName>Jessica Miller</template>
          <template v-slot:text>Working with Richard has been an absolute pleasure. I was impressed with his attention to detail, his web design skills and his professional approach to our timelines and processes.</template>
        </Testimonials>
        <Testimonials icon-src="https://i.postimg.cc/fRFWhX9F/avatar-3.png">
          <template v-slot:personName>Emily Evans</template>
          <template v-slot:text>I couldn't be happier with the website that Richard created for us. His attention to detail and creativity is unmatched. Our clients frequently compliment the design, and it has significantly improved our brand image.</template>
        </Testimonials>
        <Testimonials icon-src="https://i.postimg.cc/zXv1Xv81/avatar-4.png">
          <template v-slot:personName>Henry Williams</template>
          <template v-slot:text>I was overwhelmed with the thought of redesigning my online store, but Richard made the process seamless. The site is not only visually appealing but also optimized for conversions. I've seen a 50% increase in traffic since the launch!</template>
        </Testimonials>
      </ul>
    </section>

    <div class="modal-container hidden" data-modal-container>
      <div class="overlay" data-overlay></div>

      <section class="testimonials-modal">
        <button class="modal-close-btn" data-modal-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div class="modal-img-wrapper">
          <figure class="modal-avatar-box">
            <img
              src="https://i.postimg.cc/zGDHfn3G/avatar-1.png"
              alt="Daniel Lewis"
              width="80"
              data-modal-img
            />
          </figure>

          <img
            src="https://i.postimg.cc/mZ00RwX7/icon-quote.png"
            alt="quote icon"
          />
        </div>

        <div class="modal-content">
          <h4 class="h3 modal-title" data-modal-title>Daniel Lewis</h4>
          <time datetime="2023-06-14">14 June, 2023</time>

          <div class="modal-text" data-modal-text>
            <p>
              Richard was hired to create a corporate identity. It's modern,
              clean and with a beautiful design that got a lot of praises from
              colleagues and visitors. We were very pleased with the work done.
              He has a lot of experience and is very concerned about the needs
              of client.
            </p>
          </div>
        </div>
      </section>
    </div>

    <section class="clients">
      <h3 class="h3 clients-title text-3xl font-bold py-5">Clients</h3>

      <ul class="clients-list has-scrollbar flex overflow-x-scroll py-10">
        <Clients icon-src="https://i.postimg.cc/YqfKyG66/logo-1-color.png"></Clients>
        <Clients icon-src="https://i.postimg.cc/fWm6JtgG/logo-2-color.png"></Clients>
        <Clients icon-src="https://i.postimg.cc/Bb07xpwd/logo-3-color.png"></Clients>
        <Clients icon-src="https://i.postimg.cc/hv1yMmkh/logo-4-color.png"></Clients>
        <Clients icon-src="https://i.postimg.cc/ry1P86Dc/logo-5-color.png"></Clients>
        <Clients icon-src="https://i.postimg.cc/SsWDN8NV/logo-6-color.png"></Clients>
      </ul>
    </section>
  </article>
</template>
