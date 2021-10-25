<?php
session_start();
if(!isset($_SESSION['username'])){
    header('location:login.php');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../SendMoney/send.css?">
    <title>Send Money</title>
</head>
<body>
    <h1 class="w3-center">Send Money</h1>
    <hr>
    <div class="container pt-5">
    <h1>Welcome <?php echo $_SESSION['username'];?> </h1>
    
   <form >
   <div class="form-group ">
        <label>Name</label>
        <input type="text" name="firstname" class="form-control"  id="name" value=" "required>
    </div>
    <div class="form-group">
        <label>Lastname</label>
        <input type="text" name="lastname" class="form-control" required>
    </div>
    <div class="form-group">
        <label>Phone Number</label>
        <input type="text" name="phone" class="form-control" required>
    </div>
    <div class="form-group">
        <label>Country</label>
        <select name="countries" id="country" required>
        <option value="all">Select</option>
        <option value="usa">United States</option>
        <option value="dr">Dominican Republic</option>
        <option value="mx">Mexico</option>
        <option value="col">Colombia</option>
        <option value="spain">Spain</option>
    </select>
    </div>
    <div class="form-group">
        <label for="">City:</label>
        <div id="cities"></div>
    </div>
   </form>

   <label for="city">Quantity:</label>
    <input type="text"  size="9" value=" " id="amount">
    <button id="ok">Next</button>
     
    <label for="fee" id="fee">Fee:</label>     
    <div id="total"></div>

    <button id="sent">Pay</button>
    <div id="myModal" class="modal">
        <!-- Modal content open -->
        <div class="modal-content">
            <span class="close">&times;</span>
            <div id="receipt"></div>
            <p id="demo"></p>
            <p> <?php echo $_SESSION['username'];?> </p>
    
            <div id="option-button"></div>
            
        </div>
        <!-- Modal content close -->
    </div>
    
    <div id="recibo"></div>

 <a href="logout.php"> LOGOUT </a>
    <script src="../SendMoney/send.js"></script>
    <script src="https://kit.fontawesome.com/9be300201e.js" crossorigin="anonymous"></script>
</body>
</html>

