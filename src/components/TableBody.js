const TableBody = ({ tableData, columns }) => {
    return (
        <tbody>
        {tableData.map((data) => {
            return (
                <tr key={data.id}>
                    {columns.map(({ accessor, type }) => {
                        let value:string = data[accessor] ? data[accessor] : "——";

                        if (type === "int") {
                            value = Number.parseInt(value).toLocaleString(navigator.language, { maximumFractionDigits: 0 });
                        } else if (type === "double") {
                            value = Number.parseFloat(value).toLocaleString(navigator.language, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                        } else {
                            value = value.toLocaleString(navigator.language);
                        }

                        return <td key={accessor}>{value}</td>;
                    })}
                </tr>
            );
        })}
        </tbody>
    );
};

export default TableBody;
