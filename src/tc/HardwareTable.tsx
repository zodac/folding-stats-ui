/*
 * BSD Zero Clause License
 *
 * Copyright (c) 2021-2024 zodac.me
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
 * SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
 * IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useSortableTable } from "../hooks/useSortableTable";
import { TableHead } from "../components/TableHead";
import { TableBody } from "../components/TableBody";

const HardwareTable = () => {
    const hardwareColumns = [
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
            label: "Average PPD",
            accessor: "averagePpd",
            sortable: true,
            type: "int",
        },
        {
            label: "Multiplier",
            accessor: "multiplier",
            sortable: true,
            type: "double",
        },
    ];

    const [ loadingData, setLoadingData ] = useState(true);
    const { tableData, setTableData, handleSorting } = useSortableTable([], hardwareColumns);

    useEffect(() => {
        async function getData() {
            await axios
                .get("https://internal.axihub.ca/folding/hardware")
                .then((response: AxiosResponse) => setTableData(response.data));
        }

        if (loadingData) {
            getData()
            .then(() => setLoadingData(false));
        }
    }, [loadingData, setTableData]);

    return (
        <div className="tableContainer">
            <table className="scrollableTable sortableTable staticHeaderTable">
                <TableHead columns={hardwareColumns} handleSorting={handleSorting} />
                {loadingData ? "" : <TableBody tableData={tableData} columns={hardwareColumns} />}
            </table>
        </div>
    );
};

export default HardwareTable;
