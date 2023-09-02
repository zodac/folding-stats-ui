import {mapEnumValue} from "../hooks/mapEnumValue";

export const TableBody = (props: any) => {
    return (
        <tbody>
        {props.tableData.map((row: any) => {
            return (
                <tr key={row.id}>
                    {props.columns.map((column: any) => {
                        if (!row[column.accessor]) {
                            return <td key={column.accessor}>——</td>
                        }

                        let value:string = row[column.accessor];

                        if (column.type === "url") {
                            return <td key={column.accessor}><a href={value}>{value}</a></td>
                        }

                        // if (column.type === "json") {
                        //     value = row[column.accessor][column.jsonAccessor];
                        // }

                        if (column.type === "int") {
                            value = Number.parseInt(value).toLocaleString(navigator.language, { maximumFractionDigits: 0 });
                        } else if (column.type === "double") {
                            value = Number.parseFloat(value).toLocaleString(navigator.language, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                        } else if (column.type === "enum") {
                            value = mapEnumValue(column.accessor, value);
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
