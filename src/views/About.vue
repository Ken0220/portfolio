<script setup lang="ts">
import Card from "@/components/Card.vue";
import Header from "@/components/Header.vue";
import Testimonials from "@/components/Testimonials.vue";
import Clients from "@/components/Clients.vue";
import { clients, testemonials, cardElements } from "../assets/data/demo";
import { ref } from "vue";
import MotionModal from "@/components/MotionModal.vue";

const myData = ref(
  testemonials.map((item) => ({
    ...item,
    showModal: false,
  }))
);

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Scrollbar } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/scrollbar";
</script>

<template>
  <article class="about active" data-page="about">
    <Header>About</Header>

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
      <ul class="grid md:grid-cols-2 gap-5 py-5">
        <Card :icon-src="el.icon" v-for="(el, i) in cardElements" :key="i">
          <template v-slot:description>{{ el.description }}</template>
          <template v-slot:title>{{ el.title }}</template>
        </Card>
      </ul>
    </section>

    <section class="testimonials">
      <h3 class="h3 testimonials-title text-3xl font-bold py-5">
        Testimonials
      </h3>
      <ul class="testimonials-list has-scrollbar flex gap-10 py-5">
        <swiper
          :modules="[Scrollbar, Autoplay]"
          :autoPlay="{ delay: 3000 }"
          :breakpoints="{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 2.5,
            },
          }"
          class="w-full flex items-center justify-center"
        >
          <swiper-slide
            v-for="(el, index) in myData"
            :key="index"
            class="py-10 px-5"
            ><Testimonials @click="el.showModal = true" :icon-src="el.avatar">
              <template v-slot:personName>{{ el.name }}</template>
              <template v-slot:text>{{ el.comment }}</template>
            </Testimonials>
            <MotionModal
              :name="el.name"
              :comment="el.comment"
              :icon-src="el.avatar"
              v-model="el.showModal"
              title="Animated Modal"
            ></MotionModal>
          </swiper-slide>
        </swiper>
      </ul>
    </section>

    <section class="clients">
      <h3 class="h3 clients-title text-3xl font-bold py-5">Clients</h3>
      <ul class="clients-list has-scrollbar flex overflow-x-scroll ">
        <swiper
          :modules="[Scrollbar]"
          :breakpoints="{
            540: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },

            1200: {
              slidesPerView: 3,
            },
          }"
          class="w-full flex items-center justify-center"
        >
          <swiper-slide
            v-for="(el, index) in clients"
            :key="index"
            class="py-10"
          >
            <Clients :icon-src="el.link"></Clients>
          </swiper-slide>
        </swiper>
      </ul>
    </section>
  </article>
</template>
