# YouTube Downloader

[![Author](https://img.shields.io/badge/Author-socialAPIS-blue)](https://github.com/socialAPIS)
[![Software License](https://img.shields.io/github/license/socialAPIS/YoutubeDownloader-GUI-PHP)](LICENSE)
[![Issues Open](https://img.shields.io/github/issues/socialAPIS/YoutubeDownloader-GUI-PHP)](IssuesOpen)
[![Forks](https://img.shields.io/github/forks/socialAPIS/YoutubeDownloader-GUI-PHP)](forks)
[![Stars](https://img.shields.io/github/stars/socialAPIS/YoutubeDownloader-GUI-PHP)](stars)

PHP Library with Web UI to download videos from YouTube.

## Not Required

We use the Youtube API, the API it self fetches the Id and Key, you don't need to
do that. The API does everything Automatically.

## Requirements

You must fit at least this requirements to use YouTube-Downloader:

- PHP >= 7
- Composer, if you don't have you can download it [here](https://getcomposer.org)
- Web server (Apache/Nginx/PHP built-in)

## Installation

There are two ways to set up YouTube-Downloader

### ZIP Download

1. Download the code for the newest release: [v1.0.0](./releases/release%20v1.0.0.zip)
2. Unzip the code to your web server
3. Open the folder with your browser
4. Open the terminal in your server folder and run `composer install`
5. Run the server

### Git

1. Clone the code on your server with 
`git clone https://github.com/socialAPIS/YoutubeDownloader-GUI-PHP.git`

2. Open your folder and run `composer install`
3. Run the server

## Usage

You can manually visit a web form (the index.php file), enter a YouTube
video id, and get in return a list of links showing the various formats in which
that video can be downloaded. You can simply choose "save link as" or the
equivalent to download the file.

Second, if you wanna use your interface you can send your GET request to
/getVideo/{video_id}

http://example.com/getVideo/{video_id}

The index and front end files are located under /src/FrontEnd
Place your front end files only in this folder, the API will do its job

## Useful Information
This project uses https://github.com/socialAPIS/YoutubeDownloader

The API first registers in the server and then it returns an Id and Key,
if we dont save the id and key the application registers every time we make
an request. To fix this we use Cookies and we send the Id and Key, what we got
from youtube, to the Browser.

See Example [here](https://github.com/socialAPIS/YoutubeDownloader/blob/master/Examples/FetchPlayer.php)

## Contributing

You can help making this project better by reporting bugs or submitting pull requests. Please see our [contributing guideline](https://github.com/socialAPIS/YouTube-Downloader/blob/master/CONTRIBUTING.md) for more information.
