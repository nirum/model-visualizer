/* Bar Chart */
var data = [4, 8, 15, 16, 23, 42];

var width = 240
	, barHeight = 20;

var x = d3.scale.linear()
	.domain([0, d3.max(data)])
	.range([0, width])

var chart = d3.select(".barchart")
	.attr("width", width)
	.attr("height", barHeight * data.length);

var bar = chart.selectAll("g")
	.data(data)
	.enter().append("g")
	.attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

bar.append("rect")
	.attr("width", x)
	.attr("height", barHeight - 1);

bar.append("text")
	.attr("x", function(d) { return x(d) - 3; })
	.attr("y", barHeight / 2)
	.attr("dy", ".35em")
	.text(function(d) { return d; });

/* Line Chart */
var update = function() {
	c3.generate({
		bindto: '.linechart',
		data: {
			url: '/api/brownian?sigma=5&nsteps=250&T=10',
			mimeType: 'json'
		}
	});
};

update();
