import {client} from "./utils/spotifyAPI.js";
import {useQuery} from "@tanstack/react-query";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Get Playlist
 *
 * Get a playlist owned by a Spotify user.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region PlaylistByPlaylistId

const fetchPlaylistByPlaylistId = async ({playlist_id}) => {
    console.log(`Fetching playlist with id: ${playlist_id}`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/playlists/${playlist_id}`)
}

export const useGetPlaylistByPlaylistId = ({playlist_id}) => {
    const result = useQuery(
        ['playlist', playlist_id],
        async () => (await fetchPlaylistByPlaylistId({playlist_id}))?.data,
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
 * Get Playlist Items
 *
 * Get full details of the items of a playlist owned by a Spotify user.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region PlaylistTracksByPlaylistId

const fetchPlaylistTracksByPlaylistId = async ({playlist_id}) => {
    console.log(`Fetching tracks of playlist with id: ${playlist_id}`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/playlists/${playlist_id}/tracks`)
}

export const useGetPlaylistTracksByPlaylistId = ({playlist_id}) => {
    const result = useQuery(
        ['playlist_tracks', playlist_id],
        async () => (await fetchPlaylistTracksByPlaylistId({playlist_id}))?.data,
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
 * Get Featured Playlists
 *
 * Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region FeaturedPlaylists

const fetchFeaturedPlaylists = async () => {
    console.log(`Fetching featured playlists`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/browse/featured-playlists`)
}

export const useGetFeaturedPlaylists = () => {
    const result = useQuery(
        ['featured_playlists'],
        async () => (await fetchFeaturedPlaylists())?.data,
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
 * Get Category's Playlists
 *
 * Get a list of Spotify playlists tagged with a particular category.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region PlaylistByCategoryId

const fetchPlaylistByCategoryId = async ({category_id}) => {
    console.log(`Fetching playlist of category: ${category_id}`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/browse/categories/${category_id}/playlists`)
}

export const useGetPlaylistByCategoryId = ({category_id}) => {
    const result = useQuery(
        ['playlists', category_id],
        async () => (await fetchPlaylistByCategoryId({category_id}))?.data,
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
 * Get Playlist Cover Image
 *
 * Get the current image associated with a specific playlist.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region CoverImageByPlaylistId

const fetchCoverImageByPlaylistId = async ({playlist_id}) => {
    console.log(`Fetching cover image of playlist with id: ${playlist_id}`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/playlists/${playlist_id}/images`)
}

export const useGetCoverImageByPlaylistId = ({playlist_id}) => {
    const result = useQuery(
        ['cover_playlist', playlist_id],
        async () => (await fetchCoverImageByPlaylistId({playlist_id}))?.data,
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