import { useEffect, useState } from "react"
import useTweetLikeService from "./useTweetLikeService"
import useQueryParams from "../../hooks/useQueryParams"
import useLikeUpdates, { LikeUpdate } from "../../hooks/useLikeUpdates"

const useTweetLikeBehavior = (tweetId: string, likeCountCallback: (count: number) => void) => {
    const userId = useQueryParams("userId")
    const { loading, error, postLikeHandler, record, userLiked } = useTweetLikeService(tweetId, userId)
    const [count, setCount] = useState(0)
    const [liked, setLiked] = useState(false)


    const handleLikeCountChange = (event: LikeUpdate) => {
        const countDiff = event["count"] || 0
        setCount(prev => {
            return prev + countDiff
        })
    }
    
    useLikeUpdates({
        messageHandler: handleLikeCountChange
    })

    useEffect(() => {
        likeCountCallback(count)
    }, [count])

    useEffect(() => {
        if (record) {
            setCount(record.count)
            likeCountCallback(record.count)
        }
    }, [record])

    useEffect(() => {
        setLiked(userLiked)
    }, [userLiked])

    const handleLike = () => {
        setLiked(!liked)
        postLikeHandler(
            {
                userId: userId ? parseInt(userId) : 0,
                postId: parseInt(tweetId),
                type: liked ? 1 : 0,
                currentCount: count
            }
        )
    }
    
    return {
        actions: {
            handleLike
        },
        state: {
            count,
            liked,
            loading,
            error,
        }
    }
}

export default useTweetLikeBehavior