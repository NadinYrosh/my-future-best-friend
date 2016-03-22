$(document).ready(function() {
  $("button#light").click(function() {
      $("body").addClass("light-background");
    });

    $("p").click(function() {
        $("p").addClass("pgph");
        $("p").show("pgph2");
      });
  });
