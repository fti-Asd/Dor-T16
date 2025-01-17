function mapViewHandler(index=0){
    const mapContainer = document.getElementById(`map-pane-${index}`);
    if (mapContainer) {
        createSharedMap(mapContainer, locations[index].location);

        addMarker(locations[index]);
    }
}