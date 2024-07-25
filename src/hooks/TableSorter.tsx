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

import { useState } from "react";
import { ColumnDefinition, ColumnSortOrder } from "../interfaces/ColumnDefinition";

function getDefaultSorting(defaultTableData: any[], columns: ColumnDefinition[]) {
    return [...defaultTableData].sort((a, b) => {
        const filterColumn = columns.filter(column => column.sortByOrder);

        // Merge all array objects into single object and extract accessor and sortByOrder keys
        const { accessor = "id", sortByOrder = ColumnSortOrder.ASC } = Object.assign(
            {},
            ...filterColumn
        );

        if (a[accessor] === null) return 1;
        if (b[accessor] === null) return -1;
        if (a[accessor] === null && b[accessor] === null) return 0;

        const ascending = a[accessor].toString()
            .localeCompare(b[accessor].toString(), "en", {
                numeric: true,
            });

        return sortByOrder === ColumnSortOrder.ASC ? ascending : -ascending;
    });
}

export const useSortableTable = (data: any, columns: ColumnDefinition[]) => {
    const [tableData, setTableData] = useState(getDefaultSorting(data, columns));

    const handleSorting = (sortField: any, sortByOrder: ColumnSortOrder) => {
        if (sortField) {
            const sorted = [...tableData].sort((a, b) => {
                if (a[sortField] === null) {
                    return 1;
                }

                if (b[sortField] === null) {
                    return -1;
                }

                if (a[sortField] === null && b[sortField] === null) {
                    return 0;
                }

                const ascending = a[sortField].toString()
                    .localeCompare(b[sortField].toString(), "en", {
                        numeric: true,
                    });

                return sortByOrder === ColumnSortOrder.ASC ? ascending : -ascending;
            });
            setTableData(sorted);
        }
    };

    return { tableData, setTableData, handleSorting };
};
