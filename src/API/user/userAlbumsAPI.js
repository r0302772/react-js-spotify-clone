import {client} from "../utils/spotifyAPI.js";
import {useQuery} from "@tanstack/react-query";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Get User's Saved Albums
 *
 * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region MyAlbumsCollection

const fetchMyAlbumsCollection = async () => {
    console.log(`Fetching my albums collection`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/me/albums`)
}

export const useGetMyAlbumsCollection = () => {
    const result = useQuery(
        ['my_albums_collection'],
        async () => (await fetchMyAlbumsCollection())?.data,
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
 * Check User's Saved Albums
 *
 * Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region CheckMyAlbumsCollection

const fetchCheckMyAlbumsCollection = async ({ids}) => {
    console.log(`Fetching check saved tracks`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/me/albums/contains`,{
        params: {
            ids: ids
        }
    })
}

export const useCheckMyAlbumsCollection = ({ids}) => {
    const result = useQuery(
        ['check_my_albums_collection', ids],
        async () => (await fetchCheckMyAlbumsCollection({ids}))?.data,
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
