document.querySelector('.collapse-nav').addEventListener('click', (e) => {
    e.preventDefault()
    el = document.querySelector('.nav')
    el.style.display != "none" ?
        el.style.display = "none" :
        el.style.display = "flex"
})


for (let prd = 0; prd < 5; prd++) {
    document.querySelector('.content').innerHTML += `
        <div class="product-cont d-flex wrap">
            <div class="product-img   d-flex center-content">
                <img class="m-auto radius-circle" src="./assets/image.png" />
            </div>
            <div class="product-desc flex-col">
            <h2 class="fill center-content"><b>Description <br/></b></h2>
            <p class="d-flex center-self center-content m-auto-hor">
            This does represent the product desc
            This does represent the product desc
            This does represent the product desc
            This does represent the product desc
            This does represent the product desc
            This does represent the product desc
                This does represent the product desc
                This does represent the product desc</p>
            </div>
             <div class="product-price flex-col center-content">
             <h2 class="fill center-content"><b>Price <br/></b></h2>
             
                <p class="m-auto"> R 1083 </p>
            </div>
            <div class="product-avail flex-col">
             <h2 class="fill center-content"><b> Availability <br/> </b></h2>
               <p class="m-auto">In Stock<p>
            </div>
            <div class="product-functions-cont flex-col">
             <h2 class="fill center-content"><b>Functions <br/></b></h2>

            <div class="product-functions d-flex m-auto center-content">

                <button class="product-del b-none bg-none d-flex center-content">
                    del
            </button>
            <button class="product-edit b-none bg-none d-flex center-content">
                    edit
            </button>  
            </div>
            </div>
        </div>`

}