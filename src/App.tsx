import TweetCard from './components/TweetCard/TweetCard'
import imgUrl from './assets/its-fine.gif'

function App() {
  return (
    <>
      <TweetCard 
      tweetId='1' 
      username="John Doe" 
      handle="@johndoe" 
      profileImage={imgUrl}
      body="When your code finally works after 99 attempts: 'Ah, victory!' 🎉👨‍💻 
      But then you realize you don't know why it works... 🤷‍♂️🔮" />
    </>
  )
}

export default App
