import TweetActions from '../TweetActions/TweetActions'
import styles from './TweetCard.module.scss'

type TweetCardProps = {
    tweetId: string
    username: string
    handle: string
    profileImage: string
    body: string
}

const TweetCard: React.FC<TweetCardProps> = ({ tweetId, username, handle, profileImage, body }) => {

  return (
    <div className={styles["tweet-card"]}>
        <div className={styles["tweet-header"]}>
            <div>
                <img src={profileImage} alt="Profile" />
            </div>
            <div className={styles["tweet-header-user"]}>
                <div className={styles["tweet-header-username"]}>{username}</div>
                <div className={styles["tweet-header-handle"]}>{handle}</div>
            </div>
        </div>
        <div className={styles["tweet-body"]}>
            {body}
        </div>
        <TweetActions tweetId={tweetId} />
    </div>
  )
}

export default TweetCard