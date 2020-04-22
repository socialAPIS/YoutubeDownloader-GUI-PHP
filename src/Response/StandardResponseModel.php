<?php

namespace YoutubeDownloader\Response;

/**
 * Class StandartResponseModel
 * @package YoutubeDownloader\Response
 */
class StandardResponseModel {

    /**
     * @var $error bool
     */
    public $error = false;

    /**
     * @var $message string
     */
    public $message;

    public function defineVariable($name, $value){
        $this->$name = $value;
    }

    /**
     * @return bool
     */
    public function isError() {
        return $this->error;
    }

    /**
     * @param bool $error
     */
    public function setError($error) {
        $this->error = $error;
    }

    /**
     * @return string
     */
    public function getMessage() {
        return $this->message;
    }

    /**
     * @param string $message
     */
    public function setMessage($message) {
        $this->message = $message;
    }

    public function toArray(){
        return json_decode(json_encode($this), true);
    }

    public function toJson(){
        return json_encode($this);
    }
}
