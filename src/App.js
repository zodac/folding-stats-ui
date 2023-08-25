import Table from "./components/Table";
import testTableData from "./test/tableData.json";
import HardwareTable from "./components/HardwareTable";

const App = () => {

    const columns = [
        { label: "Full Name", accessor: "full_name", sortable: true, sortByOrder: "desc", type: "string" },
        { label: "Email", accessor: "email", sortable: false, type: "string" },
        { label: "Gender", accessor: "gender", sortable: true, type: "string" },
        { label: "Age", accessor: "age", sortable: true, type: "string" },
        { label: "Start date", accessor: "start_date", sortable: true, type: "string" },
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
            <HardwareTable/>
        </div>
    );
};

export default App;
