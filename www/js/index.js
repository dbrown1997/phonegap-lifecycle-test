var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);	<!--event Listener - check if devise is ready.-->
		console.log("device ready");
		
		var key = "pen";
	var value = "blue";
	
	var key = "window";
	var value = "closed";

	var key = "chair";
	var value = "ocupied";

	var key = "register";
	var value = "signed";

	var key = "phone";
	var value = "on";

		window.localStorage.setItem( key, value );
	
		var value = window.localStorage.getItem(key);

		window.alert(key);

		$(function () {          
	    		$("#myText").text("Mobile Application");
		});


		var text = '{"name":"Galaxy Counters","energy":"2206","fat":"28.9","saturates":"17.3","carbohydrates":"58.8","sugars":"58.3","protein":"7.1","salt":"0.31"}';

		var obj = JSON.parse(text);

			document.getElementById("demo").innerHTML =
			obj.name + "<br>" +
			obj.energy + "<br>" +
			obj.fat + "<br>" +
			obj.saturates + "<br>" +
			obj.carbohydrates + "<br>" +
			obj.sugars + "<br>" +
			obj.protein + "<br>" +
			obj.salt;
		
		
		
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

	



