<script>
export default {
  name: "VideoCarousel",
  data() {
    return {
      videos: [
        {
          name: "Video With 780 thousand views",
          tumbnail: "Video_WantTheTruth_Thumbnail.jpg",
          videoLink: "https://vm.tiktok.com/ZMMXQhAWQ/",
          viewCount: "780.6K",
        },
        {
          name: "Video With 47 thousand views",
          tumbnail: "Video_MinecraftIsDying_Thumbnail.jpg",
          videoLink: "https://vm.tiktok.com/ZMM4dbPd4/",
          viewCount: "47.1K",
        },
        {
          name: "Video With 30 thousand views",
          tumbnail: "Video_AreYouTired_Thumbnail.jpg",
          videoLink: "https://vm.tiktok.com/ZMM4dCLWX/",
          viewCount: "30.7K",
        },
        {
          name: "Video With 13 thousand views",
          tumbnail: "Video_PigRace_Thumbnail.jpg",
          videoLink: "https://vm.tiktok.com/ZMM4Reh4F/",
          viewCount: "13.4K",
        },
        {
          name: "Video With 14 thousand views",
          tumbnail: "Video_IsntItCrazy_Thumbnail.jpg",
          videoLink: "https://vm.tiktok.com/ZMM4RYd8U/",
          viewCount: "14.8K",
        },
        {
          name: "Video With 2 thousand views",
          tumbnail: "Video_AshesOfHeaven_Thumbnail.jpg",
          videoLink: "https://vm.tiktok.com/ZMMbqRPrk/",
          viewCount: "2.6K",
        },
        {
          name: "Empty Video Slot",
          tumbnail: "Blank_Thumbnail.jpg",
          videoLink: "https://discord.com/invite/3GJtxaeYhD",
          viewCount: "Your Video Next!",
        },
        {
          name: "Empty Video Slot",
          tumbnail: "Blank_Thumbnail.jpg",
          videoLink: "https://discord.com/invite/3GJtxaeYhD",
          viewCount: "Your Video Next!",
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
  computed: {
    videosWithResolvedPaths() {
      return this.videos.map((video) => ({
        ...video,
        resolvedThumbnail: new URL(
          `../assets/${video.tumbnail}`,
          import.meta.url
        ).href,
      }));
    },
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
      <h1 class="title">See What <span class="red">Growth</span> Looks Like</h1>
      <h2 class="sub-title">
        Samples projects to give you a glimpse of what we deliver
      </h2>
    </div>

    <Carousel
      :value="videosWithResolvedPaths"
      :numVisible="5"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
    >
      <template #item="slotProps">
        <div
          class="surface-border border-round m-2"
          @click="openVideo(slotProps.data.videoLink)"
        >
          <div class="post-wrapper">
            <img
              :src="slotProps.data.resolvedThumbnail"
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
  padding: 32px 0;
  margin: auto;
  width: 90%;

  .head {
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: center;
    margin-bottom: 20px;

    .title {
      .red {
        color: var(--red-600);
      }
    }
    .sub-title {
      color: var(--surface-600);
      font-weight: 500;
    }
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
        margin-left: 4px;
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
  .carousel-container {
    padding: 80px 0;
  }
}
</style>
