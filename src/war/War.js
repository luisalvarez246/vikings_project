class War 
{
	constructor()
	{
		this.vikingArmy = [];
		this.saxonArmy = [];
	}

	addViking(viking)
	{
		this.vikingArmy.push(viking);
	}

	addSaxon(saxon)
	{
		this.saxonArmy.push(saxon);
	}

	vikingAttack()
	{
		const	randomAttack = Math.floor(Math.random() * this.vikingArmy.length);
		const	randomVictim = Math.floor(Math.random() * this.saxonArmy.length);
		const	viking = this.vikingArmy[randomAttack];
		const	saxon = this.saxonArmy[randomVictim];
		let		result;
		
		result = saxon.receiveDamage(viking.strength);
		if (saxon.health <= 0)
			this.saxonArmy.splice(randomVictim, 1);
		return (result);
	}

	saxonAttack()
	{
		const	randomAttack = Math.floor(Math.random() * this.saxonArmy.length);
		const	randomVictim = Math.floor(Math.random() * this.vikingArmy.length);
		const	saxon = this.saxonArmy[randomVictim];
		const	viking = this.vikingArmy[randomAttack];
		let		result;
		
		result = viking.receiveDamage(saxon.strength);
		if (viking.health <= 0)
			this.vikingArmy.splice(randomVictim, 1);
		return (result);
	}

	showStatus()
	{
		if (this.saxonArmy.length === 0)
			return ("Vikings have won the war of the century!");
		else if (this.vikingArmy.length === 0)
			return ("Saxons have fought for their lives and survive another day...");
		return ("Vikings and Saxons are still in the thick of battle.");
	}
}

module.exports = War;
