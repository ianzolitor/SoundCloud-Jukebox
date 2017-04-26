SC.initialize({
	client_id: "f665fc458615b821cdf1a26b6d1657f6"
})

SC.get("/tracks/239777850").then(function(response) {
	console.log(response);
});

