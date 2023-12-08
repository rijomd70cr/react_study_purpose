import { useEffect, useState, useMemo } from "react";

import { userData, headers } from '../SampleData/UserCollection';
import { TableOptions } from "../Components/TableComponents/TableOptions";
import { getColor, groupBy } from "../Methods/TableMethods";

import "../Style/Style.css";

type Props = {};

export const TableMethods = (props: Props) => {
    const [tableData, setTableData] = useState<Record<string, any[]>>({});
    const [groupingKey, setGroupingKey] = useState("list"); //by default

    useEffect(() => {
        const tableData = userData.data.memberList;
        setTableData({ [groupingKey]: tableData });
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

        }
        return renderData;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tableData?.[groupingKey]]);

    const tableActions = (type: string, item: any) => {
        if (type === "groupBy") {
            groupBy(tableData?.[groupingKey], item.name);
            setGroupingKey(item.name);
        }
    }

    const Headers = useMemo(() => {
        return headers.map((item, key) => {
            return <th key={key}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>{item.label}</span>
                    <TableOptions {...item} label={item.label} action={(type: string) => tableActions(type, item)} />
                </div>
            </th>
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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