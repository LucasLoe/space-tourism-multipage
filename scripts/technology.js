var techState = 0

fetch('/data.json').then(
    res => {
        res.json().then(
            data => {
                window.globalData = data;
                renderData(data);
                setTechState(techState);
            }
        )
    }
)

function changeDestination(event){
    if (event.target.id == 'nav-0') {
        techState = 0;
        setTechState(techState)
        renderData(globalData)
    }
    else if (event.target.id == 'nav-1') {
        techState = 1;
        setTechState(techState)
        renderData(globalData)
    }
    else if (event.target.id == 'nav-2') {
        techState = 2;
        setTechState(techState)
        renderData(globalData)
    }
}

function renderData(data) {
    nameTag = document.getElementById('technology-name');
    imgTag = document.getElementById('technology-image');
    sourceTag = document.getElementById('technology-source-image');
    descriptionTag = document.getElementById('technology-description');

    dataSubSet = data.technology[techState]

    nameTag.innerText = dataSubSet.name;
    descriptionTag.innerText = dataSubSet.description;
    imgTag.src = dataSubSet.images.portrait;
    sourceTag.srcset = dataSubSet.images.landscape;
}

function setTechState(techState) {
    navId = 'nav-' + techState.toString();
    activeNav = document.getElementById(navId)
    navList = document.getElementsByTagName('button')

    for (const e of navList){
        e.classList.remove('active-nav');
    }

    activeNav.classList.add('active-nav')
}