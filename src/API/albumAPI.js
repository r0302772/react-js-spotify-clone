import {useQuery} from "@tanstack/react-query";
import {client} from "./utils/spotifyAPI.js";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Get Album
 *
 * Get Spotify catalog information for a single album.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region AlbumByAlbumId

const fetchAlbumByAlbumId = async ({album_id}) => {
    console.log(`Fetching album with id: ${album_id}`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/albums/${album_id}`)
}

export const useGetAlbumByAlbumId = ({album_id}) => {
    const result = useQuery(
        ['album', album_id],
        async () => (await fetchAlbumByAlbumId({album_id}))?.data,
        {
            staleTime: Infinity,
            cacheTime: Infinity,
        }
    )

    return {
        ...result,
        artists: result?.data?.artists,
        tracks: result?.data?.tracks
    }
}

//endregion

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Get Album Tracks
 *
 * Get Spotify catalog information about an album’s tracks. Optional parameters can be used to limit the number of tracks returned.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region AlbumTracksByAlbumId

const fetchAlbumTracksByAlbumId = async ({album_id}) => {
    console.log(`Fetching tracks from album with id: ${album_id}`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/albums/${album_id}/tracks`)
}

export const useGetAlbumTracksByAlbumId = ({album_id}) => {
    const result = useQuery(
        ['album_tracks', album_id],
        async () => (await fetchAlbumTracksByAlbumId({album_id}))?.data,
        {
            staleTime: Infinity,
            cacheTime: Infinity,
        }
    )

    return {
        ...result,
        items: result?.data?.items
    }
}

//endregion

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Get New Releases
 *
 * Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region NewAlbumReleases

const fetchNewAlbumReleases = async () => {
    console.log(`Fetching new album releases`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/browse/new-releases`)
}

export const useGetNewAlbumReleases = () => {
    const result = useQuery(
        ['new_album_releases'],
        async () => (await fetchNewAlbumReleases())?.data,
        {
            staleTime: Infinity,
            cacheTime: Infinity,
        }
    )

    return {
        ...result,
        albums: result?.data?.items
    }
}

//endregion
