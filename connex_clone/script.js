function divCreator(parent, elements, divid, divclass) {
    var par = document.getElementById(parent);
    var div = document.createElement(`${elements}`);
    div.setAttribute('id', `${divid}`)
    div.setAttribute('class', `${divclass}`);
    par.appendChild(div);
}
let state = 0;

//Above NAv
divCreator('content', 'div', 'above-nav', 'above-nav')
for (let logo = 0; logo < 3; logo++) {

    divCreator('above-nav', 'div', `logo-divs${logo}`, 'logo-divs')
}
divCreator(`logo-divs0`, 'div', `logo`, 'logo')

document.getElementById(`logo-divs0`)
let newLogo = document.createElement('img')
newLogo.src = `assets/logo.jpg`
document.querySelector('#logo-divs0').appendChild(newLogo)

//Form

divCreator(`logo-divs1`, 'form', `search-form`, `search-form`)
divCreator('search-form', 'input', `search-area`, `search-area`)
document.getElementById(`search-area`).setAttribute('placeholder', 'Search our catalogue')
divCreator('search-form', 'button', `search-button`, `search-button`)
document.getElementById(`search-button`).style.backgroundImage = `url(assets/search.png)`;

divCreator(`logo-divs2`, 'div', `top-cart`, `top-cart`)
divCreator(`top-cart`, 'div', `top-cart-cart`, `top-cart-cart`)
document.getElementById(`top-cart-cart`).style.backgroundImage = `url(assets/cart.png)`;

divCreator(`top-cart`, 'div', `top-cart-text-cont`, `top-cart-text-cont`)
divCreator(`top-cart-text-cont`, 'p', `top-cart-text`, `top-cart-text`)
document.getElementById(`top-cart-text`).appendChild(document.createTextNode('Cart: 0 Products - R0.00'))




//Create the nav bar cont
divCreator('content', 'div', 'nav', 'nav');
//Home icon
divCreator('nav', 'div', 'home-icon', 'home-icon');

//Create the nav list
var links = ["", "HOME", "COMPUTER", "TABLETS", "PROJECTOR", "GAMING", "DAILY DEALS", "SMARTWATCH", "PRINTERS", "SMARTPHONES", ""]
var linkedList = {
    1: ['GAMING', 'AUTOMATION', 'BEATY AND PERSONAL', 'COMPUTERS', 'CAMPING AND OUTDOORS', 'ELECTRONICS', 'ENGRAVING MACHINE', 'GARDEN, POOL AND PATIO', 'PRINTERS', 'SMARTHOME', 'SMARTPHONES', 'SOFTWARE', 'FASION AND LUGGAGE', 'ENTERTAINMENT', 'ON SALE', 'DAILY DEALS',],
    2: ['TABLETS', 'PROJECTOR', 'LAPTOPS', 'NETWORKING', 'COMPONENTS', 'MORNITORS', 'STORAGE'],
    3: ['SAMSUNG', 'HUAWEI', 'LENOVO', 'TABLET ACCESSORIES', 'KINDLE',],
    4: ['BENQ', 'EPSON', 'VIEWSONIC', 'PHILIPS PROJECTOR', 'ACER'],
    5: ['PICO', 'OCULUS', 'GAMING ACCESSORIES', 'PLAYSTATION',],
    7: ['FOSSIL', 'GARMIN', 'HUAWEI', 'NOKIA', 'SAMSUNG', 'ACCESSORIES'],
    8: ['PRINTERS', 'INKS', 'TONER CARTRIDGES', 'SCANNER'],
    9: ['APPLE', 'AMESUNG', 'HUAWEI', 'SMARTPHONE ACCESSORIES', 'MOTOROLLA', 'REALME', 'BLACKVIEW'],
    //S 10: ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello',],

}

for (let li = 0; li < links.length; li++) {
    if (links[li] == "" || li == 11) {
        divCreator('nav', 'li', `ll-links${li}`, `links`);
        divCreator(`ll-links${li}`, 'div', `links${li}`, `links-links`);
        document.getElementById(`links${li}`).style.backgroundImage = `url(assets/home.png)`;
    } else {
        if (li == 6) {
            divCreator('nav', 'li', `ll-links${li}`, `links`);
            divCreator(`ll-links${li}`, 'a', `links${li}`, `links-links`);
            divCreator(`links${li}`, 'p', `links-p${li}`, `links-links-p`);
            document.getElementById(`links-p${li}`).appendChild(document.createTextNode(links[li]))
        } else {
            divCreator('nav', 'div', `ll-links${li}`, `links`);
            divCreator(`ll-links${li}`, 'a', `links${li}`, `links-links`);
            divCreator(`links${li}`, 'p', `links-p${li}`, `links-links-p`);

            document.getElementById(`links-p${li}`).appendChild(document.createTextNode(links[li]))
            divCreator(`links-p${li}`, 'i', 'arrow down', 'arrow down')
            divCreator(`ll-links${li}`, 'div', `dd-content${li}`, 'dd-content');


            for (let ddc = 0; ddc < linkedList[li].length; ddc++) {
                divCreator(`dd-content${li}`, 'div', `dd-content-link-cont${li}${ddc}`, 'dd-content-link-cont');
                divCreator(`dd-content-link-cont${li}${ddc}`, 'a', `dd-content-link${li}${ddc}`, 'dd-content-link');
                divCreator(`dd-content-link${li}${ddc}`, 'p', `dd-content-p${li}${ddc}`, 'dd-content-p');
                document.getElementById(`dd-content-p${li}${ddc}`).appendChild(document.createTextNode(linkedList[li][ddc]))
            }
        }

    }
}
//space after nav
divCreator('nav', 'div', 'sized-space', 'sized-space');

