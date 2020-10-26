/**
 * Toggles hidden images.
 * Intented to be used when .post img elements are hidden.
 *
 */
function ehnGuestImages() {
    let selector    = document.querySelectorAll('.post img');
    let selectorLen = (selector !== null ? selector.length : 0);

    let wrapElement = function(element) {
        let wrapper = document.createElement('div');
        wrapper.classList.add('imageContainer');
        element.parentNode.insertBefore(wrapper, element);

        wrapper.appendChild(element);
        return wrapper;
    };

    let containImage = function(wrapper) {
        wrapper.style.display = 'inline';
        wrapper.style.margin  = '2px';
        wrapper.style.padding = '2px';

        let button     = document.createElement('input');
        button.type    = 'button';
        button.value   = 'Haz click para ver la imagen';

        button.onclick = function(event) {
            event.preventDefault();

            let images = this.parentNode.querySelectorAll('img');
            let imagesLen = (images !== null ? images.length : 0);

            for (let i = 0; i < imagesLen; ++i) {
                images[i].style.display = 'inline';
            }

            this.style.display = 'none';
        };

        wrapper.appendChild(button);
    };

    for (let i = 0; i < selectorLen; ++i) {
        let element = selector[i];
        let wrapper = wrapElement(element);
        containImage(wrapper);
    }
};

document.addEventListener('DOMContentLoaded', function(event) {
    ehnGuestImages();
});
