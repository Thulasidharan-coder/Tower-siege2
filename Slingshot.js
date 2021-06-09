class Slingshot{
    constructor(body,anchor)
	{
		
		var options={ 
			bodyA: body,			 
			pointB: anchor, 
			stiffness: 0.02, 
			length: 1
			
		}
		
		this.bodyA = body;
		this.pointB = anchor;

		this.slingshot=Constraint.create(options)
		World.add(world,this.slingshot)
	}

	attach(body)
	{
		this.slingshot.bodyA = body;
	}

	fly()
	{
		this.slingshot.bodyA = null;
	}

	display()
	{
		if(this.slingshot.bodyA)
		{
			var pointA = this.bodyA.position;
			var pointB = this.pointB;

			strokeWeight(4);	
			stroke("skyblue");
			line(pointA.x+5,pointA.y+10,pointB.x+5,pointB.y+10);
		}
	}
}