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