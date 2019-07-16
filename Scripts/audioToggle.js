var sound : AudioSource;
var sound1 : AudioSource;
function Start(){
	muterender();
}
function muterender(){
    var mute=PlayerPrefs.GetInt("Muted");
    if (mute == 1) {
        sound.mute = true;
        sound1.mute = true;
    }
    else {
        sound.mute = false;
        sound1.mute = false;
    }
}
//function Update(){
	//sound1.pitch = ((-(PlayerPrefs.GetFloat("timeToWait")/10)+1.3)*Time.timeScale)/2;
//}