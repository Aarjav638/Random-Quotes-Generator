import { createContext,Dispatch,SetStateAction } from "react";
import { PostQuote } from "../../constants/types";
type PostQuoteContextState = [PostQuote, Dispatch<SetStateAction<PostQuote>>];
const PostQuoteContext = createContext<PostQuoteContextState|null>(null);
export default PostQuoteContext;