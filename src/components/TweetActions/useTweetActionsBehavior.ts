import { useState } from "react"

const useTweetActionsBehavior = () => {
    const [likeCount, setLikeCount] = useState(0)
    const handleLikeCountChange = (count: number) => {
        setLikeCount(count)
    }

    return {
        actions: {
            handleLikeCountChange
        },
        state: {
            likeCount
        }
    }
}

export default useTweetActionsBehavior