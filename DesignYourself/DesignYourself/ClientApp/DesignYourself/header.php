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
    <link rel="stylesheet" href="style.css">
  </head>
  <div class="container header">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
      <a class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <i style="font-size: 2em;" class="fas fa-drafting-compass"></i>
      </a>
      <h2>Design Yourself</h2>
      <div class="col-md-3 text-end">
        <a href="UserProfile.php">
        <button type="button" class="btn btn-outline-primary me-2">User profile</button>
        </a>
        <a href="index.php">
        <button id="logoutButton" onclick="clearLocalStorage ()" href="index.php" type="button" class="btn btn-primary">Logout</button>
        </a>
      </div>
    </header>
  </div>
  <script type="text/javascript">
        function clearLocalStorage ()
        {
        window.localStorage.setItem('userId', "");
        window.localStorage.setItem('userTypeId', "");
        window.localStorage.setItem('email', "");
        window.localStorage.setItem('password', "");

        console.log("Deleted");
    }
  </script>
</html>