<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>AIG Survey Tool</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="jquery-ui.min.css">
    <link rel="stylesheet" href="jquery-ui.theme.min.css">
    <link rel="stylesheet" href="css/aigCooking.css">
    <link rel="stylesheet" href="css/aigEmGen.css">
</head>
<body>
    <h1>AIG Survey Tool</h1>
    <!--<a href="toTake.html"><h1>To Take</h1></a>-->
    <div id="tabs">
        <ul>
            <li><a href="#tabs-1">Commercial Cooking Equipment 96</a></li>
            <li><a href="#tabs-2">Emergency Generator 37</a></li>
            <li><a href="#tabs-3">Aenean lacinia</a></li>
        </ul>
        <?php include("php/cooking.php"); ?>
        <?php include("php/emgen.php"); ?>
        <div id="tabs-3">
        </div>
    </div>
    
    <script src="js/d3.min.js"></script>
    <script src="js/jquery.min.js"></script>
    <script src="jquery-ui.min.js"></script>
    <script src="js/aigCooking.js"></script>
    <script src="js/aigEmGen.js"></script>
</body>
</html>