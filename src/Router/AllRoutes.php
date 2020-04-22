<?php

namespace YoutubeDownloader\Router;

use GuzzleHttp\Psr7\ServerRequest;
use Laminas\HttpHandlerRunner\Emitter\SapiEmitter;
use League\Route\Router;
use YoutubeDownloader\Controllers\GetVideoController;
use YoutubeDownloader\Controllers\IndexController;

/**
 * Class AllRoutes
 * @package YoutubeDownloader\Router
 */
class AllRoutes {

    /**
     * @var $all_routes RouteRequestInterface[]|RouteInfoInterface[]
     */
    protected $all_routes = [];

    /**
     * @var $router Router
     */
    protected $router;

    /**
     * AllRoutes constructor.
     *
     * @throws \Exception
     */
    public function __construct() {
        $this->all_routes[] = new GetVideoController();
        $this->all_routes[] = new IndexController();
        $this->router = new Router;

        $this->init();
    }

    /**
     * @throws \Exception
     */
    public function init() {
        foreach ($this->all_routes as $routeInstance) {
            if ($this->checkInstance($routeInstance) === true) {

                $this->router->map($routeInstance->getRouteInfo()->getMethod(), $routeInstance->getRouteInfo()->getPath(), $routeInstance->getRouteInfo()->getCallable());

            } else {
                throw new \Exception("Error registering route");
            }
        }

        $this->run();
    }

    protected function run() {
        $request = ServerRequest::fromGlobals();
        $response = $this->router->dispatch($request);
        (new SapiEmitter())->emit($response);
    }

    /**
     * @param $routeInstance
     * @return bool
     */
    private function checkInstance($routeInstance) {
        if ($routeInstance instanceof RouteInfoInterface && $routeInstance instanceof RouteRequestInterface) {
            return true;
        }
        return false;
    }
}
