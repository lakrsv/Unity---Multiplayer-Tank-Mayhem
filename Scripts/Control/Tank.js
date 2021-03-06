var frontLeft : Rigidbody;
var rearLeft : Rigidbody;
var frontRight : Rigidbody;
var rearRight : Rigidbody;
var wheelTorque : int;
static var fLDir : int;
static var rLDir : int;
static var fRDir : int;
static var rRDir : int;
public var TorqMod : int;

function Update () {
	if(Input.GetKey(KeyCode.W)){
		fLDir = 1;
		rLDir = 1;
		fRDir = 1;
		rRDir = 1;
		wheelTorque = 5000 * TorqMod;
	}else{
		fLDir = 0;
		rLDir = 0;
		fRDir = 0;
		rRDir = 0;
		wheelTorque = 0;
	}
	if(Input.GetKey(KeyCode.S)){
		fLDir = -1;
		rLDir = -1;
		fRDir = -1;
		rRDir = -1;
		wheelTorque = 5000 * TorqMod;
	}
	if(Input.GetKey(KeyCode.A)){
		fLDir = -1;
		rLDir = -1;
		fRDir = 1;
		rRDir = 1;
		wheelTorque = 5000 * TorqMod;
	}
	if(Input.GetKey(KeyCode.D)){
		fLDir = 1;
		rLDir = 1;
		fRDir = -1;
		rRDir = -1;
		wheelTorque = 5000 * TorqMod;
	}
	if(Input.GetKeyDown(KeyCode.Y)){
	    if(TorqMod < 5){
	        TorqMod++;
	    }
	}
	if(Input.GetKeyDown(KeyCode.U)){
	    if(TorqMod > 1){
	        TorqMod--;
	    }
	}
}

function FixedUpdate(){
	frontLeft.AddRelativeTorque (Vector3.forward * fLDir * wheelTorque);
	rearLeft.AddRelativeTorque (Vector3.forward * rLDir * wheelTorque);
	frontRight.AddRelativeTorque (Vector3.forward * rRDir * wheelTorque);
	rearRight.AddRelativeTorque (Vector3.forward * rRDir * wheelTorque);
}