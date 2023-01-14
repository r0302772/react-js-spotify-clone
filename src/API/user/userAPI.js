import {useQuery} from "@tanstack/react-query";
import {client} from "../utils/spotifyAPI.js";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Get Current User's Profile
 *
 * Get detailed profile information about the current user (including the current user's username).
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region MyProfile

const fetchMyProfile = async () => {
    console.log(`Fetching my profile`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/me`)
}

export const useGetMyProfile = () => {
    const result = useQuery(
        ['my_profile'],
        async () => (await fetchMyProfile())?.data,
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
 * Get User's Top Items
 *
 * Get the current user's top artists or tracks based on calculated affinity.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region MyTopItemsByType

const fetchMyTopItemsByType = async ({type}) => {
    console.log(`Fetching my top items of type ${type}`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/me/top/${type}`)
}

export const useGetMyTopItemsByType = ({type}) => {
    const result = useQuery(
        ['my_top_items', type],
        async () => (await fetchMyTopItemsByType({type}))?.data,
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
