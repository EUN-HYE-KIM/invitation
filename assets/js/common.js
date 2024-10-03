/* scrollControl */
const scrollControl = (isScroll) => {
    const body = document.querySelector("body");
    if (isScroll) {
        body.style.removeProperty("overflow");
    } else {
        body.style.overflow = "hidden";
    }
};

/* toast */
const setToast = (msg) => {
    removeToast();

    let toastDiv = document.createElement("div");
    toastDiv.setAttribute("id", "toast");

    let textEl = document.createElement("p");
    textEl.appendChild(document.createTextNode(msg));
    toastDiv.appendChild(textEl);

    document.body.appendChild(toastDiv);

    let targetToast = document.getElementById("toast");
    setTimeout(function () {
        if (targetToast !== null) {
            targetToast.remove();
        }
    }, 3000);
};
const removeToast = () => {
    let toast = document.getElementById("toast");
    if (toast !== null) {
        toast.remove();
    }
};

/* Copy To Clipboard */
const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            setToast("클립보드에 복사되었습니다");
        })
        .catch(err => {
            setToast("클릭보드 복사실패: ", err);
        });
}


export { scrollControl, setToast, copyToClipboard };
