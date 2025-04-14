export function TwitterFollowCard ({userName, children, isfollowing}) {
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
                    <button className='tw-followCard-header-button'>
                        seguir
                    </button>
                </aside>
            </article>
    )
}