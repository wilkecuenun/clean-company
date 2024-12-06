@extends('layouts.admin')

@section('content')
    <div class="container py-5">
        <div class="row mb-4">
            <div class="col text-center">
                <h1 class="fw-bold">Manage Services</h1>
            </div>
        </div>

        <!-- Display success message -->
        @if (session('success'))
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                {{ session('success') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        @endif

        <!-- Display error message -->
        @if (session('error'))
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                {{ session('error') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        @endif

        <!-- Services Table -->
        <div class="card shadow mb-4">
            <div class="card-header bg-primary text-white">
                <h2 class="mb-0">Existing Services</h2>
            </div>
            <div class="card-body">
                <table class="table table-hover align-middle">
                    <thead class="table-dark">
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Slug</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($services as $service)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $service->name }}</td>
                                <td>{{ $service->slug }}</td>
                                <td>${{ number_format($service->price, 2) }}</td>
                                <td>{{ $service->quantity }}</td>
                                <td>
                                    @if ($service->image)
                                        <img src="{{ asset($service->image) }}" width="50px" height="50px">
                                    @else
                                        No Image
                                    @endif
                                </td>
                                <td>
                                    <!-- Edit Button -->
                                    <button type="button" class="btn btn-sm btn-warning" data-bs-toggle="modal"
                                        data-bs-target="#editModal-{{ $service->id }}">
                                        <i class="bi bi-pencil"></i> Edit
                                    </button>

                                    <!-- Delete Form -->
                                    <form action="{{ route('admin.services.destroy', $service->id) }}" method="POST"
                                        onsubmit="return confirm('Are you sure you want to delete this service?');"
                                        class="d-inline">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-sm btn-danger">
                                            <i class="bi bi-trash"></i> Delete
                                        </button>
                                    </form>
                                </td>
                            </tr>

                            <!-- Edit Modal for Each Service -->
                            <div class="modal fade" id="editModal-{{ $service->id }}" tabindex="-1"
                                aria-labelledby="editModalLabel-{{ $service->id }}" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="editModalLabel-{{ $service->id }}">Edit Service
                                            </h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <form action="{{ route('admin.services.update', $service->id) }}" method="POST">
                                            @csrf
                                            @method('PUT')
                                            <div class="modal-body">
                                                <div class="mb-3">
                                                    <label for="name-{{ $service->id }}" class="form-label">Service
                                                        Name</label>
                                                    <input type="text" class="form-control"
                                                        id="name-{{ $service->id }}" name="name"
                                                        value="{{ $service->name }}" required>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="slug-{{ $service->id }}" class="form-label">Slug</label>
                                                    <input type="text" class="form-control"
                                                        id="slug-{{ $service->id }}" name="slug"
                                                        value="{{ $service->slug }}" required>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="price-{{ $service->id }}" class="form-label">Price</label>
                                                    <input type="number" step="0.01" class="form-control"
                                                        id="price-{{ $service->id }}" name="price"
                                                        value="{{ $service->price }}" required>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="quantity-{{ $service->id }}"
                                                        class="form-label">Quantity</label>
                                                    <input type="number" class="form-control"
                                                        id="quantity-{{ $service->id }}" name="quantity"
                                                        value="{{ $service->quantity }}" required>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Cancel</button>
                                                <button type="submit" class="btn btn-primary">Save Changes</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        @empty
                            <tr>
                                <td colspan="6" class="text-center text-muted">No services available.</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Add New Service Form -->
        <div class="card shadow">
            <div class="card-header bg-success text-white">
                <h2 class="mb-0">Add New Service</h2>
            </div>
            <div class="card-body">
                <form action="{{ route('admin.services.store') }}" method="POST" class="row g-3"
                    enctype="multipart/form-data">
                    @csrf
                    <div class="col-md-6">
                        <label for="name" class="form-label fw-bold">Service Name</label>
                        <input type="text" class="form-control" id="name" name="name"
                            placeholder="Enter service name" required>
                    </div>
                    <div class="col-md-6">
                        <label for="slug" class="form-label fw-bold">Slug</label>
                        <input type="text" class="form-control" id="slug" name="slug"
                            placeholder="Enter slug" required>
                    </div>
                    <div class="col-md-6">
                        <label for="price" class="form-label fw-bold">Price</label>
                        <input type="number" step="0.01" class="form-control" id="price" name="price"
                            placeholder="Enter price" required>
                    </div>
                    <div class="col-md-6">
                        <label for="quantity" class="form-label fw-bold">Quantity</label>
                        <input type="number" class="form-control" id="quantity" name="quantity" value="1"
                            required>
                    </div>
                    <div class="col-md-6">
                        <label for="inputImage" class="form-label"><strong>Image:</strong></label>
                        <input type="file" name="image" class="form-control @error('image') is-invalid @enderror"
                            id="inputImage">
                        @error('image')
                            <div class="form-text text-danger">{{ $message }}</div>
                        @enderror
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-success">
                            <i class="bi bi-plus-circle"></i> Add Service
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
