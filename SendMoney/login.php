<html>
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../SendMoney/sendLog.css">
    <title>User Login</title>
    
</head>
<body>
    <div class="container pt-5 my-3">
        <div class="row pt-5 my-3">
            <div class="col">
            <h2>Login here</h2>
            <br>
            <form action="validation.php" method="post">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" name="user" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" name="password" class="form-control" required>
                </div>
                <button type="submit" class="login-btn"> Login </button>
            </form>
            </div>

            <div class="col">
            <h2>Register here</h2>
            <br>
            <form action="registration.php" method="post">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" name="user" class="form-control" required>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" name="password" class="form-control" required>
                </div>
                <button type="submit" class="login-btn"> Create </button>
            </form>
            </div>
        </div>
    </div>
       <!-- Footer -->
   <footer class="w3-center w3-padding-64 w3-opacity w3-hover-opacity-off for_footer" id="contact">
    <a href="../index.html"><i class="fas fa-arrow-left size"></i></a>
    <div class="w3-xlarge w3-section">
      <div class="w3-large w3-margin-bottom w3-center">
          <i class="fa fa-envelope fa-fw w3-xlarge "></i> Email: espinoedelin@gmail.com<br>
      </div>
      <a href="https://www.instagram.com/watashiwaedelin/" title="Instagram"><i class="fa fa-instagram w3-hover-opacity"> </i></a>
      <a href="https://github.com/Edelin11" title="GitHub"> <i class="fa fa-github w3-hover-opacity"></i></a>
      <a href="https://www.linkedin.com/in/edelin-espino-48680480/" title="LinkedIn"><i class="fa fa-linkedin w3-hover-opacity"></i></a>
    </div>
    <p>Powered by Edelin <a href="https://github.com/Edelin11">GitHub</a> And <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a></p>
  </footer>

    <script src="https://kit.fontawesome.com/9be300201e.js" crossorigin="anonymous"></script>
</body>
</html>