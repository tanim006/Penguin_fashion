function addClasslist (elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function removeClasslist (elementId){
    const element =document.getElementById(elementId)
    element.classList.remove('hidden')
}

function SetTextElementValueID(ElementId,value){
    const element = document.getElementById(ElementId)
    element.innerText = value
}
function SetTextElementByInput(ElementId,value){
    const element = document.getElementById(ElementId)
    element.value = value
}

