import {mapEnumValue} from "../util/mapEnumValue.tsx";

const TableBody = ({ tableData, columns }) => {
    return (
        <tbody>
        {tableData.map((data) => {
            return (
                <tr key={data.id}>
                    {columns.map(({ accessor, type, jsonAccessor }) => {
                        if (!data[accessor]) {
                            return <td key={accessor}>——</td>
                        }

                        let value:string = data[accessor];

                        if (type === "url") {
                            return <td key={accessor}><a href={value}>{value}</a></td>
                        }

                        if (type === "json") {
                            value = data[accessor][jsonAccessor];
                        }

                        if (type === "int") {
                            value = Number.parseInt(value).toLocaleString(navigator.language, { maximumFractionDigits: 0 });
                        } else if (type === "double") {
                            value = Number.parseFloat(value).toLocaleString(navigator.language, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                        } else if (type === "enum") {
                            value = mapEnumValue(accessor, value);
                        } else {
                            value = value.toLocaleString(navigator.language);
                        }

                        return <td key={accessor}>{value}</td>
                    })}
                </tr>
            );
        })}
        </tbody>
    );
};

export default TableBody;
