export interface UserDetails {
    firstName: string;
    lastName: string;
    email: string;
}

export interface AuthState {
    isLoggedIn: boolean;
    user: UserDetails;
}