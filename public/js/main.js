jQuery(document).ready(function($) {


	var ctx = document.getElementById("leftChart").getContext("2d");

	$("#click").click(function(event) {
		$.ajax({
			url: "http://stockassist.azurewebsites.net/twitter?q="+$("#input-23").val(),
			type: 'GET'
		})
		.done(function(data) {
			console.log(data);

			var options = {};
			var data = [
				{
					value: data.positive,
					color: "#2c3e50",
					highlight: "#34495e",
					label: "positive"
				},
				{
					value: data.negative,
					color: "#c0392b",
					highlight: "#e74c3c",
					label: "negative"	
				}
			]


			var myPieChart = new Chart(ctx).Doughnut(data,options);
			myPieChart.update();

			$("#prediction").text(data.prediction);
			$("#good").text(data.positive);
			$("#bad").text(data.negative);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});

		// $("#title").transition({top: "1vh"});
		// $("#input").transition({top: "-6vh"});





	});



});






