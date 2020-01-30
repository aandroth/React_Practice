import React from 'react'
import Footer from './Footer'
import AddToDo from './AddToDo'
import VisibleToDoList from './VisibleToDoList'

const App = () => (
    <div>
        <AddToDo />
        <VisibleToDoList />
        <Footer />
    </div>
)

export default App
