import Header from './Header';
import Content from './Content.js';
import Footer from './Footer.js';
import Additem from './Additem.js';
import Searchitem from './Searchitem.js';

import { useState, useEffect } from 'react';

import './App.css';
import RequestFunction from './RequestFunction.js';

function App() {
  const API_URL = 'http://localhost:3000/list';
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Data not received');
        const listItems = await response.json();
        setList(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      (async () => await fetchList())();
    }, 2000);
  }, [search]);

  const addItem = async (item) => {
    const id = list.length ? (parseInt(list[list.length - 1].id) + 1).toString() : '1';
    const addNewItem = { id, checked: false, item };
    const listItem = [...list,addNewItem];
    setList(listItem);
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addNewItem),
    };
    const result = await RequestFunction(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleSubmitted = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
    addItem(newItem);
    setNewItem('');
  };

  const handleCheck = async (id) => {
    const changed = list.map((itemss) =>
      itemss.id === id ? { ...itemss, checked: !itemss.checked } : itemss
    );
    setList(changed);
    const myItem = changed.filter((item) => item.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };
    const requrl=`${API_URL}/${id}`
    const result = await RequestFunction(requrl, updateOptions);
    if (result) setFetchError(result);
  };

  const deleteItems = async (id) => {
    const deleting = list.filter((itemss) => itemss.id !== id);
    setList(deleting);
    const deleteOptions={method:'DELETE'}

    const requrl=`${API_URL}/${id}`
    const result = await RequestFunction(requrl, deleteOptions);
    if (result) setFetchError(result);
  };

  return (
    <div className='App'>
      <Header title='Welcome to do list' />
      <Additem newItem={newItem} setNewItem={setNewItem} handleSubmitted={handleSubmitted} />
      <Searchitem search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        {!isLoading && !fetchError && (
          <Content
            list={list.filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))}
            handleCheck={handleCheck}
            deleteItems={deleteItems}
          />
        )}
      </main>
      <Footer length={list.length} />
    </div>
  );
}

export default App;
