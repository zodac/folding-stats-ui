export interface ColumnDefinition {
    label: string;
    accessor: string;
    sortable: boolean;
    sortByOrder?: string;    // TODO: Make enum
    type: string;            // TODO: Make enum
}
