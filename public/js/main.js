var recognition;  
function startRecognition() {
    	console.log("started");
        recognition = new webkitSpeechRecognition();
        recognition.onstart = function(event) {
        	console.log("started");
        };
        recognition.onresult = function(event) {
            var text = "";
            for (var i = event.resultIndex; i < event.results.length; ++i) {
                text += event.results[i][0].transcript;
            }
            console.log(text);
            stopRecognition();
        };
        recognition.onend = function() {
            stopRecognition();
        };
        recognition.lang = "en-US";
        recognition.start();
    }


    /*
     * for stop switching;
     **/

    function stopRecognition() {
    	console.log("stoped");
        if (recognition) {
            recognition.stop();
            recognition = null;
        }
    }

    function switchRecognition() {
        if (recognition) {
            stopRecognition();
        } else {
            startRecognition();
        }
    }