<template>
  <Teleport to="body">
    <div
      v-if="isVisible"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <!-- Backdrop with fade in/out -->
      <div @click="closeOnBackdrop ? closeModal() : null" class="absolute inset-0 bg-black transition-opacity duration-300 ease-in-out" :class="isActive ? 'opacity-50' : 'opacity-0'"></div>

      <!-- Modal container with animations -->
      <div
        @click.stop
        class="relative w-2/5 p-10 overflow-y-auto border border-[rgb(56,56,56)] bg-[rgb(32,32,34)] rounded-2xl transform transition-all duration-300 ease-in-out"
        :class="
          isActive
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-4 scale-95 opacity-0'
        "
      >
      <button
            v-if="showCloseButton"
            @click="closeModal"
            class="border absolute top-2 right-2 size-7 flex items-center justify-center rounded-sm bg-gradient-onyx opacity-70 hover:opacity-100"
            aria-label="Close modal"
          >
          <ion-icon name="close-outline"></ion-icon>
          </button>
        <!-- Header -->
        <div class="flex items-center justify-center gap-10">
          <div class="modal-img-wrapper flex flex-col items-center justify-evenly min-w-1/5 gap-5">
          <figure class="modal-avatar-box bg-gradient-onyx rounded-2xl">
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
        <div class="modal-content flex flex-col gap-2">
          <h4 class="h3 modal-title font-bold text-3xl text-white " data-modal-title>
            Daniel Lewis
          </h4>
          <time
            datetime="2023-06-14"
            class="text-[rgb(214,214,214)] font-semibold"
            >14 June, 2023</time
          >

          <div class="modal-text" data-modal-text>
            <p class="font-light text-[rgb(214,214,214)] text-justify">
              Richard was hired to create a corporate identity. It's modern,
              clean and with a beautiful design that got a lot of praises from
              colleagues and visitors. We were very pleased with the work done.
              He has a lot of experience and is very concerned about the needs
              of client.
            </p>
          </div>
        </div>
        </div>

        <!-- Body -->
        
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "Modal Title",
  },
  showCloseButton: {
    type: Boolean,
    default: true,
  },
  closeOnBackdrop: {
    type: Boolean,
    default: true,
  },
  closeOnEsc: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["update:modelValue", "close"]);

// Control visibility states
const isVisible = ref(false);
const isActive = ref(false);

// Handle escape key press
const handleEscKey = (event) => {
  if (event.key === "Escape" && isVisible.value && props.closeOnEsc) {
    closeModal();
  }
};

// Set up animation sequence
const openModal = async () => {
  isVisible.value = true;
  await nextTick();
  // Slight delay to ensure DOM is updated before animation
  setTimeout(() => {
    isActive.value = true;
  }, 10);
};

const closeModal = () => {
  isActive.value = false;
  // Wait for animation to finish before hiding
  setTimeout(() => {
    isVisible.value = false;
    emit("update:modelValue", false);
    emit("close");
  }, 300); // Match the duration in the CSS
};

// Watch for prop changes
watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal) {
      openModal();
    } else {
      closeModal();
    }
  },
  { immediate: true }
);

// Event listeners setup
onMounted(() => {
  document.addEventListener("keydown", handleEscKey);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleEscKey);
});
</script>