// Left navigation Bar
divCreator('content', 'Div', 'left-nav-body', 'left-nav-body')
divCreator('left-nav-body', 'Div', 'left-nav', 'left-nav')
divCreator('left-nav-body', 'Div', 'right-body', 'right-body')

divCreator('left-nav', 'nav', `left-nav-nav`, `left-nav-nav`);
divCreator('left-nav-nav', 'p', `leftNavText`, `leftNavText`);
document.getElementById('leftNavText').appendChild(document.createTextNode('Categories'));

var leftNav = ['Gaming', 'Automation', 'Beauty and Personal Care', 'Computers', 'Camping and Outdoors', 'Electronics', 'Engraving Machine', 'Garden, Pool and Patio', 'Printers', 'DailyDeals', 'SmartHome', 'SmartPhones', 'Software', 'Fasion and Luggage', 'Entertainmer', 'On Sale'];
for (let li = 0; li < leftNav.length; li++) {
    divCreator('left-nav-nav', 'li', `left-nav-li${li}`, `links`);
    divCreator(`left-nav-li${li}`, 'a', `left-links-links${li}`, `left-links-links`);


    document.getElementById(`left-links-links${li}`).appendChild(document.createTextNode(leftNav[li]))
    //End of left Side Nav
    divCreator(`left-nav-li${li}`, 'span', `left-links-dd${li}`, `left-links-dd`);
    //divCreator(`left-nav-li${li}`, 'div', `left-links-dd${li}`, `left-links-dd`);

    if (li == 6 || li == 9 || li == 12 || li == 15) {
        li;
    } else {
        document.getElementById(`left-links-dd${li}`).appendChild(document.createTextNode('+'))
    }
}

divCreator('left-nav', 'div', `adverts-cover`, `adverts-cover`)

// Adverts under left nav
for (let la = 0; la < 3; la++) {
    divCreator('adverts-cover', 'div', `advert${la}`, 'advert')
    divCreator(`advert${la}`, 'div', `advert-ad${la}`, 'advert-pic')
    if (state == 0) {
        document.getElementById(`advert-ad${la}`).style.backgroundImage = `url(assets/ads/ad${la}.png)`;

    }
}

//On Display body

divCreator('right-body', 'div', 'body-profiler', 'body-profiler')

divCreator('body-profiler', 'div', 'slide-cover', 'slide-cover')
document.getElementById('slide-cover').style.backgroundImage = `url(assets/slide/slide0.jpg)`;


//Handlers
divCreator('slide-cover', 'div', 'changers', 'changers')
divCreator('changers', 'div', 'change-left', 'change-left')

//Two circles in pic slide
divCreator('changers', 'div', 'current-pic', 'current-pic')
divCreator('current-pic', 'div', 'current-pic-cover', 'current-pic-cover')
divCreator('current-pic-cover', 'div', 'current-pic-indicator0', 'current-pic-indicator')
divCreator('current-pic-cover', 'div', 'current-pic-indicator1', 'current-pic-indicator')
//divCreator('changers', 'div', 'current-pic','current-pic')
divCreator('changers', 'div', 'change-right', 'change-right')

// left right buttons
divCreator('change-left', 'button', 'click-left', 'click-left')
document.getElementById('click-left').appendChild(document.createTextNode('<'))
// left right buttons
divCreator('change-right', 'button', 'click-right', 'click-right')
document.getElementById('click-right').appendChild(document.createTextNode('>'))



var fbHeader = ['GAMING', 'COMPUTERS', 'ELECTRONICS', 'SMARTWATCH', 'PRINTERS', 'SMARTPHONES']
var fbSub = ['PICO', 'TABLETS', 'CAMERAS', 'GARMIN', 'PRINTERS', 'APPLE']
var fbSubSub = ['OCULUS', 'PROJECTOR', 'GPS AND NAVIGATION', 'SAMSUNG', 'INKS', 'SAMSUNG']




//Fits Batch of display items
divCreator('body-profiler', 'div', 'batch-display-one', 'batch-display-one')
for (let bI = 0; bI < fbHeader.length; bI++) {
    divCreator('batch-display-one', 'div', `batch-one-card${bI}`, 'batch-one-card')
    divCreator(`batch-one-card${bI}`, 'div', `image-display${bI}`, 'image-display')
    document.getElementById(`image-display${bI}`).style.backgroundImage = `url(assets/featured/dc${bI}.jpeg)`
    divCreator(`batch-one-card${bI}`, 'p', `heading${bI}`, 'heading')
    document.getElementById(`heading${bI}`).appendChild(document.createTextNode(fbHeader[bI]))
    divCreator(`batch-one-card${bI}`, "div", "blue-line", 'blue-line')
    divCreator(`batch-one-card${bI}`, 'p', `sub-heading${bI}`, 'sub-heading')
    document.getElementById(`sub-heading${bI}`).appendChild(document.createTextNode(fbSub[bI]))
    divCreator(`batch-one-card${bI}`, 'p', `sub-sub-heading${bI}`, 'sub-sub-heading')
    document.getElementById(`sub-sub-heading${bI}`).appendChild(document.createTextNode(fbSubSub[bI]))


}

divCreator('body-profiler', 'p', 'featured-p', 'featured-p')
document.getElementById('featured-p').appendChild(document.createTextNode('FEATURED PRODUCTS'))
//Featured line
divCreator('body-profiler', 'div', 'featured-products-ul', 'featured-products-ul')

