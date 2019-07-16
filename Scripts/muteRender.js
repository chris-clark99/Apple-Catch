var toggle1 : UI.Image;
var toggle2 : UI.Image;
var sound : AudioSource;
while (true) {
    sound = GameObject.Find("BG_Music").GetComponent(AudioSource);
    var mute=PlayerPrefs.GetInt("Muted");
    if (mute == 1) {
        toggle1.enabled = false;
        toggle2.enabled = true;
    }
    else {
        toggle1.enabled = true;
        toggle2.enabled = false;
    }
    yield;
}
function newAudio(){
    if (sound.mute == false) {
        PlayerPrefs.SetInt("Muted", 1);
    }
    else{
        PlayerPrefs.SetInt("Muted", 0);
    }
}