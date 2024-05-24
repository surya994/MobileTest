import { expect } from '@wdio/globals'
import loginScreen from '../pageobjects/login.screen.js'

describe('Login Application', () => {
    it('Positive - Login', async () => {
        await loginScreen.tabLogin.click()
        await loginScreen.login('surya@test.com', 'qwerty123')
        await expect(loginScreen.alertLoginSuccess).toBeExisting()
        await loginScreen.buttonAlertLoginSuccess.click()
    })
    it('Negative - Email Blank', async () => {
        await loginScreen.tabLogin.click()
        await loginScreen.login('', 'qwerty123')
        await expect(loginScreen.alertEmail).toBeExisting()
    })
    it('Positive - Password Blank', async () => {
        await loginScreen.tabLogin.click()
        await loginScreen.login('surya@test.com', '')
        await expect(loginScreen.alertPassword).toBeExisting()
    })
})

