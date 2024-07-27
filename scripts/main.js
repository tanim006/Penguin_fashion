const jacket = document.querySelectorAll('.card button')
jacket.forEach(function (button){
    button.addEventListener('click',function(){
        const card = button.closest('.card')
        const image = card.querySelector('.jacket-image')
        const imageSource = image.src
        const fromImage = document.getElementById('from-image')
        fromImage.src = imageSource

        addClasslist('navbarPart')
        addClasslist('footer')
        addClasslist('bannerPart')
        removeClasslist('fromPart')

        const jacketTitle = card.querySelector('h2').innerText
        const productName = document.getElementById('productName')
        productName.innerText = jacketTitle


        const jacketPrice = card.querySelector('.productPrice').innerText
        const productCost = document.getElementById('productCost')
        productCost.innerText = jacketPrice

        const finalPrice = document.getElementById('finalPrice')
        finalPrice.innerText =(jacketPrice+15)


    })
})
function finalPage(){
    addClasslist('navbarPart')
        addClasslist('footer')
        addClasslist('bannerPart')
        addClasslist('fromPart')
    removeClasslist('confirmedPart')


            
    const consumerName = document.getElementById('name').value;
    const consumerMail = document.getElementById('mail').value;
    const consumerSize = document.getElementById('size').value;
    const consumerAddress = document.getElementById('address').value;
    const consumerPhone = document.getElementById('phone').value;
    const consumerQuantity = document.getElementById('quantity').value;

document.getElementById('selectedName').innerText = consumerName;
    document.getElementById('selectedMail').innerText = consumerMail;
    document.getElementById('selectedSize').innerText = consumerSize;
    document.getElementById('selectedAddress').innerText = consumerAddress;
    document.getElementById('selectQuantity').innerText = consumerQuantity;




}
function startOver(){
    removeClasslist('navbarPart')
    removeClasslist('bannerPart')
    removeClasslist('footer')

        addClasslist('fromPart')
        addClasslist('confirmedPart')
}
