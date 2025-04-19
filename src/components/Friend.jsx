import allFriends from '../Friend.json';

function Friend({handleSelectButton, friends, selectedFriend}) {
  
  const owedStatement =
    friends.moneyOwed > 0
      ?<p className='haveMoney'>{`${friends.name} owes you $${friends.moneyOwed}`}</p>
      : friends.moneyOwed < 0
      ? <p className='owed'>{`You owe ${friends.name} $${Math.abs(friends.moneyOwed)}`}</p>
      : `You and ${friends.name} are even`;

    return(
      <div className='friend-container'>
        <img src={friends.imageUrl} alt='pic' className='image'></img>
  
        <div className='statments'>
            <h3>{friends.name}</h3>
            <p>
                {
                  owedStatement
                }
            </p>
        </div>

         <button className='select-btn' onClick={() => handleSelectButton(friends.id)}>{selectedFriend === friends.id ? 'Close' : 'Select'}</button>      
      </div>
  
    )
  }

export default Friend

