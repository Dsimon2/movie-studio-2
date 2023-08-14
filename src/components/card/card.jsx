import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {
// State to manage loading state
    const [isLoading, setIsLoading] = useState(true)

// Simulate loading delay and update isLoading after 1.5 seconds
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

return <>
    {
        isLoading
        ?
         // Display skeleton animation during loading
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={200} duration={3} />
            </SkeletonTheme>
        </div>

}