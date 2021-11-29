import { Utility } from ".";

describe('Utility', () => {
    it('should return false, if password has no uppercase', () => {
        const firstName = '';
        const lastName = '';
        const password = 'qweasdzxc';

        const result = Utility.validatePassword(password, firstName, lastName);

        expect(result).toBeFalsy();
    });

    it('should return false, if password has no lowercase', () => {
        const firstName = '';
        const lastName = '';
        const password = 'QWEASDZXC';

        const result = Utility.validatePassword(password, firstName, lastName);

        expect(result).toBeFalsy();
    });

    it('should return false, if the length of password length has less than 8 characters', () => {
        const firstName = '';
        const lastName = '';
        const password = 'QWE';

        const result = Utility.validatePassword(password, firstName, lastName);

        expect(result).toBeFalsy();
    });

    it('should return false, if the password contains firstName (lowercase)', () => {
        const firstName = 'qwe';
        const lastName = '';
        const password = 'QWEasdzxc';

        const result = Utility.validatePassword(password, firstName, lastName);

        expect(result).toBeFalsy();
    });

    it('should return false, if the password contains firstName (uppercase)', () => {
        const firstName = 'QWE';
        const lastName = '';
        const password = 'QWEasdzxc';

        const result = Utility.validatePassword(password, firstName, lastName);

        expect(result).toBeFalsy();
    });

    it('should return false, if the password contains lastName (lowercase)', () => {
        const firstName = '';
        const lastName = 'qwe';
        const password = 'QWEasdzxc';

        const result = Utility.validatePassword(password, firstName, lastName);

        expect(result).toBeFalsy();
    });

    it('should return false, if the password contains lastName (uppercase)', () => {
        const firstName = '';
        const lastName = 'QWE';
        const password = 'QWEasdzxc';

        const result = Utility.validatePassword(password, firstName, lastName);

        expect(result).toBeFalsy();
    });

    it('should return true, if the password has at least 8 characters and don not contain firstName and lastName', () => {
        const firstName = 'Test';
        const lastName = 'Test';
        const password = 'QWEasdzxc';

        const result = Utility.validatePassword(password, firstName, lastName);

        expect(result).toBeTruthy();
    });

    it('should return true, if the input has valid email address', () => {
        const input = 'test@test.test';

        const result = Utility.validateEmail(input);

        expect(result).toBeTruthy();
    });

    it('should return false, if the input has invalid email address', () => {
        const input = 'test';

        const result = Utility.validateEmail(input);

        expect(result).toBeFalsy();
    });
});