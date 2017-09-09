CatStore.catXHR();

document.getElementById("petstore").addEventListener("click", (event) => {	
	if(event.target.id. indexOf("adopt") === 0){
	console.log("event", event);
	let catIndex = event.target.id.split("-")[1];
	CatStore.adoptCat(catIndex)
	}
})

document.getElementById("callan").addEventListener("click", (event) => {
	CatStore.getCatsByOwner(2);
});