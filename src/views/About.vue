<script setup lang="ts">
import Card from "@/components/Card.vue";
import Testimonials from "@/components/Testimonials.vue";
import Clients from "@/components/Clients.vue";
import { clients, testemonials } from "../assets/data/demo";
import { ref } from "vue";
const showModal = ref(false);
const myData = ref(testemonials);

const handleConfirm = () => {
  // Handle confirmation action
  console.log("Confirmed!");
  showModal.value = false;
};

import { Swiper, SwiperSlide } from "swiper/vue";
import { Scrollbar } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/scrollbar";
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
          <template v-slot:description
            >The most modern and high-quality design made at a professional
            level.</template
          >
          <template v-slot:title> Web Design </template>
        </Card>
        <Card icon-src="https://i.postimg.cc/ZqgqrqzG/icon-dev.png">
          <template v-slot:description
            >High-quality development of sites at the professional
            level.</template
          >
          <template v-slot:title> Web development </template>
        </Card>
        <Card icon-src="https://i.postimg.cc/xjLdzYxZ/icon-app.png">
          <template v-slot:description
            >Professional development of applications for iOS and
            Android.</template
          >
          <template v-slot:title>Mobile apps</template>
        </Card>
        <Card icon-src="https://i.postimg.cc/0NL8zHpx/icon-photo.png">
          <template v-slot:description
            >I make high-quality photos of any category at a professional
            level.</template
          >
          <template v-slot:title>Photography</template>
        </Card>
      </ul>
    </section>

    <section class="testimonials">
      <h3 class="h3 testimonials-title text-3xl font-bold py-5">
        Testimonials
      </h3>
      <ul class="testimonials-list has-scrollbar flex gap-10 py-5">
        <swiper
          :modules="[Scrollbar]"
          :slides-per-view="2.5"
          class="w-full flex items-center justify-center"
        >
          <swiper-slide
            v-for="(el, index) in testemonials"
            :key="index"
            class="p-10"
            ><Testimonials @click="showModal = true" :icon-src="el.avatar">
              <template v-slot:personName>{{ el.name }}</template>
              <template v-slot:text>{{ el.comment }}</template>
            </Testimonials>
          </swiper-slide>
        </swiper>
      </ul>
    </section>

    <section class="clients">
      <h3 class="h3 clients-title text-3xl font-bold py-5">Clients</h3>
      <ul class="clients-list has-scrollbar flex overflow-x-scroll py-10">
        <swiper
          :modules="[Scrollbar]"
          :slides-per-view="3"
          class="w-full flex items-center justify-center"
        >
          <swiper-slide
            v-for="(el, index) in clients"
            :key="index"
            class="p-10"
          >
            <Clients :icon-src="el.link"></Clients>
          </swiper-slide>
        </swiper>
      </ul>
    </section>
  </article>
</template>
<style scoped>
:deep(.swiper-scrollbar) {
  height: 5px;
  width: 50%;
  background-color: #f3f4f6;
  left: 25%;
  border-radius: 9999px;
}
:deep(.swiper-scrollbar-drag) {
  background-color: rgb(206, 177, 90);
  border-radius: 9999px; /* emerald-500 */
}
</style>
