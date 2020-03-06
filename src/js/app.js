
let i = 0
function addMacaron(){
    document.querySelectorAll('#macaron')[0].value = ++i;
    // addMacaron =addMacaron + 1
    // document.getElementById('text').value = addMacaron;
    // document.title = addMacaron + "Macaron";
}

function getCount() {
    return i;
}

let clickCompanion = 0
function countClick2(){
    if(countClick<20){
        clickCompanion = -1;
        document.querySelectorAll('macaron').innerHTML = clickCompanion++;
    }
    // function update(){

    }
    let autoClick = 0;
    function timer() {
        addMacaron = addMacaron + autoClick;
        update()
    }
    setInterval(timer, 1000)
}
