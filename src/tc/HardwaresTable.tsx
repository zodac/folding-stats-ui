import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useSortableTable } from "../hooks/useSortableTable";
import { TableHead } from "../components/TableHead";
import { TableBody } from "../components/TableBody";

const HardwaresTable = () => {
    const hardwaresColumns = [
        {
            label: "ID",
            accessor: "id",
            sortable: true,
            sortByOrder: "asc",
            type: "int",
        },
        {
            label: "Hardware Name",
            accessor: "hardwareName",
            sortable: false,
            type: "string",
        },
        {
            label: "Display Name",
            accessor: "displayName",
            sortable: true,
            type: "string",
        },
        {
            label: "Hardware Make",
            accessor: "hardwareMake",
            sortable: true,
            type: "enum",
        },
        {
            label: "Hardware Type",
            accessor: "hardwareType",
            sortable: true,
            type: "enum",
        },
        {
            label: "Multiplier",
            accessor: "multiplier",
            sortable: true,
            type: "double",
        },
        {
            label: "Average PPD",
            accessor: "averagePpd",
            sortable: true,
            type: "int",
        },
    ];

    const [loadingData, setLoadingData] = useState(true);
    const { tableData, setTableData, handleSorting } = useSortableTable([], hardwaresColumns);

    useEffect(() => {
        async function getData() {
            await axios
                .get("https://internal.axihub.ca/folding/hardware")
                .then((response: AxiosResponse) => setTableData(response.data));
        }

        if (loadingData) {
            getData().then(() => setLoadingData(false));
        }
    }, [loadingData, setTableData]);

    return (
        <div className="scrollableTableWithTitle">
            <div className="staticTableHead">
                <table className="scrollableTable">
                    <TableHead columns={hardwaresColumns} handleSorting={handleSorting} />
                    {loadingData ? "" : <TableBody tableData={tableData} columns={hardwaresColumns} />}
                </table>
            </div>
        </div>
    );
};

export default HardwaresTable;
