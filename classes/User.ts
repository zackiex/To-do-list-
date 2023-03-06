export class User {
    constructor(
        public readonly userId: number,
        public username: string,
        private password: string,
        public userLastName?: string,
        public userFirstName?: string,
        public userPhone?: number,
        public userEmail?: string,
    ) {
    }

    displayUserInfo(): string {
        return `Username :${this.username} \n` +
            `Last name : ${this.userLastName} First name : ${this.userFirstName} \n` +
            `Phone : ${this.userPhone} \n` +
            `E-mail: ${this.userEmail} \n`;
    }

    setPassword(oldPassword: string, newPassword: string) {
        let ps: boolean = true;
        while (ps) {
            if (oldPassword == this.password) {
                ps = false;
                console.log("Password successfully changed")
                return this.password = newPassword;
            } else {
                console.log("Old password is incorrect")
            }
        }

    }

    setUserName(name: string) {
        return this.username = name;
    }
}