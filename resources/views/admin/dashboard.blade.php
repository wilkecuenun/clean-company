@extends('layouts.admin')

@section('title', 'Dashboard - Reservation Calendar')

@section('styles')
<style>
    /* General Styling */
    body {
        font-family: 'Arial', sans-serif;
        background-color: #f9f9f9;
    }

    .calendar-container {
        width: 90%;
        /* Increase width */
        height: 600px;
        /* Adjust height */
        margin: auto;
        /* Center it */
        font-size: 1.2rem;
        /* Make the text bigger */
    }

    .calendar__month {
        font-size: 2.5rem;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
        color: #2c3e50;
    }

    /* Calendar Grid */
    .calendar__grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 15px;
        margin-top: 10px;
    }

    /* Header (Days of the Week) */
    .calendar__header {
        text-align: center;
        font-weight: bold;
        background-color: #3498db;
        color: #fff;
        padding: 12px;
        border-radius: 8px;
    }

    /* Individual Day Styling */
    .calendar__day {
        min-height: 120px;
        border: 1px solid #ddd;
        padding: 10px;
        background-color: #f8f9fa;
        border-radius: 8px;
        position: relative;
        transition: background-color 0.3s, box-shadow 0.3s;
    }

    .calendar__day:hover {
        background-color: #f1f1f1;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .calendar__day--reserved {
        background-color: #d4edda;
        border-color: #28a745;
    }

    .calendar__day-number {
        font-size: 1.5rem;
        font-weight: bold;
        color: #2c3e50;
    }

    /* Event Styling */
    .event {
        background-color: #eafaf1;
        color: #2e8b57;
        font-size: 1rem;
        padding: 8px;
        margin-top: 8px;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    /* Navigation Buttons */
    .calendar-nav button {
        font-size: 1.2rem;
        padding: 10px 20px;
        border: none;
        border-radius: 8px;
        background-color: #3498db;
        color: #fff;
        transition: background-color 0.3s;
    }

    .calendar-nav button:hover {
        background-color: #2980b9;
    }

    /* Mobile Responsiveness */
    @media (max-width: 768px) {
        .calendar__grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }

        .calendar-nav button {
            font-size: 1rem;
            padding: 8px 15px;
        }
    }
</style>
@endsection

@section('content')
<div class="container">
    <h1 id="title" class="text-center mb-4">Reservation Calendar</h2>
        <div id="calendar-container">

            {{-- Calendar Navigation --}}
            <div class="calendar-nav text-center mb-4">
                <button id="prev-month" class="btn">Previous</button>
                <span id="current-month" class="mx-3"
                    style="font-size: 1.8rem;">{{ \Carbon\Carbon::now()->format('F Y') }}</span>
                <button id="next-month" class="btn">Next</button>
            </div>

            {{-- Calendar Grid --}}
            <div id="calendar" class="calendar">
                {{-- This will be dynamically updated --}}
            </div>
        </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const calendarContainer = document.getElementById('calendar');
        const currentMonthDisplay = document.getElementById('current-month');
        let currentDate = moment(); // Use Moment.js for date manipulation

        function fetchCalendar(date) {
            const formattedDate = date.format('YYYY-MM-DD');
            currentMonthDisplay.textContent = date.format('MMMM YYYY');

            // Make an AJAX request to fetch the calendar
            fetch(`/admin/calendar?date=${formattedDate}`)
                .then(response => response.text())
                .then(html => {
                    calendarContainer.innerHTML = html;
                });
        }

        // Event Listeners for navigation
        document.getElementById('prev-month').addEventListener('click', () => {
            currentDate = currentDate.subtract(1, 'months');
            fetchCalendar(currentDate);
        });

        document.getElementById('next-month').addEventListener('click', () => {
            currentDate = currentDate.add(1, 'months');
            fetchCalendar(currentDate);
        });

        // Initial calendar fetch
        fetchCalendar(currentDate);
    });
</script>
@endsection