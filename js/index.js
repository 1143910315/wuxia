var shichenshuju=[{"start":125,"stop":130,"id":"zi","time":"子时"},
	{"start":130,"stop":135,"id":"chou","time":"丑时"},
	{"start":135,"stop":145,"id":"yin","time":"寅时"},
	{"start":145,"stop":170,"id":"mao","time":"卯时"},
	{"start":170,"stop":210,"id":"chen","time":"辰时"},
	{"start":210,"stop":235,"id":"si","time":"巳时"},
	{"start":235,"stop":240,"id":"wu","time":"午时"},
	{"start":0,"stop":15,"id":"wei","time":"未时"},
	{"start":15,"stop":60,"id":"shen","time":"申时"},
	{"start":60,"stop":95,"id":"you","time":"酉时"},
	{"start":95,"stop":115,"id":"xu","time":"戌时"},
	{"start":115,"stop":125,"id":"hai","time":"亥时"}
];
var initial=function () {
	var width=window.screen.availWidth;
	var min=parseInt(width/240);
	var max=min*240;
	var space=(width-max)/2;
	document.styleSheets[0].rules[5].style.left=space+"px";
};
setInterval(function() {
	var date=new Date();
	var fen=date.getHours()%4*60+date.getMinutes();
	for (var i in shichenshuju) {
		if (fen>=shichenshuju[i].start&&fen<=shichenshuju[i].stop) {
			shichen.innerHTML=shichenshuju[i].time+"<br \>剩余"+(shichenshuju[i].stop-fen)+"分钟<br \>已过"+(fen-shichenshuju[i].start)+"分钟<br \>总共"+(shichenshuju[i].stop-shichenshuju[i].start)+"分钟";
		}
	}
}, 1000);
