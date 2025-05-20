// offline-db.js
const DB_NAME = 'StoryAppOfflineDB';
const STORE_NAME = 'stories';

export const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const saveStoryOffline = async (story) => {
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  tx.objectStore(STORE_NAME).put(story);
  return tx.complete;
};

export const getOfflineStories = async () => {
  const db = await openDB();
  return db.transaction(STORE_NAME).objectStore(STORE_NAME).getAll();
};