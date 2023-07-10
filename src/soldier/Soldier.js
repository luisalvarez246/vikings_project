class Soldier 
{
	constructor(healthArg, strengthArg)
	{
		this.health = healthArg;
		this.strength = strengthArg;
	}

	attack()
	{
		return (this.strength);
	}

	receiveDamage(damage)
	{
		this.health = this.health - damage;
	}
}

module.exports = Soldier;
