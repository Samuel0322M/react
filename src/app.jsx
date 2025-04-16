import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isfollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isfollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isfollowing: false
    },
    {
        userName: 'TMChein',
        name: 'Tomas C.',
        isfollowing: true
    },

]


export function App () {
    return (
        <section className='App'>
            <h2 className = 'App-title'>A quién Seguir</h2>

            {
                users.map(user => {
                    const  {userName, name, isfollowing} = user 
                    return (
                            <TwitterFollowCard
                            userName={userName}
                            initialIsFollowing={isfollowing}
                            >
                            {name}
                            </TwitterFollowCard>
                    )
                })
            }
            
        </section>
    )
}