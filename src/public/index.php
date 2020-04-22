<?php
//require the composer autoload files
require_once "../../vendor/autoload.php";

try {
    new \YoutubeDownloader\Router\AllRoutes(); // we check for api routes
} catch (Exception $ex) {

    //if the routes does not exist, the we see if we need some files for the front end
    $frontEnd = new \YoutubeDownloader\Controllers\FrontEndController();
    $frontEndResponse = $frontEnd->returnFrontEndFiles();
    $sapiEmiter = new \Laminas\HttpHandlerRunner\Emitter\SapiEmitter();

    if ($frontEndResponse === false) {
        //nothing was found on the server we return the index file
        $frontEndResponse = $frontEnd->returnIndex();
    }

    $sapiEmiter->emit($frontEndResponse);
}
