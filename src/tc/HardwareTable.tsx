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
import { useSortableTable } from "../hooks/TableSorter";
import { TableBody } from "../components/TableBody";
import { TableHead } from "../components/TableHead";
import { TableTitle } from "../components/TableTitle";
import { ColumnDefinition, ColumnSortOrder, ColumnType } from "../interfaces/ColumnDefinition";
import * as Config from "../hooks/Config";

export const HardwareTable = () => {
    const hardwareColumns: ColumnDefinition[] = [
        new ColumnDefinition("ID", "id", ColumnType.INTEGER, true, ColumnSortOrder.ASC),
        new ColumnDefinition("Display Name", "displayName", ColumnType.STRING, true, ColumnSortOrder.ASC),
        new ColumnDefinition("Hardware Name", "hardwareName", ColumnType.STRING, false),
        new ColumnDefinition("Hardware Make", "hardwareMake", ColumnType.ENUM, true, ColumnSortOrder.ASC),
        new ColumnDefinition("Hardware Type", "hardwareType", ColumnType.ENUM, true, ColumnSortOrder.ASC),
        new ColumnDefinition("Average PPD", "averagePpd", ColumnType.INTEGER, true, ColumnSortOrder.ASC),
        new ColumnDefinition("Multiplier", "multiplier", ColumnType.DOUBLE, true, ColumnSortOrder.ASC),
    ];

    const [loadingData, setLoadingData] = useState(true);
    const { tableData, setTableData, handleSorting } = useSortableTable([], hardwareColumns);

    useEffect(() => {
        async function getData() {
            await axios
                .get(Config.REST_ENDPOINT_URL + "/hardware")
                .then((response: AxiosResponse) => setTableData(response.data));
        }

        if (loadingData) {
            getData()
                .then(() => setLoadingData(false));
        }
    }, [loadingData, setTableData]);

    return (
        <div className="table-container">
            <TableTitle title="Hardware Table" />
            <table id="hardwareTable" className="scrollable-table sortable-table static-header-table">
                <TableHead columns={hardwareColumns} handleSorting={handleSorting} />
                {loadingData ? "" : <TableBody tableData={tableData} columns={hardwareColumns} />}
            </table>
        </div>
    );
};
