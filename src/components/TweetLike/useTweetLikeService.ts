import { useEffect, useState } from "react"
import Config from "../../config"

export type TweetLikeServiceReturnType<T> = {
    loading: boolean
    error: string | null
    postLikeHandler: (like: Omit<TweetLikePutRequest, "date">) => void
    record: T | null
    userLiked: boolean
}

export type TweetLikeRecord = {
    id: string
    count: number
}

export enum TweetLikeType {
    LIKE = 0,
    DISLIKE = 1
}

export type TweetLikePutRequest = {
    date: string
    userId: number
    postId: number
    currentCount: number
    type: TweetLikeType
}

const useTweetLikeService = (tweetId: string, userId: string | null): TweetLikeServiceReturnType<TweetLikeRecord> => {
    const [records, setRecords] = useState<TweetLikeRecord | null>(null)
    const [liked, setLiked] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const postLikeHandler = async (like: Omit<TweetLikePutRequest, "date">) => {
        const dateTimeNow = new Date().toISOString()
        
        try {
            await fetch(`${Config.API_URL}/like`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({...like, date: dateTimeNow})
            })
        } catch (error) {
            setError("failed to post tweet-like data")
        }
    }

    const fetchTweetLike = async () => {
        try {
            const response = await fetch(`${Config.API_URL}/like/${tweetId}`)
            const data = await response.json()
            setRecords(
                {
                    id: tweetId,
                    count: data.count,
                }
            )
        } catch (error) {
            setError("failed to fetch tweet-like data")
        } finally {
            setLoading(false)
        }
    }

    const fetchUserLike = async () => {
        try {
            const response = await fetch(`${Config.API_URL}/like/${tweetId}/${userId}`)
            const data = await response.json()
            setLiked(data)
        } catch (error) {
            setError("failed to fetch user-like data")
        }
    }

    useEffect(() => {
        fetchTweetLike()
        if(userId){
            fetchUserLike()
        }
    }, []);

    return {
        loading,
        error,
        postLikeHandler,
        userLiked: liked,
        record: records
    }
}

export default useTweetLikeService