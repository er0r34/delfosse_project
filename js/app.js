// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Get all clickable category photos
    const categoryPhotos = document.querySelectorAll(".category-photo");

    // Reference to the modal
    const modal = new bootstrap.Modal(document.getElementById("categoryModal"));
    const modalTitle = document.getElementById("categoryModalLabel");
    const modalPhotoGrid = document.getElementById("modalPhotoGrid");

    // Add click event listener to each category photo
    categoryPhotos.forEach((photo) => {
        photo.addEventListener("click", () => {
            const category = photo.getAttribute("data-category");

            // Update modal title
            modalTitle.textContent = category;

            // Populate modal grid dynamically with photos
            modalPhotoGrid.innerHTML = "";
            for (let i = 0; i < 4; i++) {
                const col = document.createElement("div");
                col.className = "col-6 p-0";
                col.innerHTML = `<img src="./images/${category}.jpg" alt="${category}" class="img-fluid">`;
                modalPhotoGrid.appendChild(col);
            }

            // Show modal
            modal.show();
        });
    });

    // Add Photo Section Functionality
    const addItemButton = document.getElementById("addItemButton");

    addItemButton.addEventListener('click', () => {
        const newPhotoGroup = document.createElement('div');
        newPhotoGroup.className = 'input-group mb-3';
        newPhotoGroup.innerHTML = `
        <input type="file" class="form-control" aria-label="Upload Photo">
        <button class="btn btn-outline-secondary" type="button">+ Add Photo</button>
    `;
        const addPhotoSection = document.getElementById('addPhotoSection');
        addPhotoSection.appendChild(newPhotoGroup);
    });

});