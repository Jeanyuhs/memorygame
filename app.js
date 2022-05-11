document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
                {
            name: 'blackKoi',
            img: 'images/blackKoi.png'
        },
        {
            name: 'blackKoi',
            img: 'images/blackKoi.png'
        },
        {
            name: 'bluekKoi',
            img: 'images/blueKoi.png'
        },
        {
            name: 'bluekKoi',
            img: 'images/blueKoi.png'
        },
        {
            name: 'greenkKoi',
            img: 'images/greenKoi.png'
        },
        {
            name: 'greenkKoi',
            img: 'images/greenKoi.png'
        },
        {
            name: 'pinkkKoi',
            img: 'images/pinkKoi.png'
        },
        {
            name: 'pinkkKoi',
            img: 'images/pinkKoi.png'
        },
        {
            name: 'purpleKoi',
            img: 'images/purpleKoi.png'
        },
        {
            name: 'purpleKoi',
            img: 'images/purpleKoi.png'
        },
        {
            name: 'redKoi',
            img: 'images/redKoi.png'
        },
        {
            name: 'redKoi',
            img: 'images/redKoi.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())


    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/back.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard) 
            grid.appendChild(card)
        }
    }

    const imgBlank = document.querySelector('.img-blank')

    
    // check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if ((cardsChosen[0] === cardsChosen[1]) && (optionOneId !== optionTwoId)) { // with out && players would be able to select same image twice to get a match
            // alert('You found a match') - removed due to having to click to remove prompt to enhance user experience
            
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            
            
            cardsWon.push(cardsChosen)
        } 
        else {
            cards[optionOneId].setAttribute('src', 'images/back.png')
            cards[optionTwoId].setAttribute('src', 'images/back.png')
            // alert('Sorry, try again') - removed due to having to click to remove prompt to enhance user experience
        }  

        
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
         }
   

    }


    // flip card
    // added eventListener to prevent more than two cards being clicked at a time
    document.addEventListener("click", e => {
        if (cardsChosen.length === 2) {
            e.stopPropagation();
            e.preventDefault();
        } 
    }, true);

    
    function flipCard() {

        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
         
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }

    } 

createBoard()


})