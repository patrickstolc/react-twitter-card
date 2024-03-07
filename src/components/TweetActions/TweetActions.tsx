import TweetLike from "../TweetLike/TweetLike"
import styles from "./TweetActions.module.scss"
import useTweetActionsBehavior from "./useTweetActionsBehavior"

type TweetActionsProps = {
    tweetId: string
}

const TweetActions: React.FC<TweetActionsProps> = ({ tweetId }) => {
    const { state, actions } = useTweetActionsBehavior()
    
    return (
        <div>
            <div className={styles["tweet-stats"]}>
                <span className={styles["stat-label"]}>{state.likeCount}</span> likes
            </div>
            <TweetLike tweetId={tweetId} likeCountCallback={actions.handleLikeCountChange}/>
        </div>
    )
}

export default TweetActions