import { useEffect, useState, useMemo } from "react";
import { DragDropContext, Droppable, Draggable, DraggingStyle, NotDraggingStyle } from "react-beautiful-dnd";

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onDragEnd = (result: any) => {
        const { destination, source, reason } = result;
        if (!destination || reason === 'CANCEL') {
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const starredProjects = Object.assign([], tableData?.[groupingKey]);
        const project = tableData?.[groupingKey][source.index];
        starredProjects.splice(source.index, 1);
        starredProjects.splice(destination.index, 0, project);

        setGroupingKey("list");
        setTableData({ list: starredProjects });
    }

    const getListStyle = (isDraggingOver: boolean) => ({
        background: isDraggingOver ? "lightblue" : "#fff",
    });

    const getItemStyle = (isDragging: boolean, draggableStyle: DraggingStyle | NotDraggingStyle | undefined, dataKey: number) => ({
        background: isDragging ? ("lightblue") : getColor(dataKey),
        ...draggableStyle,
    })

    const rowDraggableBody = useMemo(() => {
        let renderData: any[] = [];
        if (groupingKey === "list") {
            renderData.push(tableData?.[groupingKey]?.map((dataItem, dataKey) => {
                return <Draggable
                    draggableId={dataItem.eId}
                    index={dataKey}
                    key={dataItem}
                >
                    {(provided, snapshot) => (
                        <tr
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style,
                                dataKey
                            )}
                            key={dataKey}
                        >
                            {headers.map((headItem, headKey) => {
                                return <td key={headKey}>
                                    {dataItem[headItem?.name]}
                                </td>
                            })}
                        </tr>
                    )}
                </Draggable>
            }));
        }
        return renderData;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tableData]);


    const rowNormalBody = useMemo(() => {
        let renderData: any[] = [];
        if (groupingKey !== "list") {
            const renderKeys: any[] = Object.keys(tableData);
            renderData.push(renderKeys.map((keyItem: string, keyIndex: number) => {
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
            }));
        }
        return renderData;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tableData]);

    const tableActions = (type: string, item: any) => {
        if (type === "groupBy") {
            const groupedData: any = groupBy(userData.data.memberList, item.name);
            setTableData(groupedData);
            setGroupingKey(item.name);
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
                <DragDropContext onDragEnd={onDragEnd}>
                    <table className="table-methods">
                        <thead>
                            <tr>{Headers}</tr>
                        </thead>

                        {/* //direction="horizontal"   for column vise  */}
                        {groupingKey === "list" && <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <tbody
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                >
                                    {Object.keys(tableData)?.length > 0 && rowDraggableBody}
                                </tbody>
                            )}
                        </Droppable>}

                        {groupingKey !== "list" && <tbody>{Object.keys(tableData)?.length > 0 && rowNormalBody}</tbody>}

                    </table>
                </DragDropContext>
            }
        </div>
    )
}