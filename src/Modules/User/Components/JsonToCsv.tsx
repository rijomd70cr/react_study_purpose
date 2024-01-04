import React, { forwardRef } from 'react'
import usersData from '../Config/User.json';
// import ExcelJS from 'exceljs';

type Props = {}

export const JsonToCsv = forwardRef((props: Props, ref) => {

    const downloadFile = ({ data, fileName, fileType }: { data: any, fileName: string, fileType: string }) => {
        const blob = new Blob([data], { type: fileType })
        const a = document.createElement('a')
        a.download = fileName
        a.href = window.URL.createObjectURL(blob)
        const clickEvt = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
        })
        a.dispatchEvent(clickEvt)
        a.remove()
    }

    const exportToJson = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        downloadFile({
            data: JSON.stringify(usersData.users),
            fileName: 'users.json',
            fileType: 'text/json',
        })
    }

    const exportToCsv = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        let headers = ['Id,Name,Surname,Age']
        let usersCsv = usersData.users.reduce((acc: any[], user: any) => {
            const { id, name, surname, age } = user;
            acc.push([id, name, surname, age].join(','))
            return acc
        }, [])
        downloadFile({
            data: [...headers, ...usersCsv].join('\n'),
            fileName: 'users.csv',
            fileType: 'text/csv',
        })
    }

    return (
        <div>
            <table className='usersTable'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData.users.map(user => {
                        const { id, name, surname, age } = user
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{surname}</td>
                                <td>{age}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button type='button' onClick={exportToJson} >
                Export to JSON
            </button>
            <button type='button' onClick={exportToCsv}>
                Export to CSV
            </button>
        </div>
    )
});