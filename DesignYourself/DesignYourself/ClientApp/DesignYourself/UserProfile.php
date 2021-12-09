<!DOCTYPE html>
<html lang="en">
<title>DesignYourself</title>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css">
    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/headers/">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" 
   href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
    <link rel="stylesheet" href="styleUserProfile.css">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="container header">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
      <a class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <i style="font-size: 2em;" class="fas fa-drafting-compass"></i>
      </a>
      <h2>Design Yourself</h2>
      <div class="col-md-3 text-end">
        <a href="MainPage.php">
        <button type="button" class="btn btn-primary">Back to system</button>
        </a>
      </div>
    </header>
  </div>
    <div class="container rounded bg-white mt-5 mb-5">
    <div class="rowUserProfile">
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row1 mt-3">
                    <div class="col-md-12" style="padding-right: 8%"><label class="labels">Email (login)</label>
                      <input id="Email" type="text" class="form-control"  value="" readonly></div>
                </div>
                   <div class="row1 mt-3">
                    <div class="loqrows">
                      <label class="labels">Password</label>
                      <div class="container1">
                      <input id="Password" type="password" class="form-control"  value="" readonly>
                      <div class="icon">
                      <i class="bi bi-eye-slash" id="togglePassword"></i>
                      </div>
                      </div>                   
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">User statics</h4>
              </div>
                  <div class="mom">
            <div class="child">
              <button id="sortDay" class="childinner btn btn-primary" onclick = "sortByReverse()">Reverse sort</button>
            </div>
            <div class="child">
              <button id="sortMonth" class="childinner btn btn-primary" onclick = "sortByDay()">Sort by date</button>
            </div>
            </div>
              <!-- Filter Modal -->
            <div class="modal" id="filterbyDay">
            <div class="modal-dialog">
            <div class="modal-content">
              <!-- Modal Header -->
              <div class="modal-header">
                <h4 class="modal-title">Filter tasks by date</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <!-- Modal body -->
              <div class="modal-body">
                <form id="loginData">
                  <div>
                    <label>Date:</label>
                    <input id="textDay" type="text" class="form-control" 
                    placeholder="Enter date">
                  </div>
                  <hr>
                  <div class="form-group float-right">
                    <button type="button" class="btn btn-primary" id="filteringDay">Confirm</button>
                    <button type="button" class="btn btn-outline-primary me-2" data-dismiss="modal">Close</button>
                  </div>  
                </form>
              </div>
            </div>
            </div>
            </div>
                <table class='table table-striped table-hover'>
              <thead>
                <tr>
                  <th style='text-align: center; vertical-align: middle;'> Task</th>
                  <th style='text-align: center; vertical-align: middle;'> Date of execute</th>
                  <th style='text-align: center; vertical-align: middle;'> Mark</th>
                </tr>
              </thead>
              <tbody id="MainPageTable">
          </tbody>
          </table>
            </div>
        </div>
    </div>
</div>
<script src="viewPass.js"></script>
<script src="UserProfile.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
 <?php include 'footer.php'; ?>
</html>