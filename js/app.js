$(function() {
  $(".drop-down").on("change", function(event) {
    event.preventDefault();

    let userInput = $("select").val();

    if (userInput === "selected") {
      $(".logo").removeClass("header-change");
      $("header").css("height", "700px");
    }
    let url = `https://api.nytimes.com/svc/topstories/v2/${userInput}.json?api-key=2TZAPhtSJO2dMB9VrL2DdoDO7jl1G6Os`;

    console.log(url);
    $.ajax({
      dataType: "JSON",
      method: "GET",
      url: url
    }).done(function({ results }) {
      $.each(results, function(index, value) {
        // console.log(results);
        let articleImage = value.multimedia[0].url;
        console.log(articleImage);
        let url = value.Url;
        let Description = value.abstract;
        console.log(value.abstract);

        if (index === 12) return false;

        //Display articles
        $(".main-content").append(`
           <figure class="article-image">
               <img src="${articleImage}">
               <a href="${url}" target="new">
               <p class="article-text">${Description}</p></a>
           </figure>`);

        // $(".article-text").hide();
        //Remove previous articles
        $(".drop-down").on("change", function() {
          $(".main-content").empty();
        });

        $("header").css("height", "10%");

        $("header").css("margin-bottom", "20px");

        $("header").css("margin-top", "20px");

        $(".logo").addClass("header-change");
      });
      // .fail(function() {
      //   $("").append("Sorry there was an error.");
      // })
      // .always(function() {
      //   $("").append("Thanks for using our API");
      // });
    });
  });

  // $(function() {
  //   $(".main-content").mouseenter(function() {
  //     $(this)
  //       .find("p")
  //       .slideToggle(500);
  //   });
  // });

  // $(function() {
  //   $(".main-content").mouseleave(function() {
  //     $(this)
  //       .find("p")
  //       .slideToggle(500);
  //   });
  // });

  // $(".main-content").hover(
  //   function() {
  //     $(".article-text").show();
  //   },
  //   function() {
  //     $(".article-text").hide();
  //   }
  // );

  // $(".main-content").on("hover", "img", function(event) {
  //   console.log("hovvered over this: ", event);
  // });
});
