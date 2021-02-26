import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("How to master React", "Top news - 919 readers")}
            {newsArticle("Coronavirus: UK updates", "COVID-19 - 886 readers")}
            {newsArticle("Tesla hits new highs", "Cars and Auto - 300 readers")}
            {newsArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
            {newsArticle("Is Redux too Good", "Code - 123 readers")}
            {newsArticle("How to master React", "Top news - 919 readers")}
        </div>
    )
}

export default Widgets
