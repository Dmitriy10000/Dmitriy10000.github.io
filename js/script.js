var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme() {
	let lightTheme = "css/light.css";
	let darkTheme = "css/dark.css";

	let sunImg = "./img/sun.svg";
	let moonImg = "./img/moon.svg";

	var currTheme = link.getAttribute("href");
	var currImg = btn.getAttribute("src");
	var theme = "";

	if (currTheme == lightTheme) {
		currTheme = darkTheme;
		currImg = sunImg;
		theme = "dark";
	}
	else {
		currTheme = lightTheme;
		currImg = moonImg;
		theme = "light";
	}

	link.setAttribute("href", currTheme);
	btn.setAttribute("src", currImg);

	Save(theme);
}