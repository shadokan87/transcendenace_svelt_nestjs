

const message = () => {
	return ("hello world");
}

const fn = (callback: () => string, id: number) => {
	console.log(callback);
	console.log(id);
};
for (let i: number = 0; i < 10;i++)
	fn(message, i);
