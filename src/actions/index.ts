import { defineAction } from "astro:actions";
import { z } from "astro:content";

const authAction = defineAction({
    accept: 'form',
    input: z.object({
        profile_tag: z.string()
    }),
    handler: async ({ profile_tag }, { cookies })=> {
        const apiKey = import.meta.env.API_KEY;
        const apiPlayerUrl = import.meta.env.API_PLAYER_URL;
        const apiURL = apiPlayerUrl + profile_tag.toUpperCase().replace('#', '%23');

        const response = await fetch(apiURL, {
	        method: 'GET',
	        headers: {
	            'Authorization': 'Bearer ' + apiKey,
	        }
        });

        if(!response.ok) {
            throw new Error('Usuario no encontrado');
        }

        cookies.set('profile_tag', profile_tag, { 
            path: '/',
            maxAge: (60 * 5)
        });

        const data = await response.json();
        
        return data;
    }
});

export const server = {
    authAction
}