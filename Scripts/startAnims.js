var anim : Animation;
var anim1 : Animation;
var anim2 : Animation;
var anim3 : Animation;
var anim4 : Animation;
var anim5 : Animation;
var anim6 : Animation;
var anim7 : Animation;
var anim8 : Animation;
while (true){
	yield WaitForSeconds(1);
	anim.Play();
	break;
}
while (true){
	if ((!anim.IsPlaying("CameraUp")) && (!anim8.IsPlaying("SplashRotate2"))){
		anim1.Play();
		anim2.Play();
		anim3.Play();
		anim4.Play();
		anim5.Play();
		anim6.Play();
		anim6.Play();
		anim7.Play();
		break;
	}
	yield;
}