import * as Config from '../../src/hooks/Config';

describe('EnumMapper', () => {
    it('unset', () => {
        expect(Config.REST_ENDPOINT_URL).toBeUndefined();
    });
});
