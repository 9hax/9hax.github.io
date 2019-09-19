document.write(`
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="static/main.css">
  <link rel="stylesheet" href="static/navbar.css">
  <link rel="stylesheet" href="static/fontawesome.css">
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="HandheldFriendly" content="true">
</head>

<div class="navbar-container">
  <nav class="navbar">
    <span class="navbar-toggle" id="js-navbar-toggle">
      <i class="fa fa-bars"></i>
    </span>
    <a href="/#" class="navbar-logo">9hax</a>
    <ul class="navbar-link-area" id="navbar-collapse-js">
      <li><a href="#" class="navbar-links">Home</a></li>
      <li><a href="#" class="navbar-links">Music</a></li>
      <li><a href="#" class="navbar-links">Projects</a></li>
      <li><a href="#" class="navbar-links">School</a></li>
      <li><a href="#" class="navbar-links">Imprint</a></li>
    </ul>
    <script type="text/javascript">
      let mainNav = document.getElementById('navbar-collapse-js');
      let navBarToggle = document.getElementById('js-navbar-toggle');
      navBarToggle.addEventListener('click', function() {
        mainNav.classList.toggle('navbar-active-mobile');
      });
    </script>
  </nav>
</div>
`)
