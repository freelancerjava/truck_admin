import React from 'react'

function LogRowHead() {
    return (
        <thead className="thead-light">
            <tr>
                <th scope="col" rowspan="2">№</th>
                <th scope="col" rowspan="2">Подразделение</th>
                <th scope="col" rowspan="2">Старший группы,<br />Количество л/с</th>
                <th scope="col" rowspan="2">Позиционный район<br />Координаты</th>
                <th scope="col" rowspan="2">Период <br />пребывания</th>
                <th scope="col" rowspan="1" colspan="7" className="text-center">Количество</th>
                <th scope="col" rowspan="2">Итоги<br />за неделю</th>
            </tr>
            <tr>
                <th scope="col" rowspan="1">День</th>
                <th scope="col" rowspan="1">День</th>
                <th scope="col" rowspan="1">День</th>
                <th scope="col" rowspan="1">День</th>
                <th scope="col" rowspan="1">День</th>
                <th scope="col" rowspan="1">День</th>
                <th scope="col" rowspan="1">День</th>
            </tr>
        </thead>
    )
}

export default LogRowHead
