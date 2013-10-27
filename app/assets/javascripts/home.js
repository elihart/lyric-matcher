function LyricPlayer(ytPlayer, lyricDivId) {
    var that = this;
    // youtube player flash object
    var ytPlayer = ytPlayer;
    // div to show lyrics
    var $lyricDisplay = $('#' + lyricDivId);
    // the next line number of the song
    var lineNumber = null;
    // the array of lines in the current song
    var lines = null;
    var times = null;
    var callbackOnDone = null;
    var songTitle = null;
    var songArtist = null;

    // initialize lyrics display
    $lyricDisplay.html("<p id='songTitle'></p><p id='artistName'></p><p id='instructions'></p><p id='prevLine'></p><p id='currentLine'></p><p id='nextLine'></p>");

    var $instructions = $('#instructions');
    var $prevLine = $('#prevLine');
    var $currentLine = $('#currentLine');
    var $nextLine = $('#nextLine');
    var $title = $('#songTitle');
    var $artist = $('#artistName');

    $instructions.html("Press spacebar when each line is sung");

    // load the song info and start the video. The video should be already loaded
    // from a separate function
    this.loadSong = function (songData, callback) {
        ytPlayer.playVideo();

        songTitle = songData.title.capitalize();
        songArtist = songData.author.capitalize();
        $title.html(songTitle);
        $artist.html(songArtist);
        lines = songData.lines;

        $instructions.show();

        lineNumber = 0;
        $currentLine.html(lines[lineNumber]);
        $nextLine.html(lines[lineNumber + 1]);
        $(document).on("keyup", handleKey);

        times = [];

        callbackOnDone = callback;
    };

    // load the video id into the youtube player
    this.loadVideo = function (videoId) {
        ytPlayer.cueVideoById(videoId);
    };

    // stop anything going on with the player
    this.stop = function () {
        ytPlayer.stopVideo();
        $(document).off("keyup", handleKey);
        lineNumber = null;
        lines = null;
        times = null;
        callbackOnDone = null;
    };

    function handleKey(e) {

        switch (e.keyCode) {
            // if spacebar
            case 32:
                var time = ytPlayer.getCurrentTime();
                times.push[time];

                if (lineNumber === 0) {
                    $instructions.hide();
                }
                lineNumber++;
                $prevLine.html(time + " : " + lines[lineNumber - 1]);
                $currentLine.html(lines[lineNumber]);
                $nextLine.html(lines[lineNumber + 1]);

                // check if we've recorded all the lines
                if (lineNumber >= lines.length) {
                  callbackOnDone({
                      lyrics: lines,
                      timestamps: times,
                      title: songTitle,
                      artist: songArtist
                  });
                }

                break;
        }
    }

}
