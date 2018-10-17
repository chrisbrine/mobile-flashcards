export function createId (title) {
	if (title.length > 10) {
		title = title.substring(0, 10);
	}
	const time = new Date().getTime().toString();
	const rand = Math.floor((Math.random() * 1000001)).toString();
	return time + title + rand;
}