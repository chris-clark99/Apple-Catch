import System.Linq;
var Apple : GameObject;
var Gold : GameObject;
var Bad : GameObject;
var Life : GameObject;
var timer : float;
var timeToWait : float;
var rand : int;
var rand1 : int;
var rand2 : int;
var x : float;
var x2 : float;
var x3 : float;
var cloneGold : GameObject;
var cloneLife : GameObject;
var preview : GameObject;
function Start(){
	PlayerPrefs.SetFloat("timeToWait", timeToWait);
	rand1 = Random.Range(1, 10);
}
function Update(){
	timeToWait = PlayerPrefs.GetFloat("timeToWait");
	timer += Time.deltaTime;
	if((timer > timeToWait) && (PlayerPrefs.GetInt("Initiate")==1) && (rand1!=1) && (preview.activeSelf==false))
	{
		x = Random.Range(-6.8, 6.8);
		x2 = Random.Range(-6.8, 6.8);
		x3 = Random.Range(-6.8, 6.8);
		rand = Random.Range(1, 20);
		rand1 = Random.Range(1, 10);
		rand2 = Random.Range(1, 20);
		var cloneApple = Instantiate(Apple);
		cloneApple.transform.position = Vector3(x, 25, 15);
		timer = 0;
		if (rand==1){
			cloneGold = Instantiate(Gold);
			cloneGold.transform.position = Vector3(x2, 25, 15);
		}
		if ((rand2==1) && (PlayerPrefs.GetInt("Lives") < 3) && (GameObject.Find("Life(Clone)") == null)){
			cloneLife = Instantiate(Life);
			cloneLife.transform.position = Vector3(x3, 50, -27.5);
		}
	}
	else if((timer > timeToWait) && (PlayerPrefs.GetInt("Initiate")==1) && (rand1==1) && (preview.activeSelf==false))
	{
		x = Random.Range(-6.8, 6.8);
		x2 = Random.Range(-6.8, 6.8);
		x3 = Random.Range(-6.8, 6.8);
		rand = Random.Range(1, 20);
		rand1 = Random.Range(1, 10);
		rand2 = Random.Range(1, 20);
		var cloneBad = Instantiate(Bad);
		cloneBad.transform.position = Vector3(x, 25, 15);
		timer = 0;
		if (rand==1){
			cloneGold = Instantiate(Gold);
			cloneGold.transform.position = Vector3(x2, 25, 15);
		}
		if ((rand2==1) && (PlayerPrefs.GetInt("Lives") < 3) && (GameObject.Find("Life(Clone)") == null)){
			cloneLife = Instantiate(Life);
			cloneLife.transform.position = Vector3(x3, 50, -27.5);
		}
	}
	else if (PlayerPrefs.GetInt("Initiate")==0){
		for(var gameObj : GameObject in GameObject.FindObjectsOfType(GameObject))
		{
			if(gameObj.name == "Apple(Clone)")
			{
				Destroy(gameObj);
			}
			if(gameObj.name == "Gold(Clone)")
			{
				Destroy(gameObj);
			}
			if(gameObj.name == "Bad(Clone)")
			{
				Destroy(gameObj);
			}
			if(gameObj.name == "Life(Clone)")
			{
				Destroy(gameObj);
			}
		}
	}
}