<!DOCTYPE html>
<html lang="en">
<title>DesignYourself</title>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/headers/">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"/>
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/dt-1.10.22/datatables.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="style.css">
  </head>
<body>
  <?php include 'header.php'; ?>
    <div class="text">
    <h1 class="py-4 bg-dark text-light rounded" >
    <div class="navbar1">
    <i class="fas fa-swatchbook"></i>
    <a href="MainPage.php">Tasks</a>
    <a id="ManagTask" href="ManagmentTasks.php">Managment Tasks</a>
      </div>
    </h1>
    </div>
    <!-- Delete Modal -->
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
            <button type="submit" class="btn btn-primary" id="submitSignInBtn">Confirm</button>
            <button type="button" class="btn btn-outline-primary me-2" data-dismiss="modal">Close</button>
          </div>  
        </form>
      </div>
    </div>
  </div>
</div>
    <div class="row">
    <table class='table table-striped table-hover'>
      <thead>
        <tr>
          <th style='text-align: center; vertical-align: middle;'>Task of constructing UML-diagrams</th>
        </tr>
      </thead>
        <tbody id="MainPageTable">
        </tbody>
    </table>
    </div>
<?php include 'footer.php'; ?>
<script src="MainPage.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>