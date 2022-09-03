// service d'auth avec amplify
import { Auth } from 'aws-amplify';
import type { CognitoUser } from 'amazon-cognito-identity-js';

export const auth = {
	// authentification
	signIn: async (username: string, password: string) => {
		const user = await Auth.signIn(username, password);
		return user;
	},
	// déconnexion
	signOut: async () => {
		await Auth.signOut();
	},

	// récupération de l'utilisateur
	getUser: async (): Promise<CognitoUser> => {
		const user = await Auth.currentAuthenticatedUser();
		return user;
	}
};
