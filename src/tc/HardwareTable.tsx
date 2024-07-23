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
import { ColumnDefinition, ColumnSortOrder, ColumnType } from "../interfaces/ColumnDefinition";

const HardwareTable = () => {
    const hardwareColumns: ColumnDefinition[] = [
        new ColumnDefinition("ID", "id", ColumnType.INTEGER, true, ColumnSortOrder.ASC),
        new ColumnDefinition("Hardware Name", "hardwareName", ColumnType.STRING, false),
        new ColumnDefinition("Display Name", "displayName", ColumnType.STRING, true),
        new ColumnDefinition("Hardware Make", "hardwareMake", ColumnType.ENUM, true),
        new ColumnDefinition("Hardware Type", "hardwareType", ColumnType.ENUM, true),
        new ColumnDefinition("Average PPD", "averagePpd", ColumnType.INTEGER, true),
        new ColumnDefinition("Multiplier", "multiplier", ColumnType.DOUBLE, true),
    ];

    const [loadingData, setLoadingData] = useState(true);
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
