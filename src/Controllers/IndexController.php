<?php

namespace YoutubeDownloader\Controllers;

use GuzzleHttp\Psr7\MessageTrait;
use YoutubeDownloader\Router\RouteInfoInterface;
use YoutubeDownloader\Router\RouteInfoModel;
use YoutubeDownloader\Router\RouteRequestInterface;

class IndexController implements RouteInfoInterface, RouteRequestInterface {

    /**
     * @return RouteInfoModel
     */
    public function getRouteInfo() {
        return RouteInfoModel::getInstance("/", 'GET', 'YoutubeDownloader\Controllers\IndexController::routeRequest');
    }

    /**
     * @param \Psr\Http\Message\ServerRequestInterface $request
     * @param array $args
     *
     * @return \Psr\Http\Message\ResponseInterface|MessageTrait
     */
    public function routeRequest($request, $args) {
        $frontEnd = new FrontEndController();
        return $frontEnd->returnIndex();
    }


}
