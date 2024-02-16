import { RootState } from "../../../redux/store"; 


export const selectCurrentUser = (state: RootState): string | null => state.auth?.user;

export const selectIsLoggedIn = (state: RootState): boolean => !!state.auth?.user;
