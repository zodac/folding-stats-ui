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
