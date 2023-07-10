const Soldier = require("../soldier/Soldier");

class Saxon extends Soldier
{
	constructor(health, strength)
	{
		super();
		this.health = health;
		this.strength = strength;
	}

	receiveDamage(damage)
	{
		super.receiveDamage(damage);
		if (this.health > 0)
			return (`A Saxon has received ${damage} points of damage`);
		return ("A Saxon has died in combat")
	}
}

module.exports = Saxon;
