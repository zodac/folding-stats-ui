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

function mapEnumValue(field: string, value: string) {
    if (field === "category"){
        return mapCategory(value);
    }

    if (field === "role"){
        return mapRole(value);
    }

    if (field === "hardwareMake"){
        return mapHardwareMake(value);
    }

    if (field === "hardwareType"){
        return mapHardwareType(value);
    }

    return value;
}

function mapRole(value: string) {
    if (value.toLowerCase() === "captain") {
        return "Captain"
    }

    if (value.toLowerCase() === "member") {
        return "Member"
    }

    return value
}

function mapCategory(value: string) {
    if (value.toLowerCase() === "amd_gpu") {
        return "AMD GPU"
    }

    if (value.toLowerCase() === "nvidia_gpu") {
        return "nVidia GPU"
    }

    if (value.toLowerCase() === "wildcard") {
        return "Wildcard"
    }

    return value
}

function mapHardwareMake(value: string) {
    if (value.toLowerCase() === "amd") {
        return "AMD"
    }

    if (value.toLowerCase() === "nvidia") {
        return "nVidia"
    }

    if (value.toLowerCase() === "intel") {
        return "Intel"
    }

    return value
}

function mapHardwareType(value: string) {
    if (value.toLowerCase() === "gpu") {
        return "GPU"
    }

    if (value.toLowerCase() === "cpu") {
        return "CPU"
    }

    return value
}

export default TableBody;
