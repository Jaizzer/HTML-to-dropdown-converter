function turnToDropDown(dropDownButton) {

    // Get drop down items container inside the drop down button.
    const dropDownItemsContainer = dropDownButton.querySelector('.drop-down-items-container');
    dropDownItemsContainer.classList.toggle('hidden');

    // Hide or unhide drop-down button's  drop-down items.
    dropDownButton.addEventListener('click', () => {
        dropDownItemsContainer.classList.toggle('hidden');
    });
}