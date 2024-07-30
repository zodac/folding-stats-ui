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

import { ColumnSortOrder } from "../interfaces/ColumnDefinition";
import { useState } from "react";

export const TableHead = (props: any) => {
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState(ColumnSortOrder.ASC);

    const handleSortingChange = (accessor: any) => {
        const sortOrder = accessor === sortField && order === ColumnSortOrder.ASC ? ColumnSortOrder.DESC : ColumnSortOrder.ASC;
        setSortField(accessor);
        setOrder(sortOrder);
        props.handleSorting(accessor, sortOrder);
    };

    return (
        <thead>
            <tr>
                {props.columns.map((column: any) => {
                    let thClassName: string = "default";
                    if (sortField === column.accessor) {
                        thClassName = order === ColumnSortOrder.DESC ? "down" : "up"; // Allowing 'up' to be the default sort if not properly defined
                    }

                    return (
                        <th
                            key={column.accessor}
                            className={`unselectable ${thClassName}`}
                            onClick={() => handleSortingChange(column.accessor)}
                        >
                            {column.label}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
}
