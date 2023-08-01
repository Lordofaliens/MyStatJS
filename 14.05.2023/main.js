class App {
    hasNumbers(str) {
        const regex = /\d/;
        return regex.test(str);
    }

    errorHandler(firstNameValue,lastNameValue,emailValue,passwordValue) {
        if(firstNameValue.length < 3 || lastNameValue.length < 3) return "Stupid Name";
        if(emailValue.length < 6 || emailValue.indexOf('.')==-1 || emailValue.indexOf('@')==-1) return "Stupid Email";
        if(passwordValue.length < 10 || !this.hasNumbers(passwordValue)) return "Stupid Password";

        return "";
    }

    constructor() {
        this.fn = document.getElementById('fn');
        this.ln = document.getElementById('ln');
        this.e = document.getElementById('e');
        this.p = document.getElementById('p');
        this.r = document.getElementById('r');

        $("#r").click(() => {
            const firstNameValue = this.fn.value;
            const lastNameValue = this.ln.value;
            const emailValue = this.e.value;
            const passwordValue = this.p.value;

            console.log("First Name:", firstNameValue);
            console.log("Last Name:", lastNameValue);
            console.log("Email:", emailValue);
            console.log("Password:", passwordValue);

            var err = this.errorHandler(firstNameValue,lastNameValue,emailValue,passwordValue);
            if(err!="") {
                $("#errorHandler").empty().text(err);
            } else {
                this.fn.value = "";
                this.ln.value = "";
                this.e.value = "";
                this.p.value = "";
                $("#errorHandler").empty().text("Success!");
            }
        });
    }
}

new App();
