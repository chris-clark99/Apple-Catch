var rigid : Rigidbody;
function FixedUpdate()
    {
        var currentVelocity = rigid.velocity;
        if (currentVelocity.y <= 0f){
			return;
		}
        currentVelocity.y = 0f;
        rigid.velocity = currentVelocity;
    }