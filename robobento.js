var burned = [];
var prevKey = null;
var burnedCounter = 0; 

function contains (el, arr) {
	for (var i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            return true;
        }
    }
    return false;
}

var rand = function(arr) {
	
	var randomAnswer = arr[Math.floor(Math.random() * arr.length)]
	
	if (contains(randomAnswer, burned)) {
		return rand(arr)
	}
	else {	
		burned.push(randomAnswer);
		burnedCounter++;
			if (burnedCounter >= 50) {
				burnedCounter = 0;
			}
		return randomAnswer;
	}


}

var vokabeln = {
	anzahl: ["3", "5", "7", "8", "9", "10", "11", "13", "15", "17"],
	subjGenerisch: ["Jungs", "Mädels", "Studis", "Langzeitstudierende", "Hartz IV-Empfänger", "90er-Kids", "Kreative", "Neurotiker", "Backpacker", "politische Aktivisten", "Teeniemütter", "Polyamoren", "Blogger", "Magersüchtige"],
	condition: ["Käsefüßen", "reichen Eltern", "ADHS", "Videospielsucht", "Sex-Hunger", "kleinen Kindern", "Haustieren", "Kleptomanie", "Hühneraugen"],
	substanz: ["MDMA", "Kokain", "Crack", "Opium", "K.O.-Tropfen", "Ritalin", "Horror-Haschisch", "Xanax", "Ketamin", "Hustensaft", "5 Liter Club Mate", "zwei Flaschen Tequila", "Schmerzmittel"],
	ereignis: ["beim CSD", "auf einer Hochzeit", "auf einer Bondageparty", "auf einem Elternabend", "auf dem Sonar Festival", "in der bayrischen Provinz", "in einem schwäbischen Methlabor", "in einer Sonderschule", "in einem usbekischen Foltergefängnis", "im Stadion", "bei der Fashion Week", "bei den Oscars", "in Berlins hässlichstem Freibad", "in der Rütlischule", "auf der Schlittschuhbahn", "auf dem zugefrorenen Landwehrkanal", "beim CSU-Parteitag", "beim G20-Gipfel", "beim Ultimate Fighting", "auf einem Pokerturnier"],
	gefühlAdj: ["großartig", "atemberaubend", "verblüffend", "surreal", "bezaubernd", "nicht was du erwartest", "deprimierend", "absurd", "lebensgefährlich", "furchteinflößend", "einfach nur dumm", "sensationell", "ganz witzig", "heftig", "unbeschreiblich"],
	wieEsIst: ["in einer Mülltonne zu leben", "einen Monat nur Pommes zu essen", "eine Bank zu überfallen", "ein Glas Katzenpisse zu trinken", "im Ghetto aufzuwachsen", "beim Nacktputzen erwischt zu werden", "durchs Abitur zu fallen", "ein eigenes Schloss zu bauen", "mit seinen Eltern um das Erbe zu streiten", "kein Geld mehr für Essen zu haben", "auf eine illegale Sexparty zu gehen", "beim Strippoker betrogen zu werden", "einen Shitstorm zu überleben"],
	unbestSubjM: ["Kinderstar", "Consultant", "Zwergendarsteller", "Nazi", "Fanfiction-Autor", "Amateur-Pornostar", "Mega-Influencer", "Zuhälter", "YouTube-Star", "Opernsänger", "JuSo-Politiker", "Spiegel-Redakteur", "Twitter-Bot", "Instagram-Held", "Olympiasieger", "Weltrekordhalter", "Finanz-Experten", "Investmentbanker", "Gerechtigkeitsfanatiker", "Busfahrer", "Jungunternehmer"],	
	praktik: ["Sexting", "Schule schwänzen", "Bücher lesen", "Online-Dating", "Komasaufen", "Netflix-Bingewatching", "Bong rauchen", "Fitnesstraining", "Fremdgehen", "Hütchenspielen", "Karaokesingen", "Planking", "Trollen", "Playstation spielen", "Nacktbaden"],
	promis: ["Stephen Hawking", "Cro", "Kim Jong Il", "Nicki Minaj", "Jan Böhmermann", "Kevin Kuehnert", "Horst Seehofer", "Jens Spahn", "Frauke Petry", "Helene Fischer", "Uwe Tellkamp", "Justin Bieber", "Angela Merkel", "Lothar Matthäus", "Elon Musk", "Bill Gates", "Hillary Clinton", "Emmanuel Macron"],
	probleme:  ["Bodyshaming", "Amokläufe", "Klimawandel", "Umweltverschmutzung", "Laktoseintoleranz", "Burnout", "das Gefühl großer Leere", "demographischen Wandel", "zermürbenden Heißhunger", "Sonnenbrand", "Sexsucht", "Kinderarmut", "Kokainsucht", "Fake News", "Pauschaltourismus", "Politikverdrosenheit", "Veganismus", "AfD-Trolle"],
	personAdjM: ["", "", "", "", "", "berüchtigter", "erfolgreicher", "gelangweilter", "bekannter", "deprimierter"],
	wertadj: ["scheiße", "geil", "widerwärtig", "genial", "der letzte Dreck", "lächerlich", "uncool", "für Idioten", "geisteskrank", "episch", "überschätzt"],
	reaktionen: ["begeistert", "entsetzt", "irritiert", "empört", "verunsichert", "überrascht", "wütend"],
	wow: ["Krass!", "Wahnsinn!", "Exklusiv!", "Irre!", "WOW!", "100% wahr!", "Unmöglich!"],
	mittel: ["einer eher altertümlichen Methode", "einem nuklearen Sprengkopf", "einer Laserkanone", "einer Oculus Rift", "viel Geduld und Meditation", "witzigen Tweets", "Hormonbehandlungen", "intensivem Nachdenken", "purer Muskelkraft", "flotten Sprüchen", "unterbezahlten Hilfsarbeiterinnen aus Polen"],
	sachen: ["WhatsApp-Gruppen", "Tweets", "Wackelaugen", "Tintenfische", "GIFs", "Sexspielzeuge", "Ratten", "Hundewelpen", "Dinoasurier", "Nickelback", "Pilze", "psychotische Substanzen"]
}

