import Icon from "@components/Icon";
import getComponentsRootDom from "./getComponentsRootDom";
import styles from "./showMessage.module.less";

export default function (options={}) {
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;
    
    const Box = document.createElement('div');
    //加入图标
    const icon = getComponentsRootDom(Icon, { type });
    icon.classList.add(styles.icon);
    Box.appendChild(icon);
    //加入内容
    const div = document.createElement('div');
    div.innerHTML = content;
    Box.appendChild(div);
    //注入样式
    let classType = `message-${type}`;
    Box.className = `${styles.message} ${styles[classType]}`;


    //container（容器）position如果是static
    if (getComputedStyle(container).position === "static") {
        container.style.position = "relative";
    }

    //添加到容器
    container.appendChild(Box);

    // 浏览器强行渲染
    Box.clientHeight; // 导致reflow
    Box.style.opacity = 1;
    Box.style.transform = `translate(-50%, -50%)`;

    setTimeout(() => {
        Box.style.opacity = 0;
        Box.style.transform = `translate(-50%, -50%) translateY(-25px)`;
        Box.addEventListener(
            "transitionend",
            function () {
                Box.remove();
                // 运行回调函数
                options.callback && options.callback();
            },
            { once: true }
        );
    }, duration);




}