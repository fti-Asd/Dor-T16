let mapList=[];
let map;

function createSharedMap(mapContainer, location) {
    if (!mapList.includes(mapContainer)) {
        map = L.map(mapContainer).setView(location, 17);

        mapList.push(mapContainer);
        
        // map.dragging.disable();
        // map.touchZoom.disable();
        // map.doubleClickZoom.disable();
        map.scrollWheelZoom.disable();

        // map.dragging.enable();
        // map.touchZoom.enable();
        // map.doubleClickZoom.enable();
        // map.scrollWheelZoom.enable();

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    } else {
        map.setView(location, 17);
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
    .addTo(map)
    .bindPopup(object.popUpText).openPopup();;

}

function mapViewHandler(index=0){
    const mapContainer = document.getElementById(`map-pane-${index}`);
    if (mapContainer) {
        createSharedMap(mapContainer, locations[index].location);

        addMarker(locations[index]);
    }
}

mapViewHandler()