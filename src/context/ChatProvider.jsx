import React, { createContext, useContext, useState } from 'react';

export const ChatContext = createContext();

export const useChat = () => {
    return useContext(ChatContext);
}

export const ChatProvider = ({ children }) => {
    const [userName, setUserName] = useState('');
    const [currentRoom, setCurrentRoom] = useState(null);
    const [messages, setMessages] = useState('')
    const [isOpen, setIsOpen] = useState(false)

     const openMenu = () => {
       setIsOpen(true);
     };
     const closeMenu = () => {
       setIsOpen(false);
     };

    const value = {
      userName,
      setUserName,
      setCurrentRoom,
      currentRoom,
      isOpen,
      setIsOpen,
      openMenu,
      closeMenu,
    };

   
    
    return (
        <ChatContext.Provider value={ value }>
            { children }
        </ChatContext.Provider>
    );
};