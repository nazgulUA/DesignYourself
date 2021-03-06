<!DOCTYPE html>
<html lang="en">
<title>DesignYourself</title>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/headers/">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"/>
    <link rel="stylesheet" href="style.css">
  </head>
<body>
  <div class="container header">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
      <a class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <i style="font-size: 2em;" class="fab fa-dyalog"></i>
      </a>
      <h2>Design Yourself</h2>
      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2" data-toggle="modal" 
        data-target="#loginModal">Login</button>
        <button type="button" class="btn btn-primary" data-toggle="modal" 
        data-target="#signModal">Sign-up</button>
      </div>
    </header>
  </div>
  <!-- Login Modal -->
<div class="modal" id="loginModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Authentication</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <!-- Modal body -->
      <div class="modal-body">
        <form id="loginData">
           <div>
            <label>Email:</label>
            <input id="email" type="text" class="form-control" 
            placeholder="Enter email">
            <small>Error message</small>
          </div>
           <div>
            <label>Password:</label>
            <input id="password" type="password" class="form-control" 
            placeholder="Enter password">
            <small>Error message</small>
          </div>
          <hr>
          <div class="form-group float-right">
            <button type="submit" class="btn btn-primary" id="submit">Confirm</button>
            <button type="button" class="btn btn-outline-primary me-2" data-dismiss="modal">Close</button>
          </div>  
        </form>
      </div>
    </div>
  </div>
</div>
  <!-- Sign Modal -->
<div class="modal" id="signModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Registration</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <!-- Modal body -->
      <div class="modal-body">
        <form id="signupData">
          <div>
            <label>First Name:</label>
            <input id="fName" type="text" class="form-control" 
            placeholder="Enter First Name">
            <small>Error message</small>
          </div>
          <div>
            <label>Last Name:</label>
            <input id="lName" type="text" class="form-control" 
            placeholder="Enter Last Name">
            <small>Error message</small>
          </div>
           <div>
            <label>Email:</label>
            <input id="email1" type="text" class="form-control" 
            placeholder="Enter email">
            <small>Error message</small>
          </div>
           <div>
            <label>Password:</label>
            <input id="password1" type="password" class="form-control" 
            placeholder="Enter password">
            <small>Error message</small>
          </div>
          <div>
            <label>Password check:</label>
            <input id="password2" type="password" class="form-control" 
            placeholder="Enter password">
            <small>Error message</small>
          </div>
          <hr>
          <div class="form-group float-right">
            <button type="submit" class="btn btn-primary" id="submit1">Confirm</button>
            <button type="button" class="btn btn-outline-primary me-2" data-dismiss="modal">Close</button>
          </div>  
        </form>
      </div>
    </div>
  </div>
</div>
<div class="container p-2 center1">
  <div class="w-75 h-75">
    <div class="carousel slide" id="carouselExample" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExample" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExample" data-slide-to="1"></li>
        <li data-target="#carouselExample" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="img/1.jpg" alt="First Slide" class="d-block w-100 h-100">
        </div>
        <div class="carousel-item">
          <img src="img/2.jpg" alt="Second Slide" class="d-block w-100 h-100">
        </div>
        <div class="carousel-item">
          <img src="img/3.jpg" alt="Third Slide" class="d-block w-100 h-100">
        </div>
      </div>
      <a href="#carouselExample" class="carousel-control-prev" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previuos</span>
      </a>
      <a href="#carouselExample" class="carousel-control-next" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</div>
<?php include 'footer.php'; ?>
<script src="loginValidation.js"></script>
<script src="SignupValidation.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>