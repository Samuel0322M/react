import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <h2 className = 'App-title'>A quién Seguir</h2>
            <TwitterFollowCard isfollowing userName="midudev" name="Miguel Angel Durán"/>
            <TwitterFollowCard isfollowing={false} userName="vxnder" name="Pablo Hernandez"/>
            <TwitterFollowCard isfollowing userName="elonmusk" name="Vander Hart"/>
        </section>
    )
}