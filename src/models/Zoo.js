function Zoo({ id, name = "", specie = "" }) {
	this.id = id;
	this.name = name;
	this.specie = specie;
}

module.exports = Zoo;