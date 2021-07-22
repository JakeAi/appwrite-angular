export function flatten(data, prefix = '') {
    let output = {};
    for (const key in data) {
        const value = data[key];
        const finalKey = prefix ? `${prefix}[${key}]` : key;
        if (Array.isArray(value)) {
            output = Object.assign(output, flatten(value, finalKey));
        }
        else {
            output[finalKey] = value;
        }
    }
    return output;
}
//# sourceMappingURL=flatten.js.map