using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PostHS : MonoBehaviour {
    public void Post()
    {
        Social.ReportScore(PlayerPrefs.GetInt("Score"), "CgkItLrO-98GEAIQAA", (bool success) => {
        });
        if (PlayerPrefs.GetInt("Score")>=50){
            Social.ReportProgress("CgkItLrO-98GEAIQAg", 100.0f, (bool success) => {
            });
        }
        if (PlayerPrefs.GetInt("Score") >= 100)
        {
            Social.ReportProgress("CgkItLrO-98GEAIQAw", 100.0f, (bool success) => {
            });
        }
        if (PlayerPrefs.GetInt("Score") >= 200)
        {
            Social.ReportProgress("CgkItLrO-98GEAIQBA", 100.0f, (bool success) => {
            });
        }
        if (PlayerPrefs.GetInt("Score") >= 350)
        {
            Social.ReportProgress("CgkItLrO-98GEAIQBQ", 100.0f, (bool success) => {
            });
        }
        if (PlayerPrefs.GetInt("Score") >= 500)
        {
            Social.ReportProgress("CgkItLrO-98GEAIQBg", 100.0f, (bool success) => {
            });
        }
    }
}