import Table from "./components/Table";
import testTableData from "./test/tableData.json";
import testHardwares from "./test/hardwares.json";

const App = () => {

    const columns = [
        { label: "Full Name", accessor: "full_name", sortable: true, sortByOrder: "desc", type: "string" },
        { label: "Email", accessor: "email", sortable: false, type: "string" },
        { label: "Gender", accessor: "gender", sortable: true, type: "string" },
        { label: "Age", accessor: "age", sortable: true, type: "string" },
        { label: "Start date", accessor: "start_date", sortable: true, type: "string" },
    ];

    const hardwareColumns = [
        { label: "ID", accessor: "id", sortable: true, sortByOrder: "asc", type: "int" },
        { label: "Hardware Name", accessor: "hardwareName", sortable: false, type: "string" },
        { label: "Display Name", accessor: "displayName", sortable: true, type: "string" },
        { label: "Hardware Make", accessor: "hardwareMake", sortable: true, type: "string" },
        { label: "Hardware Type", accessor: "hardwareType", sortable: true, type: "string" },
        { label: "Multiplier", accessor: "multiplier", sortable: true, type: "double" },
        { label: "Average PPD", accessor: "averagePpd", sortable: true, type: "int" },
    ];

    return (
        <div className="table_container">
            <Table
                caption="Developers currently enrolled in this course, column headers are sortable."
                data={testTableData}
                columns={columns}
            />
            <br/>
            <br/>
            <br/>
            <br/>
            <Table
                caption="Hardware on the system"
                data={testHardwares}
                columns={hardwareColumns}
            />
        </div>
    );
};

export default App;
