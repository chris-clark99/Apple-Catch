var obj : Animation;
var anim : Animation;
var count : int;
var timeToWait : float;
var lives : int;
var audio1 : AudioSource;
var audio2 : AudioSource;
var anim1 : Animation;
var anim2 : Animation;
var anim3 : Animation;
var anim4 : Animation;
var anim5 : Animation;
var anim6 : Animation;
var anim7 : Animation;
var anim8 : Animation;
var anim9 : Animation;
var five : Animation;
var powerup : Animation;
var move1 : GameObject;
var basket : GameObject;
var rand : int;
var grass : GameObject;
var sprite1 : Sprite;
var sprite2 : Sprite;
var sprite3 : Sprite;
var sprite4 : Sprite;
var sprite5 : Sprite;
var sprite6 : Sprite;
var shield : GameObject;
var empty : GameObject;
var powerobj : GameObject;
var preview : GameObject;
var Text2 : UI.Text;
var gameno : int;
function Start(){
	Time.timeScale=2;
	PlayerPrefs.SetInt("clicked", 0);
	obj = GameObject.Find("Empty").GetComponent(Animation);
	anim = GameObject.Find("Basket").GetComponent(Animation);
	count = PlayerPrefs.GetInt("Count");
	timeToWait = PlayerPrefs.GetFloat("timeToWait");
}

function OnCollisionEnter (col : Collision){
    var score = PlayerPrefs.GetInt("Score");
	timeToWait = PlayerPrefs.GetFloat("timeToWait");
    if(col.gameObject.name == "Apple(Clone)"){
		count = PlayerPrefs.GetInt("Count");
        score+=1;
        count+=1;
		if (timeToWait>1.25){
			timeToWait-=0.05;
		}
        PlayerPrefs.SetInt("Count", count);
		PlayerPrefs.SetInt("Score", score);
		PlayerPrefs.SetFloat("timeToWait", timeToWait);
		Destroy(col.gameObject);
    }
	else if(col.gameObject.name == "Gold(Clone)"){
        score+=5;
        PlayerPrefs.SetInt("Score", score);
		Destroy(col.gameObject);
		five.Play();
    }
	else if(col.gameObject.name == "Life(Clone)"){
		var lives = PlayerPrefs.GetInt("Lives");
		lives+=1;
		PlayerPrefs.SetInt("Lives", lives);
		Destroy(col.gameObject);
    }
	else if(col.gameObject.name == "Bad(Clone)"){
		lives=PlayerPrefs.GetInt("Lives");
		lives-=1;
		PlayerPrefs.SetInt("Lives", lives);
		Destroy(col.gameObject);
		if (lives<1){
			if (score>PlayerPrefs.GetInt("HighScore")){
				PlayerPrefs.SetInt("HighScore", score);
				SendMessage("Post");
			}
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
			grass.SendMessage ("Status");
			if (PlayerPrefs.GetInt("clicked")==1){
				empty.transform.localRotation = Quaternion.AngleAxis(-134.693, Vector3.up);
				if ((rand==1) || (rand==5)){
					basket.transform.localScale = Vector3(4.2, 0.54, 4.2);
				}
				else if (rand==2){
					Time.timeScale = 2.0;
				}
				else if (rand==6){
					PlayerPrefs.SetInt("magnet", 0);
				}
			}
		}
    }
	Text2.text=score.ToString();
	Text2.transform.GetChild(0).GetComponent(UI.Text).text = score.ToString();
	grass.SendMessage ("Status");
}

function clicked(){
	obj.Play("RotateBack");
	rand = Random.Range(1, 7);
	grass.SendMessage("random", rand);
	PlayerPrefs.SetInt("clicked", 1);
	powerobj.SetActive(true);
	powerobj.transform.localPosition = Vector3(174.703, 156.396, -389.3527);
	if (rand==1){
		anim.Play("GrowBasket");
		powerup.transform.gameObject.GetComponent.<SpriteRenderer>().sprite = sprite1;
		powerup.Play("powerup");
		powerup["powerup"].speed = 1.0;
	}
	else if (rand==2){
		Time.timeScale = 1.0;
		powerup.transform.gameObject.GetComponent.<SpriteRenderer>().sprite = sprite2;
		powerup.Play("powerup");
		powerup["powerup"].speed = 2.0;
	}
	else if (rand==3){
		shield.SetActive(true);
		powerup.transform.gameObject.GetComponent.<SpriteRenderer>().sprite = sprite5;
		powerup.Play("powerup");
		powerup["powerup"].speed = 1.0;
	}
	else if (rand==4){
		PlayerPrefs.SetFloat("timeToWait", 3.0);
		powerup.transform.gameObject.GetComponent.<SpriteRenderer>().sprite = sprite3;
		powerup.Play("powerup");
		powerup["powerup"].speed = 1.0;
	}
	else if (rand==5){
		anim.Play("ShrinkBasket");
		powerup.transform.gameObject.GetComponent.<SpriteRenderer>().sprite = sprite4;
		powerup.Play("powerup");
		powerup["powerup"].speed = 1.0;
	}
	else if (rand==6){
		PlayerPrefs.SetInt("magnet", 1);
		powerup.transform.gameObject.GetComponent.<SpriteRenderer>().sprite = sprite6;
		powerup.Play("powerup");
		powerup["powerup"].speed = 1.0;
	}
	while (true){
		yield WaitForSeconds(4);
		if (!powerup.IsPlaying("powerup") && ((rand==1) || (rand==3) || (rand==5) || (rand==6))){
			powerup.Play("powerup_small");
			powerup["powerup_small"].speed = 1.0;
		}
		else if (!powerup.IsPlaying("powerup") && (rand==2)){
			powerup.Play("powerup_small");
			powerup["powerup_small"].speed = 2.0;
		}
		else if (!powerup.IsPlaying("powerup") && (rand==4)){
			powerup.Play("powerup_fade");
		}
		break;
	}
}

while (true){
	if (PlayerPrefs.GetInt("Count")==PlayerPrefs.GetInt("rand")){
		PlayerPrefs.SetInt("rand", Random.Range(5, 11));
        PlayerPrefs.SetInt("Count", 0);
		obj.Play();
		gameno = PlayerPrefs.GetInt("gameno");
        yield WaitForSeconds(30);
		if ((PlayerPrefs.GetInt("Initiate")==1) && (PlayerPrefs.GetInt("clicked") == 0) && (gameno == (PlayerPrefs.GetInt("gameno")))){
			obj.Play("RotateBack");
			PlayerPrefs.SetInt("Count", 0);
		}
    }
	if ((PlayerPrefs.GetInt("Initiate")==1) && (PlayerPrefs.GetInt("clicked")==1)){
		if (rand!=4){
			powerup.Play("powerup_flash");
			yield WaitForSeconds(5);
			powerobj.SetActive(false);
		}
		if (rand==1){
			anim.Play("NormalBasket");
		}
		else if (rand==2){
			Time.timeScale = 2.0;
		}
		else if (rand==3){
			shield.SetActive(false);
		}
		else if (rand==5){
			anim.Play("NormalBasket1");
		}
		else if (rand==6){
			PlayerPrefs.SetInt("magnet", 0);
		}
		PlayerPrefs.SetInt("clicked", 0);
		PlayerPrefs.SetInt("Count", 0);
    }
    yield;
}