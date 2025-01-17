const customMenu = document.getElementById("custom-menu");
const TabContent = document.querySelector("#map-tabContent");

let currentLocation = null;

TabContent.addEventListener("contextmenu",(event)=>{
    event.preventDefault();

    // console.log("Target Element:", event.target);
    // console.log("OffsetParent ID:", event.target.offsetParent?.id);

    getLocation((location) => {
        currentLocation = location;
    });

    const { clientX: mouseX, clientY: mouseY } = event;

    customMenu.style.top = `${mouseY}px`;
    customMenu.style.left = `${mouseX}px`;
    customMenu.style.display = "block";

})

customMenu.addEventListener("click", (e) => {
    const closestLi = e.target.closest("li");

    if (closestLi) {
        if (closestLi.textContent === "Close") {
            customMenu.style.display = "none";
        } else if (closestLi.textContent === "Get Location") {
            if (currentLocation) {
                addToList(currentLocation.latitude, currentLocation.longitude);
            } else {
                console.error("Location is not available.");
            }
        }
    }
});

document.addEventListener("click", () => {
    customMenu.style.display = "none";
});

customMenu.addEventListener("click", (e) => {
    e.stopPropagation();
});



