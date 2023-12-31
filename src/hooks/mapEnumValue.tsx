export function mapEnumValue(field: string, value: string) {
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