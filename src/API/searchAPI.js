import {useQuery} from "@tanstack/react-query";
import {client} from "./utils/spotifyAPI.js";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Search for Item
 *
 * Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks that match a keyword string.
 * ---------------------------------------------------------------------------------------------------------------------
 */

const fetchSearchItems = async ({query}) => {
    console.log(`Fetching items with query: ${query}`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/search`,{
        params: {
            q: query,
            type: 'artist,album,track,playlist'
        }
    })
}

export const useGetSearchItems = ({query, enabled = true}) => {
    const result = useQuery(
        ['search_items', query],
        async () => (await fetchSearchItems({query}))?.data,
        {
            staleTime: Infinity,
            cacheTime: Infinity,
            enabled: enabled && query !== ''
        }
    )

    return {
        ...result,
        albums: result?.data?.albums,
        artists: result?.data?.artists,
        playlists: result?.data?.playlists,
        tracks: result?.data?.tracks
    }
}