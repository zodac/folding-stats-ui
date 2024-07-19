import { EnumMapper } from '../../src/hooks/EnumMapper';

describe('EnumMapper', () => {
    const enumMapper = new EnumMapper();

    it('map category', () => {
        expect(enumMapper.map("category", "amd_gpu")).toBe("AMD GPU");
        expect(enumMapper.map("category", "AMD_GPU")).toBe("AMD GPU");
        expect(enumMapper.map("category", "nvidia_gpu")).toBe("nVidia GPU");
        expect(enumMapper.map("category", "NVIDIA_GPU")).toBe("nVidia GPU");
        expect(enumMapper.map("category", "wildcard")).toBe("Wildcard");
        expect(enumMapper.map("category", "WILDCARD")).toBe("Wildcard");
        expect(enumMapper.map("category", "invalid")).toBe("invalid");
        expect(enumMapper.map("category", "INVALID")).toBe("INVALID");
    });

    it('map hardwareMake', () => {
        expect(enumMapper.map("hardwareMake", "amd")).toBe("AMD");
        expect(enumMapper.map("hardwareMake", "AMD")).toBe("AMD");
        expect(enumMapper.map("hardwareMake", "nvidia")).toBe("nVidia");
        expect(enumMapper.map("hardwareMake", "NVIDIA")).toBe("nVidia");
        expect(enumMapper.map("hardwareMake", "intel")).toBe("Intel");
        expect(enumMapper.map("hardwareMake", "INTEL")).toBe("Intel");
        expect(enumMapper.map("hardwareMake", "invalid")).toBe("invalid");
        expect(enumMapper.map("hardwareMake", "INVALID")).toBe("INVALID");
    });

    it('map hardwareType', () => {
        expect(enumMapper.map("hardwareType", "gpu")).toBe("GPU");
        expect(enumMapper.map("hardwareType", "GPU")).toBe("GPU");
        expect(enumMapper.map("hardwareType", "cpu")).toBe("CPU");
        expect(enumMapper.map("hardwareType", "CPU")).toBe("CPU");
        expect(enumMapper.map("hardwareType", "invalid")).toBe("invalid");
        expect(enumMapper.map("hardwareType", "INVALID")).toBe("INVALID");
    });

    it('map other', () => {
        expect(enumMapper.map("invalid", "invalid")).toBe("invalid");
        expect(enumMapper.map("invalid", "INVALID")).toBe("INVALID");
    });
});
