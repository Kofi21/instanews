$(function() {
  $(".musicButton").on("click", function(event) {
    event.preventDefault();

    let val = $("input").val();

    let url = `https://itunes.apple.com/search?entity=album&limit=6&term=${val}`;

    console.log(url);
    $.ajax({
      dataType: "JSON",
      method: "GET",
      url: url
    })
      .done(function({ results }) {
        $.each(results, function(index, value) {
          $(".album-list").append(
            `<li> <img src="${value.artworkUrl100}"> <br> ${value.collectionName} </li>`
          );

          console.log(index, value.artworkUrl100);
          console.log(index, value.collectionName);
          $;
        });
        // console.log(results);

        // console.log(results);
        // $(".results").append(results);
      })
      .fail(function() {
        $("").append("Sorry there was an error.");
      })
      .always(function() {
        $("").append("Thanks for using our API");
      });
  });
});
