document.addEventListener('DOMContentLoaded', bindButtons);
document.addEventListener('DOMContentLoaded', bindButtons2);

function bindButtons()
{
	document.getElementById('zipSubmit').addEventListener('click', function(event)
	{
		//get data
		var req = new XMLHttpRequest();
		var zipCode;
        zipCode = document.getElementById('zip').value;
        req.open('GET', "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&units=imperial&appid=fa7d80c48643dfadde2cced1b1be6ca1", false);
    	req.send(null);
        var response = JSON.parse(req.responseText);

        //display data
        	//alter data header
        document.getElementById("title").textContent = "Weather Data for " + response.name;

			//temperature
        var temp = ((response.main.temp).toFixed(0)).toString() + " F";
        document.getElementById('temp').textContent = temp;
		var tempH = ((response.main.temp_max).toFixed(0)).toString() + " F";
        document.getElementById('tempH').textContent = tempH;
        var tempL = ((response.main.temp_min).toFixed(0)).toString() + " F";
        document.getElementById('tempL').textContent = tempL;
        	//pres & hum
        var press = ((response.main.pressure).toFixed(0)).toString() + " hPa";
        document.getElementById('press').textContent = press;
        var hum = ((response.main.humidity).toFixed(0)).toString() + " %";
        document.getElementById('hum').textContent = hum;
        	//wind
        var wind = ((response.wind.speed).toFixed(1)).toString() + " mph";
        document.getElementById('wind').textContent = wind;
        var windDeg = (response.wind.deg);
        var windDir;
        if (windDeg < 22.5)
        {
        	windDir = "N";
        }
        else if (windDeg < 67.5)
        {
        	windDir = "NE";
        }
        else if (windDeg < 112.5)
        {
        	windDir = "E";
        }
        else if (windDeg < 157.5)
        {
        	windDir = "SE";
        }
        else if (windDeg < 202.5)
        {
        	windDir = "S";
        }
        else if (windDeg < 247.5)
        {
        	windDir = "SW";
        }
        else if (windDeg < 292.5)
        {
        	windDir = "W";
        }
        else if (windDeg < 337.5)
        {
        	windDir = "NW";
        }
        else
        {
        	windDir = "N";
        }
        document.getElementById('windD').textContent = windDir;

        event.preventDefault();
        
    })
}

function bindButtons2()
{
	document.getElementById('truthSubmit').addEventListener('click', function(event)
	{
		var req = new XMLHttpRequest();
        var payload = {truth1:null, truth2:null, lie:null};
        payload.truth1 = document.getElementById('truth1').value;
        payload.truth2 = document.getElementById('truth2').value;
        payload.lie = document.getElementById('lie').value;
        req.open('POST', 'http://httpbin.org/post', false);
        req.setRequestHeader('Content-Type', 'application/json');
        req.send(JSON.stringify(payload));
        var response2 = JSON.parse(req.responseText);
        document.getElementById('response').textContent = response2.data;
		event.preventDefault();
	})
}