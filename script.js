 $("#begin").on("click", function () {
 	$("#begin_screen").addClass("hide");
 	$("#page").removeClass("hide");
 	typeName("You must be the new student. My name is Ellie! I’m a second year student from South Africa, and I’ll be your Resident Advisor for this dormitory. My measurements are 36\"-26\"-42\".", 0, true); 
 });

function typeName(name, iteration, choices) {
        // Prevent our code executing if there are no letters left
        if (iteration === name.length) {

            if (choices) {
            	$(".choices-list").removeClass("hide");

            } else {
            	$("#continue").removeClass("hide");
            }
            return;
        }
        
        setTimeout(function() {
            // Set the name to the current text + the next character
            // whilst incrementing the iteration variable
            $('#dialogue').text( $('#dialogue').text() + name[iteration++] );
            
            // Re-trigger our function
            typeName(name, iteration, choices);
        }, 10); // change later
    }

//  	$("#speaker").fadeIn("slow");

$(document).on("click", "#continue, .choice-option", function () {
	let nextPg = $(this).attr("data-nextPg"); 
	let dialogTxt = texts[nextPg].text;
	let hasOptions = texts[nextPg].options.length === 0 ? false : true; 
	$('#dialogue').text("");
	if (hasOptions) {
		$("#speaker").addClass("with-choice");
		$("#continue").addClass("hide");
		$(".choices-list").empty();
		for(let n = 0; n < texts[nextPg].options.length; n++) {
			const $option = $(`<div class="choice-option" data-nextPg="${texts[nextPg].options[n].next}"> ${texts[nextPg].options[n].text} </div>`)
			$(".choices-list").append($option);
		}
	} else {
		$("#continue").attr("data-nextPg", texts[nextPg].next);
		$("#speaker").removeClass("with-choice");
		$(".choices-list").addClass("hide");
	}

	let newBackground = $("#page").attr("data-currentBack")[0] === nextPg[0] ? false : true; 
	if (newBackground) {
		$("#page").css("background", `url(./images/${nextPg[0]}.jpg)`);
		$("#page").css("background-size", "cover");
		$("#page").attr("data-currentBack", nextPg[0]);
	}
	if (texts[nextPg].speaker !== "nully") {
		$("#speaker").removeClass("hide")
		$("#speaker").attr("src", `./images/${texts[nextPg].speaker}-removebg-preview.png`);

	} else {
		$("#speaker").addClass("hide");
	}
	



	$("#speaker").removeClass("polly");
	switch (texts[nextPg].speaker) {
		case "polly":
			$("#speaker").addClass("polly")
			break;
		default: 

	}
	typeName(dialogTxt, 0, hasOptions);
});