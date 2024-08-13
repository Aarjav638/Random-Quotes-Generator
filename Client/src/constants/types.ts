export interface Quote {
    quote: string;
    author: string;
}

export interface AuthContextType {
    user: User | null;
    token: string;
}

export interface PostQuote {
    quote: string;
    author: string;
}

export interface User {
    id: string ;
    name: string;
    email: string;
    password: string;
    phone: string;
}