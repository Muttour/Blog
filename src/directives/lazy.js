import { debounce } from "@/utils";
import eventBus from "@/eventBus";
import defaultGif from "@/assets/gifs/default.gif";

let imgs = [];
function handleImg(img) {
    img.dom.src = defaultGif;
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const imgHeight = rect.height;
    const top = rect.top;
    if (top <= clientHeight && top >= -imgHeight) {
        img.dom.src = img.src;
        imgs = imgs.filter(item => item.dom.src != img.src)
    }
}

export default {
    inserted(el, binding) {
        const img = {
            dom: el,
            src: binding.value,
        };
        imgs.push(img);
        handleImg(img);
    },
    unbind(el) {
        console.log(imgs);
        imgs = imgs.filter((img) => img.dom !== el);
    },

}

eventBus.$on("mainScroll", debounce(handleScroll, 50))

function handleScroll() {
    for (let item of imgs) {
        handleImg(item);
    }
}
