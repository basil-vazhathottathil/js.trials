function generatePassword(length, inclow, incupp, incnum, incsym) {
    const lowercase = "qwertyuiopasdfghjklzxcvbnm";
    const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const numbers = "1234567890";
    const symbols = "!@#$%^&*";

    let allowedChars = '';
    let password = '';

    // Add character sets based on user input
    allowedChars += inclow ? lowercase : "";
    allowedChars += incupp ? uppercase : "";
    allowedChars += incnum ? numbers : "";
    allowedChars += incsym ? symbols : "";

    // Validation checks
    if (length <= 0) {
        return "Password length must be at least 1.";
    }
    if (allowedChars.length === 0) {
        return "Select at least one character set.";
    }

    // Generate password
    for (let i = 0; i < length; i++) {
        const randIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randIndex];
    }

    return password;
}

function handleGenerate() {
    // Get user input values
    const length = parseInt(document.getElementById("length").value, 10);
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    // Call the password generation function
    const password = generatePassword(
        length,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols
    );

    // Display the password
    const generatedPasswordLabel = document.getElementById("generatedPassword");
    generatedPasswordLabel.textContent = `Your password is: ${password}`;
}
