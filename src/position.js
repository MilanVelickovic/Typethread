function fixBody(displayed) {
    if (displayed) {
        document.querySelector("body").style.overflow = "hidden";
    } else {
        document.querySelector("body").style.overflow = "visible";
    }
}

export { fixBody };