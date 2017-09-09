var CatStore = ((oldCatStore) => {
	let owners = [];

	oldCatStore.getOwners = () => {
		return Owners;
	}
	
	oldCatStore.setAllOwners = (allMyOwners) => {
	Owners = allMyOwners;
	};

	return oldCatStore;
})(CatStore || {}); 