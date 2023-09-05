import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional classes', () => {
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe('someClass class1 class2');
    });

    test('with mods', () => {
        expect(classNames('someClass', { hovered: true, scrollable: true }, []))
            .toBe('someClass hovered scrollable');
    });

    test('with mods false', () => {
        const mods = { hovered: true, scrollable: false };
        expect(classNames('someClass', mods, []))
            .toBe('someClass hovered');
    });

    // test('with mods undefined', () => {
    //     const mods = { hovered: true, scrollable: undefined };
    //     expect(classNames('someClass', mods, []))
    //         .toBe('someClass hovered');
    // });
});
