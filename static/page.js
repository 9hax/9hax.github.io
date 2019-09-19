document.write(`
<head>
  <meta charset="utf-8">
  <title>9hax</title>
  <link rel="stylesheet" href="static/main.css">
  <link rel="stylesheet" href="static/navbar.css">
  <link rel="stylesheet" href="static/fontawesome.css">
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="HandheldFriendly" content="true">
</head>

  <div class="header-nav">
    <nav class="navbar">
      <span class="navbar-toggle" id="js-navbar-toggle">
        <i class="fa fa-bars"></i>
      </span>
      <a href="/#" class="logo">9hax</a>
      <ul class="main-nav" id="js-menu">
        <li><a href="#" class="nav-links">Home</a></li>
        <li><a href="#" class="nav-links">Music</a></li>
        <li><a href="#" class="nav-links">Projects</a></li>
        <li><a href="#" class="nav-links">School</a></li>
        <li><a href="#" class="nav-links">Imprint</a></li>
      </ul>
      <script type="text/javascript">
        let mainNav = document.getElementById('js-menu');
        let navBarToggle = document.getElementById('js-navbar-toggle');
        navBarToggle.addEventListener('click', function() {
          mainNav.classList.toggle('active');
        });
      </script>
    </nav>
  </div>
`)