//Featured Products
var featuredBrand = ['WAHOO', 'ACER', 'ACER', 'ACER', 'ACER', 'ACER', 'ACER']
var featuredDesc = ['WAHOO FITNESS ELEMENT BOLT BIKE COMPUTER UNISEX',
    'ACER H7550ST PROJECTOR WITH 1080P RESOLUTION',
    'ACER PREDATOR GD711 PROJECTOR 1450 ANSI DLP 2160P',
    'ACER C120 PROJECTOR, 480P RESOLUTION 100',
    'ACER P6200 PROJECTOR, XGA RESOLUTION.', 'ACER COMPATIBLE PL1520I DLP 1080P 4000LM']

var featuredPrices = ['5,100.00', '29,900.00', '39,900.00', '8,450.00', '35,000.00', '29,900.00']

// Body Profiler Container
divCreator('body-profiler', 'div', 'featured-cont', 'featured-cont')
//Featured products card
for (let fc = 0; fc < 6; fc++) {

    divCreator(`featured-cont`, `div`, `featured${fc}`, `featured`)
    // image container
    divCreator(`featured${fc}`, `div`, `featured-image${fc}`, `featured-image`)
    document.getElementById(`featured-image${fc}`).style.backgroundImage = `url(assets/featured/fc${fc}.jpeg)`
    divCreator(`featured-image${fc}`, `div`, `new-text${fc}`, `new-text`)
    divCreator(`new-text${fc}`, `p`, `new-text-p${fc}`, `new-text-p`)
    document.getElementById(`new-text-p${fc}`).appendChild(document.createTextNode(`New`))

    divCreator(`featured-image${fc}`, `div`, `new-heart${fc}`, `new-heart`)
    document.getElementById(`new-heart${fc}`).style.backgroundImage = "url(assets/featured/heart.png)"

    //Brand Name
    divCreator(`featured${fc}`, `div`, `brand-name${fc}`, `brand-name`)
    divCreator(`brand-name${fc}`, `p`, `brand-text${fc}`, `brand-text`)
    document.getElementById(`brand-text${fc}`).appendChild(document.createTextNode(`BRAND:`))
    divCreator(`brand-name${fc}`, `p`, `brand-text-p${fc}`, `brand-text-p`)
    document.getElementById(`brand-text-p${fc}`).appendChild(document.createTextNode(featuredBrand[fc]))
    //Brand Desc
    divCreator(`featured${fc}`, `div`, `brand-desc${fc}`, `brand-desc`)
    divCreator(`brand-desc${fc}`, `p`, `brand-desc-p${fc}`, `brand-desc-p`)
    document.getElementById(`brand-desc-p${fc}`).appendChild(document.createTextNode(featuredDesc[fc]))
    //Reviews and stars
    divCreator(`featured${fc}`, `div`, `brand-reviews${fc}`, `brand-reviews`)
    divCreator(`brand-reviews${fc}`, `div`, `brand-stars${fc}`, `brand-stars`)
    for (let st = 0; st < 5; st++) {
        divCreator(`brand-stars${fc}`, `div`, `stars${fc}${st}`, `stars`)
        document.getElementById(`stars${fc}${st}`).style.backgroundImage = "url(assets/featured/star.png)"

    }
    divCreator(`brand-reviews${fc}`, `p`, `brand-stars-count${fc}`, `brand-stars-count`)
    document.getElementById(`brand-stars-count${fc}`).appendChild(document.createTextNode(`Review(s): 0`))

    //Brand Cost
    divCreator(`featured${fc}`, `p`, `feature-cost${fc}`, `featured-cost`)
    document.getElementById(`feature-cost${fc}`).appendChild(document.createTextNode(featuredPrices[fc]))

    //Add To Cart
    divCreator(`featured${fc}`, `div`, `featured-cart${fc}`, `featured-cart`)
    divCreator(`featured-cart${fc}`, `div`, `featured-cart-pic${fc}`, `featured-cart-pic`)
    document.getElementById(`featured-cart-pic${fc}`).style.backgroundImage = "url(assets/cart.png)"

    divCreator(`featured-cart${fc}`, `p`, `featured-cart-text${fc}`, `featured-cart-text`)
    document.getElementById(`featured-cart-text${fc}`).appendChild(document.createTextNode(`Add To Cart`))

    //Stock State

    if (fc == 1 || fc == 2) {
        divCreator(`featured${fc}`, `div`, `stock-state${fc}`, `stock-state`)
        divCreator(`stock-state${fc}`, `div`, `stock-state-tick${fc}`, `stock-state-tick`)
        document.getElementById(`stock-state-tick${fc}`).style.backgroundImage = "url(assets/featured/out.png)"

        divCreator(`stock-state${fc}`, `p`, `stock-state-text${fc}`, `stock-state-text`)
        document.getElementById(`stock-state-text${fc}`).appendChild(document.createTextNode(`Last item in stock`))

    } else {
        divCreator(`featured${fc}`, `div`, `stock-state${fc}`, `stock-state`)
        divCreator(`stock-state${fc}`, `div`, `stock-state-tick${fc}`, `stock-state-tick`)
        document.getElementById(`stock-state-tick${fc}`).style.backgroundImage = "url(assets/featured/check.png)"

        divCreator(`stock-state${fc}`, `p`, `stock-state-text${fc}`, `stock-state-text`)
        document.getElementById(`stock-state-text${fc}`).appendChild(document.createTextNode(`In Stock`))

    }

}


