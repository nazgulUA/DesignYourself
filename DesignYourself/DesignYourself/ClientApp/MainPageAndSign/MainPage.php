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
<body>
  <?php include 'header.php'; ?>
    <div class="text">
    <h1 class="py-4 bg-dark text-light rounded" >
    <div class="navbar1">
    <i class="fas fa-swatchbook"></i>
    <a href="MainPage.php">Tasks</a>
    <a href="ManagmentTasks.php">Managment Tasks</a>
      </div>
    </h1>
    </div>
    <div class="row">
    <table class='table table-striped table-hover'>
      <thead>
        <tr>
          <th style='text-align: center; vertical-align: middle;'>Task of constructing UML-diagrams</th>
        </tr>
      </thead>
        <tbody>
          <tr>
            <td style='text-align: center; vertical-align: middle;'>
              <a style='color: #000000;' href="">Diagram Use case</a>
            </td>
          </tr>
           <tr>
            <td style='text-align: center; vertical-align: middle;'>
              <a style='color: #000000;' href="">Activity diagram</a>
            </td>
          </tr>
           <tr>
            <td style='text-align: center; vertical-align: middle;'>
              <a style='color: #000000;' href="">Sequence diagram</a>
            </td>
          </tr>
           <tr>
            <td style='text-align: center; vertical-align: middle;'>
              <a style='color: #000000;' href="">Deployment diagram</a>
            </td>
          </tr>
           <tr>
            <td style='text-align: center; vertical-align: middle;'>
              <a style='color: #000000;' href="">Class diagram</a>
            </td>
          </tr>
        </tbody>
    </table>
    </div>
<?php include 'footer.php'; ?>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>