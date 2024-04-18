<script>
export default {
  name: "VideoCarousel",
  data() {
    return {
      videos: [
        {
          name: "A",
          tumbnail: "Video_WantTheTruth_Thumbnail.jpg",
          videoLink: "https://vm.tiktok.com/ZMMXQhAWQ/",
        },
        {
          name: "B",
          tumbnail: "Video_AreYouTired_Thumbnail.jpg",
          videoLink: "https://vm.tiktok.com/ZMMXQhAWQ/",
        },
        {
          name: "C",
          tumbnail: "Blank_Thumbnail.jpg",
          videoLink: "https://vm.tiktok.com/ZMMXQhAWQ/",
        },
        {
          name: "D",
          tumbnail: "Blank_Thumbnail.jpg",
          videoLink: "https://vm.tiktok.com/ZMMXQhAWQ/",
        },
        {
          name: "E",
          tumbnail: "Blank_Thumbnail.jpg",
          videoLink: "https://vm.tiktok.com/ZMMXQhAWQ/",
        },
        {
          name: "F",
          tumbnail: "Blank_Thumbnail.jpg",
          videoLink: "https://vm.tiktok.com/ZMMXQhAWQ/",
        },
        {
          name: "G",
          tumbnail: "Blank_Thumbnail.jpg",
          videoLink: "https://vm.tiktok.com/ZMMXQhAWQ/",
        },
        {
          name: "H",
          tumbnail: "Blank_Thumbnail.jpg",
          videoLink: "https://vm.tiktok.com/ZMMXQhAWQ/",
        },
      ],
      responsiveOptions: [
        {
          breakpoint: "1024px", // Ensuring string format for breakpoints
          numVisible: 3,
          numScroll: 1,
        },
        {
          breakpoint: "768px",
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: "480px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    };
  },
  methods: {},
};
</script>

<template>
  <div class="carousel-container">
    <Carousel
      :value="videos"
      :numVisible="5"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="3000"
    >
      <template #item="slotProps">
        <div class="border-1 surface-border border-round m-2 p-3">
          <div class="mb-3">
            <div class="relative mx-auto">
              <img
                :src="'/src/assets/' + slotProps.data.tumbnail"
                :alt="slotProps.data.name"
                class="w-full border-round"
              />
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<style lang="scss" scoped>
.carousel-container {
  margin-left: 256px;
  margin-right: 256px;
}
@media only screen and (min-width: 428px) {
}

@media only screen and (min-width: 504px) {
}

@media only screen and (min-width: 624px) {
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 990px) {
}

@media only screen and (min-width: 1024px) {
}

@media only screen and (min-width: 1250px) {
}
</style>