//On sale
var saleBrand = ['BOSE', 'PIONEER', 'PICO', 'PIONEER', 'META', 'PICO']
var saleDesc = ['BOSE SMART SOUNDBAR 900 WITH DOLBY ATMOS',
    'PIONEER CDJ 350 MULTI PLAYER USB/CD NEW',
    'PICO 4 ALL-IN-ONE VR HEADSET 256GB -6 FREE FAME BUNDLE',
    'PIONEER CDJ 350 MULTIPLAYER USB/CD',
    'META QUEST 2 128GB ALL-IN-ONE VIRTUAL REALITY HEADSET',
    'PICO 4 ALL-IN-ONE VR 128GB HEADSET']
var salePrices = ['22,000.00', '14,500.00', '13,500.00', '11,500.00', '10,700.00', '10,600.00']
var disPrice = ['1,000.00', '2,000.00', '400.00', '2,000.00', '600.00', '300.0']
var totPrice = ['23,000.00', '16,500.00', '13,900.00', '13,500.00', '11,300.00', '10,900.00']

divCreator('left-nav', 'div', `adverts-cover`, `adverts-cover`)

divCreator('right-body', 'div', 'body-profiler', 'body-profiler')

divCreator('body-profiler', 'p', 'sale-p', 'sale-p')
document.getElementById('sale-p').appendChild(document.createTextNode('ON SALE'))
//Featured line
divCreator('body-profiler', 'div', 'sale-cont', 'sale-cont')
//Featured products card
for (let fc = 6; fc < 12; fc++) {
    divCreator(`sale-cont`, `div`, `featured${fc}`, `featured`)
    // image container
    divCreator(`featured${fc}`, `div`, `featured-image${fc}`, `featured-image`)
    document.getElementById(`featured-image${fc}`).style.backgroundImage = `url(assets/featured/os${fc - 6}.jpeg)`
    divCreator(`featured-image${fc}`, 'div', `opt${fc}`, 'opt')
    divCreator(`opt${fc}`, `div`, `sale-p-text${fc}`, `sale-p-text`)
    divCreator(`sale-p-text${fc}`, `p`, `price-text-p${fc}`, `price-text-p`)
    document.getElementById(`price-text-p${fc}`).appendChild(document.createTextNode(`- R${disPrice[fc - 6]}`))
    if (fc == 7) {
        divCreator(`opt${fc}`, `div`, `out-p-text${fc}`, `out-p-text`)
        divCreator(`out-p-text${fc}`, `p`, `out-text-p${fc}`, `out-text-p`)
        document.getElementById(`out-text-p${fc}`).appendChild(document.createTextNode(`- R${disPrice[fc - 6]}`))
        divCreator(`opt${fc}`, `div`, `new-text${fc}`, `new-text`)
        divCreator(`new-text${fc}`, `p`, `new-text-p${fc}`, `new-text-p`)
        document.getElementById(`new-text-p${fc}`).appendChild(document.createTextNode(`New`))
    }

    if (fc == 6 || fc == 8) {
        fc;
    } else {
        divCreator(`opt${fc}`, `div`, `on-p-text${fc}`, `on-p-text`)
        divCreator(`on-p-text${fc}`, `p`, `on-text-p${fc}`, `on-text-p`)
        document.getElementById(`on-text-p${fc}`).appendChild(document.createTextNode(`On Sale!`))
    }

    divCreator(`featured-image${fc}`, `div`, `new-heart${fc}`, `new-heart`)
    document.getElementById(`new-heart${fc}`).style.backgroundImage = "url(assets/featured/heart.png)"

    //Brand Name
    divCreator(`featured${fc}`, `div`, `brand-name${fc}`, `brand-name`)
    divCreator(`brand-name${fc}`, `p`, `brand-text${fc}`, `brand-text`)
    document.getElementById(`brand-text${fc}`).appendChild(document.createTextNode(`BRAND: `))
    divCreator(`brand-name${fc}`, `p`, `brand-text-p${fc}`, `brand-text-p`)
    document.getElementById(`brand-text-p${fc}`).appendChild(document.createTextNode(saleBrand[fc - 6]))
    //Brand Desc
    divCreator(`featured${fc}`, `div`, `brand-desc-s${fc}`, `brand-desc-s`)
    divCreator(`brand-desc-s${fc}`, `p`, `brand-desc-p${fc}`, `brand-desc-p`)
    document.getElementById(`brand-desc-p${fc}`).appendChild(document.createTextNode(saleDesc[fc - 6]))
    //Reviews and stars
    divCreator(`featured${fc}`, `div`, `brand-reviews${fc}`, `brand-reviews`)
    divCreator(`brand-reviews${fc}`, `div`, `brand-stars${fc}`, `brand-stars`)
    for (let st = 0; st < 5; st++) {
        divCreator(`brand-stars${fc}`, `div`, `stars${fc}${st}`, `stars`)
        document.getElementById(`stars${fc}${st}`).style.backgroundImage = "url(assets/featured/star.png)"

    }
    divCreator(`brand-reviews${fc}`, `p`, `brand-stars-count${fc}`, `brand-stars-count`)
    document.getElementById(`brand-stars-count${fc}`).appendChild(document.createTextNode(`Review(s): 0`))


    //Price div
    divCreator(`featured${fc}`, `div`, `featured-money${fc}`, `featured-money`)

    //Brand Cost
    divCreator(`featured-money${fc}`, `p`, `feature-cost${fc}`, `featured-cost`)
    document.getElementById(`feature-cost${fc}`).appendChild(document.createTextNode(salePrices[fc - 6]))
    //  Brand old price

    divCreator(`featured-money${fc}`, `p`, `feature-cost-o${fc}`, `featured-cost-o`)
    document.getElementById(`feature-cost-o${fc}`).appendChild(document.createTextNode(totPrice[fc - 6]))

    //Add To Cart
    divCreator(`featured${fc}`, `div`, `featured-cart${fc}`, `featured-cart`)
    divCreator(`featured-cart${fc}`, `div`, `featured-cart-pic${fc}`, `featured-cart-pic`)
    document.getElementById(`featured-cart-pic${fc}`).style.backgroundImage = "url(assets/cart.png)"

    divCreator(`featured-cart${fc}`, `p`, `featured-cart-text${fc}`, `featured-cart-text`)
    document.getElementById(`featured-cart-text${fc}`).appendChild(document.createTextNode(`Add To Cart`))

    //Stock State

    if (fc == 7) {
        divCreator(`featured${fc}`, `div`, `stock-state${fc}`, `stock-state`)
        divCreator(`stock-state${fc}`, `div`, `stock-state-tick${fc}`, `stock-state-tick`)
        document.getElementById(`stock-state-tick${fc}`).style.backgroundImage = "url(assets/featured/out.png)"
        divCreator(`stock-state${fc}`, `p`, `stock-state-text${fc}`, `stock-state-text`)
        document.getElementById(`stock-state-text${fc}`).appendChild(document.createTextNode(`Out-of-Stock`))

    }
    if (fc == 11) {
        divCreator(`featured${fc}`, `div`, `stock-state${fc}`, `stock-state`)
        divCreator(`stock-state${fc}`, `div`, `stock-state-tick${fc}`, `stock-state-tick`)
        document.getElementById(`stock-state-tick${fc}`).style.backgroundImage = "url(assets/featured/caution.png)"
        divCreator(`stock-state${fc}`, `p`, `stock-state-text${fc}`, `stock-state-text`)
        document.getElementById(`stock-state-text${fc}`).appendChild(document.createTextNode(`Last item in stock`))

    }
    if (fc == 6 || fc == 8 || fc == 9 || fc == 10) {
        divCreator(`featured${fc}`, `div`, `stock-state${fc}`, `stock-state`)
        divCreator(`stock-state${fc}`, `div`, `stock-state-tick${fc}`, `stock-state-tick`)
        document.getElementById(`stock-state-tick${fc}`).style.backgroundImage = "url(assets/featured/check.png)"

        divCreator(`stock-state${fc}`, `p`, `stock-state-text${fc}`, `stock-state-text`)
        document.getElementById(`stock-state-text${fc}`).appendChild(document.createTextNode(`In Stock`))
    }


}
//Rounded Ads
let roundedAds = ['SNEAKERS', 'BEAUTY', 'DRESSES', 'BOTTOMS', 'SKIRTS', 'SANDALS', 'HOODIES', 'SHORTS']
divCreator('body-profiler', 'div', 'upper-footer', 'upper-footer')
divCreator('upper-footer', 'div', 'left-arrow-div', 'left-arrow-div')
divCreator('left-arrow-div', 'button', 'left-arrow', 'left-arrow')
document.getElementById('left-arrow').appendChild(document.createTextNode('<'))

