export interface User {
    email: string;
    password: string;
}

export const USERS = {
    VALID_USER: {
        email: 'dev_test_01@yopmail.com',
        password: '12345678'
    },
    INVALID_USER: {
        email: 'invalid@email.com',
        password: 'wrongpass'
    }
} as const;
