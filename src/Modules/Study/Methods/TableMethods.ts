
export const colors: string[] = ["#f5e4e4", "#d5f0f1", "#eef8bf"];

export const getColor = (key: number) => {
    if (key < 2) {
        return colors[0];
    }
    if (key === 2) {
        return colors[1];
    }
    if (key > 2) {
        return colors[2];
    }
}

export const groupBy = (data: any[], groupKey: string) => {
    console.log(data, "groupBy");

    const groupedData = data.reduce((grouped: any, item: any) => {
        const key = item?.[groupKey];
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(item);
        return grouped;
    });
    console.log(groupedData, "groupedData");

    return groupedData;
}