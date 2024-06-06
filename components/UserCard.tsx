'use client'

const UserCard = ({ user }) => {
    
    return (
        <div className="body-card">
            <div className="card flex flex-col">
                <div className="card-img">
                    <img src={user.photo_url}/>
                </div>
                <div className="desc">
                    <h6 className="primary-text">{user.name}</h6>
                    <h6 className="secondary-text">@{user.tg_username}</h6>
                </div>
                <div className="button primary-text flex flex-col pl-4">
                    <h6 className="secondary-text text-left"> Телефон: {user.phone} </h6>
                    <h6 className="secondary-text text-left"> Город: {user.city} </h6>
                    <h6 className="secondary-text text-left"> Компания: {user.company} </h6>
                    <h6 className="secondary-text text-left"> Должность: {user.job} </h6>
                    <h6 className="secondary-text text-left"> E-mail: {user.mail} </h6>
                </div>
                <div className="details">
                    <div className="rating">
                        <h6 className="primary-text"> {/* {user.points} */}{user.referals.length * 10} </h6>
                        <h6 className="secondary-text"> Баллов </h6>
                    </div>
                    <div className="activity">
                        <h6 className="primary-text"> {user.referals.length} </h6>
                        <h6 className="secondary-text"> Знакомств </h6>
                    </div>
                </div>
            </div>
            <img src='/images/panda8.png' className='absolute w-2/3 h-auto bottom-0 right-0 z-[-1]'></img>
        </div>
        
    )
}

export default UserCard
