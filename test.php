<?php

// test responses
$adminCode        = "TESTY";
$validControllers = array(
  'headTilt',
  'headTurn',
  'armElbowLeft',
  'armHandOneLeft',
  'armHandTwoLeft',
  'armElbowRight',
  'armHandOneRight',
  'armHandTwoRight',
  'backShoulderLeft',
  'backShoulderRight',
  'back',
  'legKneeLeft',
  'legKneeRight',
  'legHeelLeft',
  'legHeelRight'
);

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
  header("HTTP/1.0 404 Not Found");
  exit();
}

$token      = $_GET[1];
$controller = $_GET[2];
$motion     = $_GET[3];

// if token is not 5 digits
if (strlen($token) !==5) {
  header("HTTP/1.0 404 Not Found");
  exit();
}

// TODO: fetch current stored code here
session_start();
$storedCode = $_SESSION['storedCode'];

// used to check to ensure the user has the valid token (avoid input errors)
// token/validate/XXXXX
if ($token === 'token' && $controller == 'validate')
  // in this case, token is actually stored in a different place
  $token = $_GET[3];

  if ($token === $adminCode) {
    $guestCode = 'GUEST';
    echo $guestCode;

    header("HTTP/1.0 200 Ok");
    exit();
  } else if ($token == $storedCode) {
    header("HTTP/1.0 200 Ok");
    exit();
  }  // else falls out to next block
}

// ensure the token is valid
if ($token !== $storedCode) {
  header("HTTP/1.0 401 Unauthorized");
  exit();
}

// verify controller
if (!in_array($validControllers, $controller))
  header("HTTP/1.0 404 Not found");
  exit();
}

?>
