<template>
  <div
      id="modal"
      ref="modal"
      :popover="popoverMode"
      :style="{...dimensions[direction]}"
      :class="{
        withBackdrop: withBackdrop,
        popoverLeft: direction === 'left',
        popoverRight: direction === 'right',
        popoverTop: direction === 'top',
        popoverBottom: direction === 'bottom'
      }"
      @toggle="handleToggle">
    <Content @close="closePopover"/>
  </div>
</template>

<script setup>
import {ref} from "vue"
import Content from "@/components/Content.vue"
import {
  direction,
  popoverMode,
  withBackdrop,
  buttonIsActive,
  buttonCursor,
  buttonIsDisabled
} from "../../composable/usePopovers.js"

const modal = ref(null)
const dimensions = {
  left: {left: 0, right: 'auto', top: 0, bottom: 'auto', width: '400px', height: '100vh'},
  right: {left: 'auto', right: 0, top: 0, bottom: 'auto', width: '400px', height: '100vh'},
  top: {left: 0, right: 'auto', top: 0, bottom: 'auto', width: '100%', height: 'fit-content'},
  bottom: {left: 0, right: 'auto', top: 'auto', bottom: 0, width: '100%', height: 'fit-content'}
}
const closePopover = () => {
  modal.value.hidePopover()
}
const handleToggle = (e) => {
  if (!e.target.matches(":popover-open")) {
    document.body.style.overflowY = "visible"
    buttonIsActive.value = true
    buttonCursor.value = "pointer"
    buttonIsDisabled.value = false
  } else if (e.target.popover === "auto") {
    buttonIsActive.value = false
    buttonCursor.value = "default"
    buttonIsDisabled.value = true
  }
}
</script>

<style scopped>
#modal {
  border: 0;
  position: fixed;
}

.popoverLeft {
  animation: disappearLeft .3s ease-in;
}

.popoverLeft:popover-open {
  animation: appearLeft .3s ease-in;
}

.popoverRight {
  animation: disappearRight .3s ease-in;
}

.popoverRight:popover-open {
  animation: appearRight .3s ease-in;
}

.popoverTop {
  animation: disappearTop .3s ease-in;
}

.popoverTop:popover-open {
  animation: appearTop .3s ease-in;
}

.popoverBottom {
  animation: disappearBottom .3s ease-in;
}

.popoverBottom:popover-open {
  animation: appearBottom .3s ease-in;
}

.withBackdrop::backdrop {
  background-color: #00000095;
  backdrop-filter: blur(3px);
  animation: blurIn 0.2s ease-in;
}

@keyframes blurIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes appearLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes disappearLeft {
  0% {
    transform: translateX(0);
    opacity: 1;
    display: block;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}

@keyframes appearRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes disappearRight {
  0% {
    transform: translateX(0);
    opacity: 1;
    display: block;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

@keyframes appearTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes disappearTop {
  0% {
    transform: translateY(0);
    opacity: 1;
    display: block;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}

@keyframes appearBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes disappearBottom {
  0% {
    transform: translateY(0);
    opacity: 1;
    display: block;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}
</style>