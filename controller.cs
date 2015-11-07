[HttpPost]
public ActionResult rosterPull(string roster) {
  string text = "";
  try {
    using (var webClient = new System.Net.WebClient()) {
      webClient.Encoding = Encoding.UTF8;
      var json2 = webClient.DownloadString("https://na.api.pvp.net/api/lol/na/v1.4/summoner/" + roster + "/name?api_key=")
      return Json(json2);
    }
  }
  catch (Exception e) {
    text = "error";
  }
  return Json(new { json = text });
}
