using UnityEngine;
using System.Collections;

public class movePosition : MonoBehaviour
{
    private Vector3 mousePosition;
    public GameObject basket;
    private bool trigger = false;
    private Vector3 basketPos;
    public GameObject preview;

    public void mouseDown()
    {
        preview.SetActive(false);
        mousePosition = Camera.main.ScreenToWorldPoint(Input.GetTouch(0).position);
        //mousePosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        if ((mousePosition.x > basket.GetComponent<Rigidbody>().position.x - (basket.transform.localScale.x/1.4)) && (mousePosition.x < (basket.GetComponent<Rigidbody>().position.x) + (basket.transform.localScale.x/1.4)))
        {
            trigger = true;
        }
        else
        {
            trigger = false;
        }
    }

    public void mouseUp()
    {
        trigger = false;
    }

    void FixedUpdate()
    {
        mousePosition = Camera.main.ScreenToWorldPoint(Input.GetTouch(0).position);
        //mousePosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        if (trigger == true)
        {
            mousePosition.y = 0;
            mousePosition.z = basket.GetComponent<Rigidbody>().position.z;
            basket.GetComponent<Rigidbody>().position = Vector3.Lerp(basket.GetComponent<Rigidbody>().position, mousePosition, 0.1f);
        }
    }
    void Update()
    {
        if (PlayerPrefs.GetInt("magnet") == 1)
        {
            basketPos = basket.GetComponent<Rigidbody>().position;
            basketPos.y = GameObject.Find("Apple(Clone)").GetComponent<Rigidbody>().position.y;
            basketPos.z = GameObject.Find("Apple(Clone)").GetComponent<Rigidbody>().position.z;
            GameObject.Find("Apple(Clone)").GetComponent<Rigidbody>().position = Vector3.Lerp(GameObject.Find("Apple(Clone)").GetComponent<Rigidbody>().position, basketPos, 0.1f);
        }
    }
}