let randomQuote = "";
let randomAuthor = "";
$(document).ready(function () {
  GetRandomQuote();
  $("#new-quote").on("click", GetRandomQuote);
});
const SetRandomColor = () => {
  const colors = [
    "#16a085",
    "#27ae60",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#77B1A9",
    "#73A857",
  ];
  let randomColor = Math.floor(Math.random() * colors.length);
  let currentColor = colors[randomColor];
  $("body").fadeOut(300);
  $("body").css("background-color", currentColor);
  $("body").fadeIn(300);
  $(".randomTxtColor").css("color", currentColor);
  $(".randomBgColor").css("background-color", currentColor);
};
const GetRandomQuote = () => {
  SetRandomColor();
  let quotesData = $.get(
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
    [],
    () => {
      quotesData = JSON.parse(quotesData.responseText);
      let quotes = quotesData.quotes;
      let randomCount = Math.floor(Math.random() * quotes.length);
      randomAuthor = quotes[randomCount].author;
      randomQuote = quotes[randomCount].quote;
      $("#text").animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        $("#text").text(randomQuote);
      });

      $("#author").animate({ opacity: 0 }, 500, function () {
        $(this).animate({ opacity: 1 }, 500);
        $("#author").text("-" + randomAuthor);
      });
    }
  );
};
