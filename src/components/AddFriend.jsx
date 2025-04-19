import { useState } from 'react';

function AddFriend({ onAddFriend, addButtonClicked, handleCloseButton }) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !url) return;

    const newFriend = {
      id: crypto.randomUUID(), 
      name: name,
      imageUrl: '../image/dude.jpg',
      moneyOwed: 0,
    };

    onAddFriend(newFriend);
    setName('');
    setUrl('');
  }

  if (!addButtonClicked) return null;

  return (
    <div className='addFreind-container'>
      <form onSubmit={handleSubmit}>
        <div className='name tag-input'>
          <label className='tags'>👭 Friend name</label>
          <input 
            type='text' 
            placeholder='name' 
            className='name'
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='image tag-input'>
          <label className='tags'>🌆 Image URL</label>
          <input 
            type='text' 
            placeholder='url' 
            className='image-in'
            value={url} 
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <button className='add-btn' type="submit">Add</button>
      </form>

      {addButtonClicked ? <button className='close-btn' onClick={handleCloseButton}>Close</button>: null}
    </div>
  );
}

export default AddFriend;