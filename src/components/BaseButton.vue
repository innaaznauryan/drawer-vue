<template>
  <button
      class="btn"
      :class="{isActive: buttonIsActive}"
      :style="{cursor: buttonCursor}"
      @click="handleClick"
      popovertarget="modal"
      popovertargetaction="show">
    <slot></slot>
  </button>
</template>

<script setup>
import {
  setDirection,
  setBackdrop,
  setScroll,
  buttonIsActive,
  buttonCursor,
  buttonIsDisabled
} from "../../composable/useParams.js"


const handleClick = (e) => {
  if (e.target.dataset.dir) {
    setDirection(e.target.dataset.dir)
    console.log(buttonCursor.value, buttonIsDisabled.value)
  }
  if (e.target.dataset.backdrop) {
    setBackdrop(e.target.dataset.backdrop)
  }
  if (e.target.dataset.scroll) {
    setScroll(e.target.dataset.scroll)
  }
}
</script>