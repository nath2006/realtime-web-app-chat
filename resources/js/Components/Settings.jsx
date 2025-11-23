import Dropdown from "./Dropdown";

export default function Settings({}) {

    const logout = () => {
        axios.post('/logout').then(response => {
            window.location.href = '/login';
        }).catch(error => {
            console.error('Logout failed:', error);
        });
    }


    return (
        <Dropdown>
            <Dropdown.Trigger>
                <button
                    type="button"
                    className="items-center justify-center py-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none transition duration-150 ease-in-out"
                >
                    <svg
                        className="h-4 w-4"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </Dropdown.Trigger>

            <Dropdown.Content>
                <Dropdown.Link
                    onClick={(error) => {
                        logout();
                    }}
                >
                    Logout
                </Dropdown.Link>
            </Dropdown.Content>
        </Dropdown>
    );
}
