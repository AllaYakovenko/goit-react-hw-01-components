import PropTypes from 'prop-types';
import FriendListItem from 'components/friendlist/FriendListItem';
import css from 'components/friendlist/FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friends}>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                >
                </FriendListItem>
            ))}
        </ul>
    );
};

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ),
};