var formeln = {
	abuse() {return ("Wir haben uns " + rand(vokabeln.substanz) + " reingezogen und waren " + rand(vokabeln.ereignis) + ". Es war " + rand(vokabeln.gefühlAdj) + ".")},
	verstehen() {return rand(vokabeln.anzahl) + " Memes, die " + rand(vokabeln.subjGenerisch) + " mit " + rand(vokabeln.condition) + " nur zu gut verstehen."} ,
	wieIsses() {return "Wir haben einen " + rand(vokabeln.unbestSubjM) + " gefragt, wie es ist, " + rand(vokabeln.wieEsIst) + ". Seine Antwort: \"" + rand(vokabeln.wertadj) + "!\""} ,
	wieIssesSubstanz() {return "Wir haben einen " + rand(vokabeln.unbestSubjM) + " gefragt, wie es ist, auf " + rand(vokabeln.substanz) + " " + rand(vokabeln.wieEsIst) + "."},
	neunziger() {return "In den 90ern war er ein " + rand(vokabeln.personAdjM) + " " + rand(vokabeln.unbestSubjM) + ". Dann begann er mit " + rand(vokabeln.praktik) + "."},
	promi() {return "Wir haben " + rand(vokabeln.promis) + " zum " + rand(vokabeln.praktik) + " überredet. Das Ergebnis war " + rand(vokabeln.gefühlAdj) + "."},
	fakepromi() {return "Wir haben uns als " + rand(vokabeln.promis) + " ausgegeben, um " + rand(vokabeln.ereignis) + " kostenlos " + rand(vokabeln.substanz) + " zu bekommen." },
	wundermittel() {return "Hat " + rand(vokabeln.promis) + " gerade ein Wundermittel gegen " + rand(vokabeln.probleme) + " entdeckt?"},
	tuwas() {return rand(vokabeln.anzahl) + " verblüffende Dinge, die Du heute noch gegen " + rand(vokabeln.probleme) + " tun kannst."},
	dasneue(){return "Viraler Trend: Ist " + rand(vokabeln.praktik) + " das neue " + rand(vokabeln.praktik) + "?"},
	provo() {return rand(vokabeln.wow) + " Hier stänkert " + rand(vokabeln.promis) + " gegen " + rand(vokabeln.subjGenerisch) + "."},
	wut() {return rand(vokabeln.unbestSubjM) + " behauptet: " + rand(vokabeln.praktik) + " ist " + rand(vokabeln.wertadj) + "! Das Netz reagiert " + rand(vokabeln.reaktionen) + "."},
	loesung() {return rand(vokabeln.promis) + " möchte " + rand(vokabeln.probleme) + " besiegen – mit " + rand(vokabeln.mittel) + "."},
	sachen() {return rand(vokabeln.anzahl) + " Gründe, warum " + rand(vokabeln.sachen) + " einfach " + rand(vokabeln.wertadj) + " sind."},
	verarscht() {return "So genial verarscht " + rand(vokabeln.promis) + " sinnlose Berichte über " + rand(vokabeln.probleme) + "."},
	soWirstDu() {return rand(vokabeln.wow) + " So wirst Du in 3 Schritten zum " + rand(vokabeln.unbestSubjM) },
	wasIstSchlimmer() {return "Welche dieser Situationen findest Du beim " + rand(vokabeln.praktik) + " schlimmer?"},
	dieseFragen() {return "Diese Fragen haben " + rand(vokabeln.ereignis) + " nichts verloren."},
	staunen() {return "Dieser " + rand(vokabeln.unbestSubjM) + " benötigt nur ein paar " + rand(vokabeln.sachen) + ", um alle zum Staunen zu bringen"},
	bizarr() {return "Bizarre Rede: " + rand(vokabeln.promis) + " fordert Verbot für " + rand(vokabeln.sachen)},
	arzt() { return "Dieser Arzt verschreibt " + rand(vokabeln.substanz) + " bei " + rand(vokabeln.condition)}


}


var randomMethod = function (obj) {
    var keys = Object.keys(obj);
   
    var randKey = Math.floor(Math.random() * keys.length);
  
  	if (randKey !== prevKey) { 
  			prevKey = randKey;
  			var answer = obj[keys[randKey]]();
  			return answer;
  	} else {
		//console.log("identical!")
  		return randomMethod(obj);
  	}
    
};

exports.getHeadline = function() {
	var answer = randomMethod(formeln);
	return answer;
}

/* FOR HTTP VERSION
var mountDiv = document.getElementById('robotext');
mountDiv.innerText = randomProperty(formeln);*/
