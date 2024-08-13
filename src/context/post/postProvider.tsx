import PostQuoteContext from "./postQuote";

import { ReactNode, useState, useEffect } from "react";

import { PostQuote } from "../../constants/types";

const PostQuoteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, setState] = useState<PostQuote>({
        quote: '',
        author: '',
    });

    const getUserPost = async () => {
        try {
            // const response = await axios.get('/user');
            // console.log('user', response.data);
            // setState({...state, user: response.data});
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUserPost();
    }, []);

    return (
        <PostQuoteContext.Provider value={[state, setState]}>
            {children}
        </PostQuoteContext.Provider>
    );
}

export default PostQuoteProvider;
