let mapList = [];
let newMap;
let lastLocation= { latitude: "", longitude: "" };;

function createSharedMap(mapContainer, location) {
    if (!mapList.some(map => map.container === mapContainer)) {
        newMap = L.map(mapContainer).setView(location, 17);
        
        mapList.push({ container: mapContainer, map: newMap });
        
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(newMap);

        newMap.scrollWheelZoom.disable();

        newMap.on("contextmenu", (e) => {
            // console.log(e.target._container.id);
            
            const { lat, lng } = e.latlng;
            lastLocation = { latitude: lat, longitude: lng };
            // console.log("Coordinates from contextmenu:", lat, lng);
        });

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


function getLocation(callback) {
    callback(lastLocation)
}
