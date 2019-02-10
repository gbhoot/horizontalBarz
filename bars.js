var bars = d3.select(".container")
            .selectAll("div")
            .data([15,32,10,8,60,24]);

bars.enter().append("section")
    .style("background-color", function(d){ return d3.rgb(0,(d*5),0); })
    .style("width", function(d){ return d*10 +"px"; })
    .text(function(d){ return d; });

bars.exit().remove();