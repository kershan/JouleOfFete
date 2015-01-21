var onKeyDown = function (e) {
    if (e.key === pc.KEY_SPACE) {
        alert("Hello");
    }
    e.event.preventDefault(); // Use original browser event to prevent browser action.
};
context.keyboard.on("keydown", onKeyDown, this);