for (let sl = 0; sl < 4; sl++) {
    divCreator('upper-footer', 'div', `circle-ad-cont${sl}`, `circle-ad-cont`)
    divCreator(`circle-ad-cont${sl}`, 'div', `circle-ad${sl}`, `circle-ad`)
    document.getElementById(`circle-ad${sl}`).style.backgroundImage = `url(assets/circleAds/circle-ads${sl}.jpg)`
    divCreator(`circle-ad-cont${sl}`, 'div', `circle-text${sl}`, `circle-texts`)
    divCreator(`circle-text${sl}`, 'p', `circle-text-p${sl}`, `circle-texts-p`)
    document.getElementById(`circle-text-p${sl}`).appendChild(document.createTextNode(roundedAds[sl]))
}

divCreator('upper-footer', 'div', 'right-arrow-div', 'right-arrow-div')
divCreator('right-arrow-div', 'button', 'right-arrow', 'right-arrow')
document.getElementById('right-arrow').appendChild(document.createTextNode('>'))

var rightArrowRound = document.getElementById('right-arrow')
var leftArrowRound = document.getElementById('left-arrow')


rightArrowRound.addEventListener('click', () => {
    let t = roundedAds
    t.push(t.shift())
    roundedAds = t

    for (let sl = 0; sl < 4; sl++) {
        document.getElementById(`circle-text-p${sl}`).innerText = ''
    }
    for (let sl = 0; sl < 4; sl++) {
        document.getElementById(`circle-text-p${sl}`).appendChild(document.createTextNode(roundedAds[sl]))
        if (roundedAds[sl] == 'SNEAKERS') {
            document.getElementById(`circle-ad${sl}`).style.backgroundImage = `url(assets/circleAds/circle-ads${0}.jpg)`

        }
        else if (roundedAds[sl] === 'BEAUTY') {
            document.getElementById(`circle-ad${sl}`).style.backgroundImage = `url(assets/circleAds/circle-ads${1}.jpg)`

        }
        else if (roundedAds[sl] == 'DRESSES') {
            document.getElementById(`circle-ad${sl}`).style.backgroundImage = `url(assets/circleAds/circle-ads${2}.jpg)`

        }
        else if (roundedAds[sl] == 'BOTTOMS') {
            document.getElementById(`circle-ad${sl}`).style.backgroundImage = `url(assets/circleAds/circle-ads${3}.jpg)`

        }
        else if (roundedAds[sl] == 'SKIRTS') {
            document.getElementById(`circle-ad${sl}`).style.backgroundImage = `url(assets/circleAds/circle-ads${4}.jpg)`

        }
        else if (roundedAds[sl] == 'SANDALS') {
            document.getElementById(`circle-ad${sl}`).style.backgroundImage = `url(assets/circleAds/circle-ads${5}.jpg)`

        }
        else if (roundedAds[sl] == 'HOODIES') {
            document.getElementById(`circle-ad${sl}`).style.backgroundImage = `url(assets/circleAds/circle-ads${6}.jpg)`

        } else {
            document.getElementById(`circle-ad${sl}`).style.backgroundImage = `url(assets/circleAds/circle-ads${7}.jpg)`
        }

    }
})

