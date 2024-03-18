const TeamCard = ({ firstName, lastName, maidenName, company, image }) => {

    return (
        <div className="member-block">
            <div className="member-img">
                <img src={image} alt={firstName} />
            </div>
            <div className="member-info">
                <p className='member-position'>{company.title}</p>
                <h3 className="member-name">
                    {firstName} {maidenName[0]}. {lastName}
                </h3>
            </div>
        </div>
    )
}

export default TeamCard;