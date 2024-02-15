'use client'

import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Card from '../components/Card'

export default class Calendar extends React.Component {
  getEvents() {
    const events = [
      {
        title: 'Event 1',
        date: '2024-02-15',
        extendedProps: {
          teacherName: 'Teacher 1',
          time: '10:00 - 12:00',
        },
      },
      {
        title: 'Event 2',
        date: '2024-02-20',
        extendedProps: {
          teacherName: 'Teacher 2',
          time: '14:00 - 16:00',
        },
      },
      {
        title: 'Event 3',
        date: '2024-02-23',
        extendedProps: {
          teacherName: 'Teacher 3',
          time: '16:00 - 18:00',
        },
      },
    ]

    return events
  }

  renderEventContent(eventInfo: any) {
    return (
      <div
        title={`Teacher: ${eventInfo.event.extendedProps.teacherName}, Time: ${eventInfo.event.extendedProps.time}`}
      >
        {eventInfo.event.title}
      </div>
    )
  }

  render() {
    return (
      <div className="container mx-auto p-8 w-full">
        <Card className="p-[50px] gap-10 flex flex-col items-center justify-center">
          <div className="max-w-[1000px] w-full">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={this.getEvents()}
              eventContent={this.renderEventContent}
              weekends={false}
            />
          </div>
        </Card>
      </div>
    )
  }
}
