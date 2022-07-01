function generate(){
    var quotes = {
        "- C.S Lewis" : '"I was not born to be free---I was born to adore and obey."',
        "- John Galsworthy" : '"Life calls the tune, we dance."',
        "- Jamie Ford, Songs of Willow Frost" : '"The library is like a candy store where everything is free."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;


}