leftArrowRound.addEventListener('click', () => {
    let t = roundedAds
    t.unshift(t.pop())
    roundedAds = t

    for (let sl = 0; sl < 4; sl++) {
        document.getElementById(`circle-text-p${sl}`).innerText = ''
    }
    for (let sl = 0; sl < 4; sl++) {
        document.getElementById(`circle-text-p${sl}`).appendChild(document.createTextNode(roundedAds[sl]))
        if (roundedAds[sl] == 'SNEAKERS') {
            document.getElementById(`circle-ad${sl}`).style.backgroundImage = `url(assets/circleAds/circle-ads${0}.jpg)`

        }
        else if (roundedAds[sl] === 'BEAUTY') {
            document.getElementById(`circle-ad${sl}`).style.backgroundImage = `url(assets/circleAds/circle-ads${1}.jpg)`

        }
        else if (roundedAds[sl] == 'DRESSES') {
            document.getElementById(`circle-ad${sl}`).style.backgroundImage = `url(assets/circleAds/circle-ads${2}.jpg)`

        }
        else if (roundedAds[sl] == 'BOTTOMS') {
            document.getElementById(`circle-ad${sl}`).style.backgroundImage = `url(assets/circleAds/circle-ads${3}.jpg)`

        }
        else if (roundedAds[sl] == 'SKIRTS') {
            document.getElementById(`circle-ad${sl}`).style.backgroundImage = `url(assets/circleAds/circle-ads${4}.jpg)`

        }
        else if (roundedAds[sl] == 'SANDALS') {
            document.getElementById(`circle-ad${sl}`).style.backgroundImage = `url(assets/circleAds/circle-ads${5}.jpg)`

        }
        else if (roundedAds[sl] == 'HOODIES') {
            document.getElementById(`circle-ad${sl}`).style.backgroundImage = `url(assets/circleAds/circle-ads${6}.jpg)`

        } else {
            document.getElementById(`circle-ad${sl}`).style.backgroundImage = `url(assets/circleAds/circle-ads${7}.jpg)`
        }

    }
})


//Under teh circled ads
var aFBold = ['FREE SHIPPING', 'PRODUCT RETURN', 'SUPPORT 24/7', 'SAFE PAYMENT']
var afSub = ['For all order over R499.00', '30 days for return', 'always feedback customer 24/7', 'Safe shopping guarantee']
divCreator('content', 'div', 'above-footer', 'above-footer')

for (let af = 0; af < aFBold.length; af++) {
    divCreator('above-footer', 'div', `af-cont${af}`, `af-cont`)
    divCreator(`af-cont${af}`, 'div', `af-pic${af}`, `af-pic`)
    document.getElementById(`af-pic${af}`).style.backgroundImage = `url(assets/ads/uf${af}.png)`
    divCreator(`af-cont${af}`, 'p', `af-header${af}`, `af-header`)
    document.getElementById(`af-header${af}`).appendChild(document.createTextNode(aFBold[af]))
    divCreator(`af-cont${af}`, 'p', `af-sub${af}`, `af-sub`)
    document.getElementById(`af-sub${af}`).appendChild(document.createTextNode(afSub[af]))
}

//FOOTER START

divCreator('content', 'div', 'footer', 'footer')

//signUp
divCreator('footer', 'div', 'footer-sign', 'footer-sign')
for (let f = 0; f < 3; f++) {
    divCreator('footer-sign', 'div', `footer-sign-divs${f}`, 'footer-sign-divs')
}
divCreator(`footer-sign-divs0`, 'p', 'foo-text', 'foo-text')
document.getElementById('foo-text').appendChild(document.createTextNode('Sign up for CONNEX products'))

divCreator(`footer-sign-divs1`, 'input', 'foo-input', 'foo-input')

document.getElementById('foo-input').setAttribute('placeholder', 'Enter your email address')

divCreator(`footer-sign-divs2`, 'button', 'foo-text2', 'foo-text2')
document.getElementById('foo-text2').appendChild(document.createTextNode('SIGNUP'))

//
divCreator(`footer`, 'div', 'store-name', 'store-name')
document.getElementById('store-name').appendChild(document.createTextNode('CONNEX STORE'))

divCreator(`footer`, 'div', 'mid-footer-cont', 'mid-footer-cont')
divCreator(`mid-footer-cont`, 'div', 'mid-footer0', 'mid-footer0')
divCreator(`mid-footer-cont`, 'div', 'mid-footer1', 'mid-footer1')
for (let mf = 0; mf < 4; mf++) {
    divCreator('mid-footer0', 'div', `mid-footer-div${mf}`, 'mid-footer-div')
}

