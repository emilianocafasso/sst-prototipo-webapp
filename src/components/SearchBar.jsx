import React, { useState } from "react";

const SearchBar = ({ users, onSearchResults }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (e) => {
        const value = e.targe.value.toLowerCase()
        setSearchTerm(value)
    }

    if (value.trim() === '') {
        // se la barra di ricerca è vuota, mostro tutti i partecipanti
        onSearchResults(users)
        return
    }

    // filtro gli utenti
    const term = value.toLowerCase()
    const results = users.filter(user => {
        const fullName = `${user.first_name} ${user.last_name}`.toLowerCase()
        return fullName.include(term)
    })

    onSearchResults(results)

    const clearSearch = () => {
        setSearchTerm('')
        onSearchResults(users)
    }

    return (
        <div>
            <input
                type="text"
                value={setSearchTerm}
                onchange={handleSearch}
                placeholder="Cerca partecipante per nome e cognome..."
            />
        </div>
    )
}

export default SearchBar;