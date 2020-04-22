<?php

namespace YoutubeDownloader\Controllers;


use GuzzleHttp\Psr7\Response;
use function GuzzleHttp\Psr7\stream_for;
use HansOtt\PSR7Cookies\SetCookie;
use YoutubeDownloader\Response\StandardResponseModel;
use YoutubeDownloader\Router\RouteInfoInterface;
use YoutubeDownloader\Router\RouteInfoModel;
use YoutubeDownloader\Router\RouteRequestInterface;
use YoutubeDownloader\YoutubeDownloader;

class GetVideoController implements RouteInfoInterface, RouteRequestInterface {

    /**
     * @return RouteInfoModel
     */
    public function getRouteInfo() {
        return RouteInfoModel::getInstance("/getVideo/{video_id}", 'GET', 'YoutubeDownloader\Controllers\GetVideoController::routeRequest');
    }

    /**
     * @param \Psr\Http\Message\ServerRequestInterface $request
     * @param array $args
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function routeRequest($request, $args) {
        $yt = new YoutubeDownloader();
        $video_id = $args['video_id'];
        $standardResponse = new StandardResponseModel();
        $cookies = $request->getCookieParams();
        $id = $this->getValue($cookies, "id");
        $key = $this->getValue($cookies, "key");
        $response = new Response();

        try {
            if ($id !== false && $key !== false) {
                $yt->registerIdKey($id, $key);
            } else {
                $deviceRegistrationResponse = $yt->registerDevice();
                $time = time();
                $idCookie = new SetCookie('id', $deviceRegistrationResponse->getId(), $time + (20 * 60));
                $keyCookie = new SetCookie('key', $deviceRegistrationResponse->getKey(), $time + (20 * 60));
                $response = $idCookie->addToResponse($response);
                $response = $keyCookie->addToResponse($response);


            }
            $yt_player_response = $yt->playerRequest->fetch_player_info($video_id);
            $jsonString = $yt_player_response->serializeToJsonString();

            $jsonObject= json_decode($jsonString, true);
            if (array_key_exists("playerVideos", $jsonObject) === true){
                $standardResponse->defineVariable('player_response', $jsonObject);
            }else{
                $standardResponse->setError(true);
                $standardResponse->setMessage("Video not found!");
            }
        } catch (\Exception $e) {
            $standardResponse->setError(true);
            $standardResponse->setMessage($e->getMessage());
            //remove old cookies
            $idCookie = SetCookie::thatDeletesCookie("id");
            $keyCookie = SetCookie::thatDeletesCookie("key");
            $response = $idCookie->addToResponse($response);
            $response = $keyCookie->addToResponse($response);
        }
        $response = $response->withHeader("Access-Control-Allow-Origin", '*');
        return $response->withBody(stream_for($standardResponse->toJson()));

    }

    private function getValue($array, $key) {
        if (array_key_exists($key, $array) === true) {
            return $array[$key];
        }
        return false;
    }


}
