import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { teachers_Data } from '../data/teachers.data'
import Card from '../components/Card';

export default class Calendar extends React.Component {
    getEvents() {
        const events = teachers_Data.map((teacher, index) => {
            const daysOfWeek = ['2023-12-04', '2023-12-05', '2023-12-06', '2023-12-07', '2023-12-08', '2023-12-11', '2023-12-012']
            const day = daysOfWeek[index % daysOfWeek.length]
            const time = `10:00 AM`

            return {
                title: teacher.profession,
                date: day,
                extendedProps: {
                    teacherName: teacher.name,
                    time: time
                }
            };
        });

        return events
    }

    renderEventContent(eventInfo: any) {
        return (
            <div title={`Teacher: ${eventInfo.event.extendedProps.teacherName}, Time: ${eventInfo.event.extendedProps.time}`}>
                {eventInfo.event.title}
            </div>
        )
    }

    render() {
        return (
            <div className="container mx-auto p-8 w-full">
                <Card>
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                        events={this.getEvents()}
                        eventContent={this.renderEventContent}
                        weekends={false}
                    />
                </Card>

            </div>
        )
    }
}
