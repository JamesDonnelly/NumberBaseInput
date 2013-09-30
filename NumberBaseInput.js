/* NumberBaseInput.js
 * Created by James Donnelly.
 * Full source available for free at https://github.com/JamesDonnelly/NumberBaseInput
 * Licensed under Creative Commons 3.0: http://creativecommons.org/licenses/by/3.0
 */

/* Pull all elements with the data-base attribute. */
var elements = document.querySelectorAll('[data-base]');
for(i=0;i<elements.length;i++) {
    /* Loop through each matching element and add a keydown listener. */
    elements[i].addEventListener('keydown', function(e) {
        /* If the key pressed isn't either up or down, return. */
        if(e.keyCode !== 38 && e.keyCode !== 40)
            return;

        /* Ensure the input field has a value. */
        this.value = this.value || 0;

        var
        /* Grab the base. */
            base = this.dataset.base,
        /* Convert the value to decimal. */
            value = parseInt(this.value, base)
            ;

        if(!isNaN(parseFloat(value)) && isFinite(value))
        /* If the value is numeric, either increment or decrement the
         * value depending on key pressed. */
            if(e.keyCode === 38)
                this.value = (++value).toString(base).toUpperCase();
            else
                this.value = (--value).toString(base).toUpperCase();
        else
        /* If the value isn't numeric, set it to 0. */
            this.value = 0;
    });
}