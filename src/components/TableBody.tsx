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

import { ColumnDefinition, ColumnType } from "../interfaces/ColumnDefinition";
import { EnumMapper } from "../hooks/EnumMapper";

export const TableBody = (props: any) => {
    return (
        <tbody>
            {props.tableData.map((row: any) => {
                return (
                    <tr key={row.id}>
                        {props.columns.map((column: ColumnDefinition) => {
                            if (!row[column.accessor]) {
                                return <td key={column.accessor}>——</td>
                            }

                            let value: string = row[column.accessor];

                            if (column.type === ColumnType.URL) {
                                return <td key={column.accessor}><a href={value}>{value}</a></td>
                            } else if (column.type === ColumnType.INTEGER) {
                                value = Number.parseInt(value, 10).toLocaleString(navigator.language, { maximumFractionDigits: 0 });
                            } else if (column.type === ColumnType.DOUBLE) {
                                value = Number.parseFloat(value).toLocaleString(navigator.language, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                            } else if (column.type === ColumnType.ENUM) {
                                value = new EnumMapper().map(column.accessor, value);
                            } else {
                                value = value.toLocaleString();
                            }

                            return <td key={column.accessor}>{value}</td>
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
}
