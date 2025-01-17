let mapList = [];
let newMap;

function createSharedMap(mapContainer, location) {
    if (!mapList.some(map => map.container === mapContainer)) {
        newMap = L.map(mapContainer).setView(location, 17);
        
        mapList.push({ container: mapContainer, map: newMap });
        
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(newMap);

    } else {
        const existingMap = mapList.find(map => map.container === mapContainer);
        existingMap.map.setView(location, 17);
    }
}

function addMarker(object){
    let dornikaIcon = L.icon({
        iconUrl: object.iconUrl,
        iconSize: [40, 42], 
        iconAnchor: [20, 20], 
        popupAnchor: [0, -20],    
    });

    L.marker(object.location, { icon: dornikaIcon })
    .addTo(newMap)
    .bindPopup(object.popUpText).openPopup();
}

function mapViewHandler(index=0){
    const mapContainer = document.getElementById(`map-pane-${index}`);
    if (mapContainer) {
        createSharedMap(mapContainer, locations[index].location);

        addMarker(locations[index]);
    }
}

function getLocation(selectedMap, callback) {
    const currentMap = mapList.find(map => map.container.getAttribute("id") === selectedMap.getAttribute("id"));
    
    if (!currentMap) {
        console.error("Map not found for the selected container.");
        return;
    }

    const map = currentMap.map;

    let lastLocation = null;

    map.on("contextmenu", (e) => {
        const { lat, lng } = e.latlng;
        lastLocation = { latitude: lat, longitude: lng };

        console.log("Coordinates from contextmenu:", lat, lng);

        callback(lastLocation); 
    });
}

// function getLocation(selectedMap, callback) {
//     const currentMap = mapList.find(map => map.container.getAttribute("id") === selectedMap.getAttribute("id"));
    
//     if (!currentMap) {
//         console.error("Map not found for the selected container.");
//         return;
//     }

//     const map = currentMap.map;

//     // متغیر جهانی برای ذخیره آخرین موقعیت کلیک
//     let lastLocation = null;

//     // ثبت رویداد contextmenu برای هر نقشه
//     map.on("contextmenu", (e) => {
//         const { lat, lng } = e.latlng;
//         lastLocation = { latitude: lat, longitude: lng };  // ذخیره آخرین موقعیت

//         console.log("Coordinates from contextmenu:", lat, lng);

//         if (callback && lastLocation) {
//             callback(lastLocation);  // ارسال موقعیت از طریق callback
//         }
//     });

//     // ارسال موقعیت آخرین کلیک به callback (در صورت نیاز)
//     if (lastLocation) {
//         callback(lastLocation);
//     }
// }


// function getLocation(selectedMap, callback) {
//     const currentMap = mapList.find(map => map.container.getAttribute("id") === selectedMap.getAttribute("id"));
    
//     if (!currentMap) {
//         console.error("Map not found for the selected container.");
//         return;
//     }

//     const map = currentMap.map;

//     map.on("contextmenu", (e) => {
//         const { lat, lng } = e.latlng;

//         console.log("Coordinates from contextmenu:", lat, lng);

//         if (callback) {
//             callback({ latitude: lat, longitude: lng });
//         }
//     });
// }


// function getLocation(selectedMap) {
//     const currentMap = mapList.find(map => map.container.getAttribute("id") === selectedMap.getAttribute("id"));
    
//     if (!currentMap) {
//         console.error("Map not found for the selected container.");
//         return null;
//     }

//     const map = currentMap.map;

//     let latitude="";
//     let longitude="";

//     map.on("contextmenu", (e) => {
//         const { lat, lng } = e.latlng;
//         latitude=lat;
//         longitude=lng;
//         console.log(lat,lng);
//     });
//     console.log(latitude,longitude);

//     return [latitude,longitude];
// }




// function getLocation(selectedMap) {
//     let currentMap = mapList.find(map => map.container.getAttribute("id") === selectedMap.getAttribute("id"));

//     if (!currentMap) {
//         console.error("Map not found for the selected container.");
//         return null;
//     }

//     const map = currentMap.map;

//     return new Promise((resolve) => {
//         map.once("contextmenu", (e) => {
//             e.originalEvent.preventDefault();

//             const { lat, lng } = e.latlng;
//             const location = { latitude: lat, longitude: lng };

//             console.log("New Location:", location);
//             resolve(location); // بازگرداندن مختصات از طریق Promise
//         });
//     });
// }


// function getLocation(selectedMap) {
//     let currentMap = mapList.find(map => map.container.getAttribute("id") === selectedMap.getAttribute("id"));    
    
//     const map = currentMap.map;
//     let location = { latitude: "", longitude: "" };

//     map.on("contextmenu", (e) => {
//         e.originalEvent.preventDefault();
//         let { lat, lng } = e.latlng;

//         location.latitude = lat;
//         location.longitude = lng;
//     });

//     console.log("Location updated:", location);

//     return location;
// }

// function getLocation(selectedMap) {
//     let currentMap = mapList.find(map => map.container.getAttribute("id") === selectedMap.getAttribute("id"));    
    
//     const map = currentMap.map;
//     let location ={latitude:"",longitude:""};

//     console.log(map._container.id);

//     map.on("contextmenu", (e) => {
//         e.originalEvent.preventDefault();
//         let { lat, lng } = e.latlng;

//         location = {latitude:"",longitude:""};

//         location.latitude = lat;
//         location.longitude = lng;

//         console.log(lat,lng);
        
//     });

//     return location;
// }
