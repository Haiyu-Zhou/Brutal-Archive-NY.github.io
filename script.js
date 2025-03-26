document.addEventListener("DOMContentLoaded", function () {
    const catalog = document.getElementById("catalog");
    const rows = Array.from(catalog.getElementsByClassName("rows"));

    function sortCatalog(property) {
        rows.sort((a, b) => {
            let valA, valB;

            if (property === "name") {
                valA = a.querySelector(".title").textContent.trim().toUpperCase();
                valB = b.querySelector(".title").textContent.trim().toUpperCase();
            } else if (property === "architect") {
                valA = a.querySelector(".architect").textContent.trim().toUpperCase();
                valB = b.querySelector(".architect").textContent.trim().toUpperCase();
            } else if (property === "date") {
                valA = a.querySelector(".time").textContent.trim();
                valB = b.querySelector(".time").textContent.trim();
                valA = valA === "?" ? Infinity : parseInt(valA);
                valB = valB === "?" ? Infinity : parseInt(valB);
            }

            return valA > valB ? 1 : valA < valB ? -1 : 0;
        });

        // Clear and reinsert sorted rows
        catalog.innerHTML = "";
        rows.forEach(row => catalog.appendChild(row));
    }

    // Example: Sorting by name on page load
    sortCatalog("name");

    // If you want buttons to manually sort:
    document.getElementById("sort-name").addEventListener("click", () => sortCatalog("name"));
    document.getElementById("sort-architect").addEventListener("click", () => sortCatalog("architect"));
    document.getElementById("sort-date").addEventListener("click", () => sortCatalog("date"));
});