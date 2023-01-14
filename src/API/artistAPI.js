import {useQuery} from "@tanstack/react-query";
import {client} from "./utils/spotifyAPI.js";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Get Artist
 *
 * Get Spotify catalog information for a single artist identified by their unique Spotify ID.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region ArtistByArtistId

const fetchArtistByArtistId = async ({artist_id}) => {
    console.log(`Fetching artist with id: ${artist_id}`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/artists/${artist_id}`)
}

export const useGetArtistByArtistId = ({artist_id}) => {
    const result = useQuery(
        ['artist', artist_id],
        async () => (await fetchArtistByArtistId({artist_id}))?.data,
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
 * Get Artist's Albums
 *
 * Get Spotify catalog information about an artist's albums.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region ArtistAlbumsByArtistId

const fetchArtistAlbumsByArtistId = async ({artist_id}) => {
    console.log(`Fetching albums of artist with id: ${artist_id}`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/artists/${artist_id}/albums`)
}

export const useGetArtistAlbumsByArtistId = ({artist_id}) => {
    const result = useQuery(
        ['artist_albums', artist_id],
        async () => (await fetchArtistAlbumsByArtistId({artist_id}))?.data,
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
 * Get Artist's Top Tracks
 *
 * Get Spotify catalog information about an artist's top tracks by country.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region ArtistTopTracksByArtistId

const fetchArtistTopTracksByArtistId = async ({artist_id}) => {
    console.log(`Fetching top tracks of artist with id: ${artist_id}`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/artists/${artist_id}/top-tracks`)
}

export const useGetArtistTopTracksByArtistId = ({artist_id}) => {
    const result = useQuery(
        ['artist_top_tracks', artist_id],
        async () => (await fetchArtistTopTracksByArtistId({artist_id}))?.data,
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
 * Get Artist's Related Artists
 *
 * Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region ArtistTopTracksByArtistId

const fetchArtistRelatedArtistsByArtistId = async ({artist_id}) => {
    console.log(`Fetching related artists of artist with id: ${artist_id}`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/artists/${artist_id}/related-artists`)
}

export const useGetArtistRelatedArtistsByArtistId = ({artist_id}) => {
    const result = useQuery(
        ['artist_related_artists', artist_id],
        async () => (await fetchArtistRelatedArtistsByArtistId({artist_id}))?.data,
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
