

$(function (){
	// we want to hide our 'questions' section and our 'answer' section on load until they are called upon by user interaction
	$('.questions').hide();
	$('.answer').hide();
	// We are making variables that represent the different options that people can choose
	var dateOptions = {
		// We created an object for active, with multiple objects within that correspond to our potential selections
		active: {
			warm: {
				day: {
					url: [
						'images/activeHDN.jpg',
						'images/activeHD2.jpg'
					]
				},
				night: {
					url: [
						'images/activeHDN.jpg',
						'images/activeHNCD2sm.jpg'
					]
				}
			},
			chilly: {
				day: {
					url: [
						'images/activeCDN.jpg',
						'images/activeHNCD2sm.jpg'
					]
				},
				night: {
					url: [
						'images/activeCDN.jpg',
						'images/activeCN2.jpg'
					]
				}
			}
		}, //End of active options
		boozy: {
			warm: {
				day: {
					url: [
						'images/boozyHD.jpg',
						'images/boozyHD2.jpg'
					]
				},
				night: {
					url: [
						'images/boozyHN.jpg',
						'images/boozyHN2.jpg'
					]
				}
			},
			chilly: {
				day: {
					url: [
						'images/boozyCD.jpg',
						'images/boozyCD2.jpg'
					]
				},
				night: {
					url: [
						'images/boozyCN.jpg',
						'images/boozyCN2.jpg'
					]
				}
			}
		}, //End of boozy options
		intellectual: {
			warm: {
				day: {
					url: [
						'images/intHD.jpg',
						'images/intHD2.jpg'
					]
				},
				night: {
					url: [
						'images/intHNCD.jpg',
						'images/intHN2.jpg'
					]
				}
			},
			chilly: {
				day: {
					url: [
						'images/intHNCD.jpg',
						'images/intCD2.jpg'
					]
				},
				night: {
					url: [
						'images/intCN.jpg',
						'images/intCN2.jpg'
					]
				}
			}
		}, //End of intellectual options
		netChill: {
			warm: {
				day: {
					url: [ 
						'images/netHD.jpg',
						'images/netHD2.jpg'
					]
				},
				night: {
					url: [
						'images/netHNCD.jpg',
						'images/netHN2.jpg'
					]
				}
			},
			chilly: {
				day: {
					url: [ 
						'images/netHNCD.jpg',
						'images/netCD2.jpg'
					]
				},
				night: {
					url: [
						'images/netCN.jpg',
						'images/netCN2.jpg'
					]
				}
			}
		}, //End of netflix and chill options
	};

	// Allow user to select some selections regarding typeOfDate, temperature, timeOfDay. The form allows us to do this.

	// We need to listen for the event of the user submitting the form

	var submitForm = function (e) {
		e.preventDefault();
		// Now we need to select the user selected values
		// To do this we find the inputs and get the checked ones and get the value
		// On every submit we are recreating these variables
		var typeOfDateChoice = $('input[name=typeOfDate]:checked').val();
		var temperatureChoice = $('input[name=warmOrChilly]:checked').val();
		var timeOfDayChoice = $('input[name=dayOrNight]:checked').val();

		// if someone does not answer one of the questions, alert that the must answer all sections to receive results
		if((typeOfDateChoice === undefined) || (temperatureChoice === undefined) || (timeOfDayChoice === undefined)) {
			// alert("Please fill in all answers!");
			$('.formValidation').html(`<p>Please fill in all answers!</p>`);
			// We had to show the formValidation div if it was previously hidden on on the reset button
			$('.formValidation').show();
			// Stop executing the rest of function if everything is not checked
			return false;
		}; 
		
		//we need a way to dynamically access values from our list of options
		var finalOutcome = dateOptions[typeOfDateChoice][temperatureChoice][timeOfDayChoice];

		// Get a random number between 0 and 1, as there are only two photos to randomly pick from
		var randomIndex = Math.floor(Math.random()* 2);

		//put the image on the page in a separate page
		$('.imageContainer').html(`<img src='${finalOutcome.url[randomIndex]}'/>`);

		// We do not need another on click event as we will utilize the submit event on our form
		// Once everything is checked in our form and validated do this:

		$('.questions').hide();
		$('.answer').fadeIn();
	}

	// $('form').on('submit', submitForm);
	$('.submitContainer').on('click', submitForm);

	$('.startNow').on('click', function(){
		$('.titlePage').hide();
		$('.questions').fadeIn();
	});

	$('.resetButton').on('click', function(){
		$('.answer').hide();
		$('.formValidation').hide();
		$('label').removeClass('jsSelectedLabel');
		$('input[type=radio]').attr('checked', false);
		$('.questions').fadeIn();
	});
		
// When you click on the label , add the class that styles the label
// remove all previous class from other labels
// when you click on a different label remove the previous added classes on the labels

	$('.dateOptions label').on('click', function(){
		$('.dateOptions label').removeClass('jsSelectedLabel');
		$(this).addClass('jsSelectedLabel');
	});

	$('.temperature label').on('click', function(){
		$('.temperature label').removeClass('jsSelectedLabel');
		$(this).addClass('jsSelectedLabel');
	});

	$('.timeOfDay label').on('click', function(){
		$('.timeOfDay label').removeClass('jsSelectedLabel');
		$(this).addClass('jsSelectedLabel');
	});

}); //End of document ready