var account = ['Account Details', 'Orders', 'Returns & Exchanges', 'WishList', 'Notification Settings', 'Buy Gift Vouchers']
var client = ['Help Center', 'FAQ', 'Payments Options', 'Delivery Options', 'Click and Collect', 'Returns and Policy', 'Privacy and Policy']
var company = ['About Us', 'Careers at Connex', 'Tech Careers', 'Marketing Services', 'Corporate Gift Services', 'Conscious Journey', 'Contact', 'Takealot Group Human Rights', 'Statement', 'Speak Up Process']
var takealot = ['Mr D Food', 'Takelot']
//Account
divCreator(`mid-footer-div0`, 'p', `account-head`, 'account-head')
document.getElementById(`account-head`).appendChild(document.createTextNode('ACCOUNTS'))

for (let ac = 0; ac < account.length; ac++) {
    divCreator(`mid-footer-div0`, 'p', `account-sub${ac}`, 'account-sub')
    document.getElementById(`account-sub${ac}`).appendChild(document.createTextNode(account[ac]))
}

//Client
divCreator(`mid-footer-div1`, 'p', `client-head`, 'client-head')
document.getElementById(`client-head`).appendChild(document.createTextNode('CLIENTS CONCIERGE'))

for (let cl = 0; cl < client.length; cl++) {
    divCreator(`mid-footer-div1`, 'p', `client-sub${cl}`, 'client-sub')
    document.getElementById(`client-sub${cl}`).appendChild(document.createTextNode(client[cl]))
}

//The Company
divCreator(`mid-footer-div2`, 'p', `company-head`, 'company-head')
document.getElementById(`company-head`).appendChild(document.createTextNode('THE COMPANY'))

for (let cm = 0; cm < company.length; cm++) {
    divCreator(`mid-footer-div2`, 'p', `company-sub${cm}`, 'company-sub')
    document.getElementById(`company-sub${cm}`).appendChild(document.createTextNode(company[cm]))
}

//The Taketoy
divCreator(`mid-footer-div3`, 'p', `takealot-head`, 'takealot-head')
document.getElementById(`takealot-head`).appendChild(document.createTextNode('TAKEALOT.GROUP'))

for (let tk = 0; tk < takealot.length; tk++) {
    divCreator(`mid-footer-div3`, 'p', `takealot-sub${tk}`, 'takealot-sub')
    document.getElementById(`takealot-sub${tk}`).appendChild(document.createTextNode(takealot[tk]))
}


//footer follow links

// Log in to your account
divCreator('mid-footer1', 'div', 'log-in', 'log-in')
divCreator('log-in', 'p', 'log-in-text', 'log-in-text')
document.getElementById('log-in-text').appendChild(document.createTextNode('Log In to your Account'))

// Follow icons
divCreator('mid-footer1', 'div', 'fol-icons', 'fol-icons')
for (let fli = 0; fli < 4; fli++) {
    divCreator('fol-icons', 'div', `fol-icons-cont${fli}`, 'fol-icons-cont')
    document.getElementById(`fol-icons-cont${fli}`).style.backgroundImage = `url(assets/footer/follow${fli}.png)`
}

//Download app

divCreator('mid-footer1', 'div', 'down-app', 'down-app')
for (let dwn = 0; dwn < 2; dwn++) {
    divCreator('down-app', 'div', `down-app-img${dwn}`, 'down-app-img')
    divCreator(`down-app-img${dwn}`, 'div', `down-app-img-cont${dwn}`, 'down-app-img-cont')
    document.getElementById(`down-app-img-cont${dwn}`).style.backgroundImage = `url(assets/footer/down${dwn}.png)`
    divCreator(`down-app-img${dwn}`, 'div', `down-app-img-text${dwn}`, 'down-app-img-text')
    // document.getElementById(`down-app-img${dwn}`).style.backgroundImage=`url(assets/circleAds/circle-ads${dwn}.jpg)`
}

var appS = ['download on the', 'App Store']
var gooP = ['Get it on', 'Google Play']
var AppG = ['EXPLORE IT ON', 'App Gallery']

for (let lo = 0; lo < appS.length; lo++) {
    divCreator(`down-app-img-text${0}`, 'p', `down-app-text${lo}`, `down-app-text${lo}`)
    document.getElementById(`down-app-text${lo}`).appendChild(document.createTextNode(appS[lo]))


}



//divCreator(`down-app-img${1}`, 'div', `down-app-img-cont${1}`, 'down-app-img-cont')
//document.getElementById(`down-app-img-cont${1}`).style.backgroundImage = `url(assets/circleAds/circle-ads${0}.jpg)`

//divCreator(`down-app-img${1}`, 'div', `down-app-img-text${2}`, 'down-app-img-text')

for (let lo = 0; lo < gooP.length; lo++) {
    divCreator(`down-app-img-text${1}`, 'p', `down-app-text-t-${lo}`, `down-app-text${lo}`)
    document.getElementById(`down-app-text-t-${lo}`).appendChild(document.createTextNode(gooP[lo]))

}



divCreator('mid-footer1', 'div', 'down-app-g', 'down-app-g')
divCreator('down-app-g', 'div', 'down-app-g-cont', 'down-app-g-cont')
//document.getElementById('down-app-g-cont').style.backgroundImage=`url(assets/circleAds/circle-ads${0}.jpg)`
divCreator('down-app-g-cont', 'div', `down-app-g-cont-img`, 'down-app-img-cont')
document.getElementById(`down-app-g-cont-img`).style.backgroundImage = `url(assets/footer/down${2}.png)`


