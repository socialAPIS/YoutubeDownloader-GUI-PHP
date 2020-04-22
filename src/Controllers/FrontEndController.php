<?php

namespace YoutubeDownloader\Controllers;

use GuzzleHttp\Psr7\ServerRequest;
use GuzzleHttp\Psr7\Stream;
use function GuzzleHttp\Psr7\stream_for;

/**
 * Class FrontEndController
 * @package YoutubeDownloader\Controllers
 */
class FrontEndController {

    /**
     * @var array
     */
    protected $frontEndExtensions = [
        'js', 'html', 'ico', 'png', "css", 'json'
    ];

    /**
     * @var array
     */
    protected $contentType = [
        "js" => "application/javascript",
        "html" => "text/html; charset=UTF-8",
        "css" => "text/css; charset=UTF-8",
        "ico" => "image/x-icon",
        "png" => "image/png",
        "json" => "application/json",
    ];

    /**
     * @return bool|\GuzzleHttp\Psr7\MessageTrait
     */
    public function returnFrontEndFiles() {
        $serverRequest = ServerRequest::fromGlobals();

        $path = $serverRequest->getUri()->getPath();

        $pathInfo = pathinfo($path);
        $extension = (array_key_exists("extension", $pathInfo) !== false) ? $pathInfo['extension'] : "";
        $file_name = (array_key_exists("filename", $pathInfo) !== false) ? $pathInfo['filename'] : "";


        if (in_array($extension, $this->frontEndExtensions) === true) {
            $realPath = realpath(__DIR__ . './../FrontEnd/' . $file_name . '.' . $extension);
            if ($realPath !== false) {
                $fileContents = file_get_contents($realPath);
                return $this->buildResponse($fileContents, $extension);
            }
        }
        return false;
    }

    /**
     * @return \GuzzleHttp\Psr7\MessageTrait
     */
    public function returnIndex() {
        $realPath = realpath(__DIR__ . './../FrontEnd/index.html');
        $fileContents = file_get_contents($realPath);

        return $this->buildResponse($fileContents, "html");

    }

    /**
     * @param $body
     * @param $extension
     * @return \GuzzleHttp\Psr7\MessageTrait
     */
    private function buildResponse($body, $extension) {
        $response = new \GuzzleHttp\Psr7\Response();

        return $response->withBody(stream_for($body))->withHeader("Content-Type", $this->contentType[$extension]);

    }
}
