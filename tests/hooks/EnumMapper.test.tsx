import { EnumMapper } from '../../src/hooks/EnumMapper';

describe('EnumMapper', () => {
  it('should greet with a message', () => {
    const enumMapper = new EnumMapper();
    expect(enumMapper.map("role", "captain")).toBe("Captain");
  });
});
