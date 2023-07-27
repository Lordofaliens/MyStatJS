export const execlude = (object: any, fieldsToRemove: any[]) => {
    const newObject = JSON.parse(JSON.stringify(object));
    fieldsToRemove.forEach((key) => {
        delete newObject[key]
    });

    return newObject;
}

export const set = (object: any, key: string, value: any) => {

    for (let objectKey in object) {

        if (typeof object[objectKey] === "object") {
            set(object[objectKey], key, value);
        } else {
            if (key === objectKey) {
                object[key] = value;
            }
        }

    }

    return object;
}