var crewState = 0

fetch('/data.json').then(
    res => {
        res.json().then(
            data => {
                window.globalData = data;
                renderData(data);
                setDotState(crewState);
            }
        )
    }
)

function chooseByDot(event){
    if (event.target.id == 'dot-0') {
        crewState = 0;
        setDotState(crewState)
        renderData(globalData)
    }
    else if (event.target.id == 'dot-1') {
        crewState = 1;
        setDotState(crewState)
        renderData(globalData)
    }
    else if (event.target.id == 'dot-2') {
        crewState = 2;
        setDotState(crewState)
        renderData(globalData)
    }
    else if (event.target.id == 'dot-3') {
        crewState = 3;
        setDotState(crewState)
        renderData(globalData)
    }
}

function renderData(data) {
    jobTag = document.getElementById('crew-job');
    nameTag = document.getElementById('crew-name');
    imgTag = document.getElementsByClassName('crew-image')[0];
    bioTag = document.getElementById('crew-bio');

    dataSubSet = data.crew[crewState]

    jobTag.innerText = dataSubSet.role;
    nameTag.innerText = dataSubSet.name;
    bioTag.innerText = dataSubSet.bio;
    imgTag.src = dataSubSet.images.webp;
}

function setDotState(crewState) {
    dotId = 'dot-' + crewState.toString();
    activeDot = document.getElementById(dotId)
    buttonList = document.getElementsByTagName('button')

    for (const e of buttonList){
        e.classList.remove('active-dot');
    }

    activeDot.classList.add('active-dot')
}