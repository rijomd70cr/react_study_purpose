import { useEffect, useState, useMemo } from "react";

import { userData, headers } from '../SampleData/UserCollection';
import { TableOptions } from "../Components/TableComponents/TableOptions";
import { getColor, groupBy } from "../Methods/TableMethods";

import "../Style/Style.css";

type Props = {};

export const TableMethods = (props: Props) => {
    const [tableData, setTableData] = useState<Record<string, any[]>>({});
    const [originalData, setOriginalData] = useState<any[]>([]);

    const [groupingKey, setGroupingKey] = useState("list"); //by default

    useEffect(() => {
        const tableData = userData.data.memberList;
        setTableData({ [groupingKey]: tableData });
        setOriginalData(tableData);
        return () => { }
    }, [])

    const bodyData = useMemo(() => {
        let renderData: any[] = [];
        if (groupingKey === "list") {
            renderData.push(
                tableData?.[groupingKey]?.map((dataItem, dataKey) => {
                    return <tr key={dataKey} style={{ background: getColor(dataKey) }}>
                        {headers.map((headItem, headKey) => {
                            return <td key={headKey}>
                                {dataItem[headItem?.name]}
                            </td>
                        })}
                    </tr>
                })
            );
        }
        else {
            const renderKeys: any[] = Object.keys(tableData);
            renderData.push(
                renderKeys.map((keyItem: string, keyIndex: number) => {
                    return <>
                        <tr key={keyIndex}>
                            <th colSpan={tableData?.[keyItem]?.length} style={{ textAlign: "start", height: "40px" }}> {`${groupingKey.toUpperCase()} :- ${keyItem}`}</th>
                        </tr>
                        {tableData?.[keyItem]?.map((dataItem, dataKey) => {
                            return <tr key={dataKey} style={{ background: getColor(dataKey) }}>
                                {headers.map((headItem, headKey) => {
                                    return <td key={headKey}>
                                        {dataItem[headItem?.name]}
                                    </td>
                                })}
                            </tr>
                        })}
                    </>
                })
            );
        }
        return renderData;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tableData?.[groupingKey], tableData]);

    const tableActions = (type: string, item: any) => {
        if (type === "groupBy") {
            const groupedData: any = groupBy(originalData, item.name);
            setGroupingKey(item.name);
            setTableData(groupedData);
        }
        if (type === "clearAll") {
            setGroupingKey("list");
            setTableData({ list: userData.data.memberList });
        }
    }

    const Headers = useMemo(() => {
        return headers.map((item, key) => {
            return <th key={key} style={{ background: "aliceblue" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>{item.label}</div>
                    <TableOptions {...item} label={item.label} action={(type: string) => tableActions(type, item)} />
                </div>
            </th>
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [groupingKey]);

    return (
        <div>
            {headers?.length > 0 &&
                <table className="table-methods">
                    <thead>
                        <tr>{Headers}</tr>
                    </thead>

                    <tbody>
                        {Object.keys(tableData)?.length > 0 && bodyData}
                    </tbody>
                </table>
            }
        </div>
    )
}