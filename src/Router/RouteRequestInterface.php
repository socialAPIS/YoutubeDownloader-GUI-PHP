<?php

namespace YoutubeDownloader\Router;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

interface RouteRequestInterface {

    /**
     * @param ServerRequestInterface $request
     * @param array $args
     *
     * @return ResponseInterface
     */
    public function routeRequest($request, $args);

}
