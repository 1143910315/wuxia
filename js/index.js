var shichenshuju={
	"子时":{"start":125,"stop":130},
	"丑时":{"start":130,"stop":135},
	"寅时":{"start":135,"stop":145},
	"卯时":{"start":145,"stop":170},
	"辰时":{"start":170,"stop":210},
	"巳时":{"start":210,"stop":235},
	"午时":{"start":235,"stop":240},
	"未时":{"start":0,"stop":15},
	"申时":{"start":15,"stop":60},
	"酉时":{"start":60,"stop":95},
	"戌时":{"start":95,"stop":115},
	"亥时":{"start":115,"stop":125}
};
setTimeout(function() {
	var date=new Date();
	var fen=date.getHours()%4*60+date.getMinutes();
	for (var i in shichenshuju) {
		if (fen>=shichenshuju[i].start&&fen<=shichenshuju[i].stop) {
			shichen.innerHTML=i+"<br \>剩余"+(shichenshuju[i].stop-fen)+"分钟<br \>已过"+(fen-shichenshuju[i].start)+"分钟<br \>总共"+(shichenshuju[i].stop-shichenshuju[i].start)+"分钟";
		}
	}
}, 1000);
