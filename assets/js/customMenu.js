const customMenu = document.getElementById("custom-menu");
const TabContent = document.querySelector("#map-tabContent");

let currentLocation = null;
let isMenuClickListenerAdded = false;

TabContent.addEventListener("contextmenu",(event)=>{
    event.preventDefault();

    console.log("Target Element:", event.target);
    console.log("OffsetParent ID:", event.target.offsetParent?.id);
    
    const { clientX: mouseX, clientY: mouseY } = event;

    let mapId = event.target.offsetParent?.id;

    if (mapId) {
        getLocation(document.getElementById(event.target.offsetParent?.id), (location) => {
            currentLocation = location;

            customMenu.style.top = `${mouseY}px`;
            customMenu.style.left = `${mouseX}px`;
            customMenu.style.display = "block";
        });
    }
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



// function showMenu(map) {
//     const selectedMap = document.getElementById(map);

//     if (!selectedMap) return;

//     getLocation(selectedMap, (location) => {
//         // if (!isMenuClickListenerAdded) {
//             customMenu.addEventListener("click", (e) => {
//                 const closestLi = e.target.closest("li");
    
//                 if (closestLi) {
//                     if (closestLi.textContent === "Close") {
//                         customMenu.style.display = "none";
//                     } else if (closestLi.textContent === "Get Location") {
//                         addToList(location.latitude,location.longitude);
//                     }
//                 }
//             });
    
//             isMenuClickListenerAdded = true;
//         // }
//     });
        
//     document.addEventListener("click", () => {
//         customMenu.style.display = "none";
//     });

//     customMenu.addEventListener("click", (e) => {
//         e.stopPropagation();
//     });
// }





// const customMenu = document.getElementById("custom-menu");
// const TabContent = document.querySelector("#map-tabContent");

// TabContent.addEventListener("contextmenu",(event)=>{
//     event.preventDefault();

//     const { clientX: mouseX, clientY: mouseY } = event;
//     customMenu.style.top = `${mouseY}px`;
//     customMenu.style.left = `${mouseX}px`;
//     customMenu.style.display = "block";

//     showMenu(event.target.offsetParent.id)
// })

// let isMenuClickListenerAdded = false;


// function showMenu(map) {
//     const selectedMap = document.getElementById(map);
//     const location = getLocation(selectedMap);

//     if (!isMenuClickListenerAdded) {
//         customMenu.addEventListener("click", (e) => {
//             const closestLi = e.target.closest("li");

//             if (closestLi) {
//                 if (closestLi.textContent === "Close") {
//                     customMenu.style.display = "none";
//                 } else if (closestLi.textContent === "Get Location") {
//                     addToList(location);
//                 }
//             }
//         });

//         isMenuClickListenerAdded = true;
//     }

//     document.addEventListener("click", () => {
//         customMenu.style.display = "none";
//     });

//     customMenu.addEventListener("click", (e) => {
//         e.stopPropagation();
//     });
// }
