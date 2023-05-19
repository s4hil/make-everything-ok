$("#btn").click(()=>{

	let music = document.getElementById('song');

	music.play();


	setInterval(function () {
		$("#progress-modal").show();
		let width = $(".progress").width();
		if(width < 540){
			let newWidth = width + 27;
			$(".progress").css('width', newWidth);
		}
		else {
			$("#progress-modal").hide();
			$("#okay-modal").fadeIn();
		}
	}, 1000);
})	