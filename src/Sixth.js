import React from "react";
import './Assignment.css';

function Sixth() {

const studentDetails = [{stuImg : "Sowji.jpg", name : "Sowji", education : "Database Admintrator"},
                             {stuImg : "Sowji.jpg", name : "Swathi", education : "Producer"},
                             {stuImg : "Sowji.jpg", name : "Laddu", education : "Manager"},
                             {stuImg : "Sowji.jpg", name : "Lakshmi", education : "Customer Support"},
                             {stuImg : "Sowji.jpg", name : "priya", education : "Marketing"},
                             {stuImg : "Sowji.jpg", name : "Kavya", education : "Customer Support"},
                             {stuImg : "Sowji.jpg", name : "Srirama", education : "social media"},
                             {stuImg : "Sowji.jpg", name : "Sriram", education : "HR"}
                            ];
    
   
        
        return (
            <div className="review-container">
                    {studentDetails.map((student, index) => 
                        (<div key={index} className="stu-section">
                            <img src={student.stuImg} width="200" height="150"/>
                            <div className="stu-details">
                                <h1>{student.name}</h1>
                                <p>{student.education}</p>
                            </div>
                            <hr />
                            <button className="connect-button">Connect</button>
                        </div>))}
            </div>
        )
    }
    
    export default Sixth;