<script>
export default {
  name: "VideoCarousel",
  data() {
    return {
      videos: [
        {
          tumbnail: "Video_WantTheTruth_Thumbnail.jpg",
          videoLink: "https://vm.tiktok.com/ZMMXQhAWQ/",
          viewCount: "0",
        },
        {
          tumbnail: "Video_MinecraftIsDying_Thumbnail.jpg",
          videoLink: "https://vm.tiktok.com/ZMM4dbPd4/",
          viewCount: "0",
        },
        {
          tumbnail: "Video_AreYouTired_Thumbnail.jpg",
          videoLink: "https://vm.tiktok.com/ZMM4dCLWX/",
          viewCount: "0",
        },
        {
          tumbnail: "Video_PigRace_Thumbnail.jpg",
          videoLink: "https://vm.tiktok.com/ZMM4Reh4F/",
          viewCount: "0",
        },
        {
          tumbnail: "Video_IsntItCrazy_Thumbnail.jpg",
          videoLink: "https://vm.tiktok.com/ZMM4RYd8U/",
          viewCount: "0",
        },
        {
          tumbnail: "Blank_Thumbnail.jpg",
          videoLink: "https://minemotion.org",
          viewCount: "0",
        },
        {
          tumbnail: "Blank_Thumbnail.jpg",
          videoLink: "https://minemotion.org",
          viewCount: "0",
        },
        {
          tumbnail: "Blank_Thumbnail.jpg",
          videoLink: "https://minemotion.org",
          viewCount: "0",
        },
      ],
      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 4,
          numScroll: 1,
        },
        {
          breakpoint: "768px",
          numVisible: 3,
          numScroll: 1,
        },
        {
          breakpoint: "624px",
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: "504px",
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: "428px",
          numVisible: 2,
          numScroll: 1,
        },
      ],
    };
  },
  methods: {
    openVideo(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<template>
  <div id="OurWork" class="carousel-container">
    <div class="head">
      <h1 class="title">Our Work</h1>
    </div>

    <Carousel
      :value="videos"
      :numVisible="5"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="3000"
    >
      <template #item="slotProps">
        <div
          class="surface-border border-round m-2"
          @click="openVideo(slotProps.data.videoLink)"
        >
          <div class="post-wrapper">
            <img
              :src="'/src/assets/' + slotProps.data.tumbnail"
              :alt="slotProps.data.name"
              class="w-full border-round"
            />
            <div class="view-button">
              <div class="p-button">
                <i class="pi pi-tiktok mr-2"></i>
                View
              </div>
            </div>
            <div class="view-count">
              <i class="pi pi-caret-right"></i>
              <span class="view-count-number">{{
                slotProps.data.viewCount
              }}</span>
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<style lang="scss" scoped>
.carousel-container {
  padding: 128px 0;
  margin: auto;
  width: 90%;

  .head {
    display: flex;
  }

  .post-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
      transition: transform 0.3s ease;
      display: block; // Ensure img takes up full width available
    }

    &:hover img {
      transform: scale(1.05);
    }

    .view-button {
      position: absolute;
      opacity: 0;
      transition: opacity 0.3s ease;
      background-color: rgba(0, 0, 0, 0.5); // Semi-transparent black
      border-radius: 5px;
      top: 0;
      left: 0;
      width: 100%; // Cover the full area of the image
      height: 100%; // Cover the full height of the image
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      transition: transform 0.3s ease;
    }

    .view-count {
      position: absolute;
      bottom: 10px;
      left: 10px;
      color: white; // Choose color that stands out on your videos
      background-color: rgba(0, 0, 0, 0.5); // Semi-transparent background
      padding: 5px;
      border-radius: 5px;

      .view-count-number {
      }
    }

    &:hover .view-button {
      opacity: 1;
      pointer-events: all;
      transform: scale(1.05);
    }
  }
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
