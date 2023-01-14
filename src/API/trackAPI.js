import {client} from "./utils/spotifyAPI.js";
import {useQuery} from "@tanstack/react-query";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Get Track
 *
 * Get Spotify catalog information for a single track identified by its unique Spotify ID.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region TrackByTrackId

const fetchTrackByByTrackId = async ({track_id}) => {
    console.log(`Fetching track with id: ${track_id}`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/tracks/${track_id}`)
}

export const useGetTrackByByTrackId = ({track_id}) => {
    const result = useQuery(
        ['track', track_id],
        async () => (await fetchTrackByByTrackId({track_id}))?.data,
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
 * Get Tracks' Audio Features
 *
 * Get audio features for multiple tracks based on their Spotify IDs.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region TrackAudioFeaturesByTrackId

const fetchTrackAudioFeaturesByTrackId = async ({track_id}) => {
    console.log(`Fetching track audio features with id: ${track_id}`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/audio-features/${track_id}`)
}

export const useGetTrackAudioFeaturesByTrackId = ({track_id}) => {
    const result = useQuery(
        ['track_audio_features', track_id],
        async () => (await fetchTrackAudioFeaturesByTrackId({track_id}))?.data,
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
 * Get Track's Audio Analysis
 *
 * Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region TrackAudioAnalysisByTrackId

const fetchTrackAudioAnalysisByTrackId = async ({track_id}) => {
    console.log(`Fetching track audio analysis with id: ${track_id}`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/audio-analysis/${track_id}`)
}

export const useGetTrackAudioAnalysisByTrackId = ({track_id}) => {
    const result = useQuery(
        ['track_audio_analysis', track_id],
        async () => (await fetchTrackAudioAnalysisByTrackId({track_id}))?.data,
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
 * Get Recommendations
 *
 * Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details. * ---------------------------------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region RecommendationsByArtistsGenresTracks

const fetchRecommendationsByArtistsGenresTracks = async ({seed_artists, seed_genres, seed_tracks}) => {
    console.log(`Fetching recommendations`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/recommendations`, {
            params: {
                seed_artists: seed_artists,
                seed_genres: seed_genres,
                seed_tracks: seed_tracks
            }
        }
    )
}

export const useGetRecommendationsByArtistsGenresTracks = ({seed_artists, seed_genres, seed_tracks}) => {
    const result = useQuery(
        ['recommendations', seed_artists, seed_genres, seed_tracks],
        async () => (await fetchRecommendationsByArtistsGenresTracks({seed_artists, seed_genres, seed_tracks}))?.data,
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