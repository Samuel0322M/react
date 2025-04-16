import { useState } from "react"

export function TwitterFollowCard ({userName, children, initialIsFollowing}) {

    const [isfollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isfollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isfollowing ? 'tw-followCard-button-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isfollowing) 
    }

    return (
            <article className = 'tw-followCard'>
                <header className = 'tw-followCard-header'>
                    <img 
                    className = 'tw-followCard-avatar'
                    src={`https://unavatar.io/x/${userName}`} 
                    alt="imagen kikobeats" />
                    <div className = 'tw-followCard-info'>
                        <strong>{children}</strong>
                        <span className='tw-followCard-header-infoUsername'>@{userName}</span>
                    </div>
                </header>
                <aside>
                    <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text} </span>
                    <span className="tw-followCard-stopfollowing">Dejar de Seguir</span>
                    </button>
                </aside>
            </article>
    )
}