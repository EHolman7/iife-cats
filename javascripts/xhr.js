var CatStore = ((oldCatStore) => {

oldCatStore.catLoadWorks = function() {	
	let catData = JSON.parse(this.responseText).cats;
	CatStore.setAllCats(catData);
	CatStore.ownerXHR();
};

oldCatStore.ownerLoadWorks = function() {
	let ownerData = JSON.parse(this.responseText).owners;
	CatStore.setAllOwners(ownerData);
	let catArray = CatStore.getCats();
	let ownerArray = CatStore.getOwners();
	CatStore.combineArrays(catArray, ownerData);
};

oldCatStore.itBroke = () => {
;	console.log("It Broke");
}

oldCatStore.catXHR =() => {
var myCats = new XMLHttpRequest();
myCats.addEventListener('load', CatStore.catLoadWorks);
myCats.addEventListener('error', CatStore.itBroke);
myCats.open('GET', 'https://random-dogs-api.herokuapp.com/cats/20');
myCats.send();
};

oldCatStore.ownerXHR =() => {
var myOwners = new XMLHttpRequest();
myOwners.addEventListener('load', CatStore.ownerLoadWorks);
myOwners.addEventListener('error', CatStore.itBroke);
myOwners.open('GET', 'db/owners.json');
myOwners.send();
};

	return oldCatStore;
})(CatStore || {});