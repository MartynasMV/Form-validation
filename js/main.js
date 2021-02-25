const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	//getting values from the inputs
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	if (usernameValue === "") {
		//show error
		//add error styling
		setErrorFor(username, "Username field can't be blank");
	} else {
		//add success class
		setSuccessFor(username);
	}

	if (emailValue === "") {
		setErrorFor(email, "Email field can't be blank");
	} else if (!isEmail(email.value)) {
		// also possible : (!isEmail(email.Value))
		setErrorFor(email, "email is not valid");
	} else {
		setSuccessFor(email);
	}
	if (passwordValue === "") {
		setErrorFor(password, "Password field can't be blank");
	} else if (passwordValue.length < 8) {
		setErrorFor(password, "Password must contain at least 8 characters");
	} else {
		setSuccessFor(password);
	}
	if (password2Value === "") {
		setErrorFor(password2, "Password field cant be blank");
	} else if (passwordValue != password2Value) {
		setErrorFor(password2, "Passwords do not match");
	} else if (password2Value.length < 8) {
		setErrorFor(password2, "Password must contain at least 8 characters");
	} else {
		setSuccessFor(password2);
	}

	function setErrorFor(input, message) {
		const formControl = input.parentElement; //locking on .form-control
		const small = formControl.querySelector("small");
		//add error message inside small
		small.innerText = message;
		//add error class
		formControl.className = "form-control error";
	}
	function setSuccessFor(input) {
		const formControl = input.parentElement;
		formControl.className = "form-control success";
	}
	function isEmail(email) {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			email
		);
	}
}
