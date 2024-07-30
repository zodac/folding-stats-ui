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
import { TableHead } from "../components/TableHead";
import { TableBody } from "../components/TableBody";
import { ColumnDefinition, ColumnSortOrder, ColumnType } from "../interfaces/ColumnDefinition";
import * as Config from "../hooks/Config";

const TeamTable = () => {
    const teamColumns: ColumnDefinition[] = [
        new ColumnDefinition("ID", "id", ColumnType.INTEGER, true, ColumnSortOrder.ASC),
        new ColumnDefinition("Team Name", "teamName", ColumnType.STRING, true, ColumnSortOrder.ASC),
        new ColumnDefinition("Forum Link", "forumLink", ColumnType.URL, false),
    ];

    const [loadingData, setLoadingData] = useState(true);
    const { tableData, setTableData, handleSorting } = useSortableTable([], teamColumns);

    useEffect(() => {
        async function getData() {
            await axios
                .get(Config.REST_ENDPOINT_URL + "/teams")
                .then((response: AxiosResponse) => setTableData(response.data));
        }

        if (loadingData) {
            getData()
                .then(() => setLoadingData(false));
        }
    }, [loadingData, setTableData]);

    return (
        <div className="table-container">
            <table id="teamsTable" className="scrollable-table sortable-table static-header-table">
                <TableHead columns={teamColumns} handleSorting={handleSorting} />
                {loadingData ? "" : <TableBody tableData={tableData} columns={teamColumns} />}
            </table>
        </div>
    );
};

export default TeamTable;
