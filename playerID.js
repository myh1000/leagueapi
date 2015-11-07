var ID = "";
$(document).ready(function(){
  $('#submitlookup').on('click', function(event){
    event.preventDefault();
    ID = $("#userName").val();


    $.ajax({
        url: "rosterPull", //rosterPull here refers to the C# method
        type: "POST",
        data: "roster=" + ID,
        dataType: "json",
        success: function (resp) {

            json = JSON && JSON.parse(resp) || $.parseJSON(resp);

            for (var i = 0; i < teamRoster.length; i++) {
                teamRoster[i] = json[teamRoster[i]];
            }

            updateWebSite();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            if (XMLHttpRequest.status == 0) {
              alert("error getting Summoner data2!");
            }
        }
    });
  });
});

function updateWebSite() {

}
