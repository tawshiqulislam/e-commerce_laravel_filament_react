import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Link, useForm, usePage } from "@inertiajs/react";

export default function SearchBar() {
    const { auth, filters, departments, settings } = usePage().props;
    const { data, setData, get, processing, errors, reset } = useForm({
        q: filters?.q || null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        get("/search", {
            preserveScroll: true,
            //onSuccess: () => reset('q'),
        });
    }
    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="overflow-hidden flex rounded-lg"
            >
                <input
                    id="search-main"
                    type="text"
                    placeholder="Find what you're looking for..."
                    name="q"
                    onChange={(e) => setData("q", e.target.value)}
                    className="block w-full border-none focus:border-none bg-[#6CC8C5] ring-0 focus:ring-none focus:ring-0 text-sm text-white placeholder-white"
                    autoComplete="search"
                    required
                />
                <button
                    type="submit"
                    className="inline-flex w-10 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 focus:outline-none ml-1 mr-1 sm:bg-gray-100"
                >
                    <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
                </button>
            </form>
        </div>
    );
}
