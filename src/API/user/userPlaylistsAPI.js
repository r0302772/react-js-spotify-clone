import {client} from "../utils/spotifyAPI.js";
import {useQuery} from "@tanstack/react-query";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Get Current User's Playlists
 *
 * Get a list of the playlists owned or followed by the current Spotify user.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region MyPlaylistsCollection

const fetchMyPlaylistsCollection = async () => {
    console.log(`Fetching my playlists`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/me/playlists`)
}

export const useGetMyPlaylistsCollection = () => {
    const result = useQuery(
        ['my_playlists_collection'],
        async () => (await fetchMyPlaylistsCollection())?.data,
        {
            staleTime: Infinity,
            cacheTime: Infinity,
        }
    )

    return {
        ...result,
        items: result?.data.items
    }
}

//endregion