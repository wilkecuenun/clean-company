@extends('layouts.admin')

@section('title', 'Reservations')

@section('styles')
    <style>
        /* General Styling for Modern Look */
        .container-fluid {
            padding: 40px;
            background-color: #f8f9fa;
        }

        .table-container {
            background: #ffffff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
            overflow-x: auto;
            width: 100%;
            /* Increase width */
            margin: auto;
        }

        .table-title {
            font-size: 2.5rem;
            font-weight: bold;
            color: #333;
            margin-bottom: 30px;
            text-align: center;
        }

        .table {
            border-collapse: separate;
            border-spacing: 0 15px;
        }

        .table thead th {
            background-color: #007bff;
            color: #ffffff;
            text-align: center;
            font-weight: bold;
            padding: 15px;
            border: none;
        }

        .table tbody tr {
            background-color: #f8f9fa;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .table tbody tr td {
            padding: 15px;
            text-align: center;
            vertical-align: middle;
        }

        .table tbody tr:hover {
            background-color: #e9ecef;
        }

        .badge {
            font-size: 0.95rem;
            padding: 5px 10px;
            border-radius: 12px;
        }

        .badge-success {
            background-color: #28a745;
            color: #fff;
        }

        .badge-warning {
            background-color: #ffc107;
            color: #fff;
        }

        a.text-primary {
            text-decoration: none;
            font-weight: bold;
            color: #007bff;
        }

        a.text-primary:hover {
            text-decoration: underline;
        }

        .btn-danger {
            background-color: #dc3545;
            border: none;
            font-size: 0.9rem;
            padding: 8px 12px;
            border-radius: 4px;
        }

        .btn-danger:hover {
            background-color: #c82333;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .table-title {
                font-size: 2rem;
            }

            thead {
                display: none;
            }

            tbody tr {
                display: block;
                margin-bottom: 20px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            tbody td {
                display: block;
                text-align: left;
                padding: 10px 20px;
            }

            tbody td:before {
                content: attr(data-label);
                font-weight: bold;
                display: inline-block;
                width: 120px;
            }
        }
    </style>
@endsection

@section('content')
    <div class="container-fluid my-5">
        <div class="table-container">
            <h2 class="table-title">Reservations</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Services</th>
                        <th>Square Details</th>
                        <th>Total_value</th>
                        <th>Payment-Type</th>
                        <th>Frequency</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($reservations as $reservation)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $reservation->user_name }}</td>
                            <td>{{ $reservation->user_surname }}</td>
                            <td>
                                <a href="mailto:{{ $reservation->user_email }}" class="text-primary">
                                    {{ $reservation->user_email }}
                                </a>
                            </td>
                            <td>{{ $reservation->user_phone ?? 'N/A' }}</td>
                            <td>{{ $reservation->user_date ?? 'N/A' }}</td>
                            <td>{{ $reservation->user_time ?? 'N/A' }}</td>
                            <td>
                                @php
                                    $services = json_decode($reservation->user_services, true);
                                @endphp
                                @if ($services && is_array($services))
                                    <ul>
                                        @foreach ($services as $service)
                                            <li>{{ $service['name'] ?? 'Unknown' }} (x{{ $service['quantity'] ?? 0 }})</li>
                                        @endforeach
                                    </ul>
                                @else
                                    N/A
                                @endif
                            </td>
                            <td>
                                @php
                                    $square = json_decode($reservation->user_square, true);
                                @endphp
                                @if ($square)
                                    <div>
                                        Quantity: {{ $square['quantity'] ?? 'N/A' }}<br>
                                        Cost: ${{ $square['cost'] ?? 'N/A' }}
                                    </div>
                                @else
                                    N/A
                                @endif
                            </td>
                            <td>{{ $reservation->totalOrderValue ?? 'N/A' }}</td>
                            <td>{{ $reservation->user_PaymentType ?? 'N/A' }}</td>
                            <td>{{ $reservation->user_Frequency ?? 'One-time' }}</td>
                            <td>
                                <form action="{{ route('reservations.destroy', $reservation->id) }}" method="POST"
                                    onsubmit="return confirm('Are you sure you want to delete this reservation?');">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                                </form>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="11" class="text-center text-muted">No reservations found.</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
@endsection
