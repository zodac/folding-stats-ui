import Table from "../components/Table";
import testUsers from "../test/users.json";

const UsersTable = () => {
    const usersColumns = [
        { label: "ID", accessor: "id", sortable: true, sortByOrder: "asc", type: "int" },
        { label: "Display Name", accessor: "displayName", sortable: true, type: "string" },
        { label: "Folding Name", accessor: "foldingUserName", sortable: true, type: "string" },
        { label: "Passkey", accessor: "passkey", sortable: true, type: "string" },
        { label: "Category", accessor: "category", sortable: true, type: "enum" },
        { label: "Profile Link", accessor: "profileLink", sortable: true, type: "url" },
        { label: "Live Stats Link", accessor: "liveStatsLink", sortable: false, type: "url" },
        { label: "Hardware", accessor: "hardware", sortable: true, type: "json", jsonAccessor: "displayName" },
        { label: "Team", accessor: "team", sortable: true, type: "json", jsonAccessor: "teamName" },
        { label: "Role", accessor: "role", sortable: true, type: "enum" },
    ];

    return (
        <Table
            caption="Users on the system"
            data={testUsers}
            columns={usersColumns}
        />
    );
};

export default UsersTable;