import { Greeter } from '../src/index';

describe('My Greeter', function () {
    it('Greets Carl', function () {
        expect(Greeter('Carl')).toBe('Hello Carl');
    });
});
