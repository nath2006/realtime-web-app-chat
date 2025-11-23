import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head} from '@inertiajs/react';
import Settings from '@/Components/Settings';

export default function Welcome({ auth }) {
    return (
        <AuthenticatedLayout>
            <Head title="WebChat" />
            <div className="flex">
                <div className="w-2/6 bg-gray-900 border-r border-gray-800">
                    <div className="pt-4 flex flex-col h-screen">
                        <div className="px-4">
                            <div className='flex justify-between mb-2'>
                                <h1 className='text-white text-xl font-bold'>WebChat</h1>
                                <div>
                                    <Settings/>
                                </div>
                            </div>
                                # SEARCH #
                        </div>
                        <div className="flex-1 px-4 overflow-y-auto">
                            # ROOM #
                        </div>
                    </div>
                </div>
                <div className="relative w-4/6">
                    # CHAT #
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
