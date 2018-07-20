
(function(){
    const gallery = document.querySelector('.gallery');
    const overlay = document.querySelector('.overlay');
    const overlayImage = document.querySelector('.overlay_inner img');
    const overlayClose = document.querySelector('.overlay_close');

    function generateHTML([h, v]) {
        return `
            <div class="item h${h} v${v}">
                <img src="./assets/gallery/${randomNumber(12)}.jpg" />
                <div class="item_overlay">
                        <button>View &#8594;</button>
                </div>           
            </div>
        `;
    }
    
    function randomNumber(limit) {
        return Math.floor(Math.random() * limit) + 1;
    }
    
    const digits = Array.from( { length: 50 }, 
                               () => { return [randomNumber(4), randomNumber(4)] })
                        .concat([[1,1], [1,1], [1,1], [1,1], [1,1], [1,1], 
                                [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], 
                                [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], 
                                [1,1], [1,1], [1,1], [1,1], [1,1], [1,1],                                 
                                [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], 
                                [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], 
                                [1,1], [1,1], [1,1], [1,1], [1,1], [1,1]]);
    
    const galleryHtml = digits.map((arrObj) => {
                                return generateHTML(arrObj);
                            }).join('');
    
    gallery.innerHTML = galleryHtml;

    function toggleOverlay(status) {
        if (status) {
            overlay.classList.add('open');
        } else {
            overlay.classList.remove('open');
        }
    }   

    function overlayCloseHandler(e) {
        toggleOverlay(false)
    }

    overlayClose.addEventListener('click', overlayCloseHandler);


    const items = document.querySelectorAll('.item');

    function itemClickHandler(e) {       
        const item = e.currentTarget;
        const itemImgSrc = item.querySelector('img').src;

        if (itemImgSrc) {
            overlayImage.src = itemImgSrc;
            toggleOverlay(true);
        } else {
            console.error('Item image src is null');
        }
    }

    items.forEach((item) => {
        item.addEventListener('click', itemClickHandler);
    });

})();