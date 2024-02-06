<template>
  <div class="popoverContent">
    <div class="heading">
      <h2>
        <IconInfoCircleFilled/>
        <span>{{ header }}</span>
      </h2>
      <button @click="handleClose" class="close">
        <IconX/>
      </button>
    </div>
    <p>Use the Drawer component (or “off-canvas”) to show a fixed element relative to the document page from any side
      for navigation, contact forms, informational purposes or other user actions.</p>
    <div class="links">
      <a class="btn secondary isActive" href="https://tailwindcss.com/" target="_blank">Tailwind</a>
      <a class="btn withArrow isActive" href="https://flowbite.com/docs/components/drawer/" target="_blank">Drawer Component</a>
    </div>
  </div>
</template>

<script setup>
import {IconInfoCircleFilled, IconX} from "@tabler/icons-vue"
import {header} from "../../composable/useParams.js"

const emit = defineEmits(["close"])
const handleClose = () => {
  emit("close")
}
</script>

<style scoped>
.popoverContent {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
}

.heading {
  display: flex;
  justify-content: space-between;
  color: #808080;
}

h2 {
  display: flex;
  align-items: center;
  gap: 10px;
}

h2 span {
  font-size: 18px;
}

.close {
  background-color: #ffffff;
  border: 0;
  padding: 5px 10px;
  border-radius: 7px;
  font-size: 18px;
  color: #808080;
  display: grid;
  place-content: center;
}

.close:hover {
  background-color: #d3d3d3;
  color: black;
  cursor: pointer;
}

p {
  color: #808080;
}

.links {
  display: flex;
  gap: 16px;
}

.withArrow {
  display: flex;
  align-items: center;
  gap: 7px;
}

.secondary {
  color: #000000;
  background-color: #ffffff;
  border: 1px solid #d3d3d3;
}

.secondary:hover {
  color: #1a56db;
  background-color: #1118271a;
}

.secondary:focus {
  outline: 5px solid #11182733;
}
</style>