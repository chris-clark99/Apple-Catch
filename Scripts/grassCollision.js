var heart1 : GameObject;
var heart2 : GameObject;
var heart3 : GameObject;
var over : GameObject;
var anim1 : Animation;
var anim2 : Animation;
var anim3 : Animation;
var anim4 : Animation;
var anim5 : Animation;
var anim6 : Animation;
var anim7 : Animation;
var anim8 : Animation;
var anim9 : Animation;
var lives : int;
var hs : int;
var move1 : GameObject;
var basket : GameObject;
var audio1 : AudioSource;
var audio2 : AudioSource;
var anim : Animation;
var power : int;
var shield : GameObject;
var obj : Animation;
var empty : GameObject;
var powerobj : GameObject;
var preview : GameObject;
var scoretext : GameObject;
var Text : UI.Text;
function Start(){
	var audio1 = GameObject.Find("BG_Music").GetComponent(AudioSource);
	var audio2 = GameObject.Find("Guitar").GetComponent(AudioSource);
	var anim = GameObject.Find("Basket").GetComponent(Animation);
	PlayerPrefs.SetInt("Lives", 3);
	Status();
}
function Status(){
    lives=PlayerPrefs.GetInt("Lives");
	hs=PlayerPrefs.GetInt("HighScore");
    if (lives==0){
        heart1.SetActive(false);
        heart2.SetActive(false);
        heart3.SetActive(false);
        over.SetActive(true);
		scoretext.GetComponent(TextMesh).text = PlayerPrefs.GetInt("Score").ToString();
		scoretext.SetActive(true);
		Text.text=hs.ToString();
    }
    if (lives==1){
        heart1.SetActive(true);
        heart2.SetActive(false);
        heart3.SetActive(false);
    }
    if (lives==2){
        heart1.SetActive(true);
        heart2.SetActive(true);
        heart3.SetActive(false);
    }
    if (lives==3){
        heart1.SetActive(true);
        heart2.SetActive(true);
        heart3.SetActive(true);
        over.SetActive(false);
		scoretext.SetActive(false);
		for(var gameObj : GameObject in GameObject.FindObjectsOfType(GameObject))
		{
			if(gameObj.name == "Life(Clone)")
			{
				Destroy(gameObj);
			}
		}
    }
}
function OnCollisionEnter (collide : Collision){
    if(collide.gameObject.name == "Apple(Clone)"){
        var score = PlayerPrefs.GetInt("Score");
        if(lives > 1){
            lives-=1;
            PlayerPrefs.SetInt("Lives", lives);
        }
        else{
            if (score>PlayerPrefs.GetInt("HighScore")){
                PlayerPrefs.SetInt("HighScore", score);
				SendMessage("Post");
            }
            lives-=1;
            PlayerPrefs.SetInt("Lives", lives);
            audio1.Play();
            audio2.Stop();
            anim1.Play();
            anim2.Play();
			anim3.Play();
            anim4.Play();
            anim5.Play();
			anim6.Play();
			anim7.Play();
			anim8.Play("PauseSlideOut");
			anim9.Play("ScoreSlideOut");
            PlayerPrefs.SetInt("Initiate", 0);
            PlayerPrefs.SetInt("clicked", 1);
            move1.SetActive(false);
			shield.SetActive(false);
			powerobj.SetActive(false);
			preview.SetActive(false);
            basket.transform.position = (Vector3(0, 0, -27.57483));
			if (PlayerPrefs.GetInt("clicked")==1){
				empty.transform.localRotation = Quaternion.AngleAxis(-134.693, Vector3.up);
				if ((power==1) || (power==5)){
					basket.transform.localScale = Vector3(4.2, 0.54, 4.2);
				}
				else if (power==2){
					Time.timeScale = 2.0;
				}
				else if (power==6){
					PlayerPrefs.SetInt("magnet", 0);
				}
			}
			Status();
        }
		Destroy(collide.gameObject.transform.GetChild(0).GetComponent(BoxCollider));
		collide.gameObject.GetComponent(Animation).Play();
		yield WaitForSeconds(0.5);
		Destroy(collide.gameObject);
    }
	else if ((collide.gameObject.name == "Gold(Clone)") || (collide.gameObject.name == "Bad(Clone)") || (collide.gameObject.name == "Life(Clone)")){
		collide.gameObject.GetComponent(Animation).Play();
		yield WaitForSeconds(0.5);
		Destroy(collide.gameObject);
	}
	Status();
}
function random(rand : int){
	power = rand;
}