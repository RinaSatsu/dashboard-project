const dataTheme = document.querySelector('[data-theme]');
const themeToggle = document.querySelector('#themeSwitch');
const likeButton = document.querySelectorAll('.projectActions-like');

function GetColorScheme() {
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	}
	return 'light';
}

function SetColorTheme(theme) {
	dataTheme.setAttribute('data-theme', theme);
}

function ChangeColorTheme() {
	let newTheme = dataTheme.dataset.theme === 'dark' ? 'light' : 'dark';
	SetColorTheme(newTheme);
}

function switchLike(event) {
    let childList = event.srcElement.nodeName === 'path' ? 
    event.srcElement.parentNode.parentNode.childNodes : event.srcElement.parentNode.childNodes;
    childList[1].classList.toggle('invisible');
    childList[3].classList.toggle('invisible');

}

SetColorTheme(GetColorScheme());
themeToggle.addEventListener('click', ChangeColorTheme);
likeButton.forEach(button => button.addEventListener('click', switchLike));
