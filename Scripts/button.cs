using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class button : MonoBehaviour
{
    void Update()
    {
        if (Input.touchCount == 1)
        //if (Input.GetMouseButton(0))
        {
            Ray raycast = Camera.main.ScreenPointToRay(Input.GetTouch(0).position);
            //Ray raycast = Camera.main.ScreenPointToRay(Input.mousePosition);
            RaycastHit raycastHit;
            if (Physics.Raycast(raycast, out raycastHit))
            {
                if ((raycastHit.collider.name == "MagicCube") && (PlayerPrefs.GetInt("clicked") == 0))
                {
                    SendMessage("clicked");
                }
            }
        }
        if (Input.touchCount == 2)
        {
            Ray raycast = Camera.main.ScreenPointToRay(Input.GetTouch(1).position);
            RaycastHit raycastHit;
            if (Physics.Raycast(raycast, out raycastHit))
            {
                if ((raycastHit.collider.name == "MagicCube") && (PlayerPrefs.GetInt("clicked") == 0))
                {
                    SendMessage("clicked");
                }
            }
        }
    }
}