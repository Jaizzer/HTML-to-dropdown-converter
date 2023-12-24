# HTML to DropDown Converter

## Introduction

The HTML to DropDown Converter is a JavaScript module that simplifies the transformation of specific HTML code formats into user-friendly drop-down elements. The module offers a function called `turnToDropDown`, which takes a drop-down button as input and converts it into a drop-down with a hidden list of items.

**Important**: This module requires your HTML structure to adhere to a specific format. Please make sure your HTML code follows this structure:

## HTML

```html
<div class="drop-down">
    DropDown 🔽
    <div class="drop-down-items-container">
        <div class="drop-down-item">item-1</div>
        <div class="drop-down-item">item-2</div>
        <div class="drop-down-item">item-3</div>
        <div class="drop-down-item">item-4</div>
        <div class="drop-down-item">item-5</div>
    </div>
</div>
```

Failure to follow this format may result in the module not functioning as expected.

## How It Works

The `turnToDropDown` function adds interactivity to the specified drop-down element. When the drop-down button is clicked, it toggles the visibility of the drop-down items container.

## Installation

You can install the HTML to DropDown Converter module using npm:

`npm install html-to-dropdown-converter`

## Usage

To utilize the module, follow these steps:

1. Make sure that the JavaScript file you will use for your HTML is of type 'module' so that ES6 module's import/export statement would work.

    ```html
    <script src="main.js" type="module" defer></script>
    ```

2. Include the module in your JavaScript file:

    ```JavaScript
    import turnToDropDown from './node_modules/html-to-dropdown-converter/index.js';
    ```

3. Create your HTML structure in the required format:

    ```html
    <div class="drop-down">
        DropDown 🔽
        <div class="drop-down-items-container">
            <div class="drop-down-item">item-1</div>
            <div class="drop-down-item">item-2</div>
            <div class="drop-down-item">item-3</div>
            <div class="drop-down-item">item-4</div>
            <div class="drop-down-item">item-5</div>
        </div>
    </div>
    ```

4. Select the drop-down element in your JavaScript code:

    ```JavaScript
    const dropDownButton = document.querySelector('.drop-down');
    ```

5. Call the turnToDropDown function with the selected drop-down element as an argument:
    ```JavaScript
    turnToDropDown(dropDownButton);
    ```

## Example

Here's an example of how your HTML might appear to DropDown Converter:

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"content="width=device-width, initial-scale=1.0">
        <title>HTML to DropDown Converter Example</title>
        <script src="main.js" type="module" defer></script> // Ensure the js file is of type 'module'.
    </head>
    <body>
        <div class="drop-down">
            DropDown 🔽
            <div class="drop-down-items-container">
                <div class="drop-down-item">item-1</div>
                <div class="drop-down-item">item-2</div>
                <div class="drop-down-item">item-3</div>
                <div class="drop-down-item">item-4</div>
                <div class="drop-down-item">item-5</div>
            </div>
        </div>
    </body>
</html>
```

Here's an example of how your JavaScript file (main.js in this example) might appear:

```JavaScript
// main.js
import turnToDropDown from './node_modules/html-to-dropdown-converter/index.js';

const dropDownButton = document.querySelector('.drop-down');
turnToDropDown(dropDownButton);
```

## Contributing

Contributions to this package are very welcome! If you find any bugs or have improvement suggestions, just open an issue on this Github [repository](https://github.com/Jaizzer/HTML-to-dropdown-converter.git). You can also fork the repository, make your changes, and then submit a pull request.

You can email me via `florenzjaizzer.calderon@gmail.com`.

## License

This project is licensed under the [MIT License](./LICENSE).
