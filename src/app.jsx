import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <h2 className = 'App-title'>A quién Seguir</h2>

            <TwitterFollowCard 
            isfollowing 
            userName="midudev" >
            Miguel Angel Duran
            </TwitterFollowCard >

            <TwitterFollowCard 
            isfollowing={false}
            userName="vxnder" >
            Pablo Hernandez
            </TwitterFollowCard>

            <TwitterFollowCard 
            isfollowing 
            userName="elonmusk">
            Elon Must
            </TwitterFollowCard>

        </section>
    )
}