divCreator('down-app-g-cont', 'div', `down-app-img-text${3}`, 'down-app-img-text')

for (let lo = 0; lo < AppG.length; lo++) {
    divCreator(`down-app-img-text${3}`, 'p', `down-app-text-t${lo}`, `down-app-text-t${lo}`)
    document.getElementById(`down-app-text-t${lo}`).appendChild(document.createTextNode(AppG[lo]))


}


divCreator('mid-footer1', 'div', 'foo-ratings', 'foo-ratings')
divCreator('foo-ratings', 'div', 'foo-ratings-cont', 'foo-ratings-cont')

divCreator('foo-ratings-cont', 'div', 'foo-ratings-inner0', 'foo-ratings-inner0')
divCreator('foo-ratings-inner0', 'div', 'foo-ratings-inner-pic', 'foo-ratings-inner-pic')
document.getElementById('foo-ratings-inner-pic').style.backgroundImage = `url(assets/circleAds/circle-ads${0}.jpg)`


divCreator('foo-ratings-cont', 'div', 'foo-ratings-inner1', 'foo-ratings-inner1')


divCreator('foo-ratings-inner1', 'p', 'foo-ratings-inner-text-cont', 'foo-ratings-inner-text-cont')
divCreator('foo-ratings-inner-text-cont', 'p', 'foo-ratings-inner-text', 'foo-ratings-inner-text')
document.getElementById('foo-ratings-inner-text').appendChild(document.createTextNode('...'))


divCreator('foo-ratings-inner1', 'div', 'foo-ratings-stars', 'foo-ratings-stars')

for (let fst = 0; fst < 5; fst++) {
    if (fst < 4) {
        divCreator('foo-ratings-stars', `div`, `foo-ratings-stars${fst}`, `foo-ratings-stars-img`)
        document.getElementById(`foo-ratings-stars${fst}`).style.backgroundImage = `url(assets/footer/fstar.png)`
    } else {
        divCreator('foo-ratings-stars', `div`, `foo-ratings-stars${fst}`, `foo-ratings-stars-img`)
        document.getElementById(`foo-ratings-stars${fst}`).style.backgroundImage = "url(assets/footer/hstar.png)"
    }
}

divCreator('foo-ratings-inner1', 'p', 'foo-ratings-num', 'foo-ratings-num')
document.getElementById('foo-ratings-num').appendChild(document.createTextNode('4.59'))

divCreator('foo-ratings-inner1', 'p', 'foo-ratings-text', 'foo-ratings-text')
document.getElementById('foo-ratings-text').appendChild(document.createTextNode('Excellent'))












// Pic change
//Left right Buttons

document.getElementById('current-pic-indicator0').style.backgroundColor = "#1b82d6"
document.getElementById('current-pic-indicator1').style.backgroundColor = "rgba(150,150,150,0.7)"
var imageSlider = document.getElementById('slide-cover');

var cImage = imageSlider.style.backgroundImage
setInterval(() => {

    if (state == 0) {
        imageSlider.style.backgroundImage = `url(assets/slide/slide1.jpg)`;
        document.getElementById('current-pic-indicator1').style.backgroundColor = "#1b82d6"
        document.getElementById('current-pic-indicator0').style.backgroundColor = "rgba(150,150,150,0.7)"
        state++

    } else {
        imageSlider.style.backgroundImage = `url(assets/slide/slide0.jpg)`;
        document.getElementById('current-pic-indicator0').style.backgroundColor = "#1b82d6"
        document.getElementById('current-pic-indicator1').style.backgroundColor = "rgba(150,150,150,0.7)"
        state--
    }
}, 5000)

imageSlider.addEventListener('mouseover', () => {
    document.getElementById('click-left').style.display = "flex"
    document.getElementById('click-right').style.display = "flex"
    //left change

});
imageSlider.addEventListener('mouseleave', () => {
    document.getElementById('click-left').style.display = "none"
    document.getElementById('click-right').style.display = "none"
});

var clickLeft = document.getElementById('click-left');

clickLeft.addEventListener('click', () => {
    if (state == 0) {
        imageSlider.style.backgroundImage = `url(assets/slide/slide1.jpg)`;
        document.getElementById('current-pic-indicator1').style.backgroundColor = "#1b82d6"
        document.getElementById('current-pic-indicator0').style.backgroundColor = "rgba(150,150,150,0.7)"
        state++
    } else {
        imageSlider.style.backgroundImage = `url(assets/slide/slide0.jpg)`;
        document.getElementById('current-pic-indicator0').style.backgroundColor = "#1b82d6"
        document.getElementById('current-pic-indicator1').style.backgroundColor = "rgba(150,150,150,0.7)"
        state--
    }
});

var clickRight = document.getElementById('click-right');
clickRight.addEventListener('click', () => {
    if (state == 1) {
        imageSlider.style.backgroundImage = `url(assets/slide/slide0.jpg)`;
        document.getElementById('current-pic-indicator0').style.backgroundColor = "#1b82d6"
        document.getElementById('current-pic-indicator1').style.backgroundColor = "rgba(150,150,150,0.7)"
        state--
    } else {
        imageSlider.style.backgroundImage = `url(assets/slide/slide1.jpg)`;
        document.getElementById('current-pic-indicator1').style.backgroundColor = "#1b82d6"
        document.getElementById('current-pic-indicator0').style.backgroundColor = "rgba(150,150,150,0.7)"
        state++
    }
});


