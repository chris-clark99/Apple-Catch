using UnityEngine;
using System.Collections;
public class share : MonoBehaviour
{
    string subject = "Check out Apple Catch";
    string body = "Apple Catch is pretty cool. Check it out on Google Play Games. See if you can beat my score!\n\nhttps://play.google.com/store/apps/details?id=com.lucentdesigns.applecatch&pcampaignid=GPG_shareGame";

    public void shareText()
    {
        //execute the below lines if being run on a Android device
        #if UNITY_ANDROID
        //Reference of AndroidJavaClass class for intent
        AndroidJavaClass intentClass = new AndroidJavaClass ("android.content.Intent");
        //Reference of AndroidJavaObject class for intent
        AndroidJavaObject intentObject = new AndroidJavaObject ("android.content.Intent");
        //call setAction method of the Intent object created
        intentObject.Call<AndroidJavaObject>("setAction", intentClass.GetStatic<string>("ACTION_SEND"));
        //set the type of sharing that is happening
        intentObject.Call<AndroidJavaObject>("setType", "text/plain");
        //add data to be passed to the other activity i.e., the data to be sent
        intentObject.Call<AndroidJavaObject>("putExtra", intentClass.GetStatic<string>("EXTRA_SUBJECT"), subject);
        intentObject.Call<AndroidJavaObject>("putExtra", intentClass.GetStatic<string>("EXTRA_TEXT"), body);
        //get the current activity
        AndroidJavaClass unity = new AndroidJavaClass ("com.unity3d.player.UnityPlayer");
        AndroidJavaObject currentActivity = unity.GetStatic<AndroidJavaObject>("currentActivity");
        //start the activity by sending the intent data
        AndroidJavaObject jChooser = intentClass.CallStatic<AndroidJavaObject>("createChooser", intentObject, "Share Via");
        currentActivity.Call("startActivity", jChooser);
        #endif
    }
}