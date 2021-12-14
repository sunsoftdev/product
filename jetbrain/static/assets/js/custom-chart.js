$(function(e){
  
	
	
		/* leads */
    var ctx = $('#leads');
	ctx.height(230);
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			type: 'line',
			datasets: [{
				label: "Sales",
				data: [253, 256, 395, 204, 251, 458, 364, 145, 156, 250, 253, 278],
				backgroundColor: 'rgba(68, 84, 195,0.1)',
				borderColor: 'rgba(68, 84, 195,0.9)',
				borderWidth: 5,
				pointStyle: 'circle',
				pointRadius: 0,
				pointBorderColor: 'transparent',
				pointBackgroundColor: 'rgba(68, 84, 195,0.8)',
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: 'rgba(0,0,0,0.9)',
				bodyFontColor: 'rgba(0,0,0,0.9)',
				backgroundColor: '#fff',
				bodyFontFamily: 'Montserrat',
				cornerRadius: 0,
				intersect: false,
			},
			legend: {
				display: false,
				labels: {
					usePointStyle: true,
					fontFamily: 'Montserrat',
				},
			},
			scales: {
				xAxes: [{
					display: true,
					ticks: {
						display: true,
						fontColor: "#8e9cad",
						fontSize: "13",
					},
					scaleLabel: {
						display: true,
						labelString: 'Months',
						fontSize: "15",
						fontColor: "#8e9cad",
					},
					gridLines: {
						display: true,
						drawBorder: false,
						color: 'rgba(193, 184, 184,0.1)',
						zeroLineColor: '#000'
					}
				}],
				yAxes: [{
					display: true,
					ticks: {
						display: true,
						fontColor: "#8e9cad",
						color: 'rgba(193, 184, 184,0.1)',
						fontSize: "13",
						callback: function(value, index, values) {
							return '$' + value;
						},
						maxRotation: 0,
						stepSize: 100,
						min: 0,
						max: 500
					},
					scaleLabel: {
						display: true,
						labelString: 'Revenue',
						fontColor: "#8e9cad",
						fontSize: "15",
					},
					gridLines: {
						display: true,
						drawBorder: false,
						color: 'rgba(193, 184, 184,0)',
						zeroLineColor: 'rgba(193, 184, 184,0.1)'
					}
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
	});
	/*leads end */
	
	
	/*sparkline*/
    var randomizeArray = function (arg) {
		var array = arg.slice();
		var currentIndex = array.length,
		temporaryValue, randomIndex;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
    }
	
	var sparklineData = [0, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];
	//Spark1
    var spark1 = {
      chart: {
        type: 'area',
        height: 60,
		width: 160,
        sparkline: {
          enabled: true
        },
		dropShadow: {
			enabled: false,
			blur: 3,
			opacity: 0.2,
		}
		},
		stroke: {
			show: true,
			curve: 'smooth',
			lineCap: 'butt',
			colors: undefined,
			width: 2,
			dashArray: 0,      
		},
      fill: {
        gradient: {
          enabled: false
        }
      },
      series: [{
		name: 'Point Value',
        data: randomizeArray(sparklineData)
      }],
      yaxis: {
        min: 0
      },
      colors: ['#4454c3'],

    }
	var spark1 = new ApexCharts(document.querySelector("#spark1"), spark1);
    spark1.render();
  
	var sparklineData2 = [0, 45, 93, 53, 61, 27, 54, 43, 19, 46, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, ];
	//Spark2
    var spark2 = {
      chart: {
        type: 'area',
        height: 60,
		width: 160,
        sparkline: {
          enabled: true
        },
		dropShadow: {
			enabled: false,
			blur: 3,
			opacity: 0.2,
		}
		},
		stroke: {
			show: true,
			curve: 'smooth',
			lineCap: 'butt',
			colors: undefined,
			width: 2,
			dashArray: 0,      
		},
		fill: {
        gradient: {
          enabled: false
        }
      },
      series: [{
		name: 'Unique Visitors',
        data: randomizeArray(sparklineData2)
      }],
      yaxis: {
        min: 0
      },
      colors: ['#2dce89'],

    }
	var spark2 = new ApexCharts(document.querySelector("#spark2"), spark2);
    spark2.render();
	
	var sparklineData3 = [0, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46,45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51];
	//Spark3
    var spark3 = {
      chart: {
        type: 'area',
        height: 60,
		width: 160,
        sparkline: {
          enabled: true
        },
		dropShadow: {
			enabled: false,
			blur: 3,
			opacity: 0.2,
		}
		},
		stroke: {
			show: true,
			curve: 'smooth',
			lineCap: 'butt',
			colors: undefined,
			width: 2,
			dashArray: 0,      
		},
		fill: {
        gradient: {
          enabled: false
        }
      },
      series: [{
		name: 'Income',
        data: randomizeArray(sparklineData3)
      }],
      yaxis: {
        min: 0
      },
      colors: ['#ff5b51'],

    }
	var spark3 = new ApexCharts(document.querySelector("#spark3"), spark3);
    spark3.render();
	

	 var options = {
          series: [{
          data: [44, 55, 41, 64, 22, 43, 21]
        }, {
          data: [53, 32, 33, 52, 13, 44, 32]
        }],
          chart: {
          type: 'bar',
          height: 300
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        tooltip: {
          shared: true,
          intersect: false
        },
        xaxis: {
          categories: [10, 20, 30, 40, 50],
        },
        };

        var chart = new ApexCharts(document.querySelector("#bchart"), options);
        chart.render();



        var options = {
          series: [37, 50, 13],
          chart: {
          width: 300,
          type: 'donut',
        },
        labels: ['Paid', 'Approved', 'Pending'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        };

        var chart = new ApexCharts(document.querySelector("#pchart"), options);
        chart.render();


                var options = {
          series: [{
          name: 'Income',
          data: [80, 50, 30, 40, 100, 120, 20],
        }],
          chart: {
          height: 350,
          type: 'radar',
        },
        title: {
          text: ''
        },
        xaxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June']
        }
        };

        var chart = new ApexCharts(document.querySelector("#rchart"), options);
        chart.render();

                var options = {
          series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
          chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        };

        var chart = new ApexCharts(document.querySelector("#schart"), options);
        chart.render();





                var options = {
          series: [{
          name: 'Revenue',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'Sales',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
          chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
          
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        };

        var chart = new ApexCharts(document.querySelector("#a1chart"), options);
        chart.render();



          var options = {
          series: [{
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
          chart: {
          type: 'bar',
          height: 100
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
        };

        var chart = new ApexCharts(document.querySelector("#cochart"), options);
        chart.render();
      



      var options = {
          series: [55, 40, 48],
          chart: {
          type: 'polarArea',
        },
        stroke: {
          colors: ['#fff']
        },
        fill: {
          opacity: 0.8
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 100
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        };

        var chart = new ApexCharts(document.querySelector("#polchart"), options);
        chart.render();
      


      var options = {
          series: [{
          name: 'PRODUCT A',
          data: [44, 55, 41, 67, 22, 43]
        }, {
          name: 'PRODUCT B',
          data: [13, 23, 20, 8, 13, 27]
        }, {
          name: 'PRODUCT C',
          data: [11, 17, 15, 15, 21, 14]
        }, {
          name: 'PRODUCT D',
          data: [21, 7, 25, 13, 22, 8]
        }],
          chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10
          },
        },
        xaxis: {
          type: 'datetime',
          categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
            '01/05/2011 GMT', '01/06/2011 GMT'
          ],
        },
        legend: {
          position: 'right',
          offsetY: 40
        },
        fill: {
          opacity: 1
        }
        };

        var chart = new ApexCharts(document.querySelector("#prochart"), options);
        chart.render();
      
      
    
      
    
      
    
      






	
 });