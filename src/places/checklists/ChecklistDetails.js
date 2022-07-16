import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NavigationBar from '../NavigationBar';
import ChecklistsSideBar from './ChecklistsSideBar';

export default function() {
    const { id } = useParams();

    // State variable for checklist Data
    const [checklistData, setChecklistData] = useState([]);

    // Get specified Checklist Data
    useEffect(() => {
        fetch(`https://invulnerable-chocolatine-75206.herokuapp.com/checklists/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setChecklistData(data)
            })
    }, [id]);

    return(
        <div>
            <NavigationBar/>
            <div className="checklists-container">
                <ChecklistsSideBar/>
                <section className="checklist-content">

                </section>
            </div>
        </div>
    )
}