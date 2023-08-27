import validator from 'validator'

export const validation =
{
    validationName,
    validationPhoneNumber,
    validationEmail,
    validationPassword,
    validationComfirmPassword,
    validationMessage,
    convertCapitalFirstLetter,
};

function validationName(value, Name) {
    if (value.trim() === '') {
        return `${Name} is required`;
    }

    else if (value.indexOf(' ') >= 0 && value.indexOf(' ') != value.length - 1) {
        return `${Name} must be one name and not contain spaces`;
    }

    else if (value.length < 3) {
        return `${Name} must be at least 3 characters`;
    }
    else {
        return '';
    }
}

function validationPhoneNumber(value, Name) {
    if (value.trim() === '') {
        return `${Name} is required`;
    }
    else {
        let count = 0;
        for (let i = 0; i < value.length; i++) {
            if (value.charAt(i) in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
                count++
            }
        }
        var isValid = (count === 11) ? true : false
        return isValid ? '' : `${Name} must be 11 Numbers`;
    }
}

function validationEmail(value, Name) {
    if (value.trim() === '') {
        return `${Name} is required`;
    }
    else if (validator.isEmail(value)) {
        return '';
    }
    else {
        return `${Name} Not Valid`;
    }
}

function validationPassword(value, Name) {
    if (value.trim() === '') {
        return `${Name} is required`;
    }
    else if (validator.isStrongPassword(value, {
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
        return '';
    }
    else {
        return 'Your password must be contain at least one lowercase , uppercase, special characters and numbers';

    }
}

function validationComfirmPassword(value, Name, userPassword) {
    if (value.trim() === '') {
        return `${Name} is required`;
    }
    else if (userPassword === value) {
        return '';
    }
    else {
        return 'Your Comfirm Password must be identical to password';

    }
}

function validationMessage(value, Name) {
    if (value.trim() === '') {
        return `${Name} is required`;
    }

    else if (value.length < 10) {
        return `${Name} must be at least 10 characters`;
    }
    else {
        return '';
    }
}

function convertCapitalFirstLetter(e) {
    return (e.target.value).replace((e.target.value).charAt(0), (e.target.value).charAt(0).toUpperCase());
}