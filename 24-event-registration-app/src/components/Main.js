import React, { useState } from "react";
import AttendeeInfo from "./AttendeeInfo";
import ChooseTickets from "./ChooseTickets";
import AdditionalDetails from "./AdditionalDetails";
import '../styles/Main.css'

export default function Main () {
    const[attendData, setAttendData] =useState(null)
    const[ticketsData, setTicketsData] = useState(null)
    const[additionalData, setAdditionalData] = useState(null)
    return(
        <div className="main">
            <h1>Event Registration</h1>
<AttendeeInfo data={attendData} onSubmit={setAttendData}/>
<ChooseTickets data={ticketsData} onSubmit={setTicketsData}/>
<AdditionalDetails data={additionalData} onSubmit={setAdditionalData}/>
        </div>
    )
}