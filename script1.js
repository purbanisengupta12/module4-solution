(function myfun(){
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var x in names) {
		var t=names[x].charAt(0);
		t = t.toLowerCase();
		 if (t == 'j') {
	    // byeSpeaker.xxxx
	    byeSpeaker.speak(names[x]);
	  } else {
	  	helloSpeaker.speak(names[x]);
	  }
	}
})();