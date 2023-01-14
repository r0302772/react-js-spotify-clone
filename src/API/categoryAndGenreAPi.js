import {client} from "./utils/spotifyAPI.js";
import {useQuery} from "@tanstack/react-query";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * Get Several Browse Categories
 *
 * Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region Categories

const fetchCategories = async () => {
    console.log(`Fetching categories`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/browse/categories`)
}

export const useGetCategories = () => {
    const result = useQuery(
        ['categories'],
        async () => (await fetchCategories())?.data,
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
 * Get Single Browse Category
 *
 * Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region Category

const fetchCategoryByCategoryId = async ({category_id}) => {
    console.log(`Fetching a category with id: ${{category_id}}`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/browse/categories${category_id}`)
}

export const useGetCategoryByCategoryId = ({category_id}) => {
    const result = useQuery(
        ['category', category_id],
        async () => (await fetchCategoryByCategoryId({category_id}))?.data,
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
 * Get Available Genre Seeds
 *
 * Retrieve a list of available genres seed parameter values for recommendations.
 * ---------------------------------------------------------------------------------------------------------------------
 */

//region Genres

const fetchGenres = async () => {
    console.log(`Fetching genres`)
    await new Promise((resolve) => setTimeout(() => resolve(), 500))
    return client.get(`/recommendations/available-genre-seeds`)
}

export const useGetGenres = () => {
    const result = useQuery(
        ['genres'],
        async () => (await fetchGenres())?.data,
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