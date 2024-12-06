<div class="calendar__grid">
    {{-- Calendar Headers --}}
    @foreach (['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as $day)
    <div class="calendar__header">{{ $day }}</div>
    @endforeach

    @php
    use Carbon\Carbon;

    $date = $date ?? Carbon::now(); // Use the passed $date or default to today
    $startOfMonth = $date->copy()->startOfMonth();
    $totalDays = $date->daysInMonth;
    $startDayOfWeek = $startOfMonth->dayOfWeek;

    // Ensure $reservations is a collection
    $reservationsByDate = ($reservations ?? collect())->groupBy(function ($reservation) {
    return Carbon::createFromFormat('d/m/Y', $reservation->user_date)->format('Y-m-d');
    });
    @endphp

    {{-- Empty Days at the Start --}}
    @for ($i = 0; $i < $startDayOfWeek; $i++) <div class="calendar__day calendar__day--empty">
</div>
@endfor

{{-- Days of the Month --}}
@for ($day = 1; $day <= $totalDays; $day++) @php $currentDate=$startOfMonth->copy()->addDays($day - 1)->format('Y-m-d');
    $dayReservations = $reservationsByDate->get($currentDate, collect());
    @endphp

    <div class="calendar__day {{ $dayReservations->isNotEmpty() ? 'calendar__day--reserved' : '' }}">
        <div><strong>{{ $day }}</strong></div>

        {{-- Display Reservations --}}
        @foreach ($dayReservations as $reservation)
        <div class="event">
            {{ $reservation->user_name }} ({{ $reservation->user_time }}) ({{ $reservation->totalOrderValue }}) ({{ $reservation->user_PaymentType }}) 
        </div>
        @endforeach
    </div>
    @endfor
    </div>