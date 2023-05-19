$("#btn").click(()=>{
	setInterval(function () {
		$("#progress-modal").show();
		let width = $(".progress").width();
		if(width < 540){
			let newWidth = width + 30 ;
			$(".progress").css('width', newWidth);
		}
		else {
			$("#progress-modal").hide();
			$("#okay-modal").fadeIn();
		}
	}, 1000);
})	