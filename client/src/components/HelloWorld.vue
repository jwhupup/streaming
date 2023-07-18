<template>
  <video ref="videoEl" controls muted width="800">
    your brower is not support video
  </video>
  <button @click="handleSound">open sound</button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import flv from 'flv.js'

const videoEl = ref<HTMLMediaElement>()
const flvPlayer = ref<flv.Player>()

onMounted(() => {
  if (videoEl.value && flv.isSupported()) {
    flvPlayer.value = flv.createPlayer({
        type: 'flv',
        isLive: true,
        hasAudio: false,
        hasVideo: true,
        url: 'ws://localhost:8000/live/streaming.flv'
    }, {
      enableStashBuffer: false,
      stashInitialSize: 128
    });
    flvPlayer.value.attachMediaElement(videoEl.value);
    flvPlayer.value.load();
    flvPlayer.value.play();
  }
})

const handleSound = () => {
  if (videoEl.value) {
    videoEl.value.muted = false
  }
}
</script>

<style scoped>

</style>
