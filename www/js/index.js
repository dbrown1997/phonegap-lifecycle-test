var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);	<!--event Listener - check if devise is ready.-->
		console.log("device ready");
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    //
    function onDeviceReady() {
		alert("Device Ready");	//devise ready
        
		document.addEventListener("resume", onResume, false);	<!--resume application-->
		document.addEventListener("pause", onPause, false);	<!--pause application-->
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {	//pause app on pause
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {	//resume app on resume
		alert("resume");
		resumed_count++;
		updateDisplay();
    }
