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

export class EnumMapper {

    public map(field: string, value: string): string {
        return mapEnumValue(field, value);
    }
}

function mapEnumValue(field: string, value: string) {
    if (field === "category") {
        return mapCategory(value);
    }

    if (field === "hardwareMake") {
        return mapHardwareMake(value);
    }

    if (field === "hardwareType") {
        return mapHardwareType(value);
    }

    if (field === "role") {
        return mapRole(value);
    }

    return value;
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

function mapRole(value: string) {
    if (value.toLowerCase() === "captain") {
        return "Captain"
    }

    if (value.toLowerCase() === "member") {
        return "Member"
    }

    return value
}
