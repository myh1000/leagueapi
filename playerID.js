var ID = "";
$(document).ready(function(){
  $('#submitlookup').on('click', function(event){
    event.preventDefault();
    ID = $("#summID").val();

    $.ajax({
        url: "/myh1000.github.io/controllers/controller.cs", //rosterPull here refers to the C# method
        type: "POST",
        data: {
          roster: ID
        },
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (resp) {

            json = JSON && JSON.parse(resp) || $.parseJSON(resp);

            summonerLevel = json[userID].summonerLevel;
            summonerID = json[userID].id;

            document.getElementById("sLevel").innerHTML = summonerLevel;
            document.getElementById("sID").innerHTML = summonerID;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            if (XMLHttpRequest.status == 0) {
              alert("error getting Summoner data!");
            }
        }
    });
  });
});
