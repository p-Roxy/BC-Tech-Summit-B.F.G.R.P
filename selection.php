<!doctype html>
<html class="no-js" lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project: Giant Robot Puppet</title>
    <link rel="stylesheet" href="css/app.css">
    <link rel="stylesheet" href="css/PuppetDisplay.css">
</head>
<body>
<div class="large-12 columns small-centered">
    <div class="row mobile-open">
        <div class="large-12 small-8 columns text-center">
            <h2>Select a part to control on the image</h2>
            <div class="row" >
                <ul id="puppetmarks">
                    <li>Head<div class="head"></div></li>
                    <li>Right Arm<div class="rarm"></div></li>
                    <li>Back<div class="torso"></div></li>
                    <li>Left Arm<div class="larm"></div></li>
                    <li>Knees<div class="legs"></div></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="callout">
        <div class="large-8 small-8 columns text-center small-centered">
            <embed src="selectionimg.svg" style="height:260px; width:260px;"></embed>
        </div>
        </div>
    </div>

    <div class="row">
        <footer class="large-12 text-right"><p style="font-size:small; color:lightgrey;">Powered by Raspberrry Pi</p></footer>
    </div>
</div>

</body>
</html>