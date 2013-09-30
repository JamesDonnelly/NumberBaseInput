NumberBaseInput
===============

Use your up/down arrow keys to increment or decrement the numeric value in a text input field depending on number base specified as data-base attribute.
Example use:
```
<input type="text" data-base="2" value="1101" /> <!-- Base 2 = binary -->

<input type="text" data-base="16" value="1A" /> <!-- Base 16 = hexadecimal -->
```
In the first input, if the user presses their up key whilst the input is in focus the value will change to 1111. In the second input, if the user presses their up key the value will change to 1B. Alternatively if they press their down key, the first value will become 1100 and the second will become 19.
