function loadVideo() {
  var link
  $.getJSON("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCbqCZ0VWNkC3kAOMyzCQtWg", function(data) {
    var link = data.items[0].link;
  });
  return link
}
var youtube-link = loadVideo();

document.write('<a href="'+link+'" width="600" height="340" frameborder="0" allowfullscreen></iframe><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>');
