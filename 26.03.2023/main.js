const dataInner = document.querySelector(".data");
const data = [
	{
		name: "Abraham Marsh",
		phone: "1-843-901-9977",
		email: "morbi@google.org"
	},
	{
		name: "Isabella Mcgowan",
		phone: "1-874-933-8532",
		email: "ac.feugiat@protonmail.couk"
	},
	{
		name: "Leandra Levy",
		phone: "(482) 150-2683",
		email: "vitae.dolor@hotmail.couk"
	},
	{
		name: "Shana Byrd",
		phone: "1-134-348-2696",
		email: "sit.amet@hotmail.edu"
	},
	{
		name: "Victoria Vazquez",
		phone: "(676) 677-3028",
		email: "mauris.magna@yahoo.ca"
	}
];

new Promise ( (resolve) =>{
    setTimeout(() => {
        resolve(data)
    },5000);
})
.then((elem) => {
    dataInner.innerHTML = "";
    elem.forEach(obj => {
        dataInner.innerHTML = `<p>${obj.name}</p> <p>${obj.phone}</p> <p>${obj.email}</p><br>` + dataInner.innerHTML;
    });
});