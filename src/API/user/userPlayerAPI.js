import {client} from "../utils/spotifyAPI.js";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Get Playback State
 *
 * Get information about the user’s current playback state, including track or episode, progress, and active device.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region PlaybackState

const fetchPlaybackState = async () => {
    console.log(`Fetching playback state`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/me/player`)
}

export const useGetPlaybackState = () => {
    const result = useQuery(
        ['playback_state'],
        async () => (await fetchPlaybackState())?.data,
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
 * Get Currently Playing Track
 *
 * Get the object currently being played on the user's Spotify account.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region CurrentlyPlayingTrack

const fetchCurrentlyPlayingTrack = async () => {
    console.log(`Fetching my currently playing track`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/me/player/currently-playing`)
}

export const useGetCurrentlyPlayingTrack = () => {
    const result = useQuery(
        ['my_currently_playing_track'],
        async () => (await fetchCurrentlyPlayingTrack())?.data,
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
 * Get Recently Played Tracks
 *
 * Get tracks from the current user's recently played tracks. Note: Currently doesn't support podcast episodes.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region RecentlyPlayedTracks

const fetchRecentlyPlayedTracks = async () => {
    console.log(`Fetching my recently played tracks`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/me/player/recently-played`)
}

export const useGetRecentlyPlayedTracks = () => {
    const result = useQuery(
        ['my_recently_played_tracks'],
        async () => (await fetchRecentlyPlayedTracks())?.data,
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
 * Get the User's Queue
 *
 * Get the list of objects that make up the user's queue.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region Queue

const fetchQueue = async () => {
    console.log(`Fetching queue`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/me/player/queue`)
}

export const useGetQueue = () => {
    const result = useQuery(
        ['my_queue'],
        async () => (await fetchQueue())?.data,
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
 * Start/Resume Playback
 *
 * Start a new context or resume current playback on the user's active device.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region


//endregion

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Pause Playback
 *
 * Pause playback on the user's account.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region


//endregion

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Skip To Next
 *
 * Skips to next track in the user’s queue.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region


//endregion

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Skip To Previous
 *
 * Skips to previous track in the user’s queue.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region


//endregion

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Seek To Position
 *
 * Seeks to the given position in the user’s currently playing track.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region


//endregion

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Set Repeat Mode
 *
 * Set the repeat mode for the user's playback. Options are repeat-track, repeat-context, and off.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region


//endregion

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Set Playback Volume
 *
 * Set the volume for the user’s current playback device.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region


//endregion

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Toggle Playback Shuffle
 *
 * Toggle shuffle on or off for user’s playback.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region


//endregion

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Add Item to Playback Queue
 *
 * Add an item to the end of the user's current playback queue.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region AddToQueue

const addToQueue = async ({uri}) => {
    console.log(`Adding ${uri} to queue`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.post(`/me/player`, {
        uri: uri
    })
}

export const useAddToQueue = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: addToQueue,
        onMutate: async ({uri}) => {
            const queryKey = ['my_queue']
            await queryClient.cancelQueries({queryKey})
            const previousQueue = queryClient.getQueriesData(['my_queue'])
            queryClient.setQueriesData(queryKey, old => old + uri)
            return {previousQueue}
        },
        onError: (error, {uri}, context) => {
            queryClient.setQueryData(['my_queue'], context.previousQueue)
        },
        onSettled: async () => {
            await queryClient.invalidateQueries(['my_queue'])
        }
    })
}

//endregion