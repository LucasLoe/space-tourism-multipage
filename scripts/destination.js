var destinationState = 0

fetch('/data.json').then(
    res => {
        res.json().then(
            data => {
                window.globalData = data;
                renderData(data);
                setNavState(destinationState);
            }
        )
    }
)

function changeDestination(event){
    if (event.target.id == 'nav-0') {
        destinationState = 0;
        setNavState(destinationState)
        renderData(globalData)
    }
    else if (event.target.id == 'nav-1') {
        destinationState = 1;
        setNavState(destinationState)
        renderData(globalData)
    }
    else if (event.target.id == 'nav-2') {
        destinationState = 2;
        setNavState(destinationState)
        renderData(globalData)
    }
    else if (event.target.id == 'nav-3') {
        destinationState = 3;
        setNavState(destinationState)
        renderData(globalData)
    }
}

function renderData(data) {
    distanceTag = document.getElementById('destination-distance');
    travelTag = document.getElementById('destination-travel');
    imgTag = document.getElementById('destination-image');
    descriptionTag = document.getElementById('destination-description');
    planetTag = document.getElementById('destination-planet');
    

    dataSubSet = data.destinations[destinationState]

    travelTag.innerText = dataSubSet.travel;
    distanceTag.innerText = dataSubSet.distance;
    descriptionTag.innerText = dataSubSet.description;
    planetTag.innerText = dataSubSet.name
    imgTag.src = dataSubSet.images.webp;
}

function setNavState(destinationState) {
    navId = 'nav-' + destinationState.toString();
    activeNav = document.getElementById(navId)
    navList = document.getElementsByClassName('sub-3')

    for (const e of navList){
        e.classList.remove('active');
    }

    activeNav.classList.add('active')
}