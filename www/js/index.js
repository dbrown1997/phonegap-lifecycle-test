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

		window.alert("CHOOSE YOUR FAVOURITE CHOCOLATE");

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
		
		var data = [{
		"name": "Milkyway Bar",
        "calories": "1000",
        "fat": "100",
        "protein": "100",
        "carbohydrates": "800",
	}, {
		"name": "Galaxy Bar",
        "calories": "10000",
        "fat": "343",
        "protein": "3434",
        "carbohydrates": "4343",
	},	{
		"name": "Bounty Bar",
        "calories": "10",
        "fat": "389",
        "protein": "66634",
        "carbohydrates": "99",
	},	{
		"name": "Twix Bar",
        "calories": "10",
        "fat": "389",
        "protein": "66634",
        "carbohydrates": "99",
	},	{
		"name": "Mars Bar",
        "calories": "10",
        "fat": "389",
        "protein": "66634",
        "carbohydrates": "99",
	},	{
		"name": "Nestle Bar",
        "calories": "10",
        "fat": "389",
        "protein": "66634",
        "carbohydrates": "99",
	}];
		var output = '';
			$.each(data, function (index, value) {
			output += '<li>' + value.name + '</li>';
	});
		$('#searchFood').html(output).listview("refresh");	
		
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

	



