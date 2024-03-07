import useTweetLikeBehavior from "./useTweetLikeBehavior"
import { Heart, HeartSolid } from 'iconoir-react'
import styles from "./TweetLike.module.scss"


type TweetLikeProps = {
    tweetId: string
    likeCountCallback: (count: number) => void
}

const TweetLike: React.FC<TweetLikeProps> = ({ tweetId, likeCountCallback }) => {
    const { actions, state } = useTweetLikeBehavior(tweetId, likeCountCallback)
    
    return (
        <div>
            <div onClick={actions.handleLike} className={styles["like-button"]} data-liked={state.liked ? "true":"false"}>
                {state.liked ? <HeartSolid /> : <Heart />}
            </div>
        </div>
    )
}

export default TweetLike