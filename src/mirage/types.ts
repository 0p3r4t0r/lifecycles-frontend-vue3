type PropFactory<T extends Record<string, unknown>> = {
    [k in keyof T]: (i: number) => T[k];
}
