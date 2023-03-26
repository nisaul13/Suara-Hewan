
	$("document").ready(function () {
            $("div.bebek").click(function () {
                $(this).toggleClass('duck');
            });
            $("div.bebek").click(function () {
                $("<audio></audio>").attr({
                    'src': 'sound/bebek.mp3',
                    'volume': 0.4,
                    'autoplay': 'autoplay'
                }).appendTo("div");
            });

            $("div.kambing").click(function () {
                $(this).toggleClass('goat');
            });
            $("div.kambing").click(function () {
                $("<audio></audio>").attr({
                    'src': 'sound/kambing.mp3',
                    'volume': 0.4,
                    'autoplay': 'autoplay'
                }).appendTo("div");
            });

            $("div.sapi").click(function () {
                $(this).toggleClass('cow');
            });
            $("div.sapi").click(function () {
                $("<audio></audio>").attr({
                    'src': 'sound/sapi.mp3',
                    'volume': 0.4,
                    'autoplay': 'autoplay'
                }).appendTo("div");
            });
	});