document.getElementById("loginForm").addEventListener("submit", function(event) {
	event.preventDefault(); // Prevent form submission

	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username === "" || password === "") {
		alert("Please enter your username and password");
		return;
	}

	if (password.length < 8) {
		alert("Password must be at least 8 characters long");
		return;
	}

	// Check for password match
	var confirmPassword = prompt("Confirm Password");
	if (confirmPassword !== password) {
		alert("Passwords does not match");
		return;
	}

	alert("Successfully Logged In");
	window.location.href = "https://google.com"; 
});

document.getElementById("logout").addEventListener("click", function(e) {
	e.preventDefault(); // Prevent link navigation
	window.location.href = "../index.html"; // Redirect to the login page
});