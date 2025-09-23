import { Head, usePage, router } from "@inertiajs/react";
import { useState } from "react";
import LayoutProfile from "../../Layouts/LayoutProfile";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/Form/TextInput";
import InputLabel from "@/Components/Form/InputLabel";
import InputError from "@/Components/Form/InputError";
import SectionTitle from "@/Components/Sections/SectionTitle";
import { FormGrid } from "@/Components/Form/FormGrid";
import Modal from "@/Components/Modal";

const Address = () => {
    const { addresses } = usePage().props;
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);

    const { data, setData, post, put, delete: destroy, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        city: '',
        address: ''
    });

    const openEditModal = (address = null) => {
        setSelectedAddress(address);
        if(address) {
            setData(address);
        } else {
            reset();
        }
        setEditModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        selectedAddress 
            ? put(route('profile.addresses.update', selectedAddress.id), {
                preserveScroll: true,
                onSuccess: () => setEditModalOpen(false)
              })
            : post(route('profile.addresses.store'), {
                preserveScroll: true,
                onSuccess: () => setEditModalOpen(false)
              });
    };

    const confirmDelete = () => {
        destroy(route('profile.addresses.destroy', selectedAddress.id), {
            preserveScroll: true,
            onSuccess: () => setDeleteModalOpen(false)
        });
    };

    return (
        <LayoutProfile
            title="Saved Addresses"
            breadcrumb={[
                { title: "Profile", path: route("profile.index") },
                { title: "Addresses", path: route("profile.addresses.index") }
            ]}
        >
            <Head title="Saved Addresses" />

            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <SectionTitle>Manage Addresses</SectionTitle>
                    <PrimaryButton onClick={() => openEditModal()}>
                        Add New Address
                    </PrimaryButton>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {addresses.map((address) => (
                        <div key={address.id} className="border rounded-md p-4">
                            <div className="space-y-2">
                                <h3 className="font-semibold text-lg">{address.name}</h3>
                                <p className="text-gray-600">{address.address}</p>
                                <p className="text-gray-600">{address.city}</p>
                                <p className="text-gray-600">{address.phone}</p>
                                {address.email && <p className="text-gray-600">{address.email}</p>}
                            </div>
                            <div className="flex justify-end space-x-2 mt-4">
                                <button 
                                    onClick={() => openEditModal(address)}
                                    className="text-blue-600 hover:text-blue-800 text-sm"
                                >
                                    Edit
                                </button>
                                <button 
                                    onClick={() => {
                                        setSelectedAddress(address);
                                        setDeleteModalOpen(true);
                                    }}
                                    className="text-red-600 hover:text-red-800 text-sm"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Edit/Create Modal */}
                <Modal show={editModalOpen} onClose={() => setEditModalOpen(false)}>
                    <div className="p-6">
                        <SectionTitle>
                            {selectedAddress ? 'Edit Address' : 'Add New Address'}
                        </SectionTitle>
                        
                        <form onSubmit={handleSubmit} className="mt-6">
                            <FormGrid>
                                <div className="sm:col-span-3">
                                    <InputLabel>Full Name *</InputLabel>
                                    <TextInput
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        className="w-full mt-2"
                                    />
                                    <InputError message={errors.name} />
                                </div>

                                <div className="sm:col-span-3">
                                    <InputLabel>Phone *</InputLabel>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="bg-gray-100 p-2 border border-gray-300 rounded-md text-sm">
                                            +88
                                        </div>
                                        <TextInput
                                            value={data.phone}
                                            onChange={e => setData('phone', e.target.value)}
                                            className="w-full"
                                        />
                                    </div>
                                    <InputError message={errors.phone} />
                                </div>

                                <div className="sm:col-span-3">
                                    <InputLabel>Email</InputLabel>
                                    <TextInput
                                        type="email"
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        className="w-full mt-2"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="sm:col-span-3">
                                    <InputLabel>Address *</InputLabel>
                                    <TextInput
                                        value={data.address}
                                        onChange={e => setData('address', e.target.value)}
                                        className="w-full mt-2"
                                    />
                                    <InputError message={errors.address} />
                                </div>

                                <div className="sm:col-span-3">
                                    <InputLabel>City *</InputLabel>
                                    <TextInput
                                        value={data.city}
                                        onChange={e => setData('city', e.target.value)}
                                        className="w-full mt-2"
                                    />
                                    <InputError message={errors.city} />
                                </div>

                                <div className="sm:col-span-3 flex justify-end space-x-3">
                                    <button
                                        type="button"
                                        onClick={() => setEditModalOpen(false)}
                                        className="px-4 py-2 text-gray-700 hover:text-gray-900"
                                    >
                                        Cancel
                                    </button>
                                    <PrimaryButton disabled={processing}>
                                        {processing ? 'Saving...' : 'Save Address'}
                                    </PrimaryButton>
                                </div>
                            </FormGrid>
                        </form>
                    </div>
                </Modal>

                {/* Delete Confirmation Modal */}
                <Modal show={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
                    <div className="p-6">
                        <SectionTitle>Confirm Deletion</SectionTitle>
                        <p className="mt-4 text-gray-600">
                            Are you sure you want to delete this address? This action cannot be undone.
                        </p>
                        <div className="mt-6 flex justify-end space-x-3">
                            <button
                                type="button"
                                onClick={() => setDeleteModalOpen(false)}
                                className="px-4 py-2 text-gray-700 hover:text-gray-900"
                            >
                                Cancel
                            </button>
                            <PrimaryButton 
                                onClick={confirmDelete}
                                className="bg-red-600 hover:bg-red-700"
                            >
                                {processing ? 'Deleting...' : 'Delete Address'}
                            </PrimaryButton>
                        </div>
                    </div>
                </Modal>
            </div>
        </LayoutProfile>
    );
};

export default Address;