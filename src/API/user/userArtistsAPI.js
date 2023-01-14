import {client} from "../utils/spotifyAPI.js";
import {useQuery} from "@tanstack/react-query";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Get Followed Artists
 *
 * Get the current user's followed artists.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region MyArtistsCollection

const fetchMyArtistsCollection = async ({type = "artist"}) => {
    console.log(`Fetching artists collection`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/me/following`, {
        params: {
            type: type
        }
    })
}

export const useGetMyArtistsCollection = ({type}) => {
    const result = useQuery(
        ['my_followed_artists', type],
        async () => (await fetchMyArtistsCollection({type}))?.data,
        {
            staleTime: Infinity,
            cacheTime: Infinity,
        }
    )

    return {
        ...result
    }
}

//endregion

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Check If User Follows Artists
 *
 * Check to see if the current user is following one or more artists or other Spotify users.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region CheckMyArtistsCollection

const fetchCheckMyArtistsCollection = async ({ids}) => {
    console.log(`Fetching check saved artists`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/me/tracks/contains`, {
        params: {
            ids: ids
        }
    })
}

export const useCheckMyArtistsCollection = ({ids}) => {
    const result = useQuery(
        ['check_saved_artists', ids],
        async () => (await fetchCheckMyArtistsCollection({ids}))?.data,
        {
            staleTime: Infinity,
            cacheTime: Infinity,
        }
    )

    return {
        ...result
    }
}

//endregion
