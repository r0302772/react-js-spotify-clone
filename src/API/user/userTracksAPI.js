import {client} from "../utils/spotifyAPI.js";
import {useQuery} from "@tanstack/react-query";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Get User's Saved Tracks
 *
 * Get a list of the songs saved in the current Spotify user's 'Your Music' library.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region MyTracksCollection

const fetchMyTracksCollection = async () => {
    console.log(`Fetching tracks collection`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/me/tracks`)
}

export const useGetMyTracksCollection = () => {
    const result = useQuery(
        ['my_tracks_collection'],
        async () => (await fetchMyTracksCollection())?.data,
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

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Check User's Saved Tracks
 *
 * Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region CheckMyTracksCollection

const fetchCheckMyTracksCollection = async ({ids}) => {
    console.log(`Fetching check saved tracks`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/me/tracks/contains`, {
        params: {
            ids: ids
        }
    })
}

export const useCheckMyTracksCollection = ({ids}) => {
    const result = useQuery(
        ['check_saved_tracks', ids],
        async () => (await fetchCheckMyTracksCollection({ids}))?.data,
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