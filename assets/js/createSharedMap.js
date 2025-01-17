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