import Table from "../components/Table";
import testTeams from "../test/teams.json";

const TeamsTable = () => {
    const teamsColumns = [
        { label: "ID", accessor: "id", sortable: true, sortByOrder: "asc", type: "int" },
        { label: "Team Name", accessor: "teamName", sortable: true, type: "string" },
        { label: "Description", accessor: "teamDescription", sortable: false, type: "string" },
        { label: "Forum Link", accessor: "forumLink", sortable: true, type: "url" }
    ];

    return (
        <Table
            caption="Teams on the system"
            data={testTeams}
            columns={teamsColumns}
        />
    );
};

export default TeamsTable;