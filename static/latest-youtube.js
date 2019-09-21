var channel_id = "3DUCbqCZ0VWNkC3kAOMyzCQtWg";
var video_number = "0";
var iframe_id = "ytvid";
document.write('<iframe id="'+iframe_id+'" width="600" height="340" frameborder="0" allowfullscreen></iframe><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script><script type="text/javascript">function loadVideo(iframe) {$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%'+channel_id+'", function(data) {var link = data.items['+video_number+'].link;id = link.substr(link.indexOf("=") + 1);iframe.setAttribute("src", "https://youtube.com/embed/" + id);});}var iframe = document.getElementById("'+iframe_id+'");loadVideo(iframe);</script>');
