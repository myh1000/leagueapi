[HttpPost]
using System.*;

public static rosterPull(string roster) {
  string text = "";
  try {
    using (var webClient = new System.Net.WebClient()) {
      webClient.Encoding = Encoding.UTF8;
      var json2 = webClient.DownloadString("https://na.api.pvp.net/api/lol/na/v1.4/summoner/" + roster + "?api_key=7cf51bc0-7417-4b55-8d08-b9eec244bbc4")
      return Json(json2);
    }
  }
  catch (Exception e) {
    text = "error";
  }
  return Json(new { json = text });
}
</script>
