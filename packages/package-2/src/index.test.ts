import { package1Name, useAdd } from "./index";

it('exports correct name', () => {
    expect(package1Name).toEqual('package1')
})

it('exports correct useAdd', () => {
    expect(useAdd(1, 1)).toEqual(2)
})