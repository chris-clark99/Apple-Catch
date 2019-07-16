import UnityEngine.SceneManagement;
var About : GameObject;
var Stop : GameObject;
var Resume : GameObject;
var UI1 : GameObject;
var UI2 : GameObject;
var UI3 : GameObject;
var UI4 : GameObject;
var UI5 : GameObject;
var UI6 : GameObject;
var UI7 : GameObject;
var time : float;
function Quit () {
	Application.Quit();
}
function Menu(){
	About.SetActive(true);
	UI1.SetActive(false);
	UI2.SetActive(false);
	UI3.SetActive(false);
	UI4.SetActive(false);
	UI5.SetActive(false);
	UI6.SetActive(false);
	UI7.SetActive(false);
}
function Back(){
	About.SetActive(false);
	UI1.SetActive(true);
	UI2.SetActive(true);
	UI3.SetActive(true);
	UI4.SetActive(true);
	UI5.SetActive(true);
	UI6.SetActive(true);
	UI7.SetActive(true);
}
function Rate(){
	Application.OpenURL("https://play.google.com/store/apps/details?id=com.lucentdesigns.apple_catch");
}
function MusicLink(){
	Application.OpenURL("https://www.audiotool.com/user/yas");
}
function Pause(){
	time = Time.timeScale;
	Time.timeScale = 0.0;
	Resume.SetActive(true);
	Stop.SetActive(false);
}
function Play(){
	Time.timeScale = time;
	Resume.SetActive(false);
	Stop.SetActive(true);
}
function Twitter(){
	Application.OpenURL("https://twitter.com/LucentDesignsCo");
}
function Privacy(){
	Application.OpenURL("https://lucentdesigns.netlify.com/applecatch/");
}