
export const colors: string[] = ["#f5e4e4", "#d5f0f1", "#eef8bf"];

export const getColor = (key: number) => {

    if (key % 2 === 0) {
        return colors[0];
    }
    if (key % 2 !== 0) {
        return colors[1];
    }
    if (key % 5 === 0) {
        return colors[2];
    }
}

export const groupBy = (data: any[], groupKey: string) => {
    const groupedData = data.reduce((result, item) => {
        const category = item[groupKey];
        result[category] = result[category] || [];
        result[category].push(item);
        return result;
    }, {});
    return groupedData;
}