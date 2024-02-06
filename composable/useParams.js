import {ref} from "vue"

export const popoverMode = ref("")
export const withBackdrop = ref(true)
export const header = ref("Info")
export const direction = ref("left")
export const buttonIsActive = ref(true)
export const buttonCursor = ref("cursor")
export const buttonIsDisabled = ref(false)

export function setDefaultValues() {
    direction.value = "left"
    popoverMode.value = ""
    withBackdrop.value = true
    document.body.style.overflowY = "visible"
    header.value = "Info"
}

export function setDirection(dir) {
    setDefaultValues()
    switch (dir) {
        case "left":
            direction.value = "left"
            header.value = "Left Drawer"
            break
        case "right":
            direction.value = "right"
            header.value = "Right Drawer"
            break
        case "top":
            direction.value = "top"
            header.value = "Top Drawer"
            break
        case "bottom":
            direction.value = "bottom"
            header.value = "Bottom Drawer"
            break
        default:
            direction.value = "left"
            header.value = "Left Drawer"
    }
}

export function setBackdrop(backdrop) {
    setDefaultValues()
    backdrop === "no-backdrop" && (withBackdrop.value = false)
    popoverMode.value = "manual"
}

export function setScroll(scroll) {
    setDefaultValues()
    scroll === "no-scroll" && (document.body.style.overflowY = "hidden")
}