document.addEventListener("DOMContentLoaded", function () {
    const savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    const savedItemsContainer = document.getElementById("saved-items");

    savedItems.forEach(itemHTML => {
        const itemElement = document.createElement("div");
        itemElement.innerHTML = itemHTML;
        savedItemsContainer.appendChild(itemElement);
    });
});
