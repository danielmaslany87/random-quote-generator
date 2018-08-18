// FSJS - Random Quote Generator
// creating a random number in range from 0 to specified by argument
function getRandomNumber(number) {
    var random = Math.floor(Math.random() * number);
    return random
}
// generating random RGB color
function randomRGB() {
        red = Math.floor(Math.random() * 256 );
        green = Math.floor(Math.random() * 256 );
        blue = Math.floor(Math.random() * 256 );
        rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
        return rgbColor;
}
// Create the array of quote objects and name it quotes
// an object that has category names set as keys. And each key has an array or arrays
var quotes = {
    happy: [
        ['For every minute you are angry you lose sixty seconds of happiness.', 'Ralph Waldo Emerson'],
        ['Love is that condition in which the happiness of another person is essential to your own.',
            'Robert A. Heinlein, Stranger in a Strange Land'],
        ['Folks are usually about as happy as they make their minds up to be. ', 'Abraham Lincoln'],
        ['Time you enjoy wasting is not wasted time.', 'Marthe Troly-Curtin, Phrynette Married'],
        ['Happiness in intelligent people is the rarest thing I know.', 'Ernest Hemingway, The Garden of Eden']
    ],
    sad: [
        ['The reason it hurts so much to separate is because our souls are connected.', 'Nicholas Sparks'],
        ['So it’s true, when all is said and done, grief is the price we pay for love.',
            'E.A. Bucchianeri, Brushstrokes of a Gadfly,'],
        ['The funniest people are the saddest ones', 'Confucius'],
        ['Forever and ever, kid, until you\'re sick and tired of seeing me.', 'Marie Lu, Legend'],
        ['You’ve changed me forever. And I’ll never forget you.', 'Kiera Cass, The Elite']
    ],
    inspirational: [
        ['Be yourself; everyone else is already taken.', 'Oscar Wilde'],
        ['Be the change that you wish to see in the world.', 'Mahatma Gandhi'],
        ['No one can make you feel inferior without your consent.', 'Eleanor Roosevelt, This is My Story'],
        ['Live as if you were to die tomorrow. Learn as if you were to live forever.', 'Mahatma Gandhi'],
        ['Without music, life would be a mistake.', 'Friedrich Nietzsche, Twilight of the Idols']
    ]
};
// Create the getRandomQuuote function and name it getRandomQuote
/*
Creating two random numbers, one in range 0-2 to select a key in the object, then another one between 0-4 to pick a
array containing the quote and source. When the conditions are meet, one array will be stored in a separate array,
with an added category TAG that's specific for the type of quote.
 */
function getRandomQuote() {
    var indexOfCategory = getRandomNumber(3);
    var valueOfCategory = getRandomNumber(5);
    var random_quote = [];
    do {
        if (indexOfCategory === 0) {
            random_quote[0] = quotes['happy'][valueOfCategory][0];
            random_quote[1] = quotes['happy'][valueOfCategory][1];
            random_quote[2] = 'Happy';
        } else if (indexOfCategory === 1) {
            random_quote[0] = quotes['sad'][valueOfCategory][0];
            random_quote[1] = quotes['sad'][valueOfCategory][1];
            random_quote[2] = 'Sad';
        }  else {
            random_quote[0] = quotes['inspirational'][valueOfCategory][0];
            random_quote[1] = quotes['inspirational'][valueOfCategory][1];
            random_quote[2] = 'Insipirational';
        }
        return random_quote
    } while (false)
}
// Create the printQuote funtion and name it printQuote
/*
Assigning the insert location in the HTML file to a variable, storing the ID of the body and button  to change color.
Generating a random color to use in the  swap. Assigning all values (string concatonation, etc.)
 */
    function printQuote() {
        var quote = document.getElementById('quote-box');
        var buttonColor = document.getElementById('loadQuote');
        var bodyColor = document.body;
        var backgroundColor = randomRGB();
        var quote_in_list = getRandomQuote();

        bodyColor.style = 'background-color: ' + backgroundColor + ';';
        buttonColor.style = 'background-color: ' + backgroundColor + ';';
        quote.innerHTML = '<p class="quote">' + quote_in_list[0] + '</p>';
        quote.innerHTML += '<p class="source">' + quote_in_list[1] + '</p>';
        quote.innerHTML += '<p class="quote-category">CATEGORY: ' + quote_in_list[2].toUpperCase() + '</p>';
}
// Running the function once to generate a random quote on page load
printQuote();
// Setting the function to run in 20sec intervals
setInterval(printQuote, 20000);
// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);