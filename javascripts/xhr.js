let CatStore = ((oldCatStore) => {

	oldCatStore.catLoadWorks = () => {	
	let catData = JSON.parse(this.responseText).cats;
	console.log("catData", catData);
}

oldCatStore.ownerLoadWorks = () => {
	let ownerData = JSON.parse(this.responseText).owners;
	console.log("ownerData", ownerData);
}

oldCatStore.itBroke = () => {
	console.log("It Broke");
}

oldCatStore.catXHR =() => {
var myCats = new XMLHttpRequest();
myCats.addEventListener('load', CatStore.catLoadWorks);
myCats.addEventListener('error', CatStore.itBroke);
myCats.open('GET', 'db/cats.json');
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