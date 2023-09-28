function turnToDropDown(dropDownButton) {

    // Get drop down items container inside the drop down button.
    const dropDownItemsContainer = dropDownButton.querySelector('.drop-down-items-container');
    dropDownItemsContainer.style.display = 'none';

    // Hide or unhide drop-down button's  drop-down items.
    dropDownButton.addEventListener('click', () => {
        if (dropDownItemsContainer.style.display !== 'none') {
            dropDownItemsContainer.style.display = 'none';
        } else {
            dropDownItemsContainer.style.display = 'initial';
        }
    });
}