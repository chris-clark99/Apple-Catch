import UnityEngine.SceneManagement;
var anim : Animation;
var asyncLoad : AsyncOperation;
asyncLoad = SceneManager.LoadSceneAsync("Scene 0");
asyncLoad.allowSceneActivation = false;
function Update(){
	if (!anim.IsPlaying("splashRotate")){
		asyncLoad.allowSceneActivation = true;
	}
}