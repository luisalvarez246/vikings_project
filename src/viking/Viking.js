const Soldier = require("../soldier/Soldier");

class Viking extends Soldier
{
	constructor(name, health, strength)
	{
		super();
		this.name = name;
		this.health = health;
		this.strength = strength;
	}

	receiveDamage(damage)
	{
		super.receiveDamage(damage);
		if (this.health > 0)
			return (`${this.name} has received ${damage} points of damage`);
		return (`${this.name} has died in act of combat`);
	}

	battleCry()
	{
		return ("Odin Owns You All!");
	}
}

module.exports = Viking;
