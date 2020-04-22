<?php

namespace YoutubeDownloader\Router;

/**
 * Class RouteInfoModel
 * @package YoutubeDownloader\Router
 */
class RouteInfoModel {

    /**
     * @var $path string
     */
    protected $path;

    /**
     * @var $method string
     */
    protected $method;

    /**
     * @var $callable string
     */
    protected $callable;

    /**
     * RouteInfoModel constructor.
     *
     * @param string $path
     * @param string $method
     * @param string $callable
     */
    public function __construct($path, $method, $callable) {
        $this->path = $path;
        $this->method = $method;
        $this->callable = $callable;
    }

    /**
     * @return string
     */
    public function getPath() {
        return $this->path;
    }

    /**
     * @return string
     */
    public function getMethod() {
        return $this->method;
    }

    /**
     * @return string
     */
    public function getCallable() {
        return $this->callable;
    }

    public static function getInstance($path, $method, $callable) {
        return new self($path, $method, $callable);
    }

}
