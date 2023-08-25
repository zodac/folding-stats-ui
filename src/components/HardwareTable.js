import Table from "../components/Table";
import testHardwares from "../test/hardwares.json";

const HardwareTable = () => {
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
        <Table
            caption="Hardware on the system"
            data={testHardwares}
            columns={hardwareColumns}
        />
    );
};

export default HardwareTable;