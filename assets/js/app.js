const tabsUl = document.querySelector("#map-tabs");
const mapTabContentDiv = document.querySelector("#map-tabContent");

locations.forEach((item, index) => {
    tabsUl.innerHTML += `<li class="nav-item" role="presentation">
                          <button class="nav-link text-black ${index === 0 ? "active bg-warning text-white" : ""}" id="map-btn-${index}" data-bs-toggle="pill" data-bs-target="#map-pane-${index}" type="button" role="tab" aria-controls="map-pane-${index}" aria-selected="${index === 0}">
                            ${item.place}
                          </button>
                        </li>`;

    mapTabContentDiv.innerHTML += `<div class="tab-pane fade ${index === 0 ? "show active" : ""}" id="map-pane-${index}" role="tabpanel" aria-labelledby="map-btn-${index}" tabindex="0">
                                      <div id="map-container"></div>
                                    </div>`;
});

tabsUl.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.nav-link")) {
        const targetId = e.target.getAttribute("data-bs-target").substring(1);

        document.querySelectorAll(".nav-link").forEach((btn) => btn.classList.remove("active","text-white","bg-warning"));
        document.querySelectorAll(".tab-pane").forEach((pane) => pane.classList.remove("show", "active"));

        e.target.classList.add("active","text-white","bg-warning");
        document.getElementById(targetId).classList.add("show", "active","text-white","bg-warning");

        mapViewHandler(targetId.split("-")[2])
    }
});

mapViewHandler()