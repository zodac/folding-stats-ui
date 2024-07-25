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

export class ColumnDefinition {
    label: string;
    accessor: string;
    type: ColumnType;
    sortable: boolean;
    sortByOrder?: ColumnSortOrder;

    constructor(label: string, accessor: string, type: ColumnType, sortable: boolean, sortByOrder?: ColumnSortOrder) {
        this.label = label;
        this.accessor = accessor;
        this.sortable = sortable;
        this.type = type;

        if (sortByOrder) {
            this.sortByOrder = sortByOrder;
        }
    }
}

export enum ColumnSortOrder {
    ASC = 'asc',
    DESC = 'desc'
}

export enum ColumnType {
    DOUBLE = 'double',
    ENUM = 'enum',
    INTEGER = 'int',
    STRING = 'string',
    URL = 'url'
}
