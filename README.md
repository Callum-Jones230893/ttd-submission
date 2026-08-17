Proposal: 

I aim to create my tests about a memory game, using Test-driven development, ideally without needing to create the components.
My goal is to create a test following a plan that I created, with a basic layout i.e header, body and footer.
The structure would look something like the following: 

|--src/
|  |--components/
|  |  |--Header
|  |  |--InitialDisplay
|  |  |--BoardLayout
|  |  |--Card
|  |  |--ResultContainer
|  |  |--ResultContent
|  |  |--Footer
|  |--lib/
|  |  |--types.ts
|  |  |--data.ts
|--public/
|  |--images/

The flow that I imagine is:
  1. The page renders, and there is the initial display which is a welcome message, and instructions with a button to start the game.
  2. When the user clicks to start the game, the intiial display should be removed from the DOM and the board containing a randomized array of cards face down should become visible.
  3. The user can click on a card, and it will flip to show the image, there should be a small delay before the user can click the second card, and they should not be able to click the same card twice.
  4. When the user has clicked the two cards, there should be a timeout which prevents clicking on anymore cards during the duration, and during this time, if the cards match, keep them face up. If they do not match, flip them back.
  5. If the user was successful at getting a pair, those cards should not be clickable anymore, but they can still click the remaining cards.
  6. When all cards have been paired there should be a message saying "Congratulations" or something like that, along with a button to replay.
  7. When the replay button is clicked, the board should be wiped and the cards reshuffled.

What would each component need?
  Header: heading element containing a h1

  InitialDisplay:  section element containing a h2, a p and a button

  BoardLayout: div element containing a grid or a flexbox, that is rendering the Card component

  Card: div element with each cards image (mapping over each)

  ResultContainer: section element containing a h2, a p, and a button
  
  Footer: footer element containing a span or a p

What would my card objects look like?
  An array of objects that would have two properties
  [
    {uuid: 1, name: pikachu, img: pickachu.jpg},
    {uuid: 2, name: pikachu, img: pickachu.jpg}, 
    {uuid: 4, name: bulbasaur, img: bulbasaur.jpg}, 
    {uuid: 4, name: bulbasaur, img: bulbasaur.jpg}
  ]

What would each component need to test?
  Header: 
    1. Test that the Header is rendering a h1, that contains the text
    2. Test that only one H1 is on the page?

  InitialDisplay - (state from home page (showBoard, setShowBoard): boolean):
    1. Test that the InitialDisplay is rendering, and that it contains a h2, that contains the text
    2. Test that it contains the element containing instructions is rendering and contains text
    3. Test that it contains a button, and that the button takes the users click event.
    4. Test that when the user clicks to begin the game, the event fires correctly and the correct number of times.

  BoardLayout - (state that would contain the cards array, and remember which have been flipped (cardStatus, setCardStatus)) - (state from home page also (showResults, setShowResults)) :
    1. Test that the component is not rendering on page load.
    2. Test that the component does render when showBoard becomes true.
    3. Test that when the component is rendering the cards are being displayed face down.
    4. Test that when all cards are paired correctly, the parent state will toggle, and the user will see the results.

  Card - (state from BoardLayout and maybe individual state? i.e isFlipped, setIsFlipped which changes the image from the face to the back):
    1. Test that the card is rendering the default img (facedown)
    2. Test that when the card is the selected card, the state changes, and the img is now the face up image.
    3. Test that the function works to update parent state, when the user clicks the card, the parent state array will change to say that this index is now flipped
    4. Test that the user cannot click on the same card.
    5. Test for when the user selects two cards that do not match, the state returns those items to default.
    6. Test for when the user selects two cards that do match, the state locks those cards face up and unclickable.
    7. Test for if the user clicks another card while two are face up and not locked, they cannot click another card during the transition.

  ResultContainer - (state from home (showResults, setShowResults)):
    1.  Test that the component is not rendering on page load.
    2.  Test that when the game is over, the component does render.

  Footer:
    1. Test that the footer exists and that it contains the text