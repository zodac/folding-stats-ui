import {useState} from "react";

export const TableHead = (props: any) => {
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");

    const handleSortingChange = (accessor: any) => {
        const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
        setSortField(accessor);
        setOrder(sortOrder);
        props.handleSorting(accessor, sortOrder);
    };

    return (
        <thead>
            <tr>
                {props.columns.map((column: any) => {
                    let thClassName:string = sortField === column.accessor && order === "asc"
                        ? "up"
                        : sortField === column.accessor && order === "desc"
                            ? "down"
                            : "default";

                    return (
                        <th
                            key={column.accessor}
                            className={`unselectable ${thClassName}`}
                            onClick={() =>
                                handleSortingChange(column.accessor)
                            }
                        >
                            {column.label}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
}
