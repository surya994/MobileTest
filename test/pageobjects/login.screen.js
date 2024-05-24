import { $ } from '@wdio/globals'

class LoginScreen  {

    get tabLogin() {
        return $('//android.view.View[@content-desc="Login"]')
    }
    get inputEmail () {
        return $('//android.widget.EditText[@content-desc="input-email"]');
    }

    get inputPassword () {
        return $('//android.widget.EditText[@content-desc="input-password"]');
    }

    get buttonLogin () {
        return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]');
    }

    get alertEmail() {
        return $('//android.widget.TextView[@text="Please enter a valid email address"]');
    }

    get alertPassword() {
        return $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
    }

    get alertLoginSuccess() {
        return $('//android.widget.TextView[@resource-id="android:id/message"]');
    }

    get buttonAlertLoginSuccess() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.buttonLogin.click();
    }
}

export default new LoginScreen();
