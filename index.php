<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>GIT TESTS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>

    <?php
    $stringfromfile = file('.git/HEAD', FILE_USE_INCLUDE_PATH);

    $firstLine = $stringfromfile[0]; //get the string from the array

    $explodedstring = explode("/", $firstLine, 3); //seperate out by the "/" in the string

    $branchname = $explodedstring[2]; //get the one that is always the branch name

    echo "<div style='clear: both; width: 100%; font-size: 14px; font-family: Helvetica; color: #30121d; background: #bcbf77; padding: 20px; text-align: center;'>Current branch: <span style='color:#fff; font-weight: bold; text-transform: uppercase;'>" . $branchname . "</span></div>"; //show it on the page
    ?>

    <ul style="background-color:green;">
        <li>Changes from dev branch</li>
        <li>Changes from s_111 branch - <?= date('Y-m-d H:i:s') ?></li>
        <li>Changes from dev branch - <?= date('Y-m-d H:i:s') ?></li>
    </ul>

</body>

</html>