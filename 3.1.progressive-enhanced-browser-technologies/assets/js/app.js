(function () {

    var score = document.querySelector('.score');

    var nextScoreUrl = document.getElementById('newestScore').getAttribute('data');

    var scoreContainer = document.getElementsByClassName('score-container');

    console.log(nextScoreUrl);

    setTimeout(function(){

        showNextScore();
        console.log('log');

    }, 5000);

    function showNextScore() {

        aja()

            .url(nextScoreUrl)
            .type('html')
            .on('success', function(response){

                var parser = new DOMParser();
                var doc = parser.parseFromString(response, 'text/html');

                var score = doc.querySelector('#newestScore');
                var info = doc.querySelector('#newestInfo');

                renderScore(score, info);

            })

            .go();

        console.log(nextScoreUrl);

    }


    function renderScore(newestScore, info){


        // select element with data-score attribute
        nextScoreUrl = newestScore.getAttribute('data');

        // If score is not empty, then fire showNextScore()
        if (nextScoreUrl !== null) {
            setTimeout(function(){
                showNextScore();
            }, 5000);
        }

        //  set newestScore
        var scoreText = newestScore.innerHTML;
        var score = document.querySelector('#newestScore');
        score.innerHTML = scoreText;

        // set newestInfo
        info.classList.add('info');

        scoreContainer[0].appendChild(info);

        sendPushNotification(scoreText);

    }

    function sendPushNotification(scoreText) {

        console.log(scoreText);

            if (!("Notification" in window)) {
                console.log("This browser does not support desktop notification");
            }

            // Let's check whether notification permissions have already been granted
            else if (Notification.permission === "granted") {
                // If it's okay let's create a notification
                var notification = new Notification('Nu live: Ajax - Feyenoord', {
                    body: scoreText,
                    icon: '../assets/images/teams.png'
                });
            }

            // Otherwise, we need to ask the user for permission
            else if (Notification.permission !== "denied") {
                Notification.requestPermission(function (permission) {
                    // If the user accepts, let's create a notification
                    if (permission === "granted") {
                        var notification = new Notification(scoreText);
                    }
                });
            }

    };

})();
