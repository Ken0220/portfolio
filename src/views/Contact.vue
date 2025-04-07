<template>
    <article class="contact " data-page="contact">
                <header>
                    <h2 class="h2 article-title text-3xl font-bold pb-10 relative before:content-[''] before:absolute before:size-10 before:w-10 before:h-1 before:bottom-5 before:rounded-2xl before:bg-gradient-to-r before:from-[rgb(255,219,112))] before:to-[rgb(255,187,92)]">Contact</h2>
                </header>

                <section class="mapbox overflow-hidden border border-[rgb(56,56,56)] rounded-2xl w-full h-[500px]" data-mapbox>
                    <figure class="size-full" style="filter: grayscale(1) invert(1);">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
                         width="100%" height="100%" loading="lazy"></iframe>
                    </figure>
                </section>

                <section class="contact-form">
                    <h3 class="h3 form-title py-10 text-2xl font-bold ">Contact Form</h3>

                    <form action="#" class="form flex flex-col items-end justify-center gap-10" data-form>
                        <div class="input-wrapper flex gap-10 w-full">
                            <input type="text" name="fullname" class="form-input w-1/2 border border-[rgb(56,56,56)] rounded-2xl px-2 py-4 outline-none focus:border-red-400" placeholder="Full name" required data-form-input>
                            <input type="email" name="email" class="form-input w-1/2 border border-[rgb(56,56,56)] rounded-2xl px-2 py-4 outline-none focus:border-red-400" placeholder="Email Address" required data-form-input>
                        </div>

                        <textarea name="message" class="form-input w-full min-h-[150px] border border-[rgb(56,56,56)] rounded-2xl px-2 py-4 outline-none focus:border-red-400" placeholder="Your Message" required data-form-input=""></textarea>

                        <button style="" class="form-btn border-gradient-onyx shadow-custom3 transition-all duration-300 rounded-2xl flex justify-center items-center w-fit p-5 gap-2 text-[rgb(255,219,112)]" type="submit" disabled data-form-btn>
                            <ion-icon name="paper-plane"></ion-icon>
                            <span>Send Message</span>
                        </button>
                    </form>
                </section>
            </article>
</template>